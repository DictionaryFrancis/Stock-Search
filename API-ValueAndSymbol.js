const stockNameElem = document.querySelector("#stock_name");
const stockPriceElem = document.querySelector("#price_id");
const stockLetterElem = document.querySelector("#stock_letters");
const search_btn = document.querySelector(".container_btn_search");
const container_info = document.querySelector(".container_info");
const interval = "5min";
const errorElem = document.querySelector(".error")

//If click in the search button

search_btn.addEventListener("click", function () {
    const input_symbol = document.getElementById("input_search").value
    console.log(input_symbol)

    const symbolGenerated = input_symbol
    console.log(symbolGenerated)



    const apikey = "VPG1MAVCBEQPROPT";
    const symbol = symbolGenerated;
    //const interval = "5min";

    const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apikey}`;


    //let BB = {
    //    sotckName:"BlackBerry",
    //    price: 35.065,
    //    stockLetter:"BB"
    //}

    //stockNameElem.textContent = "BlackBerry"
    //stockPriceElem.textContent = "$3.6660"
    //stockLetterElem.textContent = "BB"


    fetch(url)
        .then((response) => response.json())
        .then((data) =>




            setTimeout(() => {
                container_info.style.display = "block"


                if (data.Name === undefined) {
                    container_info.style.display = "none";
                    errorElem.innerHTML = `No matching results for "${symbolGenerated}"`
                    return errorElem.style.display = "block";
                } else {


                    errorElem.style.display = "none";
                    stockNameElem.textContent = `${data.Name}`
                    stockLetterElem.textContent = `${data.Symbol}`
                    StockPrice(symbolGenerated, apikey)
                    //console.log(StockPrice)
                }
            }, "1000"));

}
)

search_btn.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {



        const input_symbol = document.getElementById("input_search").value
        console.log(input_symbol)

        const symbolGenerated = input_symbol
        console.log(symbolGenerated)



        const apikey = "VPG1MAVCBEQPROPT";
        const symbol = symbolGenerated;
        //const interval = "5min";

        const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apikey}`;


        //let BB = {
        //    sotckName:"BlackBerry",
        //    price: 35.065,
        //    stockLetter:"BB"
        //}

        //stockNameElem.textContent = "BlackBerry"
        //stockPriceElem.textContent = "$3.6660"
        //stockLetterElem.textContent = "BB"


        fetch(url)
            .then((response) => response.json())
            .then((data) =>




                setTimeout(() => {
                    container_info.style.display = "block"


                    if (data.Name === undefined) {
                        container_info.style.display = "none";
                        errorElem.innerHTML = `No matching results for "${symbolGenerated}"`
                        return errorElem.style.display = "block";
                    } else {


                        errorElem.style.display = "none";
                        stockNameElem.textContent = `${data.Name}`
                        stockLetterElem.textContent = `${data.Symbol}`
                        StockPrice(symbolGenerated, apikey)
                        //console.log(StockPrice)
                    }
                }, "1000"));

    }
})
