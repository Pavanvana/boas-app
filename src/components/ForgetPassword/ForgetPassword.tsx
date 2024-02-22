import React, { useState } from "react";
import TextField from "../../common/TextField/TextField";
import Button from "../../common/Button/Button";
import {
  resetPasswordDescriptionClass,
  resetPasswordHeadingClass,
  submitButtonClass,
} from "./styles";
import { isValidField } from "../../utils/fieldUtils";

const ForgetPassword = (): React.ReactElement => {
  const [email, SetEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const onBlurEmail = (): void => {
    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError(null);
    }
  };

  const onClickSubmit = (): void => {
    const isValid = isValidField(email);
    if (isValid) {
      console.log(email);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className={resetPasswordHeadingClass}>Reset your password</h2>
      <p className={resetPasswordDescriptionClass}>
        We will send you an email to reset your password.
      </p>
      <TextField
        label="Email"
        value={email}
        onChange={SetEmail}
        className="mb-4"
        onBlur={onBlurEmail}
        errorMsg={emailError}
        onFocus={() => setEmailError(null)}
      />
      <Button
        buttonText="Submit"
        onClick={onClickSubmit}
        className={submitButtonClass}
        size="large"
      />
    </div>
  );
};
export default ForgetPassword;
