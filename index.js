scrolling();
CheckMode();

function scrolling(){
    const scroll = new IntersectionObserver(((entries)=>entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add("view")
        }
        else{
            entry.target.classList.remove("view")
        }
        })
    ),{})
    const elements = document.querySelectorAll(".scroll")
    elements.forEach(el=>scroll.observe(el))
}

CheckMode();
function CheckMode() {
    //Check if currentmode is present or not to set it
    if(localStorage.getItem("currentmode") === null) {
        localStorage.setItem("currentmode", "false");
    }
}

addEventListener("DOMContentLoaded", CheckMode);
function CheckMode() {
    let style = document.getElementById("theme-style");
    if(localStorage.getItem("currentmode") === "true") {
        // If currentmode is true, switch to dark mode
        style.setAttribute("href", "style-dark.css");
    } 
    else{
        // If currentmode is false, switch to light mode
        style.setAttribute("href", "style.css");
    }
}

function ConvertMode() {
    // Toggle the currentmode value and update the stylesheet link
    if(localStorage.getItem("currentmode") === "true") {
        localStorage.setItem("currentmode", "false");
        CheckMode();
    }
    else{
        localStorage.setItem("currentmode", "true");
        CheckMode();
    }
}

addEventListener("DOMContentLoaded", () => {
    (async () => {
        try {
            // Fetch latest exchange rates from Currency API
            let result = await fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3a72a40aeb894b739af4b3af25c9bf27");
            let currency = await result.json();

            // Get select elements
            let currencyFrom=document.getElementById("currency-unit-from");
            let currencyTo=document.getElementById("currency-unit-to");
            
            // Create list of currency codes and sorting it
            let currencies= Object.keys(currency.rates);
            currencies.sort();

            // Add currencies options and factors to the select elements
            for(let i=0 ;i<currencies.length ;i++){
                let optionFrom = document.createElement("option");
                optionFrom.setAttribute("factor", currency.rates[currencies[i]]);
                optionFrom.textContent = currencies[i];
                currencyFrom.appendChild(optionFrom);

                let optionTo = document.createElement("option");
                optionTo.setAttribute("factor", currency.rates[currencies[i]]);
                optionTo.textContent = currencies[i];
                currencyTo.appendChild(optionTo);
            }
        }   
        catch(error){
            // Handle errors
            console.error("Error fetching currency data:", error);
            alert("Failed to fetch currency data. Please try again later.");
        }
    })();
});

function ConvertCurrency(){
    // Get the elements for conversion
    let from = document.getElementById("currency-from");
    let to = document.getElementById("currency-to");
    let unitFrom = document.getElementById("currency-unit-from");
    let unitTo = document.getElementById("currency-unit-to");

    // Get text fields, inputs and factors for conversion
    let selectedUnitFrom = unitFrom.options[unitFrom.selectedIndex];
    let selectedUnitTo = unitTo.options[unitTo.selectedIndex];
    let valueFrom = parseFloat(from.value);
    let factorFrom = parseFloat(selectedUnitFrom.getAttribute("factor"));
    let factorTo = parseFloat(selectedUnitTo.getAttribute("factor"));

    //convert using values and factors
    let result = (valueFrom * factorTo) / factorFrom;
    to.value = result;
}

document.getElementById("joke-form").addEventListener("submit", async (event) => {
    // Stop form from refreshing the page. Get the element where the joke will be displayed
    event.preventDefault();
    let joketext = document.getElementById("joke");

    try {
        // Fetch a random joke from the API and converting it to JSON.
        const result = await fetch("https://api.chucknorris.io/jokes/random");
        const jokes = await result.json();
        joketext.textContent = jokes.value;
    } catch (error) {
        // Handle errors
        joketext.textContent = "Failed to fetch joke. Please try again later.";
    }
});


function ConvertLength(){
    // Get the elements for conversion
    let from = document.getElementById("input");
    let to = document.getElementById("output");
    let unitFrom = document.getElementById("units-selection");
    let unitTo = document.getElementById("units-values");

    // Get text fields, inputs and factors for conversion
    let selectedUnitFrom = unitFrom.options[unitFrom.selectedIndex];
    let selectedUnitTo = unitTo.options[unitTo.selectedIndex];
    let valueFrom = parseFloat(from.value);
    let factorFrom = parseFloat(selectedUnitFrom.getAttribute("factor"));
    let factorTo = parseFloat(selectedUnitTo.getAttribute("factor"));

    //convert using values and factors
    let result = (valueFrom * factorFrom) / factorTo;
    to.value = result;
}