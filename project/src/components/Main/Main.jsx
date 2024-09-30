import React from "react";
import Slider from "react-slick";
import "./Main.css";
import Carrucel from "./Carrusel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgMinus from "../../images/icon-minus.svg";
import ImgPlus from "../../images/icon-plus.svg";

export const Main = () => {
  /*  const [selectedImg, setSelectedImg] = useState(Carrucel[0].image); */
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    /*  afterChange: (index) => setSelectedImg(Carrucel[index].image), */
  };

  return (
    <main className="Main--content">
      <div className="Selected--image">
        {/* <img src={selectedImg} alt="Selected" /> */}
      </div>
      <div className="Carrusel--container">
        <h1>Carrusel</h1>
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
          <button>
            <img src={ImgMinus} alt="" />
          </button>
          <input type="number" />
          <button>
            <img src={ImgPlus} alt="" />
          </button>
          <button className="Add--Cart__buttonAdd">Add to cart</button>
        </div>
      </div>
    </main>
  );
};
