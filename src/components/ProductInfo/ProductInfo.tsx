import { ProductProps } from "../ProductCard/ProductCard";

function ProductInfo({ title, imageUrl, discountedPrice }: ProductProps) {
  return (
    <article>
      <h1>{title}</h1>
      <img src={imageUrl}></img>
      <p>{discountedPrice}</p>
    </article>
  );
}

export default ProductInfo;
