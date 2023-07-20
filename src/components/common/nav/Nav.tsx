import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  const navLinks = [
    {
      id: 1,
      url: "/",
      title: "Home",
    },
    {
      id: 2,
      url: "/products",
      title: "Produits",
    },
    {
      id: 3,
      url: "/about",
      title: "À propos",
    },
    {
      id: 4,
      url: "/contact",
      title: "Contact",
    },
  ];

  return (
    <nav className={style.navList}>
      <ul className={style.navItems}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink className={style.links} to={link.url}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
