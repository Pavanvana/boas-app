import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import TextField from "../../common/TextField/TextField";
import PasswordField from "../../common/PasswordField/PasswordField";
import Button from "../../common/Button/Button";
import { isValidField } from "../../utils/fieldUtils";
import createAccountAPI from "../../apis/createAccountAPI";
import { ResponseUserType } from "../../types/accountsModalTypes";

import { createAccountButtonClass } from "./styles";
import "./index.css";

interface Props {
  onOpenChange: (val: boolean) => void;
}
const CreateAccount = (props: Props): React.ReactElement => {
  const { onOpenChange } = props;

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, SetEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [createButtonStatus, setCreateButtonStatus] = useState<boolean>(false);

  const navigate = useNavigate();

  const onSubmitSuccess = (
    jwtToken: string,
    responseUser: ResponseUserType
  ) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30 });
    localStorage.setItem("user", JSON.stringify(responseUser));
    navigate("/");
  };
  const onClickSubmit = async (e: any): Promise<void> => {
    e.preventDefault();
    const isValid =
      isValidField(firstName) &&
      isValidField(lastName) &&
      isValidField(email) &&
      isValidField(password);
    if (isValid) {
      const user = {
        firstName,
        lastName,
        email,
        password,
        username: firstName,
      };
      createAccountAPI({
        user,
        onOpenChange,
        onSubmitSuccess,
        setCreateButtonStatus,
      });
    } else {
      if (!isValidField(firstName)) setFirstNameError("First Name is required");
      if (!isValidField(lastName)) setLastNameError("Last Name is required");
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

  const onBlurFirstName = (): void => {
    if (!firstName) {
      setFirstNameError("First Name is required");
    } else {
      setFirstNameError(null);
    }
  };

  const onBlurLastName = (): void => {
    if (!lastName) {
      setLastNameError("Last Name is required");
    } else {
      setLastNameError(null);
    }
  };

  return (
    <form
      className="flex flex-col create-account-form"
      onSubmit={onClickSubmit}
    >
      <TextField
        label="First Name"
        value={firstName}
        onChange={setFirstName}
        className="mb-4"
        errorMsg={firstNameError}
        onBlur={onBlurFirstName}
        onFocus={() => setFirstNameError(null)}
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={setLastName}
        className="mb-4"
        errorMsg={lastNameError}
        onBlur={onBlurLastName}
        onFocus={() => setLastNameError(null)}
      />
      <TextField
        label="Email"
        value={email}
        onChange={SetEmail}
        className="mb-4"
        errorMsg={emailError}
        onBlur={onBlurEmail}
        onFocus={() => setEmailError(null)}
      />
      <PasswordField
        label="Password"
        value={password}
        onChange={setPassword}
        className="mb-8"
        errorMsg={passwordError}
        onBlur={onBlurPassword}
        onFocus={() => setPasswordError(null)}
      />
      <Button
        buttonText="Create Account"
        className={createAccountButtonClass}
        size="large"
        type="submit"
        status={createButtonStatus}
      />
    </form>
  );
};
export default CreateAccount;
