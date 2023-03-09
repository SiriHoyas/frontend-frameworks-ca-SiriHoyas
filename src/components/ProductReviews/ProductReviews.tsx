import { Review } from "../Types";
import styles from "./ProductReviews.module.css";

function ProductReviews({ rating, username, description }: Review) {
  return (
    <article>
      <span>{rating}</span>
      <h4>{username}</h4>
      <p>{description}</p>
    </article>
  );
}

export default ProductReviews;
