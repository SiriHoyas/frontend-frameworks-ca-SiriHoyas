import { Outlet, Route } from "react-router-dom";

import Footer from "./Footer";
import Header from "../../components/Layout/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
