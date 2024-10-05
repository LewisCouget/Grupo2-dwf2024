import React from "react";
import "./ShoppingCart.css";
import ImgProduct from "../../../images/image-product-1-thumbnail.jpg";
import ImgDelete from "../../../images/icon-delete.svg";

export const ShoppingCart = ({
  cartItem,
  message,
  onCheckout,
  onRemoveItem,
}) => {
  return (
    <div className="Shopping--cart">
      <h2>Cart</h2>
      {cartItem ? (
        <>
          <div className="Shopping--cart__item">
            <img className="Image--product" src={ImgProduct} alt="Product" />
            <div className="Shopping--cart__details">
              <h3>{cartItem.name}</h3>
              <p>
                ${cartItem.price} x {cartItem.quantity}{" "}
                <strong>${cartItem.price * cartItem.quantity}</strong>
              </p>
            </div>
            <button className="Remove--item" onClick={onRemoveItem}>
              <img src={ImgDelete} alt="Remove" />
            </button>
          </div>
          <button className="Checkout--button" onClick={onCheckout}>
            <strong>Checkout</strong>
          </button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
      {message && <p>{message}</p>}{" "}
      {/* Mostrar mensajes de éxito o cancelación */}
    </div>
  );
};
