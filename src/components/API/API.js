const BASE_URL = "https://v6.exchangerate-api.com/v6";
const key = "84df32090165cca7b54ab22f";

export async function generalExchangeRate(baseCurrency, targetCurrency) {
  return fetch(
    `${BASE_URL}/${key}/pair/${baseCurrency}/${targetCurrency}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`uneasy request.`));
  });
}

export async function сurrencyСonverter(
  baseCurrency,
  targetCurrency,
  amountMoney
) {
  return fetch(
    `${BASE_URL}/${key}/pair/${baseCurrency}/${targetCurrency}/${amountMoney}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`uneasy request.`));
  });
}
