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
    // Fetch latest exchange rates from Currency API
    fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3a72a40aeb894b739af4b3af25c9bf27")
    .then(result => result.json())
    .then(currency => {
        // Get select elements
        let currencyFrom=document.getElementById("currency-unit-from");
        let currencyTo=document.getElementById("currency-unit-to");
        
        // Create list of currency codes
        let currencies=['1INCH', 'AED', 'AERGO', 'AGLD', 'ALGO', 'ANKR', 'ANT', 'APE', 'APT', 'AR', 'ARB', 'ARKM', 'ASTR', 'ATOM', 'AVAX', 'AXS', 'AZERO', 'BAND', 'BCH', 'BDT', 'BGN', 'BHD', 'BMD', 'BNB', 'BNT', 'BOBA', 'BRL', 'BSD', 'BSV', 'BTC', 'BTRST', 'BUSD', 'CAD', 'CAKE', 'CELO', 'CELR', 'CFX', 'CHZ', 'CLP', 'CNY', 'COMP', 'COP', 'CORE', 'CRC', 'CRO', 'CRV', 'CTSI', 'CVC', 'CZK', 'DAI', 'DAR', 'DASH', 'DCR', 'DFI', 'DGB', 'DOGE', 'DOP', 'DOT', 'DYM', 'DZD', 'EGLD', 'ENS', 'EOS', 'ERN', 'ETB', 'ETH', 'EUR', 'FET', 'FIL', 'FLOKI', 'FLOW', 'FORTH', 'FRAX', 'FTM', 'FXS', 'GAL', 'GALA', 'GEL', 'GLMR', 'GMT', 'GMX', 'GRT', 'GTC', 'HBAR', 'HKD', 'HNL', 'HNT', 'HUF', 'ICP', 'IDR', 'ILS', 'IMX', 'INJ', 'INR', 'IOTX', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KAVA', 'KES', 'KLAY', 'KMF', 'KRW', 'KSM', 'KYD', 'LAK', 'LDO', 'LINK', 'LKR', 'LRC', 'LSK', 'LTC', 'LUNA', 'LUNC', 'MAD', 'MANA', 'MATIC', 'MGA', 'MINA', 'MKR', 'MMK', 'MNT', 'MOP', 'MRO', 'MUR', 'MVR', 'MWK', 'MXN', 'MYR', 'MZN', 'NAD', 'NEAR', 'NEO', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'OP', 'ORDI', 'PAB', 'PEPE', 'PEN', 'PERP', 'PGK', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'QNT', 'QUICK', 'RON', 'RSD', 'RUB', 'RWF', 'SAND', 'SAR', 'SBD', 'SCR', 'SEK', 'SGD', 'SHIB', 'SHP', 'SLL', 'SOL', 'SRD', 'SSP', 'STD', 'STG', 'STORJ', 'STRAX', 'STX', 'SUI', 'SVC', 'SYP', 'SZL', 'THB', 'TIME', 'TJS', 'TMM', 'TMT', 'TND', 'TON', 'TOP', 'TRX', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'UNI', 'USD', 'USDC', 'USDP', 'USDT', 'UYU', 'UZS', 'VEF', 'VND', 'VUV', 'WAVES', 'WST', 'XAF', 'XAG', 'XAU', 'XCD', 'XCH', 'XCN', 'XDR', 'XEC', 'XEM', 'XLM', 'XMR', 'XOF', 'XPD', 'XPF', 'XPT', 'XRP', 'XTZ', 'YER', 'ZAR', 'ZEC', 'ZMK', 'ZMW', 'ZRX', 'ZYR'];
        
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
    })
    .catch(error => {
        // Handle errors
        console.error("Error fetching currency data:", error);
        alert("Failed to fetch currency data.");
    });
});

function Convert(){
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