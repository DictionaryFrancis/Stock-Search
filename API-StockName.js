function StockPrice(symbolGenerated, apikey) {


    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbolGenerated}&apikey=${apikey}`)
        .then((response) => response.json())
        .then((data) => {

            const look = data
            const price = Number(look["Global Quote"]["05. price"])
            console.log(look)
            //typeoff variable to indetify what is the variable function
            //console.log(typeof look);


            //const lastRefreshed = look["Meta Data"]
            //console.log(lastRefreshed)

            //console.log(look["Time Series (5min)"]["2023-03-29 18:20:00"]["1. open"]);
            //console.log(look["Time Series (5min)"][lastRefreshed]["1. open"]);

            //stockPriceElem.textContent = `$ ${look["Time Series (5min)"]["2023-03-29 18:20:00"]["1. open"]}`
            console.log(stockPriceElem.textContent = `$ ${look["Global Quote"]["05. price"]}`)
            stockPriceElem.textContent = (`$ ${price.toFixed(2)}`)

        })
}