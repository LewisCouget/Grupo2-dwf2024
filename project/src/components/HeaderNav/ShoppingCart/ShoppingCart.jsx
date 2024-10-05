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
  const totalPrice = cartItem ? cartItem.price * cartItem.quantity : 0;

  return (
    <div className="Shopping--cart">
      <h2>Cart</h2>

      {message && (
        <p
          style={{
            textAlign: "center",
            color: message === "Purchase successful!" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {message}
        </p>
      )}

      {cartItem ? (
        <>
          <div className="Shopping--cart__item">
            <img className="Image--product" src={ImgProduct} alt="Product" />
            <div className="Shopping--cart__details">
              <h3>{cartItem.name}</h3>
              <p>
                ${cartItem.price} x {cartItem.quantity}{" "}
                <strong>${totalPrice.toFixed(2)}</strong>
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
        !message && <p>Your cart is empty.</p>
      )}
    </div>
  );
};
