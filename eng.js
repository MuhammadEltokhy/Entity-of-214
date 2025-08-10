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
        style.setAttribute("href", "eng-dark.css");
    }
    else {
        // If currentmode is false, switch to light mode
        style.setAttribute("href", "eng.css");
    }
}

function ConvertMode() {
    // Toggle the currentmode value and update the stylesheet link
    if(localStorage.getItem("currentmode") === "true") {
        localStorage.setItem("currentmode", "false");
        CheckMode();
    }
    else {
        localStorage.setItem("currentmode", "true");
        CheckMode();
    }
}

function Convert(type){
    let from, to, unitFrom, unitTo;
    
    //Determine the type of physical quantity for conversion
    if(type === 'A'){
        from = document.getElementById("area-from");
        to = document.getElementById("area-to");
        unitFrom = document.getElementById("area-unit-from");
        unitTo = document.getElementById("area-unit-to");
    }
    else if(type === 'E'){
        from = document.getElementById("energy-from");
        to = document.getElementById("energy-to");
        unitFrom = document.getElementById("energy-unit-from");
        unitTo = document.getElementById("energy-unit-to");
    }
    else if(type === 'F'){
        from = document.getElementById("force-from");
        to = document.getElementById("force-to");
        unitFrom = document.getElementById("force-unit-from");
        unitTo = document.getElementById("force-unit-to");
    }
    else if(type === 'S'){
        from = document.getElementById("speed-from");
        to = document.getElementById("speed-to");
        unitFrom = document.getElementById("speed-unit-from");
        unitTo = document.getElementById("speed-unit-to");
    }
    else if(type === 'D'){
        from = document.getElementById("data-from");
        to = document.getElementById("data-to");
        unitFrom = document.getElementById("data-unit-from");
        unitTo = document.getElementById("data-unit-to");
    }
    else if(type === 'C'){
        from = document.getElementById("acceleration-from");
        to = document.getElementById("acceleration-to");
        unitFrom = document.getElementById("acceleration-unit-from");
        unitTo = document.getElementById("acceleration-unit-to");
    }
    else if(type === 'T'){
        from = document.getElementById("torque-from");
        to = document.getElementById("torque-to");
        unitFrom = document.getElementById("torque-unit-from");
        unitTo = document.getElementById("torque-unit-to");
    }
    else if(type === 'P'){
        from = document.getElementById("pressure-from");
        to = document.getElementById("pressure-to");
        unitFrom = document.getElementById("pressure-unit-from");
        unitTo = document.getElementById("pressure-unit-to");
    }
    else if(type === 't'){
        from = document.getElementById("time-from");
        to = document.getElementById("time-to");
        unitFrom = document.getElementById("time-unit-from");
        unitTo = document.getElementById("time-unit-to");
    }
    else if(type === 'G'){
        from = document.getElementById("angle-from");
        to = document.getElementById("angle-to");
        unitFrom = document.getElementById("angle-unit-from");
        unitTo = document.getElementById("angle-unit-to");
    }
    else if(type === 'M'){
        from = document.getElementById("moment-from");
        to = document.getElementById("moment-to");
        unitFrom = document.getElementById("moment-unit-from");
        unitTo = document.getElementById("moment-unit-to");
    }

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

// Create a counter for number of invalid chooses
let cnt = 0;
function SelectQuantity(){
    // Get the selected value and create a variable for desiredQuantity's index
    let selector = document.getElementById("quantity-selector");
    let selectedQuantity = selector.options[selector.selectedIndex].value;
    let desiredQuantity = -1;

    // Get all forms
    let forms = [
        document.getElementById("area-form"),
        document.getElementById("energy-form"),
        document.getElementById("force-form"),
        document.getElementById("speed-form"),
        document.getElementById("data-form"),
        document.getElementById("acceleration-form"),
        document.getElementById("torque-form"),
        document.getElementById("pressure-form"),
        document.getElementById("time-form"),
        document.getElementById("angle-form"),
        document.getElementById("moment-form")
    ];

    // Show the desired form
    if(selectedQuantity === 'A'){
        desiredQuantity = 0;
    }
    else if(selectedQuantity === 'E'){
        desiredQuantity = 1;
    }
    else if(selectedQuantity === 'F'){
        desiredQuantity = 2;
    }
    else if(selectedQuantity === 'S'){
        desiredQuantity = 3;
    }
    else if(selectedQuantity === 'D'){
        desiredQuantity = 4;
    }
    else if(selectedQuantity === 'C'){
        desiredQuantity = 5;
    }
    else if(selectedQuantity === 'T'){
        desiredQuantity = 6;
    }
    else if(selectedQuantity === 'P'){
        desiredQuantity = 7;
    }
    else if(selectedQuantity === 't'){
        desiredQuantity = 8;
    }
    else if(selectedQuantity === 'G'){
        desiredQuantity = 9;
    }
    else if(selectedQuantity === 'M'){
        desiredQuantity = 10;
    }
    else if(selectedQuantity === 'N'){
        cnt++;
        if(cnt <= 3){
            alert("Please select a valid quantity.");
        }
        else{
            alert("You are not cool man!!!");
        }
    }

    // Show the desired form and hide others
    for(let i=0 ;i<11 ;i++){
        if(i==desiredQuantity){
            forms[i].style.display = "block";
        }
        else{
            forms[i].style.display = "none";
        }
    }
}
