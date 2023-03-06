import Button from "../UI/Button";
import styles from "./ProductCard.module.css";

const item = {
  id: "f99cafd2-bd40-4694-8b33-a6052f36b435",
  title: "USB charger cable",
  description: "USB 2.0 to USB Type-C. This can be used to power all compliant mobile devices.",
  price: 45.99,
  discountedPrice: 45.99,
  imageUrl: "https://api.noroff.dev/images/online-shop/0-usb-plug.jpg",
  rating: 4.5,
  tags: ["electronics"],
  reviews: [
    {
      id: "c6e4fb1a-4c3d-4a4b-b785-a269f7f0707d",
      username: "Ola N.",
      rating: 4,
      description: "Did what it needed to do but wish it lasted longer",
    },
    {
      id: "dbe6d28f-35f7-43a7-88f4-93a68f3c131c",
      username: "Kate M.",
      rating: 5,
      description: "Perfect!",
    },
  ],
};

function ProductCard() {
  return (
    <article className={styles.productCard}>
      <div className={styles.productThumbnail}>
        <img src={item.imageUrl} alt={item.title} className={styles.productImg} />
      </div>
      <div className={styles.productDescriptionContainer}>
        <h2 className={styles.productTitle}>{item.title}</h2>
        <p className={styles.productPrice}>{item.discountedPrice} kr</p>
      </div>
      <div className={styles.btnContainer}>
        <Button
          className="primary"
          type="button"
          label="Show more"
          onClick={() => {
            console.log("im clicking");
          }}
        />
      </div>
    </article>
  );
}

export default ProductCard;
