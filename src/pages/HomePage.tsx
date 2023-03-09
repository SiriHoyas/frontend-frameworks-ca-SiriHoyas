import ProductCard from "../components/ProductCard/ProductCard";
import useApi from "../hooks/UseApi";
import styles from "./HomePage.module.css";

function HomePage() {
  const { data, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  return (
    <main className={styles.homepageMain}>
      <section className={styles.productsContainer}>
        {data.map((product) => {
          return <ProductCard imageUrl={product.imageUrl} title={product.title} discountedPrice={product.discountedPrice} key={product.id} id={product.id} />;
        })}
      </section>
    </main>
  );
}

export default HomePage;
