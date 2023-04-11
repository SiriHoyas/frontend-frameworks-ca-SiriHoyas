import { Route, Routes } from "react-router-dom";

import Checkout from "../pages/CheckoutPage/ChackoutPage";
import CheckoutSuccess from "../pages/CheckoutSuccessPage/CheckoutSuccess";
import Contact from "../pages/ContactPage/ContactPage";
import Error from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import Layout from "../components/Layout/Layout";
import ProductPage from "../pages/ProductPage/ProductPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products/:productID" element={<ProductPage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="checkoutSuccess" element={<CheckoutSuccess />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default Router;
