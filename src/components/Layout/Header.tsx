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
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsBag } from "react-icons/bs";

function Header() {
  const { itemCount } = useSelector((store: RootState) => {
    return store.cart;
  });

  const [navState, setNavState] = useState("initialState");

  function searchOpen() {
    setNavState("searchOpen");
  }

  function menuOpen() {
    setNavState("menuOpen");
  }

  function closeMenuOptions() {
    setNavState("initialState");
  }

  if (navState === "searchOpen") {
    return (
      <header className={`${styles.navbar} ${styles.searchOpen}`}>
        <AiOutlineSearch className={styles.searchOpenIcon} />
        <input type="text" placeholder="search" className={styles.searchbar} />
        <AiOutlineCloseCircle className={styles.searchOpenIcon} onClick={closeMenuOptions} />
      </header>
    );
  }
  if (navState === "menuOpen") {
    return (
      <header className={`${styles.navbar} ${styles.menuOpen}`}>
        <div className={styles.navLinksContainer}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
        </div>
        <AiOutlineCloseCircle className={styles.menuOpenIcon} onClick={closeMenuOptions} />
      </header>
    );
  }

  return (
    <header className={styles.navbar}>
      <section className={styles.logoContainer}>LOGO</section>
      <section className={styles.iconsContainer}>
        <AiOutlineSearch className={styles.navbarIcon} onClick={searchOpen} />
        <Link to={"checkout"}>
          <div className={styles.cartContainer}>
            <BsBag className={styles.navbarIcon} />
            <p className={styles.cartOverlay}>{itemCount}</p>
          </div>
        </Link>
        <AiOutlineMenu className={styles.navbarIcon} onClick={menuOpen} />
      </section>
    </header>
  );
}

export default Header;
