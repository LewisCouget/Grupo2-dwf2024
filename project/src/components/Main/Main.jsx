import React from "react";
/* import Slider from "react-slider"; */
import "./Main.css";
/* import ImgSmall1 from "../../images/image-product-1-thumbnail.jpg";
import ImgSmall2 from "../../images/image-product-2-thumbnail.jpg";
import ImgSmall3 from "../../images/image-product-3-thumbnail.jpg";
import ImgSmall4 from "../../images/image-product-4-thumbnail.jpg"; */

export const Main = () => {
  const settings = {
    doct: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <main className="Main--content">
      <div className="Carrusel--container">
        <h1>Carrusel</h1>
        {/* <Slider {...settings}>
          <div>
            <img src={ImgSmall1} alt="Producto 1" />
          </div>
          <div>
            <img src={ImgSmall2} alt="Producto 2" />
          </div>
          <div>
            <img src={ImgSmall3} alt="Producto 3" />
          </div>
          <div>
            <img src={ImgSmall4} alt="Producto 4" />
          </div>
        </Slider> */}
      </div>

      <div className="Add--Cart">
        <p>
          Sneaker Company Fall Limited Edition Sneakers These low-profile
          sneakers are your perfect casual wear companion. Featuring a durable
          rubber outer sole, they’ll withstand everything the weather can offer.
          $125.00 50% $250.00 0 Add to cart aksdbaksdaskdaskdasdkhasd
        </p>
      </div>
    </main>
  );
};
