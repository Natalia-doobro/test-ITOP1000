import { useState, useEffect } from "react";
import { сurrencyСonverter } from "../API/API";
import optionValue from "./optionValue.json";
import s from "./Convector.module.scss";

function Convector() {
  const [valueBase, setValueBase] = useState(0.0);
  const [valueTarget, setValueTarget] = useState(0.0);

  const [baseSelectValue, setBaseSelectValue] = useState("UAH");
  const [targetSelectValue, setTargetSelectValue] = useState("EUR");

  const [baseSelect, setBaseSelect] = useState(false);
  const [targetSelect, setTargetSelect] = useState(false);

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "valueBase":
        setValueBase(value);
        setBaseSelect(true);
        setTargetSelect(false);
        break;

      case "valueTarget":
        setValueTarget(value);
        setBaseSelect(false);
        setTargetSelect(true);
        break;

      default:
        return;
    }
  };

  const handleChangeSelect = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "baseSelectValue":
        setBaseSelectValue(value);
        break;

      case "targetSelectValue":
        setTargetSelectValue(value);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    if (!baseSelect) {
      return;
    }

    сurrencyСonverter(baseSelectValue, targetSelectValue, valueBase)
      .then((currency) => {
        if (valueBase !== 0) {
          setValueTarget(currency.conversion_result);
        } else {
          setValueTarget(0.0);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, [valueBase, baseSelectValue, targetSelectValue]);

  useEffect(() => {
    if (!targetSelect) {
      return;
    }

    сurrencyСonverter(targetSelectValue, baseSelectValue, valueTarget)
      .then((currency) => {
        if (valueTarget !== 0) {
          setValueBase(currency.conversion_result);
        } else {
          setValueBase(0.0);
        }
      })
      .catch((error) => {
        setError(error);
      });
  }, [valueTarget, baseSelectValue, targetSelectValue]);

  return (
    <div className={s.section}>
      <div className={s.container}>
        <input
          type="number"
          name="valueBase"
          value={valueBase || 0.0}
          className={s.input}
          autoComplete="off"
          autoFocus
          min="0"
          placeholder="999.99"
          onChange={handleChange}
        />

        <select
          name="baseSelectValue"
          className={s.select}
          value={baseSelectValue}
          onChange={handleChangeSelect}
        >
          {optionValue.map(({ id, value }) => (
            <option value={value} key={id}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className={s.container}>
        <input
          type="number"
          name="valueTarget"
          value={valueTarget || 0.0}
          className={s.input}
          autoComplete="off"
          autoFocus
          min="0"
          placeholder="999.99"
          onChange={handleChange}
        />

        <select
          name="targetSelectValue"
          className={s.select}
          value={targetSelectValue}
          onChange={handleChangeSelect}
        >
          {optionValue.map(({ id, value }) => (
            <option value={value} key={id}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Convector;
