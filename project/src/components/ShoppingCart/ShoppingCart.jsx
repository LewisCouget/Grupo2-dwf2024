import React from "react";
import "./ShoppingCart.css";
import ImgProduct from "../../images/image-product-1-thumbnail.jpg";

export const ShoppingCart = () => {
  return (
    <div className="Shopping--list">
      <h2>Cart</h2>
      <div className="Shopping--list__item">
        <img className="Image--product" src={ImgProduct} alt="" />
      </div>
      <div>
        <h2>Product Name</h2>
        <p>precio</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};
