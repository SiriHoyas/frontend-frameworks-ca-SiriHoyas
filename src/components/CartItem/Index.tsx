import { CartItemProps } from "../types";
import styles from "./CartItem.module.css";

function CartItem({ itemName: itemName, price, imageUrl, quantity }: CartItemProps) {
  return (
    <article className={styles.cartItemContainer}>
      <div>
        <img src={imageUrl} alt={itemName} className={styles.productImg} />
      </div>
      <div className={styles.cartItemInfo}>
        <h2>{itemName}</h2>
        <p>$ {price}</p>
        <p>{quantity}</p>
      </div>
    </article>
  );
}

export default CartItem;
