import React, { useEffect, useState } from "react";

import { countdownTimer } from "../../utils/countdownTimer";
import LearnMore from "../LearnMore/LearnMore";
import ReactBaseModal from "../../common/ReactBaseModal/ReactBaseModal";

import {
  learnMoreTextClass,
  priceDropsInContainerClass,
  priceDropsInTextClass,
  priceDropsInTimerContainerClass,
  priceDropsTimerClass,
  timerCardClass,
  timerCardTypeClass,
  timerTextClass,
} from "./styles";

interface Props {
  isOpenLearnMoreModal: boolean;
  setIsOpenLearnMoreModal: (val: boolean) => void;
}

const targetTimer = {
  hours: 22,
  minutes: 0,
  seconds: 0,
};

const PriceDropsIn = (props: Props): React.ReactElement => {
  const { isOpenLearnMoreModal, setIsOpenLearnMoreModal } = props;
  const [timeLeft, setTimeLeft] = useState<number>(
    countdownTimer(targetTimer.hours, targetTimer.minutes, targetTimer.seconds)
  );

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

export default PriceDropsIn;
