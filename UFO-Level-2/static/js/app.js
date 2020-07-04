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
   
    let inputFieldCity = d3.select("#city").property("value");
    let filteredCity = tableData.filter(d=>d.city === inputFieldCity)

    let inputFieldState = d3.select("#state").property("value");
    let filteredState = tableData.filter(d=>d.state === inputFieldState)

    let inputFieldShape = d3.select("#shape").property("value");
    let filteredShape = tableData.filter(d=>d.shape === inputFieldShape)
    
    tbody.html("")

            filteredDate.forEach(d=>{
                let row = tbody.append("tr")
                
                Object.values(d).forEach(w=>{
                    let cell = row.append("td")
                    cell.text(w)
                })
            })
            
            filteredCity.forEach(d=>{
                let row = tbody.append("tr")
                
                Object.values(d).forEach(w=>{
                    let cell = row.append("td")
                    cell.text(w)
                })
            })

            filteredState.forEach(d=>{
                let row = tbody.append("tr")
                
                Object.values(d).forEach(w=>{
                    let cell = row.append("td")
                    cell.text(w)
                })
            })

            filteredShape.forEach(d=>{
                let row = tbody.append("tr")
                
                Object.values(d).forEach(w=>{
                    let cell = row.append("td")
                    cell.text(w)
                })
            })

    console.log(inputFieldDate);
    console.log(inputFieldCity);
    console.log(inputFieldState);
    console.log(inputFieldShape);

    console.log(filteredDate);
    console.log(filteredCity);
    console.log(filteredState);
    console.log(filteredShape);
})