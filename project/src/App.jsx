import React, { useState } from "react";
import "./global.css";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { Main } from "./components/Main/Main";

const App = () => {
  const [cartItem, setCartItem] = useState(null);
  const [message, setMessage] = useState("");

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
  };

  const handleRemoveItem = () => {
    setCartItem(null); // Limpiar el carrito
    setMessage("Purchase cancelled!");
  };

  return (
    <>
      <HeaderNav
        cartItem={cartItem}
        message={message}
        onCheckout={handleCheckout}
        onRemoveItem={handleRemoveItem}
      />
      <Main addToCart={addToCart} />
    </>
  );
};

export default App;
