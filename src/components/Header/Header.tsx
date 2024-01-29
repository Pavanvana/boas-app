import React from "react";
import { observer } from "mobx-react-lite";
import { boasImageURLs } from "../../constants/imageURL";
import { useCustomT } from "../../hooks/useCustomT";
import {
  CartIcon,
  ChevronDown,
  InvestIcon,
  PersonCircle,
  SearchIcon,
} from "../../icons";

import {
  headerContainer,
  headerElementsContainer,
  headerLeftTabs,
  headerRightTabs,
  leftTabItemClass,
  rightTabItemClass,
  rightTabItemTextClass,
} from "../Header/styles";

const Home = (): React.ReactElement => {
  const t = useCustomT("header");

  const renderHeaderLeftPart = (): React.ReactElement => (
    <div className="flex items-center m-[0px_6px_0px_6px]">
      <ul className={headerLeftTabs}>
        <li className={leftTabItemClass}>{t("woman")}</li>
        <li className={leftTabItemClass}>{t("man")}</li>
        <li className={leftTabItemClass}>{t("allVintage")}</li>
      </ul>
      <SearchIcon height={22} width={22} />
    </div>
  );

  const renderAboutUsHoverCard = (): React.ReactElement => (
    <ul className="flex flex-col bg-white border border-solid">
      <li>{t("mission")}</li>
      <li>{t("contactUs")}</li>
      <li>{t("faq")}</li>
      <li>{t("allProfitsDonated")}</li>
      <li>{t("sustainability")}</li>
      <li>{t("team")}</li>
    </ul>
  );

  const renderHeaderRightPart = (): React.ReactElement => (
    <ul className={headerRightTabs}>
      <li className={rightTabItemClass}>
        <p className={rightTabItemTextClass}>{t("aboutUs")}</p>
        <ChevronDown />
      </li>
      <li className={rightTabItemClass}>
        <InvestIcon height={21} width={21} />
        <p className={rightTabItemTextClass}>{t("invest")}</p>
      </li>
      <li className={rightTabItemClass}>
        <PersonCircle height={25} width={25} />
        <p className={rightTabItemTextClass}>{t("account")}</p>
      </li>
      <li className={rightTabItemClass}>
        <CartIcon height={21} width={21} />
        <p className={rightTabItemTextClass}>{t("cart")}</p>
      </li>
    </ul>
  );

  const renderLogo = (): React.ReactElement => (
    <img src={boasImageURLs.logoIMageURL} alt={"boasLogo"} />
  );

  return (
    <div className={headerContainer}>
      <div className="pb-[15px]">
        <div className={headerElementsContainer}>
          {renderHeaderLeftPart()}
          {renderLogo()}
          {renderHeaderRightPart()}
        </div>
      </div>
    </div>
  );
};
export default observer(Home);
