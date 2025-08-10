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