import { observer } from "mobx-react-lite";
import React, { ReactElement, useEffect, useState } from "react";

import TextField from "../../common/TextField/TextField";
import PasswordField from "../../common/PasswordField/PasswordField";
import Button from "../../common/Button/Button";
import {
  AccountModalTypes,
  ResponseUserType,
} from "../../types/accountsModalTypes";
import { isValidField } from "../../utils/fieldUtils";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import loginAPI from "../../apis/loginAPI";

import {
  createAccountClass,
  doNotHaveAnAccountClass,
  forgetPasswordClass,
  loginButtonClass,
} from "./styles";

interface Props {
  setModalType: (val: AccountModalTypes) => void;
  onOpenChange: (val: boolean) => void;
}

const LoginModal = (props: Props): ReactElement => {
  const { setModalType, onOpenChange } = props;
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      navigate("/");
    }
  }, []);

  const onSubmitSuccess = (
    jwtToken: string,
    responseUser: ResponseUserType
  ): void => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    localStorage.setItem("user", JSON.stringify(responseUser));
    navigate("/");
  };

  const onClickSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    const isValid = isValidField(email) && isValidField(password);
    if (isValid) {
      const user = {
        identifier: email,
        password,
      };
      loginAPI(user, onOpenChange, onSubmitSuccess);
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
    <form className="flex flex-col" onSubmit={onClickSubmit}>
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
        className={loginButtonClass}
        size="large"
        type="submit"
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
    </form>
  );
};
export default observer(LoginModal);
