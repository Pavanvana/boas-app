import React, { useEffect, useState } from "react";
import cn from "classnames";

import getPopularBrandsData, {
  PopularBrandsDataType,
} from "../../apis/getPopularBrandsData";

import {
  brandLogoClass,
  brandsImagesContainer,
  imageContainer,
  popularBrandsHeadingClass,
} from "./styles";
import "./index.css";

const PopularBrands = (): React.ReactElement => {
  const [popularBrandsData, setPopularBrandsData] = useState<
    PopularBrandsDataType[]
  >([]);

  useEffect(() => {
    getPopularBrandsData(setPopularBrandsData);
  }, []);

  return (
    <div className="w-full">
      <div className="mt-[100px] px-[30px]">
        <h4 className={popularBrandsHeadingClass}>Popular Brands</h4>
        <div className="p-[20px_20px_0px_20px] popular-brands">
          <ul className={brandsImagesContainer}>
            {popularBrandsData.map((popularBrandsData) => {
              return (
                <li key={popularBrandsData.id}>
                  <div
                    className={cn(imageContainer)}
                    style={{
                      backgroundImage: `url('${popularBrandsData.imageURL}')`,
                    }}
                  >
                    <img
                      src={popularBrandsData.logoURL}
                      alt="brand-logo"
                      className={brandLogoClass}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
