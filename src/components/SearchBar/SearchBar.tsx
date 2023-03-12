import styles from "./SearchBar.module.css";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";

function SearchBar() {
  return (
    <>
      <AiOutlineSearch className={styles.navbarIcon} onClick={searchOpen} />

      <AiOutlineCloseCircle className={styles.navbarIcon} onClick={menuOpen} />
    </>
  );
}

export default SearchBar;
