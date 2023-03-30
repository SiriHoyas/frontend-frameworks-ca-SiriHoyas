import { FC } from "react";
import { Product } from "../types";
import styles from "./CartItem.module.css";

function CartItem({ title, price, imageUrl }: Product) {
  return (
    <article className={styles.cartItemContainer}>
      <div>
        <img src={imageUrl} alt={title} className={styles.productImg} />
      </div>
      <div className={styles.cartItemInfo}>
        <h2>{title}</h2>
        <p>$ {price}</p>
      </div>
    </article>
  );
}

export default CartItem;
