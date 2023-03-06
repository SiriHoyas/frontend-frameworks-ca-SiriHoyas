import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={styles.homepageMain}>
      <section className={styles.productsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}

export default HomePage;
