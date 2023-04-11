import { Route, Routes } from "react-router-dom";

import Checkout from "../pages/CheckoutPage/index";
import CheckoutSuccess from "../pages/CheckoutSuccessPage/index";
import Contact from "../pages/ContactPage/index";
import Error from "../pages/ErrorPage/index";
import HomePage from "../pages/HomePage/index";
import Layout from "../components/Layout/Layout";
import ProductPage from "../pages/ProductPage/index";

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
