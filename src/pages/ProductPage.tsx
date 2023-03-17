import { useMediaQuery } from "@react-hook/media-query";
import { has } from "immer/dist/internal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ProductInfo from "../components/ProductInfo/ProductInfo";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import { Product } from "../components/Types";
import useApi, { ApiResponse } from "../hooks/useApi";
import CartSlice, { addToCart } from "../store/CartSlice";
import { RootState } from "../store/store";

function ProductPage() {
  const { productID } = useParams<{ productID: string }>();
  const { data } = useApi<Product>(`https://api.noroff.dev/api/v1/online-shop/${productID}`);
  let { itemCount, cartItems, total } = useSelector((store: RootState) => {
    return store.cart;
  });
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
    <>
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
    </>
  );
}

export default ProductPage;
