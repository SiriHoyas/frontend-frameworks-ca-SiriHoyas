import { AiOutlineCloseCircle, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

import { BsBag } from "react-icons/bs";
import Logo from "../../UI/icons/Logo";
import { RootState } from "../../../store/store";
import styles from "./Header.module.css";
import { useMediaQuery } from "@react-hook/media-query";
import { useSelector } from "react-redux";
import { useState } from "react";

function Header() {
  const { itemCount } = useSelector((store: RootState) => {
    return store.cart;
  });

  const isBiggerScreen = useMediaQuery("only screen and (min-width: 1024px)");

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

  if (isBiggerScreen) {
    return (
      <header className={styles.navbar}>
        <section className={styles.logoContainer}>
          <Logo className={styles.logo} />
        </section>
        <nav className={styles.navLinksContainer}>
          <NavLink to={"/"} className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to={"contact"} className={styles.navLink}>
            Contact
          </NavLink>
        </nav>
        <section className={styles.iconsContainer}>
          <AiOutlineSearch className={styles.navbarIcon} />
          {/* <SearchBar /> */}
          <Link to={"checkout"}>
            <div className={styles.cartContainer}>
              <BsBag className={styles.navbarIcon} />
              <p className={styles.cartOverlay}>{itemCount}</p>
            </div>
          </Link>
        </section>
      </header>
    );
  }

  if (navState === "searchOpen") {
    return (
      <header className={`${styles.navbar} ${styles.searchOpen}`}>
        {/* <SearchBar /> */}
        <AiOutlineCloseCircle className={styles.searchOpenIcon} onClick={closeMenuOptions} />
      </header>
    );
  }
  if (navState === "menuOpen") {
    return (
      <header className={`${styles.navbar} ${styles.menuOpen}`}>
        <nav className={styles.navLinksContainer}>
          <NavLink to={"/"} className={styles.navLink} onClick={closeMenuOptions}>
            Home
          </NavLink>
          <NavLink to={"contact"} className={styles.navLink} onClick={closeMenuOptions}>
            Contact
          </NavLink>
        </nav>
        <AiOutlineCloseCircle className={styles.menuOpenIcon} onClick={closeMenuOptions} />
      </header>
    );
  }

  return (
    <header className={styles.navbar}>
      <section className={styles.logoContainer}>
        <Link to={"/"}>
          <Logo className={styles.logo} />
        </Link>
      </section>
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
