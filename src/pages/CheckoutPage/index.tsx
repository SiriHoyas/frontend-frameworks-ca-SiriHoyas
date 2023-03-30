import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/UI/Button";
import CartItem from "../../components/CartItem/Index";
import { Link } from "react-router-dom";
import { Product } from "../../components/types";
import { RootState } from "../../store/store";
import styles from "./CheckoutPage.module.css";

function Checkout() {
  const { cartItems, total } = useSelector((store: RootState) => {
    console.log(store.cart);
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
          console.log(product);
          return <CartItem key={product.id} title={product.itemName} price={product.price} imageUrl={product.imageUrl} />;
        })}

        <p>Total: {(Math.round(total * 100) / 100).toFixed(2)}</p>
        <Link to={"/checkoutSuccess"} onClick={clearCart}>
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
