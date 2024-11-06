import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import CartTab from "../cartTab/CartTab";

const Layout = () => {
  return (
    <>
      <Header />
      <CartTab />
      <main>
        <Suspense>
          <Outlet />
        </Suspense> 
      </main>
      <Footer />
    </>
  );
}

 
export default Layout;