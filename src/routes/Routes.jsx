import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Layout = lazy(() => import("../components/layout/Layout"));
const Home = lazy(() => import("../pages/home/Home"));
const Shop = lazy(() => import("../pages/shop/Shop"));
const Articles = lazy(() => import("../pages/articles/Articles"));
const Contacts = lazy(() => import("../pages/contacts/Contacts"));
const NotFound = lazy(() => import("../pages/notFound/NotFound"));
const Product = lazy(() => import("../pages/product/Product"));

const AppRoute = () => {
  return (
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="" element={<Home />}/>
            <Route path="shop" element={<Shop />} />
            <Route path="/:slug" element={<Product />}/>
            <Route path="articles" element={<Articles />}/>
            <Route index path="contacts" element={<Contacts />}/>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
    
  );
}
 
export default AppRoute;  