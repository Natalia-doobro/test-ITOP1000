import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
        <h1 className={s.title}>Con<span className={s.titleColor}>Vec</span><span className={s.titleColor2}>Tor</span></h1> 
        <ul>
            <li><p className={s.text}>0,00 USD</p></li>
            <li><p className={s.text}>0,00 EUR</p></li>
        </ul>  
    </header>
  );
}
export default Header;