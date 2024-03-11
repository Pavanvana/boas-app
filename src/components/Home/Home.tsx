import React, { useEffect, useState } from "react";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useCustomT } from "../../hooks/useCustomT";
import Header from "../Header/Header";
import StripContainer from "../StripContainer/StripContainer";
import Button from "../../common/Button/Button";
import Footer from "../Footer/Footer";
import { CaretDownFillIcon, CaretUpFillIcon } from "../../icons";
import ChatbotIcon from "../../icons/ChatbotIcon/ChatbotIcon";
import PopularBrands from "../PopularBrands/PopularBrands";
import PriceDropsIn from "../PriceDropsIn/PriceDropsIn";
import { boasImageURLs } from "../../constants/imageURL";
import getStopTheWashData, {
  StopTheWashDataType,
} from "../../apis/getStopTheWashData";

import {
  bodyContainerClass,
  bodyLeftContainerClass,
  bodyRightContainerClass,
  offerDescription,
  offerHeader,
  rightButtonsClass,
  buttonsContainer,
  chatbotAndCountriesContainerClass,
  countriesDropDownClass,
  countriesFlagClass,
  countriesTextClass,
  chatbotButtonClass,
  donateCardClass,
  donateCardHeaderClass,
  stopTheWashCardClass,
  shopTheWashHeaderClass,
  shopTheWashCardClass,
  shopTheWashCardColor,
} from "./styles";
import "./index.css";

const Home = (): React.ReactElement => {
  const navigate = useNavigate();

  const [isOpenLearnMoreModal, setIsOpenLearnMoreModal] =
    useState<boolean>(false);
  const [isOpenCountriesDropDown, setIsOpenCountriesDropDown] = useState(false);
  const [stopTheWashData, setStopTheWashData] = useState<StopTheWashDataType[]>(
    []
  );

  const t = useCustomT("header");

  useEffect(() => {
    getStopTheWashData(setStopTheWashData);
  }, []);

  const onClickTab = (NavigationPath: string): void => {
    navigate(NavigationPath);
  };

  const renderPriceDrops = (): React.ReactElement => (
    <div className={bodyContainerClass}>
      <div className={bodyLeftContainerClass}>
        <div className="mb-[50px]">
          <h2 className={offerHeader}>Save Jeans, Save Lives</h2>
          <p className={offerDescription}>
            You save vintage jeans and we donate 90% of profits to save lives..
          </p>
        </div>
        <PriceDropsIn
          isOpenLearnMoreModal={isOpenLearnMoreModal}
          setIsOpenLearnMoreModal={setIsOpenLearnMoreModal}
        />
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

  const renderChatbotAndCountries = (): React.ReactElement => (
    <div
      className={chatbotAndCountriesContainerClass}
      onClick={() => {
        setIsOpenCountriesDropDown(!isOpenCountriesDropDown);
      }}
    >
      <div className="flex justify-between w-[93%]">
        <div className={countriesDropDownClass}>
          <div className={cn(countriesFlagClass, "countries-flags")}></div>
          <div className={countriesTextClass}>EUP</div>
          {isOpenCountriesDropDown ? (
            <div className="caret-up-icon-class">
              <CaretUpFillIcon height={14} width={14} />
            </div>
          ) : (
            <div className="caret-down-icon-class">
              <CaretDownFillIcon height={14} width={14} />
            </div>
          )}
        </div>
        <button className={cn(chatbotButtonClass, "chat-bot-button")}>
          <ChatbotIcon />
        </button>
      </div>
    </div>
  );

  const renderDonationCard = (): React.ReactElement => (
    <div className="w-[100%] flex items-center justify-center">
      <div className={donateCardClass}>
        <div className="p-[30px_60px_30px_60px] w-[50%] max-[800px]:w-[90%] max-[800px]:order-2">
          <h2 className={donateCardHeaderClass}>
            Where Vintage Fashion Creates Big Change
          </h2>
          <div className="flex flex-col">
            <p className="font-sans text-[14px] mb-[15px] font-semibold">
              <strong>100% of the profits </strong>BOAS makes are{" "}
              <strong>donated to effective charities</strong> that save young
              lives, with no additional cost to you.
            </p>
            <p className="font-sans text-[14px] mb-[15px] font-semibold">
              We're here to make the world a better place, not to make
              shareholders richer. Saving lives while you live yours.
            </p>
          </div>
          <Button
            buttonText="Learn More"
            onClick={() => {
              navigate("/pages/100-percent-to-charity");
            }}
            size="large"
            className="cursor-pointer border-none bg-blue-600 text-white font-sans"
          />
        </div>
        <div className="flex justify-end items-center w-[50%] max-[800px]:w-[90%] p-[20px_20px_0px_0px]">
          <img
            src={boasImageURLs.childrenImageURL}
            alt="children-img"
            className="w-[100%] max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );

  const renderStopTheWashCard = (): React.ReactElement => (
    <div className="w-[100%] flex flex-col items-center justify-center mt-[30px]">
      <h3 className={shopTheWashHeaderClass}>Shop the Wash</h3>
      <div className={stopTheWashCardClass}>
        <div className="p-[30px] w-full flex justify-between gap-[30px]">
          {stopTheWashData.map((data) => (
            <li
              key={data.id}
              className="w-full cursor-pointer"
              onClick={() => {
                navigate(`/collections/${data.pageURL}`);
              }}
            >
              <div
                className={shopTheWashCardClass}
                style={{ backgroundImage: `url(${data.imageURL})` }}
              >
                <div className="bg-[#3272B766] h-full w-full rounded-[20px] flex items-center justify-center text-center">
                  <h4 className={shopTheWashCardColor}>{data.color}</h4>
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100">
      <Header />
      <StripContainer />
      {renderPriceDrops()}
      {renderChatbotAndCountries()}
      <PopularBrands />
      {renderDonationCard()}
      {renderStopTheWashCard()}
      <Footer />
    </div>
  );
};
export default observer(Home);
