// Bill Variables
const unitRate = 0.2;
const standardCharge = 0.04;
const daysPeriod = 60;
let chargeNoVat;
let finalCharge;
const vat = 13.5 / 100; //13.5%

window.onload = function () {
    const calcBtn = document.getElementById('calculate-btn');

    //
    calcBtn.addEventListener('click', (event) => {
        event.preventDefault;
        const numberOfUnits = document.getElementById('units-num').value;

        // Calculating Bill Without VAT
        chargeNoVat = parseFloat(numberOfUnits) * unitRate + (daysPeriod * standardCharge);
        console.log(chargeNoVat);

        // Adding VAT and calculating final charge
        finalCharge = parseFloat(chargeNoVat) + (chargeNoVat * vat);
        console.log(finalCharge);

        document.getElementById('principal').textContent = "€" + parseFloat(finalCharge).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })

        document.getElementById('result').style.display = 'table';
        //document.getElementById('reset-btn').style.display = 'block';

    })
}