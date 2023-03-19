import { Product } from "../components/types";
import ProductInfo from "../components/ProductInfo/Index";
import ProductReviews from "../components/ProductReviews/Index";
import { addToCart } from "../store/CartSlice";
import styles from "./ProductPage.module.css";
import useApi from "../hooks/useApi";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { productID } = useParams<{ productID: string }>();
  const { data } = useApi<Product>(`https://api.noroff.dev/api/v1/online-shop/${productID}`);
  const dispatch = useDispatch();

  if (!data) return <p>Loading...</p>;

  const reviews = data.reviews || [];
  console.log(data.description);

  function purchaseHandler() {
    let price = data?.discountedPrice;
    let itemName = data?.title;
    let id = data?.id;
    let itemObject = {
      itemName,
      price,
      id,
    };

    dispatch(addToCart(itemObject));
  }

  return (
    <main>
      <section className={styles.productInfo}>
        <ProductInfo title={data.title} description={data.description} imageUrl={data.imageUrl} discountedPrice={data.discountedPrice} id={data.id} price={data.price} />
        <button onClick={purchaseHandler}>Purchase me!</button>
      </section>
      <section className={styles.reviewsContainer}>
        <h3 className={styles.reviewsHeading}>User Reviews</h3>
        {reviews.length > 0 &&
          reviews.map((review) => {
            return <ProductReviews key={review.id} rating={review.rating} username={review.username} description={review.description} />;
          })}
      </section>
    </main>
  );
}

export default ProductPage;
