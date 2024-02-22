import React from "react";
import ReactBaseModal from "../../common/ReactBaseModal/ReactBaseModal";
import { AccountModalTypes } from "../../types/accountsModalTypes";
import LoginModal from "../LoginModal/LoginModal";
import CreateAccount from "../CreateAccount/CreateAccount";
import ForgetPassword from "../ForgetPassword/ForgetPassword";

interface Props {
  isOpen: boolean;
  onOpenChange: (val: boolean) => void;
  modalType: AccountModalTypes;
  setModalType: (val: AccountModalTypes) => void;
}
const AccountsModal = (props: Props): React.ReactElement => {
  const { isOpen, onOpenChange, modalType, setModalType } = props;

  const renderModelBasedOnType = (): React.ReactElement | null => {
    switch (modalType) {
      case AccountModalTypes.LOGIN:
        return <LoginModal setModalType={setModalType} />;
      case AccountModalTypes.CREATE_ACCOUNT:
        return <CreateAccount />;
      case AccountModalTypes.FORGOT:
        return <ForgetPassword />;
      default:
        return null;
    }
  };

  return (
    <ReactBaseModal isOpen={isOpen} onOpenChange={onOpenChange}>
      <div className="mx-6 mb-6">{renderModelBasedOnType()}</div>
    </ReactBaseModal>
  );
};
export default AccountsModal;
