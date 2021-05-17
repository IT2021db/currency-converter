console.log("Hello!");
{
    let formElement = document.querySelector(".js-form");
    let amountElement = document.querySelector(".js-amount");
    let currencySelectElement = document.querySelector(".js-currencySelect");

    let exchangeRateElement = document.querySelector(".js-exchangeRate");
    let resultElement = document.querySelector(".js-result");

    let rateEUR = 4.5316;
    let rateUSD = 3.7374;
    let rateGBP = 5.2571;
    let exchangeRate;
    let result;

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        let currency = currencySelectElement.value;

        switch (currency) {
            case "EURO":
                exchangeRate = rateEUR;
                break
            case "USD":
                exchangeRate = rateUSD;
                break;
            case "GBP":
                exchangeRate = rateGBP;
                break;
        }
        result = amountElement.value / exchangeRate;
        exchangeRateElement.innerText = `${exchangeRate} PLN`;
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    });


    formElement.addEventListener("reset", () => {
        exchangeRateElement.innerText = "";
        resultElement.innerText = "";
    });

}