import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchOneProduct,
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/actions";
import "./style.css";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { title, id, price, image, description } = product;
  console.log(product);
  const dispatch = useDispatch();
  const { productId } = useParams();
  //   console.log(productId);

  // const fetchProductDetails = async () => {
  //   const response = await axios
  //     .get(`https://fakestoreapi.com/products/${productId}`)
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  //   // console.log(response.data);
  //   dispatch(selectedProduct(response.data));
  // };

  useEffect(() => {
    // fetchProductDetails();
    // dispatch(removeSelectedProduct());
    if (productId && productId !== "") dispatch(fetchOneProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <h1 style={{ marginTop: "13%" }}>...loading</h1>
      ) : (
        <div className="card cardsonecontainer container">
          <img src={image} alt="photo" srcset="" />
          <p>{title}</p>
          <p>{description}</p>
          <h1>{price}</h1>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
