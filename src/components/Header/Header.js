import { useState, useEffect } from "react";
import { generalExchangeRate } from "../API/API";
import s from "./Header.module.scss";

function Header() {
  const [usd, setUSD] = useState(0.0);
  const [eur, setEUR] = useState(0.0);
  const [error, setError] = useState(null);

  useEffect(() => {
    generalExchangeRate("USD", "UAH")
      .then((currency) => {
        setUSD(currency.conversion_rate);
      })
      .catch((error) => {
        setError(error);
      });

    generalExchangeRate("EUR", "UAH")
      .then((currency) => {
        setEUR(currency.conversion_rate);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <header className={s.header}>
      <h1 className={s.title}>
        Con<span className={s.titleColor}>Vec</span>
        <span className={s.titleColor2}>Tor</span>
      </h1>
      <ul>
        <li>
          <p className={s.text}>{usd} USD</p>
        </li>
        <li>
          <p className={s.text}>{eur} EUR</p>
        </li>
      </ul>
    </header>
  );
}

export default Header;
