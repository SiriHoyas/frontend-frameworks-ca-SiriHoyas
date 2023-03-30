import ReactSearchBox from "react-search-box";
import SearchResults from "./SearchResults";
import styles from "./SearchBar.module.css";
import useApi from "../../hooks/useApi";
import { useState } from "react";

function SearchBar({ data }) {
  const [value, setValue] = useState("");
  const [searchData, setSearchData] = useState();
  console.log(data);

  const filteredData = data.filter((item) => {
    const searchValue = value.toLowerCase();
    return item.title.toLowerCase().includes(searchValue);
  });

  console.log(filteredData);

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        // onBlur={() => setValue("")}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <SearchResults value={value} filteredData={filteredData} />
    </div>
  );
}

export default SearchBar;
