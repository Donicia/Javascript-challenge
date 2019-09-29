// from data.js
var tableData = data;

// function to display UFO sightings
function Display(UFO) {
  var tbody = d3.select("tbody");
  UFO.forEach((Records) => {
    var row = tbody.append("tr");
    Object.entries(Records).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

// Clean out table for filter request
function deleteTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

console.log(tableData);
Display(tableData);

//***************************************************************

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function(event) {
  d3.event.preventDefault();
  
  deleteTbody();
  
  var dateInput = d3.select("#datetime").property("value");

// Select the input element and get the raw HTML node  
  var filteredData = tableData.filter(UFO => 
      UFO.datetime === dateInput.trim());
      
  console.log(filteredData);
  Display(filteredData);
});
  


