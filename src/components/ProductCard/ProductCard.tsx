import { Link } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./ProductCard.module.css";

export type ProductProps = {
  imageUrl: string;
  title: string;
  discountedPrice: number;
  id: string;
};

function ProductCard({ imageUrl, title, discountedPrice, id }: ProductProps) {
  return (
    <article className={styles.productCard} key={id}>
      <div className={styles.productThumbnail}>
        <img src={imageUrl} alt={title} className={styles.productImg} />
      </div>
      <div className={styles.productDescriptionContainer}>
        <h2 className={styles.productTitle}>{title}</h2>
        <p className={styles.productPrice}>{discountedPrice} kr</p>
      </div>
      <div className={styles.btnContainer}>
        <Link to={`products/${id}`}>Show more</Link>
      </div>
    </article>
  );
}

export default ProductCard;
