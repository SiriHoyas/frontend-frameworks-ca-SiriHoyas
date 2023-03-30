import { Product } from "../types";
import SearchResults from "./SearchResults";
import styles from "./SearchBar.module.css";
import { useState } from "react";

function SearchBar({ data }: { data: Array<Product> }) {
  const [value, setValue] = useState("");

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
        onBlur={() => setValue("")}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <SearchResults value={value} filteredData={filteredData} />
    </div>
  );
}

export default SearchBar;
