import { useDispatch, useSelector } from "react-redux";

import Button from "./../components/UI/Button/Index";
import CartItem from "../components/CartItem/Index";
import { Link } from "react-router-dom";
import { Product } from "../components/types";
import { RootState } from "../store/store";
import styles from "./CheckoutPage.module.css";

function Checkout() {
  const { cartItems, total } = useSelector((store: RootState) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  function clearCart() {
    dispatch(clearCart);
  }

  console.log(cartItems);

  if (cartItems.length > 0) {
    return (
      <main>
        {cartItems.map((product: Product) => {
          return <CartItem key={product.id} title={product.title} price={product.price} imageUrl={product.imageUrl} />;
        })}

        <p>Total: {total}</p>
        <Link to={"/checkoutSuccess"} onClick={clearCart}>
          <Button label="Checkout" className={"primary"} type="button" />
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.checkoutSuccessMain}>
      <h1>Your cart is empty</h1>
      <Link to="/">
        <Button label="Find products" className={"primary"} type="button" />
      </Link>
    </main>
  );
}

export default Checkout;
