import * as React from "react";

import { IconProps } from "../../types/iconTypes";

const MenuIcon = (props: IconProps): React.ReactElement => {
  const { height = 16, width = 16, fill = "currentColor", ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className="bi bi-list"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );
};
export { MenuIcon };
