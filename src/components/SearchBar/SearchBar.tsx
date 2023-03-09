import { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useApi("https://api.noroff.dev/api/v1/online-shop");

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchWord: string = event.target.value;
    setValue(searchWord);

    const filtered = data.filter((value) => {
      return value.title.includes(searchWord);
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <div>
        <input type="text" id="searchInput" placeholder="search" value={value} onChange={handleFilter}></input>
      </div>
      {filteredData.length !== 0 && (
        <div className={styles.searchResultsContainer}>
          {filteredData.map((product) => {
            return (
              <Link to={`products/${product.id}`} className={styles.searchResult}>
                {product.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
