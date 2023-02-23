import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "../ProductComponent";
import { setProducts } from "./../../redux/actions/index";
import "./style.css";

const ProductList = () => {
  const product = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // console.log(product)
  return (
    <div className="container" style={{marginTop:"30px"}}>
      <ProductComponent />
    </div>
  );
};

export default ProductList;
