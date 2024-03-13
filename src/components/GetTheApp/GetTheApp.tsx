import React from "react";

import { boasImageURLs, getTheAppImg } from "../../constants/imageURL";

import {
  getAppImageClass,
  getTheAppContainerClass,
  getTheAppDescriptionClass,
  getTheAppHeadingClass,
} from "./styles";

const GetTheApp = (): React.ReactElement => {
  return (
    <div className="flex justify-center">
      <div className={getTheAppContainerClass}>
        <div className="w-[50%] max-[800px]:w-full">
          <h2 className={getTheAppHeadingClass}>Get the app</h2>
          <p className={getTheAppDescriptionClass}>
            Download our app, now available on both Android and iOS. Unlock
            exclusive features, seamless navigation, and stay connected with the
            latest updates.
          </p>
          <div className="flex items-center gap-[20px]">
            <a href="https://play.google.com/store/apps/details?id=co.boas.boas&amp;pli=1">
              <img src={boasImageURLs.appGooglePlay} alt="App google-play" />
            </a>
            <a href="https://apps.apple.com/de/app/boas-shop-vintage-fashion/id6450268118">
              <img src={boasImageURLs.appStore} alt="App appStore" />
            </a>
          </div>
        </div>
        <div>
          <img
            src={getTheAppImg.getTheApp}
            alt="getTheApp"
            className={getAppImageClass}
          />
        </div>
      </div>
    </div>
  );
};
export default GetTheApp;
