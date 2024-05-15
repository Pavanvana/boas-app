import React from "react";
import { LuLogOut } from "react-icons/lu";
import Cookies from "js-cookie";
import { SuccessToast } from "../../utils/toastUtils";

import {
  cancelButtonClass,
  confirmButtonClass,
  logoIconClass,
  logoIconContainerOne,
  logoIconContainerTwo,
  logoutDescriptionClass,
  logoutHeadingClass,
} from "./styles";

interface Props {
  isLogOutModalOpen: boolean;
  setIsLogOutModalOpen: (val: boolean) => void;
}
const Logout = (props: Props): React.ReactElement => {
  const { isLogOutModalOpen, setIsLogOutModalOpen } = props;

  const onClickLogout = (): void => {
    Cookies.remove("jwt_token");
    localStorage.removeItem("user");
    SuccessToast("Logged out successfully");
    setIsLogOutModalOpen(false);
  };

  return (
    <div className="flex p-[0px_20px_30px_20px]">
      <div className={logoIconContainerOne}>
        <div className={logoIconContainerTwo}>
          <LuLogOut className={logoIconClass} />
        </div>
      </div>
      <div>
        <h3 className={logoutHeadingClass}>Are you sure you want to Logout?</h3>
        <p className={logoutDescriptionClass}>
          We will send you updates and sustainability news
        </p>
        <div className="flex items-center">
          <button
            type="button"
            className={confirmButtonClass}
            onClick={onClickLogout}
          >
            Yes, Logout
          </button>
          <button
            type="button"
            className={cancelButtonClass}
            onClick={() => {
              setIsLogOutModalOpen(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Logout;
