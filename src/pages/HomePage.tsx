import ProductCard from "../components/ProductCard/ProductCard";
import SearchBar from "../components/SearchBar/SearchBar";
import { Product } from "../components/Types";
import useApi from "../hooks/useApi";
import styles from "./HomePage.module.css";

function HomePage() {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (!data) {
    return isLoading;
  }

  if (!Array.isArray(data)) {
    return isError;
  }

  return (
    <main className={styles.homepageMain}>
      <section className={styles.productsContainer}>
        {data.map((product: Product) => {
          return <ProductCard imageUrl={product.imageUrl} title={product.title} discountedPrice={product.discountedPrice} key={product.id} id={product.id} />;
        })}
      </section>
    </main>
  );
}

export default HomePage;
