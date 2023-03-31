function refreshAPI() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Open a new request to the API
  xhr.open("GET", 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbolGenerated}&apikey=${apikey}');

  // Set the response type to JSON
  xhr.responseType = "json";

  // Define what to do when the response is received
  xhr.onload = function() {
    // Update the contents of the element with the new data
    look.textContent = xhr.response.data;
  };

  // Send the request to the API
  xhr.send();
}

// Call the refreshAPI function initially to load the element with the API data
refreshAPI();

// Call the refreshAPI function every 5 minutes to refresh the element with updated API data
setInterval(refreshAPI, 5 * 60 * 1000);