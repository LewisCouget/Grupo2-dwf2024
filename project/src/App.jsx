import React, { useState } from "react";
import "./global.css";
import { HeaderNav } from "./components/HeaderNav/HeaderNav.jsx";
import { Main } from "./components/Main/Main.jsx";
import { ShoppingCart } from "./components/HeaderNav/ShoppingCart/ShoppingCart.jsx";

const App = () => {
  const [cartItem, setCartItem] = useState(null);
  const [message, setMessage] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    setCartItem((prevItem) => {
      if (prevItem && prevItem.name === product.name) {
        return { ...prevItem, quantity: prevItem.quantity + product.quantity };
      }
      return product;
    });
    setMessage("");
  };

  const handleCheckout = () => {
    setCartItem(null);
    setMessage("Purchase successful!");
    setIsCartVisible(false);
  };

  const handleRemoveItem = () => {
    setCartItem(null);
    setMessage("Purchase cancelled!");
    setIsCartVisible(false);
  };

  const toggleCartVisibility = () => {
    setIsCartVisible((prevState) => !prevState);
  };

  return (
    <>
      <HeaderNav
        cartItem={cartItem}
        message={message}
        onCheckout={handleCheckout}
        onRemoveItem={handleRemoveItem}
        toggleCartVisibility={toggleCartVisibility}
      />
      <Main addToCart={addToCart} />

      {isCartVisible && (
        <ShoppingCart
          cartItem={cartItem}
          message={message}
          onCheckout={handleCheckout}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </>
  );
};

export default App;
