import { useMediaQuery } from "@react-hook/media-query";
import { has } from "immer/dist/internal";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import { Product } from "../components/Types";
import useApi, { ApiResponse } from "../hooks/useApi";

function ProductPage() {
  const { productID } = useParams<{ productID: string }>();
  const { data } = useApi<Product>(`https://api.noroff.dev/api/v1/online-shop/${productID}`);
  console.log(data);

  if (!data) return <p>Loading...</p>;

  const reviews = data.reviews || [];

  return (
    <>
      <section>
        <ProductInfo title={data.title} imageUrl={data.imageUrl} discountedPrice={data.discountedPrice} id={data.id} />
      </section>
      <section>
        {reviews.length > 0 &&
          reviews.map((review) => {
            return <ProductReviews key={review.id} rating={review.rating} username={review.username} description={review.description} />;
          })}
      </section>
    </>
  );
}

export default ProductPage;
