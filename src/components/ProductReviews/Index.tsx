import { Review } from "../types";
import styles from "./ProductReviews.module.css";

function ProductReviews({ rating, username, description }: Review) {
  return (
    <article>
      <h4>{username}</h4>
      <span>Rating: {rating}/5</span>
      <p>{description}</p>
    </article>
  );
}

export default ProductReviews;
