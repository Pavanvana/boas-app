import cn from "classnames";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { GlobalHotKeys } from "react-hotkeys";
import Cookies from "js-cookie";
import { SuccessToast } from "../../utils/toastUtils";
import { boasImageURLs } from "../../constants/imageURL";
import { useCustomT } from "../../hooks/useCustomT";
import { Button, DialogTrigger } from "react-aria-components";

import {
  CartIcon,
  ChevronDown,
  InvestIcon,
  PersonCircle,
  SearchIcon,
} from "../../icons";
import ReactPopover from "../../common/ReactPopover/ReactPopover";
import { MenuIcon } from "../../icons/MenuIcon/MenuIcon";
import IconButton from "../../common/IconButton/IconButton";
import AccountsModal from "../AccountsModal/AccountsModal";
import { AccountModalTypes } from "../../types/accountsModalTypes";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import Logout from "../Logout/Logout";
import ReactBaseModal from "../../common/ReactBaseModal/ReactBaseModal";

import {
  aboutCardClass,
  aboutPopoverItemClass,
  headerContainer,
  headerElementsContainer,
  headerLeftTabs,
  headerRightTabs,
  leftTabItemClass,
  numberOfCartItemsCountClass,
  numberOfCartItemsTextClass,
  rightTabItemClass,
  rightTabItemTextClass,
  searchButtonClass,
  searchButtonIconClass,
  searchButtonTextClass,
} from "../Header/styles";
import "./index.css";

const Home = (): React.ReactElement => {
  const navigate = useNavigate();

  const [isOpenAboutUsPopover, setIsOpenAboutUsPopOver] =
    useState<boolean>(false);
  const [isOpenAccountPopover, setIsOpenAccountPopover] =
    useState<boolean>(false);
  const [isOpenLoginPopover, setIsOpenLoginPopover] = useState<boolean>(false);
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<AccountModalTypes>(
    AccountModalTypes.LOGIN
  );
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState<boolean>(false);

  const t = useCustomT("header");

  const renderHeaderLeftPart = (): React.ReactElement => {
    const handlers = {
      GLOBAL_SEARCH: (event: any) => {
        event.preventDefault();
        setIsGlobalSearchOpen(true);
      },
    };
    return (
      <div className="flex items-center m-[0px_6px_0px_6px] w-[40%]">
        <ul className={headerLeftTabs}>
          <li
            className={leftTabItemClass}
            onClick={() => onClickTab("/collections/vintage-jeans-women")}
          >
            {t("woman")}
          </li>
          <li
            className={leftTabItemClass}
            onClick={() => onClickTab("/collections/vintage-jeans-men")}
          >
            {t("man")}
          </li>
          <li
            className={leftTabItemClass}
            onClick={() => onClickTab("/collections/vintage-jeans")}
          >
            {t("allVintage")}
          </li>
        </ul>
        <div className="min-[1041px]:hidden">
          <IconButton
            onClick={() => {
              SuccessToast("Coming Soon");
            }}
            icon={<MenuIcon height={22} width={22} />}
          />
        </div>
        <GlobalHotKeys handlers={handlers}>
          <button
            className={searchButtonClass}
            type="button"
            onClick={() => {
              setIsGlobalSearchOpen(true);
            }}
          >
            <div className="flex items-center">
              <SearchIcon height={18} width={18} />
              <p className={searchButtonTextClass}>Search</p>
            </div>
            <div className={searchButtonIconClass}>Ctrl K</div>
          </button>
        </GlobalHotKeys>
        <GlobalSearch
          isOpen={isGlobalSearchOpen}
          onOpenChange={setIsGlobalSearchOpen}
        />
      </div>
    );
  };

  const onClickTab = (NavigationPath: string): void => {
    navigate(NavigationPath);
  };

  const renderAboutUsPopover = (): React.ReactElement => (
    <ReactPopover>
      <ul className={aboutCardClass}>
        <li
          key="mission"
          className={aboutPopoverItemClass}
          onClick={() => onClickTab("/pages/mission")}
        >
          {t("mission")}
        </li>
        <li
          className={aboutPopoverItemClass}
          onClick={() => onClickTab("/pages/contact-us")}
        >
          {t("contactUs")}
        </li>
        <li
          className={aboutPopoverItemClass}
          onClick={() => onClickTab("/a/faq")}
        >
          {t("faq")}
        </li>
        <li
          className={aboutPopoverItemClass}
          onClick={() => onClickTab("/pages/100-percent-to-charity")}
        >
          {t("allProfitsDonated")}
        </li>
        <li
          className={aboutPopoverItemClass}
          onClick={() => onClickTab("/pages/sustainability")}
        >
          {t("sustainability")}
        </li>
        <li
          className={aboutPopoverItemClass}
          onClick={() => onClickTab("/pages/team")}
        >
          {t("team")}
        </li>
      </ul>
    </ReactPopover>
  );

  const onClickLogin = (): void => {
    setIsOpenAccountPopover(false);
    setIsOpenLoginPopover(true);
    setModalType(AccountModalTypes.LOGIN);
  };

  const onClickCreateAccount = (): void => {
    setIsOpenAccountPopover(false);
    setIsOpenLoginPopover(true);
    setModalType(AccountModalTypes.CREATE_ACCOUNT);
  };

  const onClickLogout = (): void => {
    setIsOpenAccountPopover(false);
    setIsLogOutModalOpen(true);
  };

  const renderAccountPopover = (): React.ReactElement => {
    const jwtToken = Cookies.get("jwt_token");
    const user = JSON.parse(localStorage.getItem("user")!);

    return (
      <div>
        <ReactPopover onChangePopover={setIsOpenAccountPopover}>
          {jwtToken === undefined ? (
            <ul className={aboutCardClass}>
              <li
                key="login"
                className={aboutPopoverItemClass}
                onClick={onClickLogin}
              >
                {t("login")}
              </li>
              <li
                key={"createAccount"}
                className={aboutPopoverItemClass}
                onClick={onClickCreateAccount}
              >
                {t("createAccount")}
              </li>
            </ul>
          ) : (
            <ul className={aboutCardClass}>
              {user && (
                <li className="p-[6px_16px_6px_16px] hover:bg-gray-100 text-[14px] font-sans font-medium text-gray-500 rounded-[6px]">
                  <p>
                    Logged in as{" "}
                    <span className="text-black">{user.username}</span>
                  </p>
                </li>
              )}
              <li
                key="account"
                className={aboutPopoverItemClass}
                onClick={() => {}}
              >
                {t("account")}
              </li>
              <li
                key={"logout"}
                className={aboutPopoverItemClass}
                onClick={onClickLogout}
              >
                {t("logout")}
              </li>
            </ul>
          )}
        </ReactPopover>
      </div>
    );
  };

  const renderHeaderRightPart = (): React.ReactElement => {
    const aboutUsActiveClassName = isOpenAboutUsPopover ? "bg-gray-100" : "";
    const accountActiveClassName = isOpenAccountPopover ? "bg-gray-100" : "";
    const ChevronDownClass = isOpenAboutUsPopover
      ? "chevron-down-rotate-class"
      : "chevron-down-class";
    //TODO: update the count of cart items
    return (
      <>
        <ul className={headerRightTabs}>
          <li
            className={cn(rightTabItemClass, aboutUsActiveClassName)}
            onMouseOver={() => setIsOpenAboutUsPopOver(true)}
            onMouseLeave={() => {
              setIsOpenAboutUsPopOver(false);
            }}
          >
            <DialogTrigger
              isOpen={isOpenAboutUsPopover}
              onOpenChange={() => setIsOpenAboutUsPopOver(false)}
            >
              <Button className="border-none bg-transparent outline-none p-0 max-[700px]:hidden">
                <div className="flex items-center">
                  <p className={rightTabItemTextClass}>{t("aboutUs")}</p>
                  <div className={ChevronDownClass}>
                    <ChevronDown />
                  </div>
                </div>
              </Button>
              {renderAboutUsPopover()}
            </DialogTrigger>
          </li>
          <li
            className={rightTabItemClass}
            onClick={() => onClickTab("/invest")}
          >
            <InvestIcon height={25} width={25} />
            <p className={cn(rightTabItemTextClass, "max-[1040px]:hidden")}>
              {t("invest")}
            </p>
          </li>
          <li
            className={cn(rightTabItemClass, accountActiveClassName)}
            onMouseLeave={() => {
              setIsOpenAccountPopover(false);
            }}
            onMouseEnter={() => setIsOpenAccountPopover(true)}
          >
            <DialogTrigger
              isOpen={isOpenAccountPopover}
              onOpenChange={() => setIsOpenAccountPopover(false)}
            >
              <Button className="border-none bg-transparent outline-none p-0 cursor-pointer">
                <div className="flex items-center">
                  <PersonCircle height={27} width={27} />
                  <p
                    className={cn(rightTabItemTextClass, "max-[1040px]:hidden")}
                  >
                    {t("account")}
                  </p>
                </div>
              </Button>
              {renderAccountPopover()}
            </DialogTrigger>
          </li>
          <li className={rightTabItemClass} onClick={() => onClickTab("/cart")}>
            <div className="relative">
              <CartIcon height={22} width={22} />
              <div className={numberOfCartItemsCountClass}>
                <p className={numberOfCartItemsTextClass}>0</p>
              </div>
            </div>
            <p className={rightTabItemTextClass}>{t("cart")}</p>
          </li>
        </ul>
        <AccountsModal
          isOpen={isOpenLoginPopover}
          onOpenChange={setIsOpenLoginPopover}
          modalType={modalType}
          setModalType={setModalType}
        />
        <ReactBaseModal
          isOpen={isLogOutModalOpen}
          onOpenChange={setIsLogOutModalOpen}
        >
          <Logout
            isLogOutModalOpen={isLogOutModalOpen}
            setIsLogOutModalOpen={setIsLogOutModalOpen}
          />
        </ReactBaseModal>
      </>
    );
  };

  const renderLogo = (): React.ReactElement => (
    <div className="flex items-center justify-center w-[10%]">
      <img
        src={boasImageURLs.logoIMageURL}
        alt={"boasLogo"}
        className="w-[100px] max-[900px]:w-[80px]"
      />
    </div>
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
