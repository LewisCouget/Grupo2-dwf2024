import React from "react";
import "./ShoppingCart.css";
import ImgProduct from "../../../images/image-product-1-thumbnail.jpg";
import ImgDelete from "../../../images/icon-delete.svg";

export const ShoppingCart = () => {
  return (
    <div className="Shopping--cart">
      <h2>Cart</h2>
      <div className="Shopping--cart__item">
        <img className="Image--product" src={ImgProduct} alt="Product" />

        <div className="Shopping--cart__details">
          <h3>Fall Limited Edition Sneakers</h3>
          <p>
            $125.00 x 3 <strong>$375.00</strong>
          </p>
        </div>
        <button className="Remove--item">
          <img src={ImgDelete} alt="" />
        </button>
      </div>
      <button className="Checkout--button">
        <strong>Checkout</strong>
      </button>
    </div>
  );
};
