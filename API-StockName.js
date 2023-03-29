function StockPrice(symbolGenerated,apikey){
    


fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbolGenerated}&interval=5min&apikey=${apikey}`)


    .then((response) => response.json())
    .then((data) => {

        const look = data
        //typeoff variable to indetify what is the variable function
        //console.log(typeof look);
        console.log(look);

        console.log(look["Time Series (5min)"]["2023-03-28 20:00:00"]["1. open"]);

        stockPriceElem.textContent = `$ ${look["Time Series (5min)"]["2023-03-28 20:00:00"]["1. open"]}`
        
    })
}