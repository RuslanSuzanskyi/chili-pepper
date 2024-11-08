import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const Layout = lazy(() => import("../components/layout/Layout"));
const Home = lazy(() => import("../pages/home/Home"));
const Shop = lazy(() => import("../pages/shop/Shop"));
const Articles = lazy(() => import("../pages/articles/Articles"));
const Contacts = lazy(() => import("../pages/contacts/Contacts"));
const NotFound = lazy(() => import("../pages/notFound/NotFound"));
const Product = lazy(() => import("../pages/product/Product"));
const Category = lazy(() => import("../pages/category/Category"));


const AppRoute = () => {
  return (
    <BrowserRouter basename="/chili-pepper">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Home />} />
          <Route path="shop" element={<Shop />}>
            <Route path="page/:page" element={<Shop />} />
          </Route>
          <Route path=":slug" element={<Product />} />
          <Route path="shop/category/:slug" element={<Category />}>
            <Route path="page/:page" element={<Shop />} />
          </Route>
          <Route path="articles" element={<Articles />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
