{
    const exchangeRateElement = document.querySelector(".js-exchangeRate");
    const resultElement = document.querySelector(".js-result");

    const selectCurrency = (currency) => {
        const rateEUR = 4.5316;
        const rateUSD = 3.7374;
        const rateGBP = 5.2571;

        switch (currency) {
            case "EURO":
                return rateEUR;
            case "USD":
                return rateUSD;
            case "GBP":
                return rateGBP;
        }
    }

    const changeResult = (amount, currency) => {
        return (amount / selectCurrency(currency));
    }
    const updateResultText = (amount, currency) => {
        exchangeRateElement.innerText = `${selectCurrency(currency)} PLN`;
        resultElement.innerText = `${changeResult(amount, currency).toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencySelectElement = document.querySelector(".js-currencySelect");
        const amount = amountElement.value;
        const currency = currencySelectElement.value;
        updateResultText(amount, currency);
    }

    const onFormReset = () => {
        exchangeRateElement.innerText = "";
        resultElement.innerText = "";
    }

    const init = () => {
        formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        formElement.addEventListener("reset", onFormReset);
    }

    init();




}
