console.log("Hello!");
let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-pln");
let currencySelectElement = document.querySelector(".js-currencySelect");

let exchangeRate = document.querySelector(".js-exchangeRate");
let resultElement = document.querySelector(".js-result");


formElement.addEventListener("input", () => {
    let currency = currencySelectElement.value;

    let euro = 4.5316;
    let dollar = 3.7374;
    let pound = 5.2571;

    switch (currency) {
        case "EURO":
            exchangeRate.value = euro;
            break
        case "USD":
            exchangeRate.value = dollar;
            break;
        case "GBP":
            exchangeRate.value = pound;
            break;
        default:
            break;
    }
    exchangeRate.innerText = exchangeRate.value;
    let result = plnElement.value / exchangeRate.value;
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});


formElement.addEventListener("reset", () => {

});