import { Route, Routes } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import ViewSingelProduct from "./SingelProduct/ViewSingelProduct";
import ContactPage from "./contactpage/ContactPage";
import ShopPage from "./shoppage/ShopPage";
import BlogPage from "./blogpage/BlogPage";
import Page from "./page/Page";

const BodyComponents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product-details" element={<ViewSingelProduct />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/page" element={<Page />}></Route>
      </Routes>
    </div>
  );
};

export default BodyComponents;
