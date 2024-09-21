import React from "react";
import ImageLogo from "../Images/logo.svg";
import ImageCart from "../Images/icon-cart.svg";
import ImageAvatar from "../Images/image-avatar.png";

const Header = () => {
  return (
    <div>
      <img src={ImageLogo} alt="" />
      <nav>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <img src={ImageCart} alt="" />
      <img src={ImageAvatar} alt="" />
    </div>
  );
};

export default Header;