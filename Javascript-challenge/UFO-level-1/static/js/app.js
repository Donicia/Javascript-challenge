// from data.js
var tableData = data;

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!

data.forEach(tableData => {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//***************************************************************

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime").property("value");
  //console.log(inputElement);
  console.log(inputElement);
  
  var filteredTable = tableData.filter(d => d.datetime === inputElement);
  console.log(filteredTable);
});