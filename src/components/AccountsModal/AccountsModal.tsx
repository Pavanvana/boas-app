import React from "react";
import ReactBaseModal from "../../common/ReactBaseModal/ReactBaseModal";
import { AccountModalTypes } from "../../types/accountsModalTypes";
import LoginModal from "../LoginModal/LoginModal";

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
        return <>Sign up</>;
      case AccountModalTypes.FORGOT:
        return <>Forget</>;
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
