import { Product } from "../components/types";
import ProductCard from "../components/ProductCard/ProductCard";
import { PuffLoader } from "react-spinners";
import styles from "./HomePage.module.css";
import useApi from "../hooks/useApi";

function HomePage() {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading) {
    return (
      <main className={styles.homepageMain}>
        <PuffLoader color="#323232" />
      </main>
    );
  }

  if (!Array.isArray(data) || isError) {
    return (
      <main className={styles.homepageMain}>
        <p>Error</p>
      </main>
    );
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
