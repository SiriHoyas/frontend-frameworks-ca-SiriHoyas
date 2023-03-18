import styles from "./SearchBar.module.css";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import useApi from "../../hooks/useApi";
import { Link, useParams } from "react-router-dom";

function SearchBar() {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (!data) {
    return isLoading;
  }

  if (!Array.isArray(data)) {
    return isError;
  }

  return (
    <section className={styles.searchBar}>
      <div className={styles.searchInputContainer}>
        <div className={styles.searchInputs}>
          <input type="text" placeholder="search" className={styles.search} />
        </div>
      </div>
      <div className="searchResults">
        {data.map((value, key) => {
          return (
            <Link to={`products/${value.id}`} key={value.id} className={styles.product}>
              <p>{value.title}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default SearchBar;
