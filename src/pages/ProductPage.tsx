import { Link, useParams } from "react-router-dom";
import { ProductProps } from "../components/ProductCard/ProductCard";
import useApi from "../hooks/UseApi";

function ProductPage() {
  const { productID } = useParams<{ productID: string }>();

  const { data } = useApi(`https://api.noroff.dev/api/v1/online-shop/${productID}`);

  console.log(data);

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} />
    </div>
  );
}

export default ProductPage;
