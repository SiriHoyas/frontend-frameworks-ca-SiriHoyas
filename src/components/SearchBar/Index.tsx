import { Link } from "react-router-dom";
import styles from "./SearchBar.module.css";
import useApi from "../../hooks/useApi";
import { useState } from "react";

function SearchBar() {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");
  const [search, setSearch] = useState();

  if (!data) {
    return isLoading;
  }

  if (!Array.isArray(data)) {
    return isError;
  }

  function handleChange(value) {
    setSearch(value);
    console.log(search);
  }

  return (
    <section className={styles.searchBar}>
      <div className={styles.searchInputContainer}>
        <div className={styles.searchInputs}>
          <input type="text" placeholder="search" className={styles.search} onChange={(e) => handleChange(e.target.value)} />
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
