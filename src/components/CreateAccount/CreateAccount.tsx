import React, { useState } from "react";
import TextField from "../../common/TextField/TextField";
import PasswordField from "../../common/PasswordField/PasswordField";
import Button from "../../common/Button/Button";
import { createAccountButtonClass } from "./styles";
import { isValidField } from "../../utils/fieldUtils";

const CreateAccount = (): React.ReactElement => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, SetEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const onClickCreateAccount = (): void => {
    const isValid =
      isValidField(firstName) &&
      isValidField(lastName) &&
      isValidField(email) &&
      isValidField(password);
    if (isValid) {
      //TODO: API Call for login
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
    <div className="flex flex-col">
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
        onClick={onClickCreateAccount}
        className={createAccountButtonClass}
        size="large"
      />
    </div>
  );
};
export default CreateAccount;
