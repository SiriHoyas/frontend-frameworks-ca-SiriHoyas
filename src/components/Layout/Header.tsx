import { NavLink, Link } from "react-router-dom";
import App from "../../App";
import ContactPage from "../../pages/ContactPage";
import CartIcon from "../UI/icons/CartIcon";
import Logo from "../UI/icons/Logo";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
      <nav className={styles.nav}>
        <NavLink to={"/"} className={styles.link}>
          Home
        </NavLink>
        <NavLink to={"contact"} className={styles.link}>
          Contact
        </NavLink>
      </nav>
      <Link to={"checkout"} className={styles.cartIconContainer}>
        <CartIcon className={styles.cartIcon} />
        <div className={styles.cartOverlay}>3</div>
      </Link>
    </header>
  );
}

export default Header;
