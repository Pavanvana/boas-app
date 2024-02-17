import React from "react";

import { buttonContainerClass } from "./styles";

interface Props {
  icon: JSX.Element;
}

const IconButton = (props: Props): React.ReactElement => {
  const { icon } = props;
  return (
    <button className={buttonContainerClass} type="button">
      {icon}
    </button>
  );
};
export default IconButton;
