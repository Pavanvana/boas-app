import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useCustomT } from "../../hooks/useCustomT";
import Header from "../Header/Header";
import StripContainer from "../StripContainer/StripContainer";
import ReactBaseModal from "../../common/ReactBaseModal/ReactBaseModal";
import LearnMore from "../LearnMore/LearnMore";
import Button from "../../common/Button/Button";
import { countdownTimer } from "../../utils/countdownTimer";
import Footer from "../Footer/Footer";

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

const targetTimer = {
  hours: 22,
  minutes: 0,
  seconds: 0,
};

const Home = (): React.ReactElement => {
  const navigate = useNavigate();

  const [isOpenLearnMoreModal, setIsOpenLearnMoreModal] =
    useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(
    countdownTimer(targetTimer.hours, targetTimer.minutes, targetTimer.seconds)
  );

  const t = useCustomT("header");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const onClickTab = (NavigationPath: string): void => {
    navigate(NavigationPath);
  };

  const renderPriceDropsIn = (): React.ReactElement => {
    const onClickLearnMoreButton = (): void => {
      setIsOpenLearnMoreModal(true);
    };
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
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
              <h1 className={timerTextClass}>
                {hours < 10 ? `0${hours}` : hours}
              </h1>
            </div>
            <p className={timerCardTypeClass}>Hours</p>
          </div>
          <div className={priceDropsTimerClass}>
            <div className={timerCardClass}>
              <h1 className={timerTextClass}>
                {minutes < 10 ? `0${minutes}` : minutes}
              </h1>
            </div>
            <p className={timerCardTypeClass}>Minutes</p>
          </div>
          <div className={priceDropsTimerClass}>
            <div className={timerCardClass}>
              <h1 className={timerTextClass}>
                {seconds < 10 ? `0${seconds}` : seconds}
              </h1>
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
function calculateInitialTimeLeft(
  targetHour: any,
  targetMinute: any,
  targetSecond: any
): number | (() => number) {
  throw new Error("Function not implemented.");
}
