// Bill Variables
const unitRate = 0.2;
const standardCharge = 0.04;
const daysPeriod = 60;
let chargeNoVat;
let finalCharge;
const vat = 13.5 / 100; //13.5%

// Electricity Bill Calculator Function
window.onload = function () {
    const calcBtn = document.getElementById('calculate-btn');

    // Adding click event to button
    calcBtn.addEventListener('click', (event) => {
        event.preventDefault;
        // Getting input value
        const numberOfUnits = document.getElementById('units-num').value;

        // Calculating Bill Without VAT
        chargeNoVat = parseFloat(numberOfUnits) * unitRate + (daysPeriod * standardCharge);
        console.log(chargeNoVat);

        // Adding VAT and calculating final charge
        finalCharge = (chargeNoVat) + (chargeNoVat * vat);
        console.log(finalCharge);

        // Appending final charge result to page
        document.getElementById('principal').textContent = "€" + (finalCharge.toFixed(2)).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })

        document.getElementById('result').style.display = 'table';
    })
}