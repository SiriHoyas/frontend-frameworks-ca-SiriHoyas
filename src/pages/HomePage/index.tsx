import { ApiResponse, Product } from "../../components/types";

import ErrorMessage from "../../components/ErrorMessage";
import ProductCard from "../../components/ProductCard/Index";
import { PuffLoader } from "react-spinners";
import SearchBar from "../../components/SearchBar";
import styles from "./HomePage.module.css";
import useApi from "../../hooks/useApi";

function HomePage() {
  const { data, isLoading, isError } = useApi<ApiResponse>("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading) {
    return (
      <main className={styles.homepageMain}>
        <PuffLoader color="#323232" className={styles.loader} />
      </main>
    );
  }

  if (!Array.isArray(data) || isError) {
    return (
      <main>
        <ErrorMessage />
      </main>
    );
  }

  return (
    <main className={styles.homepageMain}>
      <section className={styles.searchContainer}>
        <SearchBar />
      </section>
      <h1>Products</h1>
      <section className={styles.productsContainer}>
        {data.map((product: Product) => {
          return <ProductCard imageUrl={product.imageUrl} title={product.title} discountedPrice={product.discountedPrice} key={product.id} id={product.id} />;
        })}
      </section>
    </main>
  );
}

export default HomePage;
