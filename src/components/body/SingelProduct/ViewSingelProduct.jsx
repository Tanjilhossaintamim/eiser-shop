import { useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    product: state.singel_product,
  };
};
const ViewSingelProduct = ({ product }) => {
  return (
    <div className="container">
      <div className="flex justify-center  text-left mt-6">
        <div className="w-1/2 mr-3">
          <img
            src={product.image}
            alt=""
            width={"100%"}
          />
          
        </div>
        <div className="text-left w-1/2">
          <h1 className="text-left text-3xl">{product.title}</h1>
          <h6 className="text-2xl font-bold">&#36; {product.price}</h6>
          <p>{product.description}</p>
          <button className="px-5 py-3 bg-color-green text-white mt-5 hover:bg-transparent hover:text-color-green transition-colors duration-200 hover:border hover:border-color-green rounded ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(ViewSingelProduct);
