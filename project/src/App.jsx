import React, { useState } from "react";
import "./global.css";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { Main } from "./components/Main/Main";

const App = () => {
  const [cartItem, setCartItem] = useState(null); // Solo un producto en el carrito
  const [message, setMessage] = useState(""); // Para los mensajes de éxito o cancelación

  // Agregar producto al carrito (si ya existe, actualizar la cantidad)
  const addToCart = (product) => {
    setCartItem((prevItem) => {
      if (prevItem && prevItem.name === product.name) {
        return { ...prevItem, quantity: prevItem.quantity + product.quantity };
      }
      return product;
    });
    setMessage(""); // Limpiar el mensaje al agregar
  };

  // Manejar checkout y mostrar mensaje de compra exitosa
  const handleCheckout = () => {
    setCartItem(null); // Limpiar el carrito
    setMessage("Purchase successful!"); // Mostrar mensaje de compra exitosa
  };

  // Eliminar producto del carrito y mostrar mensaje de cancelación
  const handleRemoveItem = () => {
    setCartItem(null); // Limpiar el carrito
    setMessage("Purchase cancelled!"); // Mostrar mensaje de compra cancelada
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

/* import React, { useState } from "react";
import "./global.css";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { Main } from "./components/Main/Main";
import { ShoppingCart } from "./components/HeaderNav/ShoppingCart/ShoppingCart";

const App = () => {
  const [cartItem, setCartItem] = useState(null); // Solo un producto en el carrito
  const [message, setMessage] = useState(""); // Para los mensajes de éxito o cancelación

  // Agregar producto al carrito (si ya existe, actualizar la cantidad)
  const addToCart = (product) => {
    setCartItem((prevItem) => {
      if (prevItem && prevItem.name === product.name) {
        return { ...prevItem, quantity: prevItem.quantity + product.quantity };
      }
      return product;
    });
    setMessage(""); // Limpiar el mensaje al agregar
  };

  // Manejar checkout y mostrar mensaje de compra exitosa
  const handleCheckout = () => {
    setCartItem(null); // Limpiar el carrito
    setMessage("Purchase successful!"); // Mostrar mensaje de compra exitosa
  };

  // Eliminar producto del carrito y mostrar mensaje de cancelación
  const handleRemoveItem = () => {
    setCartItem(null); // Limpiar el carrito
    setMessage("Purchase cancelled!"); // Mostrar mensaje de compra cancelada
  };

  return (
    <>
      <HeaderNav />
      <Main addToCart={addToCart} />
      <ShoppingCart
        cartItem={cartItem}
        message={message}
        onCheckout={handleCheckout}
        onRemoveItem={handleRemoveItem}
      />
    </>
  );
};

export default App;
 */
