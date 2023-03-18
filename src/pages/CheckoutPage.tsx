import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Checkout() {
  const { cartItems } = useSelector((store: RootState) => {
    return store.cart;
  });

  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.itemName}</h2>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Checkout;
