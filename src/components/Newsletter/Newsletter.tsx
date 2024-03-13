import React, { useState } from "react";

import TextField from "../../common/TextField/TextField";
import Button from "../../common/Button/Button";

import {
  emailFieldClass,
  newsletterCardClass,
  newsletterDescriptionClass,
  newsletterHeadingClass,
  signUpButtonClass,
} from "./styles";

const Newsletter = (): React.ReactElement => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center">
      <div className={newsletterCardClass}>
        <h2 className={newsletterHeadingClass}>Join the BOAS Newsletter</h2>
        <p className={newsletterDescriptionClass}>
          Get updates and tips from the world of vintage fashion, circular
          economy, and ethical business.
        </p>
        <div className="flex items-center justify-center gap-[30px] max-[450px]:flex-col w-full">
          <TextField
            value={email}
            onChange={setEmail}
            placeholder="Email address"
            className={emailFieldClass}
          />
          <Button
            size="large"
            buttonText="SIGN UP"
            className={signUpButtonClass}
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
