import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import SingelProduct from "./SingelProduct";
import { connect } from "react-redux";
import {
  fetch_feature_product,
  fetch_singel_product,
  load_singel_product,
} from "../../../../redux/ActionCreators";
import Spinner from "../../../spinner/Spinner";

const mapStateToProps = (state) => {
  return {
    featureProduct: state.featureProduct,
    product_is_loading: state.product_is_loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetch_feature_product: (limit) => dispatch(fetch_feature_product(limit)),
    load_singel_product: (product) => dispatch(load_singel_product(product)),
  };
};

const FeatureProduct = ({
  fetch_feature_product,
  featureProduct,
  product_is_loading,
  load_singel_product,
}) => {
  const [state, setState] = useState([1, 2, 4, 5]);

  let product = featureProduct.map((item) => {
    return (
      <SingelProduct
        product={item}
        key={item.id}
        load_singel_product={load_singel_product}
      />
    );
  });

  useEffect(() => {
    if (featureProduct.length == 0) {
      fetch_feature_product(state.length);
    }
  }, []);

  const spinner = state.map((item) => {
    return <Spinner key={Math.random()} />;
  });

  return (
    <div className="container">
      <div className="text-center flex flex-col justify-center mx-auto my-10">
        <div>
          <h4 className="text-2xl font-bold pb-4 inline-block border-b border-color-grey-light">
            FEATURED PRODUCT
          </h4>
          <p className="pt-4 text-color-grey">
            Bring called seed first of third give itself now ment
          </p>
        </div>
        <div className="grid grid-cols-4 mt-10 gap-5">
          {product_is_loading ? spinner : product}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(FeatureProduct);
