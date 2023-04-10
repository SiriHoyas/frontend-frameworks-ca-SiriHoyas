import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import styles from "./CheckoutSuccess.module.css";

function CheckoutSuccess() {
  return (
    <main className={styles.checkoutSuccessMain}>
      <h1>Thanks!</h1>
      <p>Your order has been placed and will be on its way to you soon</p>
      <Link to="/">
        <Button label="Home" className={"secondary"} type="button" />
      </Link>
    </main>
  );
}

export default CheckoutSuccess;
