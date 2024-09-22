import React from "react";
import ImageLogo from "../Images/logo.svg";
import ImageCart from "../Images/icon-cart.svg";
import ImageAvatar from "../Images/image-avatar.png";

const Header = () => {
  return (
    <div className="Header--nav">
     <div className="Header--nav__title">
       <img className="Image--logo" src={ImageLogo} alt="" />
       <nav className="Main--nav">
         <ul>
           <a href="Collections"></a>
           <a href="Men"></a>
           <a href="Women"></a>
           <a href="About"></a>
           <a href="Contact"></a>
         </ul>
      </nav>
    </div>
    <div className="Image--header">
      <img className="Image-cart" src={ImageCart} alt="" />
      <img className="Image-avatar" src={ImageAvatar} alt="" />
    </div>
    </div>
  );
};

export default Header;