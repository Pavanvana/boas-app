import React, { useEffect, useState } from "react";
import cn from "classnames";

import getPopularBrandsData, {
  PopularBrandsDataType,
} from "../../apis/getPopularBrandsData";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPopularBrandsData(setPopularBrandsData, setLoading);
  }, [setLoading]);

  const renderLoader = () => {
    const numrows = 6;
    return (
      <div className="p-10px flex items-center gap-[20px]">
        {Array.from({ length: numrows }, (_, index) => (
          <Skeleton key={index} duration={1} height={300} width={200} />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="mt-[100px] px-[30px]">
        <h4 className={popularBrandsHeadingClass}>Popular Brands</h4>
        <div className="p-[20px_20px_0px_20px] popular-brands">
          {loading ? (
            renderLoader()
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
