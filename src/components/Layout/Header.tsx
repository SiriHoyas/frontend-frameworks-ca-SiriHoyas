import { NavLink } from "react-router-dom";
import App from "../../App";
import ContactPage from "../../pages/ContactPage";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to={"/"} className={styles.link}>
          Home
        </NavLink>
        <NavLink to={"contact"} className={styles.link}>
          Contact
        </NavLink>
        <NavLink to={"checkout"} className={styles.link}>
          Checkout
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
