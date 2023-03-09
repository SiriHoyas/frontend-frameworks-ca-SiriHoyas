import styles from "./ProductReviews.module.css";

type Props = {
  rating: number;
  username: string;
  description: string;
};

function ProductReviews({ rating, username, description }: Props) {
  return (
    <article>
      <span>{rating}</span>
      <h4>{username}</h4>
      <p>{description}</p>
    </article>
  );
}

export default ProductReviews;
