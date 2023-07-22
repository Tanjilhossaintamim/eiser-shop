import { useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    product: state.singel_product,
  };
};
const ViewSingelProduct = ({ product }) => {
  const [mainimage, setImage] = useState(null);
  const switchImage = (image) => {
    setImage(image);
  };

  if (product) {
    const image = product.images.map((item) => {
      return (
        <img
          src={item}
          key={Math.random()}
          width={"100%"}
          onClick={() => switchImage(item)}
        ></img>
      );
    });
    return (
      <div className="container">
        <div className="flex justify-center  text-left mt-6">
          <div className="w-1/2 mr-3">
            <img
              src={mainimage ? mainimage : product.images[0]}
              alt=""
              width={"100%"}
            />
            <div className="grid grid-cols-3 gap-2 mt-5">{image}</div>
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
  } else {
    return <div></div>;
  }
};

export default connect(mapStateToProps)(ViewSingelProduct);
