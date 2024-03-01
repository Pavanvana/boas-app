import React from "react";
import cn from "classnames";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StripClass, stripContainerClass } from "./styles";
import "./index.css";

const texts = [
  "90% OF PROFITS DONATED TO SAVE LIVES",
  "FREE SHIPPING ON FIRST ORDERS WITH CODE 'FREESHIPPING",
  "TAKE THE PRICE OR TAKE THE RISK. JEANS PRIZES DROP TWICE A DAY",
];

const StripContainer = (): React.ReactElement => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className={cn(stripContainerClass)}>
      <div className={cn(StripClass)}>
        <div className="container">
          <Slider {...settings}>
            {texts.map((text, index) => (
              <div key={index} className="text">
                {text}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default StripContainer;
