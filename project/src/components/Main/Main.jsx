import React, { useState } from "react";
import Slider from "react-slick";
import "./Main.css";
import Carrucel from "./Carrusel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgMinus from "../../images/icon-minus.svg";
import ImgPlus from "../../images/icon-plus.svg";
import ImgCart from "../../images/icon-cart.svg";
import ImgBig from "../../images/image-product-1.jpg";

export const Main = () => {
  const [count, setCount] = useState(0);
  const handlePlus = () => setCount((prevCount) => prevCount + 1);
  const handleSubstract = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
  };

  const handleInputChange = (e) => {
    setCount(e.target.value);
  };

  const handleAddToCart = (e) => {
    props.setCartCount(count);
    setCount(0);
  };

  return (
    <main className="Main--content">
      <div className="Selected--image"></div>
      <div className="Carrusel--container">
        <img src={ImgBig} alt="" className="ImgBig" />
        <Slider {...settings}>
          {Carrucel.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="Add--Cart">
        <div className="Add--Cart__info">
          <h4>Sneaker Company</h4>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
        </div>

        <div className="Add--Cart__cost">
          <h2>$125.00</h2> 50% $250.00
        </div>
        <div className="Add--Cart__items">
          <span className="Add--Counter">
            <button className="Minus" onClick={handleSubstract}>
              <img src={ImgMinus} className="ImgMinus" alt="Minus" />
            </button>
            <span className="counter" onChange={handleInputChange}>
              {count}
            </span>
            <button className="Plus" onClick={handlePlus}>
              <img src={ImgPlus} className="ImgPlus" alt="Plus" />
            </button>
          </span>
          <button className="Add--Cart__buttonAdd" onClick={handleAddToCart}>
            <img src={ImgCart} alt="" className="Add--ImgCart" />{" "}
            <strong>Add to cart</strong>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;
