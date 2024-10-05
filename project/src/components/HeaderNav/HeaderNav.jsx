import React, { useState } from "react";
import "./HeaderNav.css";
import "../../global.css";
import ImgCart from "../../images/icon-cart.svg";
import ImgAvatar from "../../images/image-avatar.png";
import ImgLogo from "../../images/logo.svg";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";

export const HeaderNav = ({ cartItem, message, onCheckout, onRemoveItem }) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  return (
    <header className="Header--nav">
      <div className="Header--nav__title">
        <img className="Image--logo" src={ImgLogo} alt="Logo" />
        <nav className="Main--nav">
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="Header--img">
        <img
          className="Header--img__cart"
          src={ImgCart}
          alt="Cart"
          onClick={toggleCartVisibility}
          style={{ cursor: "pointer" }}
        />
        <img
          className="Header--img__avatar"
          src={ImgAvatar}
          alt="Avatar"
          onClick={toggleCartVisibility}
          style={{ cursor: "pointer" }}
        />
      </div>

      {isCartVisible && (
        <ShoppingCart
          cartItem={cartItem}
          message={message}
          onCheckout={onCheckout}
          onRemoveItem={onRemoveItem}
        />
      )}
    </header>
  );
};
