const stockNameInput = document.querySelector("#input_search");
const creating = document.querySelector("#elementCreation");
const errorElem = document.querySelector(".error");
const apikey = "VPG1MAVCBEQPROPT";


let geralSymbols = JSON.parse(localStorage.getItem("stock-list"));

function showInfo() {
    let li = "";
    if (geralSymbols) {
        geralSymbols.forEach((item, id) => {
            console.log(item, id);


            li += `
        <li class="container_info">
            <div class="small_card">
                <label for="${id}"class="title_card">
                    <div>
                        <img onclick="deleteStock(${id})" class="img_close_btn" src="./image/Close-btn.png" alt="Close button">
                    </div>
                    <div class="stock_name" id="stock_name">${item.symbolName}</div>
                </label>
                <div class="price_id" id="price_id">$${item.symbolPrice}</div>
                <div class="stock_letters" id="stock_letters">${item.symbolLetters}</div>
            </div>
        </li>
        `;
        });
        creating.innerHTML = li
    }
}
showInfo();

function deleteStock(deleteId) {
    geralSymbols.splice(deleteId, 1);
    localStorage.setItem("stock-list", JSON.stringify(geralSymbols));
    showInfo();
}

stockNameInput.addEventListener("keyup", e => {
    let userSymbol = stockNameInput.value.trim().toUpperCase();
    if (e.key == "Enter") {
        if (!geralSymbols) {//if it doesnt exist, pass an empty array
            geralSymbols = [];
        }
        if(geralSymbols.length == 5){
            errorElem.innerHTML = `No more than 5 items are allowed`
            errorElem.style.display = "block";
        }else{
            errorElem.innerHTML = "";
            errorElem.style.display = "none";
            getSymbolAndName(userSymbol, apiResultHandle);//User input and waiting for the return for the API send back the results
        }

    }
})

function apiResultHandle(dataResult) {
 
    stockNameInput.value = "";
       
    let stockInfo = {
        symbolLetters: dataResult.Symbol,
        symbolPrice: dataResult.Price,
        symbolName: dataResult.Name,
    };
    geralSymbols.push(stockInfo);
    localStorage.setItem("stock-list", JSON.stringify(geralSymbols));
    showInfo();
}

function getSymbolAndName(userSymbol) {

    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${userSymbol}&apikey=${apikey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            let stock = data;
            console.log("function result getSymbolandName")
            console.log(stock)
            if (stock.Name === undefined) {
                errorElem.innerHTML = `No matching results for "${userSymbol}"`
                errorElem.style.display = "block";
            }else{
                errorElem.innerHTML = "";
                errorElem.style.display = "none";
                getPrice(userSymbol, stock);
            }
        });
}



function getPrice(userSymbol, stock) {

    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userSymbol}&apikey=${apikey}`)
        .then((response) => response.json())
        .then((data) => {

            console.log("function result getPrice")
            console.log(data)
            const look = data
            const price = Number(look["Global Quote"]["05. price"]).toFixed(2)
            let dataResult = {
                Name: stock.Name,
                Symbol: stock.Symbol,
                Price: price
            };
            apiResultHandle(dataResult);           

        })
}

//API Alpha Vantage e assincrona, desda maneira a API nao da o resultado instantaneo
//Desda maneira chamamos funcoes para auxiliarmos handle a API
//Antes dava certo porque faziamos dentro do fetch(then), nao necessitando ajuda de funcoes auxiliares