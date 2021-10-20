const currencyElOne = document.getElementById('select-currency-one');
const currencyElTwo = document.getElementById('select-currency-two');
const inputElOne = document.getElementById('input-one');
const inputElTwo = document.getElementById('input-two');
const ratesEl = document.getElementById('rates')
const swap = document.getElementById('swap-btn')
function calculate(){
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json()).then(data =>{
        
        let rates = data.rates[currencyTwo]
       ratesEl.innerHTML = `1 ${currencyOne} =  ${rates} ${currencyTwo}`
       inputElTwo.value = (rates * inputElOne.value).toFixed(2)
    })

    console.log(currencyOne)
}
currencyElOne.addEventListener('change',calculate)
currencyElTwo.addEventListener('change',calculate)
inputElOne.addEventListener('input',calculate)
inputElTwo.addEventListener('input',calculate)



calculate()

swap.addEventListener('click', () => {
    let temp = currencyElOne.value
    currencyElOne.value = currencyElTwo.value
    currencyElTwo.value = temp
    calculate()
})