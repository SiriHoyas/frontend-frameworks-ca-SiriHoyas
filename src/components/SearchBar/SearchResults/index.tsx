import { Link } from "react-router-dom";
import { SearchResultsType } from "../../types";
import styles from "./SearchResults.module.css";

function SearchResults({ value, filteredData }: SearchResultsType) {
  return (
    <section className={styles.searchResultsContainer}>
      <div className={styles.resultList}>
        {filteredData.map((product) => {
          return (
            <Link
              onClick={() => {
                console.log("object");
              }}
              to={`products/${product.id}`}
              className={styles.searchResult}
              key={product.id}
            >
              {product.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default SearchResults;
