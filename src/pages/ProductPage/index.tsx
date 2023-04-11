import { Link, useParams } from "react-router-dom";

import Button from "../../components/UI/Button/Button";
import ErrorMessage from "../../components/ErrorMessage";
import { Product } from "../../components/types";
import ProductInfo from "../../components/ProductInfo";
import ProductReviews from "../../components/ProductReviews";
import { PuffLoader } from "react-spinners";
import { addToCart } from "../../store/CartSlice";
import styles from "./ProductPage.module.css";
import useApi from "../../hooks/useApi";
import { useDispatch } from "react-redux";

function ProductPage() {
  const { productID } = useParams<{ productID: string }>();
  const { data, isError, isLoading } = useApi<Product>(`https://api.noroff.dev/api/v1/online-shop/${productID}`);
  const dispatch = useDispatch();
  console.log(data);

  if (isLoading) {
    return (
      <main className={styles.homepageMain}>
        <PuffLoader color="#323232" />
      </main>
    );
  }

  if (!(typeof data === "object") || !data || isError) {
    return (
      <main className={styles.productMain}>
        <ErrorMessage />
      </main>
    );
  }

  function purchaseHandler() {
    let price = data?.discountedPrice;
    let itemName = data?.title;
    let id = data?.id;
    let imageUrl = data?.imageUrl;
    let quantity = 1;

    let itemObject = {
      itemName,
      price,
      id,
      imageUrl,
      quantity,
    };

    dispatch(addToCart(itemObject));
  }

  const reviews = data.reviews || [];

  return (
    <main className={styles.productMain}>
      <div className={styles.backButtonContainer}>
        <Link to="/">
          <Button label="Back" className={"primary"} type="button" />
        </Link>
      </div>
      <section className={styles.productInfo}>
        <ProductInfo title={data.title} description={data.description} imageUrl={data.imageUrl} discountedPrice={data.discountedPrice} id={data.id} price={data.price} />
        <Button label="Add to cart" className={"secondary"} type="button" onClick={purchaseHandler} />
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
