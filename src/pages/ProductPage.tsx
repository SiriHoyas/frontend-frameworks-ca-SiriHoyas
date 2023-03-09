import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductProps } from "../components/ProductCard/ProductCard";
import useApi from "../hooks/useApi";

function ProductPage() {
  const { productID } = useParams<{ productID: string }>();

  const { data } = useApi(`https://api.noroff.dev/api/v1/online-shop/${productID}`);

  return <></>;
}

export default ProductPage;
