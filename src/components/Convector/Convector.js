import s from "./Convector.module.css";

const Convector = () => {
  return (
      <div className={s.section}>
        <div className={s.container}>
            <input type="number" name="valueMani" className={s.input}/>
            <select name="select" className={s.select} defaultValue="USD"> 
                <option value="valueUSD">USD</option>
                <option value="valueEUR">EUR</option>
                <option value="valueUAN">UAN</option>
            </select>
        </div> 
        
        <div className={s.container}>
            <input type="number" name="resultMani" className={s.input}/>
              <select name="select" className={s.select} defaultValue="USD" > 
                <option value="valueUSD">USD</option>
                <option value="valueEUR">EUR</option>
                <option value="valueUAN">UAN</option>
            </select>
        </div>
 
    </div>
  );
}
export default Convector;