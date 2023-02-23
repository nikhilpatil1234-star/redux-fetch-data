import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

const ProductComponent = () => {
  const product = useSelector((state) => state.allproducts.products);
  //   const { title, category } = product;
  const renderList = product.map((item) => {
    return (
      <>
        <div className="cardcontainer">
          <Link to={`/product/${item.id}`}>
            <img src={item.image} alt="phot" />
            <h1>{item.title}</h1>
            <p> {item.price}</p>
          </Link>
        </div>
      </>
    );
  });
  return (
    <div className="container" style={{ display: "flex", flexWrap: "wrap" }}>
      {renderList}
    </div>
  );
};

export default ProductComponent;
