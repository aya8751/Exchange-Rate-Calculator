const ccurrency1 = document.querySelector('.currency-from');
const ccurrency2 = document.querySelector('.currency-to');
const amount1 = document.querySelector('.amount-one');
const amount2 = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap-btn');
const rate = document.querySelector('.rate');

// fetch exchange rate and update ui
const calcDiffrence = function(){
    let cccurrencyOne = ccurrency1.value;
    let cccurrencyTwo = ccurrency2.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/d131c42fbf77e19d2c822b92/latest/${cccurrencyOne}`)
    .then(res => res.json())
    .then(data => {
        let rateAmount = data.conversion_rates[cccurrencyTwo];
        rate.innerHTML = `1 ${cccurrencyOne} = ${rateAmount} ${cccurrencyTwo}`;
        amount2.value = (amount1.value * rateAmount).toFixed(2);
    })
}

//Event listeners
ccurrency1.addEventListener('change', calcDiffrence);
amount1.addEventListener('input', calcDiffrence)
ccurrency2.addEventListener('change', calcDiffrence);
amount2.addEventListener('input', calcDiffrence);
swapBtn.addEventListener('click', function(){
    const temp = ccurrency1.value;
    ccurrency1.value = ccurrency2.value;
    ccurrency2.value = temp;
    calcDiffrence();
});

calcDiffrence();