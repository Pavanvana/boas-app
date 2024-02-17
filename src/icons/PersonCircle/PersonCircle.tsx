import * as React from "react";
import { IconProps } from "../../types/iconTypes";

const PersonCircle = (props: IconProps): React.ReactElement => {
  const { height = 16, width = 16, fill = "currentColor", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72ZM12 14.5c1.46 0 4.93.59 6.36 2.33A7.95 7.95 0 0 0 20 12c0-4.41-3.59-8-8-8s-8 3.59-8 8c0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33ZM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6Zm-1.5 3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S12.83 8 12 8s-1.5.67-1.5 1.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export { PersonCircle };
