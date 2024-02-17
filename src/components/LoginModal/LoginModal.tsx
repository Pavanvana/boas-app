import { observer } from "mobx-react-lite";
import { ReactElement, useState } from "react";

import TextField from "../../common/TextField/TextField";
import PasswordField from "../../common/PasswordField/PasswordField";
import Button from "../../common/Button/Button";
import { AccountModalTypes } from "../../types/accountsModalTypes";

import {
  createAccountClass,
  doNotHaveAnAccountClass,
  forgetPasswordClass,
  loginButtonClass,
} from "./styles";

interface Props {
  setModalType: (val: AccountModalTypes) => void;
}
const LoginModal = (props: Props): ReactElement => {
  const { setModalType } = props;
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col">
      <TextField
        label="Email"
        value={email}
        onChange={SetEmail}
        className="mb-4"
      />
      <PasswordField label="Password" value={password} onChange={setPassword} />
      <p className="text-end mt-0">
        <span
          onClick={() => {
            setModalType(AccountModalTypes.FORGOT);
          }}
          className={forgetPasswordClass}
        >
          Forgot password?
        </span>
      </p>
      <Button
        buttonText="Login"
        onClick={() => {}}
        className={loginButtonClass}
        size="large"
      />
      <p className={doNotHaveAnAccountClass}>
        Don't Have an account yet?{" "}
        <span
          className={createAccountClass}
          onClick={() => {
            setModalType(AccountModalTypes.CREATE_ACCOUNT);
          }}
        >
          Create Account
        </span>
      </p>
    </div>
  );
};
export default observer(LoginModal);
