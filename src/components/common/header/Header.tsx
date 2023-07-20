import Nav from "components/common/nav/Nav";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.wrapper}>
      <Link to="/" className={style.link}><h1>Bergamotte</h1></Link>
      <Nav/>
    </header>
  );
};

export default Header;
