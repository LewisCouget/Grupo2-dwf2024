import React, { useState } from "react";
import "./HeaderNav.css";
import ImgCart from "../../images/icon-cart.svg";
import ImgAvatar from "../../images/image-avatar.png";
import ImgLogo from "../../images/logo.svg";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";

export const HeaderNav = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleCartClick = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <header className="Header--nav">
      <div className="Header--nav__title">
        <img className="Image--logo" src={ImgLogo} alt="" />
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
          onClick={handleCartClick}
          style={{ cursor: "pointer" }}
        />
        <img className="Header--img__avatar" src={ImgAvatar} alt="" />
      </div>
      {isCartVisible && <ShoppingCart />}
    </header>
  );
};
