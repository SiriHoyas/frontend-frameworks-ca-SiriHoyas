import { Product } from "../types";
import styles from "./ProductInfo.module.css";

function ProductInfo({ title, imageUrl, discountedPrice, price }: Product) {
  let priceDifference = ((discountedPrice - price) / price) * 100;

  if (priceDifference < 0) {
    return (
      <article className={styles.productInfo}>
        <div className={styles.imageContainer}>
          <p className={styles.onSale}>{Math.ceil(priceDifference)}%</p>
          <img src={imageUrl} />
        </div>
        <div>
          <h1>{title}</h1>
          <div className={styles.priceContainer}>
            <p className={styles.originalPrice}>$ {price}</p>
            <p className={styles.salesPrice}>$ {discountedPrice}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={styles.productInfo}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} />
      </div>
      <div>
        <h1>{title}</h1>
        <p>$ {discountedPrice}</p>
      </div>
    </article>
  );
}

export default ProductInfo;
