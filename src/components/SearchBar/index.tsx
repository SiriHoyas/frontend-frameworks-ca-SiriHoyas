import { Product } from "../types";
import SearchResults from "./SearchResults/index";
import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ data }: { data: Array<Product> }) {
  const [value, setValue] = useState("");
  const [inFoucs, setInFocus] = useState(false);

  const filteredData = data.filter((item) => {
    const searchValue = value.toLowerCase();
    return item.title.toLowerCase().includes(searchValue);
  });

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onBlur={() =>
          setTimeout(() => {
            setInFocus(false);
          }, 50)
        }
        onFocus={() => setInFocus(true)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {value.length > 0 && inFoucs && <SearchResults value={value} filteredData={filteredData} />}
    </div>
  );
}

export default SearchBar;
