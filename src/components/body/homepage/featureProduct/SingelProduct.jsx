import * as React from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Spinner from "../../../spinner/Spinner";
import { useNavigate } from "react-router-dom";

export default function SingelProduct({ product, load_singel_product }) {
  const navigate = useNavigate();
  const handelProductView = (product) => {
    load_singel_product(product)

    navigate("/product-details");
  };

  let singelproduct = (
    <div className="h-72">
      <div className="relative overflow-hidden img-div group transition-all duration-200 ease-linear h-56">
        <img src={product.image} alt="" width={"200px"} height={'300px'} className="mx-auto object-cover"/>
        <div className="inner-div w-[80%] mx-auto h-16 bg-[#70CC1466] absolute -bottom-16 left-9 transform transition-all duration-200 group-hover:translate-y-[-64px] flex justify-center items-center">
          <div className="flex justify-center items-center my-auto space-x-6">
            <div
              className="w-5 h-5 p-4 flex justify-center items-center rounded-full bg-white hover:bg-color-green group cursor-pointer transition-colors duration-200 ease-linear"
              onClick={() =>
                handelProductView({
                  title: product.title,
                  image: product.image,
                  description: product.description,
                  price: product.price,
                })
              }
            >
              <RemoveRedEyeOutlinedIcon className="text-black" />
            </div>
            <div className="w-5 h-5 p-4 flex justify-center items-center rounded-full bg-white hover:bg-color-green group cursor-pointer transition-colors duration-200 ease-linear">
              <FavoriteBorderOutlinedIcon className="text-black" />
            </div>
            <div className="w-5 h-5 p-4 flex justify-center items-center rounded-full bg-white hover:bg-color-green group cursor-pointer transition-colors duration-200 ease-linear">
              <ShoppingCartOutlinedIcon className="text-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-left px-5 py-3 border-t-0 border border-color-grey rounded h-20">
        <h4 className="text-xl font-bold text-gray-700">{product.title.slice(0,20)}</h4>
        <h6 className="text-lg font-bold">&#36; {product.price}</h6>
      </div>
    </div>
  );
  return singelproduct;
}
