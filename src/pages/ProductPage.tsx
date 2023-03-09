import { has } from "immer/dist/internal";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductProps } from "../components/ProductCard/ProductCard";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useApi from "../hooks/useApi";

function ProductPage() {
  const { productID } = useParams<{ productID: string }>();
  const { data } = useApi(`https://api.noroff.dev/api/v1/online-shop/${productID}`);
  console.log(data);

  const reviews = data?.reviews || [];

  return (
    <>
      <section>
        <ProductInfo title={data.title} imageUrl={data.imageUrl} discountedPrice={data.discountedPrice} />
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
