import CartSlice, { addToCart } from "../store/CartSlice";
import { Link, useParams } from "react-router-dom";
import useApi, { ApiResponse } from "../hooks/useApi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { Product } from "../components/Types";
import ProductInfo from "../components/ProductInfo/Index";
import ProductReviews from "../components/ProductReviews/Index";
import { RootState } from "../store/store";
import { has } from "immer/dist/internal";
import { useMediaQuery } from "@react-hook/media-query";

function ProductPage() {
  const { productID } = useParams<{ productID: string }>();
  const { data } = useApi<Product>(`https://api.noroff.dev/api/v1/online-shop/${productID}`);
  const dispatch = useDispatch();

  if (!data) return <p>Loading...</p>;

  const reviews = data.reviews || [];

  function purchaseHandler() {
    let price = data?.discountedPrice;
    let itemName = data?.title;
    let id = data?.id;
    let itemObject = {
      itemName,
      price,
      id,
    };

    dispatch(addToCart(itemObject));
  }

  return (
    <main>
      <section>
        <ProductInfo title={data.title} imageUrl={data.imageUrl} discountedPrice={data.discountedPrice} id={data.id} />
        <button onClick={purchaseHandler}>Purchase me!</button>
      </section>
      <section>
        {reviews.length > 0 &&
          reviews.map((review) => {
            return <ProductReviews key={review.id} rating={review.rating} username={review.username} description={review.description} />;
          })}
      </section>
    </main>
  );
}

export default ProductPage;
