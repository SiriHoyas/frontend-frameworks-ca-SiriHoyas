import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import { RootState } from "../../store/store";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useMediaQuery } from "@react-hook/media-query";

function Header() {
  let { itemCount, cartItems } = useSelector((store: RootState) => {
    console.log(store.cart);
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
        <section className={styles.logoContainer}>LOGO</section>
        <nav className={styles.navLinksContainer}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
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
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"contact"}>Contact</NavLink>
        </nav>
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
