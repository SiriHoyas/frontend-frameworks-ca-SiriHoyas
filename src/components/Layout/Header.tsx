import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import App from "../../App";
import ContactPage from "../../pages/ContactPage";
import { cartState } from "../../store/CartSlice";
import CartIcon from "../UI/icons/CartIcon";
import Logo from "../UI/icons/Logo";
import styles from "./Header.module.css";
import { RootState } from "../../store/store";
import SearchBar from "../SearchBar/SearchBar";

function Header() {
  const { itemCount } = useSelector((store: RootState) => {
    return store.cart;
  });

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
      <div>
        <SearchBar />
      </div>
      <Link to={"checkout"} className={styles.cartIconContainer}>
        <CartIcon className={styles.cartIcon} />
        <div className={styles.cartOverlay}>{itemCount}</div>
      </Link>
    </header>
  );
}

export default Header;
