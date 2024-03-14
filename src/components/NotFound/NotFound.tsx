import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";

import {
  buttonClass,
  notFoundContainerClass,
  notFoundDescriptionClass,
  notFoundHeading,
  notFoundImgClass,
  notFoundImgContainer,
} from "./styles";

const NotFound = (): React.ReactElement => {
  return (
    <div className={notFoundContainerClass}>
      <div className={notFoundImgContainer}>
        <img
          className={notFoundImgClass}
          src="https://res.cloudinary.com/daflxmokq/image/upload/v1677175325/erroring_1_fpnn65.png"
          alt="page not found"
        />
      </div>
      <h1 className={notFoundHeading}>Page Not Found</h1>
      <p className={notFoundDescriptionClass}>
        We are sorry, the page you requested could not be found.
        <br />
        Please go back to the homepage.
      </p>
      <Link to="/">
        <Button buttonText="Home Page" size="large" className={buttonClass} />
      </Link>
    </div>
  );
};

export default NotFound;
