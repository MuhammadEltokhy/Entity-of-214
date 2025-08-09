//Check if currentmode is present or not to set it
if(localStorage.getItem("currentmode") === null) {
    localStorage.setItem("currentmode", "false");
}
let style = document.getElementById("theme-style");

CheckMode();
function CheckMode() {
    if(localStorage.getItem("currentmode") === "true") {
        // If currentmode is true, switch to dark mode
        style.setAttribute("href", "eng-dark.css");
    } else {
        // If currentmode is false, switch to light mode
        style.setAttribute("href", "eng.css");
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
