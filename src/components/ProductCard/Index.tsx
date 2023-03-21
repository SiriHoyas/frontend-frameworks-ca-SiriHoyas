import Button from "../UI/Button/Index";
import { Link } from "react-router-dom";
import { Product } from "../types";
import styles from "./ProductCard.module.css";

function ProductCard({ imageUrl, title, discountedPrice, id }: Product) {
  return (
    <article className={styles.productCard} key={id}>
      <div className={styles.productThumbnail}>
        <img src={imageUrl} alt={title} className={styles.productImg} />
      </div>
      <div className={styles.productDescriptionContainer}>
        <h1 className={styles.productTitle}>{title}</h1>

        <p className={styles.productPrice}>{discountedPrice} kr</p>
      </div>
      <div className={styles.btnContainer}>
        <Link to={`products/${id}`}>
          <Button label="Show more" className={"primary"} type="button" />
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;