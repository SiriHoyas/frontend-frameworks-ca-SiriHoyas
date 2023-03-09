import { Product } from "../Types";

function ProductInfo({ title, imageUrl, discountedPrice }: Product) {
  return (
    <article>
      <h1>{title}</h1>
      <img src={imageUrl}></img>
      <p>{discountedPrice}</p>
    </article>
  );
}

export default ProductInfo;
