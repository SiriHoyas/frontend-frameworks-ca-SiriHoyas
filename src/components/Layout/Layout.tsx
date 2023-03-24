import { Outlet, Route } from "react-router-dom";

import Footer from "./Footer/Index";
import Header from "./Header/Index";

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
