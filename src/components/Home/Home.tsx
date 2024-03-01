import React, { useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useCustomT } from "../../hooks/useCustomT";
import Header from "../Header/Header";
import StripContainer from "../StripContainer/StripContainer";
import ReactBaseModal from "../../common/ReactBaseModal/ReactBaseModal";
import LearnMore from "../LearnMore/LearnMore";
import Button from "../../common/Button/Button";

import {
  bodyContainerClass,
  bodyLeftContainerClass,
  bodyRightContainerClass,
  learnMoreTextClass,
  offerDescription,
  offerHeader,
  priceDropsInContainerClass,
  priceDropsInTextClass,
  priceDropsInTimerContainerClass,
  priceDropsTimerClass,
  rightButtonsClass,
  timerCardClass,
  timerCardTypeClass,
  timerTextClass,
  buttonsContainer,
} from "./styles";
import Footer from "../Footer/Footer";

const Home = (): React.ReactElement => {
  const navigate = useNavigate();

  const [isOpenLearnMoreModal, setIsOpenLearnMoreModal] =
    useState<boolean>(false);

  const t = useCustomT("header");

  const onClickTab = (NavigationPath: string): void => {
    navigate(NavigationPath);
  };

  const renderPriceDropsIn = (): React.ReactElement => {
    const onClickLearnMoreButton = (): void => {
      setIsOpenLearnMoreModal(true);
    };
    return (
      <div className={priceDropsInContainerClass}>
        <div>
          <p className={priceDropsInTextClass}>Price Drops In:</p>
          <p className={learnMoreTextClass} onClick={onClickLearnMoreButton}>
            Learn more
          </p>
          <ReactBaseModal
            isOpen={isOpenLearnMoreModal}
            onOpenChange={setIsOpenLearnMoreModal}
          >
            <LearnMore />
          </ReactBaseModal>
        </div>
        <div className={priceDropsInTimerContainerClass}>
          <div className={priceDropsTimerClass}>
            <div className={timerCardClass}>
              <h1 className={timerTextClass}>15</h1>
            </div>
            <p className={timerCardTypeClass}>Hours</p>
          </div>
          <div className={priceDropsTimerClass}>
            <div className={timerCardClass}>
              <h1 className={timerTextClass}>23</h1>
            </div>
            <p className={timerCardTypeClass}>Minutes</p>
          </div>
          <div className={priceDropsTimerClass}>
            <div className={timerCardClass}>
              <h1 className={timerTextClass}>26</h1>
            </div>
            <p className={timerCardTypeClass}>Seconds</p>
          </div>
        </div>
      </div>
    );
  };

  const renderBody = (): React.ReactElement => (
    <div className={bodyContainerClass}>
      <div className={bodyLeftContainerClass}>
        <div className="mb-[50px]">
          <h2 className={offerHeader}>Save Jeans, Save Lives</h2>
          <p className={offerDescription}>
            You save vintage jeans and we donate 90% of profits to save lives..
          </p>
        </div>
        {renderPriceDropsIn()}
      </div>
      <div className={cn(bodyRightContainerClass)}>
        <div className={buttonsContainer}>
          <Button
            buttonText="Shop Women"
            onClick={() => onClickTab("/collections/vintage-jeans-women")}
            size="large"
            className={rightButtonsClass}
          />
          <Button
            buttonText="Shop Men"
            onClick={() => onClickTab("/collections/vintage-jeans-men")}
            size="large"
            className={rightButtonsClass}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100">
      <Header />
      <StripContainer />
      {renderBody()}
      <Footer />
    </div>
  );
};
export default observer(Home);
