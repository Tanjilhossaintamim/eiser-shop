import { Route, Routes } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import ViewSingelProduct from "./SingelProduct/ViewSingelProduct";

const BodyComponents = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product-details" element={<ViewSingelProduct />}></Route>
      </Routes>
    </div>
  );
};

export default BodyComponents;
