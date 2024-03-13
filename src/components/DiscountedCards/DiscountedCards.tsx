import React from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

import { donateSectionImages } from "../../constants/imageURL";

import {
  discountedCardsContainerClass,
  donateCardClass,
  donateCardDescriptionClass,
  donateCardHeaderClass,
  donateCardOverlayClass,
} from "./styles";

const DiscountedCards = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-[30px]">
      <div className={discountedCardsContainerClass}>
        <div
          className={donateCardClass}
          style={{
            backgroundImage: `url(${donateSectionImages.shopWomenImg})`,
          }}
          onClick={() => navigate("/collections/vintage-jeans-women")}
        >
          <div className={donateCardOverlayClass}>
            <h2 className={donateCardHeaderClass}>SHOP WOMEN</h2>
            <p className={donateCardDescriptionClass}>
              Discounted vintage Levi's & more
            </p>
          </div>
        </div>
        <div
          className={cn(donateCardClass, "bg-center")}
          style={{
            backgroundImage: `url(${donateSectionImages.shopMenImg})`,
          }}
          onClick={() => navigate("/collections/vintage-jeans-men")}
        >
          <div className={donateCardOverlayClass}>
            <h2 className={donateCardHeaderClass}>SHOP MEN</h2>
            <p className={donateCardDescriptionClass}>
              Discounted vintage Levi's & more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountedCards;
