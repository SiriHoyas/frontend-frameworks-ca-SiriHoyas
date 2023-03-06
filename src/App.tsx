import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Button from "./components/UI/Button";
import Checkout from "./pages/CheckoutPage";
import CheckoutSuccess from "./pages/CheckoutSuccessPage";
import Contact from "./pages/ContactPage";
import Error from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
