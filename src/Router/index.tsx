import { Route, Routes } from "react-router-dom";

import Checkout from "../pages/CheckoutPage";
import CheckoutSuccess from "../pages/CheckoutSuccessPage";
import Contact from "../pages/ContactPage";
import Error from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "../components/Layout/Layout";
import ProductPage from "../pages/ProductPage";

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
