import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Layout = lazy(() => import("../components/layout/Layout"));
const Home = lazy(() => import("../pages/home/Home"));
const Shop = lazy(() => import("../pages/shop/Shop"));
const Contacts = lazy(() => import("../pages/contacts/Contacts"));
const NotFound = lazy(() => import("../pages/notFound/NotFound"));


const AppRoute = () => {
  return (  
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="" element={<Home />}/>
        <Route index path="shop" element={<Shop />}/>
        <Route index path="contacts" element={<Contacts />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}
 
export default AppRoute;