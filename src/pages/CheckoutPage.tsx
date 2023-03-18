import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Checkout() {
  const { cartItems } = useSelector((store: RootState) => {
    return store.cart;
  });

  console.log(cartItems);

  if (cartItems.length > 0) {
    return (
      <main>
        {cartItems.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.itemName}</h2>
              <p>{item.price}</p>
            </div>
          );
        })}
      </main>
    );
  }

  return (
    <main>
      <h2>Nothing here</h2>
    </main>
  );
}

export default Checkout;
