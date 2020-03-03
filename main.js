
let rate = 23000;
let resultArea = document.getElementById('resultArea');
let convertButton = document.getElementById('convertButton');
let amount = document.getElementById("amount")
let from = document.getElementById("from")
let to = document.getElementById("to")

convertButton.addEventListener("click",convert);

const currencyRatio = {
    usd:{
        usd: 1,
        vnd: 23000,
        eur: 0.9,
    },

    vnd:{
        vnd: 1,
        usd: 0.000043,
        eur: 0.000023
    },

    eur:{
        eur: 1,
        vnd: 28000,
        usd: 1.1
    }
}
// console.log('USD-VND', currencyRatio['usd']['vnd'])
function convert() {
    let inputCurrency = from.options[from.selectedIndex].text;
    let outputCurrency = to.options[to.selectedIndex].text;
    console.log(inputCurrency)
    let finalRatio = currencyRatio[inputCurrency.toLowerCase()][outputCurrency.toLowerCase()]
    console.log(finalRatio)
    let finalAmount = amount.value*finalRatio
    resultArea.innerHTML = `this is the result ${finalAmount}`
    console.log(finalAmount)
}   

