import React from "react";
import Slider from "react-slick";
import "./Main.css";
import Carrucel from "./Carrusel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <p>
          Collections Men Women About Contact Sneaker Company Fall Limited
          Edition Sneakers These low-profile sneakers are your perfect casual
          wear companion. Featuring a durable rubber outer sole, they’ll
          withstand everything the weather can offer. $125.00 50% $250.00 0 Add
          to cart
        </p>
      </div>
    </main>
  );
};
