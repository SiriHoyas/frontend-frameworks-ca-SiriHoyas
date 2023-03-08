import ProductCard from "../components/ProductCard/ProductCard";
import useApi from "../hooks/UseApi";
import styles from "./HomePage.module.css";

function HomePage() {
  const { data, isLoading, isError } = useApi("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
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
