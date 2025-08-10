//Check if currentmode is present or not to set it
if(localStorage.getItem("currentmode") === null) {
    localStorage.setItem("currentmode", "false");
}
let style = document.getElementById("theme-style");

CheckMode();
function CheckMode() {
    if(localStorage.getItem("currentmode") === "true") {
        // If currentmode is true, switch to dark mode
        style.setAttribute("href", "fluid-dark.css");
    } else {
        // If currentmode is false, switch to light mode
        style.setAttribute("href", "fluid.css");
    }
}

function ConvertMode() {
    // Toggle the currentmode value and update the stylesheet link
    if(localStorage.getItem("currentmode") === "true") {
        localStorage.setItem("currentmode", "false");
        CheckMode();
    }else {
        localStorage.setItem("currentmode", "true");
        CheckMode();
    }
}

function Convert(type){
    let from, to, unitFrom, unitTo;
    
    //Determine the type of physical quantity for conversion
    if(type === 'VF'){
        from = document.getElementById("volumeflow-from");
        to = document.getElementById("volumeflow-to");
        unitFrom = document.getElementById("volumeflow-unit-from");
        unitTo = document.getElementById("volumeflow-unit-to");
    }
    else if(type === 'MF'){
        from = document.getElementById("massflow-from");
        to = document.getElementById("massflow-to");
        unitFrom = document.getElementById("massflow-unit-from");
        unitTo = document.getElementById("massflow-unit-to");
    }
    else if(type === 'CM'){
        from = document.getElementById("molconc-from");
        to = document.getElementById("molconc-to");
        unitFrom = document.getElementById("molconc-unit-from");
        unitTo = document.getElementById("molconc-unit-to");
    }
    else if(type === 'CS'){
        from = document.getElementById("solconc-from");
        to = document.getElementById("solconc-to");
        unitFrom = document.getElementById("solconc-unit-from");
        unitTo = document.getElementById("solconc-unit-to");
    }
    else if(type === 'M'){
        from = document.getElementById("mass-from");
        to = document.getElementById("mass-to");
        unitFrom = document.getElementById("mass-unit-from");
        unitTo = document.getElementById("mass-unit-to");
    }
    else if(type === 'V'){
        from = document.getElementById("volume-from");
        to = document.getElementById("volume-to");
        unitFrom = document.getElementById("volume-unit-from");
        unitTo = document.getElementById("volume-unit-to");
    }
    else if(type === 'D'){
        from = document.getElementById("density-from");
        to = document.getElementById("density-to");
        unitFrom = document.getElementById("density-unit-from");
        unitTo = document.getElementById("density-unit-to");
    }
    else if(type === 'DV'){
        from = document.getElementById("dynvisc-from");
        to = document.getElementById("dynvisc-to");
        unitFrom = document.getElementById("dynvisc-unit-from");
        unitTo = document.getElementById("dynvisc-unit-to");
    }
    else if(type === 'KV'){
        from = document.getElementById("kinvisc-from");
        to = document.getElementById("kinvisc-to");
        unitFrom = document.getElementById("kinvisc-unit-from");
        unitTo = document.getElementById("kinvisc-unit-to");
    }
    else if(type === 'ST'){
        from = document.getElementById("surftens-from");
        to = document.getElementById("surftens-to");
        unitFrom = document.getElementById("surftens-unit-from");
        unitTo = document.getElementById("surftens-unit-to");
    }
    else if(type === 'P'){
        from = document.getElementById("perm-from");
        to = document.getElementById("perm-to");
        unitFrom = document.getElementById("perm-unit-from");
        unitTo = document.getElementById("perm-unit-to");
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
        document.getElementById("volumeflow-form"),
        document.getElementById("massflow-form"),
        document.getElementById("molconc-form"),
        document.getElementById("solconc-form"),
        document.getElementById("mass-form"),
        document.getElementById("volume-form"),
        document.getElementById("density-form"),
        document.getElementById("dynvisc-form"),
        document.getElementById("kinvisc-form"),
        document.getElementById("surftens-form"),
        document.getElementById("perm-form")
    ];

    // Show the desired form
    if(selectedQuantity === 'VF'){
        desiredQuantity = 0;
    }
    else if(selectedQuantity === 'MF'){
        desiredQuantity = 1;
    }
    else if(selectedQuantity === 'CM'){
        desiredQuantity = 2;
    }
    else if(selectedQuantity === 'CS'){
        desiredQuantity = 3;
    }
    else if(selectedQuantity === 'M'){
        desiredQuantity = 4;
    }
    else if(selectedQuantity === 'V'){
        desiredQuantity = 5;
    }
    else if(selectedQuantity === 'D'){
        desiredQuantity = 6;
    }
    else if(selectedQuantity === 'DV'){
        desiredQuantity = 7;
    }
    else if(selectedQuantity === 'KV'){
        desiredQuantity = 8;
    }
    else if(selectedQuantity === 'ST'){
        desiredQuantity = 9;
    }
    else if(selectedQuantity === 'P'){
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

