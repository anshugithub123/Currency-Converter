const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRate = document.getElementById("exchange-rate");

updateRate();

function updateRate(){
    fetch(` https://v6.exchangerate-api.com/v6/
    a175cb00f5dcf478f25f1d82/latest/${currencyFirstEl.value}`
    )
    .then((res)=>res.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySecondEl.value];
        console.log(rate);
        exchangeRate.innerText = `1 ${currencyFirstEl.value} = ${rete + " " + currencySecondEl.value}`;

        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3)
    });
}

currencyFirstEl.addEventListener("change", updateRate)

currencySecondEl.addEventListener("change", updateRate)

worthFirstEl.addEventListener("input", updateRate)