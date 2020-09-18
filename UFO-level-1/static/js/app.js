// from data.js
var tableData = data;
// Selecting the table body on index.html
var tbody = d3.select("tbody");

// Create function to build the table
function buildTable(data) {

// Create a loop to run through the data.js
data.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");

    Object.values(alienReport).forEach(function(value) {
      console.log(value);
      var cell = row.append("td");
      cell.text(value);
    });
});
}

// Getting reference
var button = d3.select("#filter-btn");

// Getting reference to the input class 
var inputField = d3.select("#datetime");

// Create function for the button
function handleClick() {

    // Prevents page from refreshing
    d3.event.preventDefault();
    // console.log("A button was clicked!");

    var inputValue = inputField.property("value");

    // Filtering the dataset for datetime to be our input
    var filteredData = data.filter(row => row.datetime === inputValue);

    // Clear contents of page before building a table
    tbody.html("");

    // Building a smaller data for the filtered results
    buildTable(filteredData);

}

// Displaying defined data on the landing page
buildTable(tableData);
  
// Performing function when button is clicked
button.on("click", handleClick);
