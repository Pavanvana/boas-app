import * as React from "react";
import { IconProps } from "../../types/iconTypes";
const CaretDownFillIcon = (props: IconProps): React.ReactElement => {
  const { height = 16, width = 16, fill = "currentColor", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      className="bi bi-caret-down-fill"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );
};
export { CaretDownFillIcon };
