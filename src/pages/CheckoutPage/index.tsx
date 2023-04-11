import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/UI/Button/Button";
import CartItem from "../../components/CartItem";
import { CartItemProps } from "../../components/types";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { clearCart } from "../../store/CartSlice";
import styles from "./CheckoutPage.module.css";

function Checkout() {
  const { cartItems, total } = useSelector((store: RootState) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  console.log(cartItems);

  if (cartItems.length > 0) {
    return (
      <main className={styles.checkoutMain}>
        {cartItems.map((product: CartItemProps) => {
          return <CartItem key={product.id} itemName={product.itemName} price={product.price} imageUrl={product.imageUrl} quantity={product.quantity} />;
        })}

        <p>Total: {(Math.round(total * 100) / 100).toFixed(2)}</p>
        <Link
          to={"/checkoutSuccess"}
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          <Button label="Checkout" className={"primary"} type="button" />
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.checkoutMain}>
      <h1>Your cart is empty</h1>
      <Link to="/">
        <Button label="Find products" className={"secondary"} type="button" />
      </Link>
    </main>
  );
}

export default Checkout;
