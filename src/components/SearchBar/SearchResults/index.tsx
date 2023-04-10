import { SearchResultsType } from "../../types";
import styles from "./SearchResults.module.css";

function SearchResults({ value, filteredData }: SearchResultsType) {
  return (
    <section className={styles.searchResultsContainer}>
      <div className={styles.resultList}>
        {value.length >= 1
          ? filteredData.map((product) => {
              return (
                <div className={styles.searchResult} key={product.id}>
                  <p>{product.title}</p>
                </div>
              );
            })
          : ""}
      </div>
    </section>
  );
}

export default SearchResults;
