// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");


tableData.forEach(d=>{
    let row = tbody.append("tr")
    
    Object.values(d).forEach(w=>{
        let cell = row.append("td")
        cell.text(w)
    })
})

// Console.log the data from data.js
console.log(tableData);


// Create input field handler
// Select the button

let button = d3.selectAll("#filter-btn").on("click",function(){
    let inputFieldDate = d3.select("#datetime").property("value");
    let filteredDate = tableData.filter(d=>d.datetime === inputFieldDate)
    
    tbody.html("")

            filteredDate.forEach(d=>{
                let row = tbody.append("tr")
                
                Object.values(d).forEach(w=>{
                    let cell = row.append("td")
                    cell.text(w)
                })
            })
            

    console.log(inputFieldDate);
    console.log(filteredDate);
})