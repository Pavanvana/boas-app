import { observer } from "mobx-react-lite";
import React, { ReactElement, useState } from "react";

import TextField from "../../common/TextField/TextField";
import PasswordField from "../../common/PasswordField/PasswordField";
import Button from "../../common/Button/Button";
import { AccountModalTypes } from "../../types/accountsModalTypes";
import { isValidField } from "../../utils/fieldUtils";

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
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const onClickLogin = (): void => {
    const isValid = isValidField(email) && isValidField(password);
    if (isValid) {
      //TODO: API Call for login and close model
      setModalType(AccountModalTypes.CREATE_ACCOUNT);
    } else {
      if (!isValidField(email)) setEmailError("Email is required");
      if (!isValidField(password)) setPasswordError("Password is required");
    }
  };

  const onBlurEmail = (): void => {
    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError(null);
    }
  };

  const onBlurPassword = (): void => {
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError(null);
    }
  };

  return (
    <div className="flex flex-col">
      <TextField
        label="Email"
        value={email}
        onChange={SetEmail}
        className="mb-4"
        onBlur={onBlurEmail}
        errorMsg={emailError}
        onFocus={() => setEmailError(null)}
      />
      <PasswordField
        label="Password"
        value={password}
        onChange={setPassword}
        errorMsg={passwordError}
        onBlur={onBlurPassword}
        onFocus={() => setPasswordError(null)}
      />
      <p className="text-end mb-4">
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
        onClick={onClickLogin}
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
