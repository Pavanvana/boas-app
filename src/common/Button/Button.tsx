import React from "react";
import cn from "classnames";
import { getButtonStyles } from "./styles";

interface Props {
  buttonText: string;
  onClick: () => void;
  size: string;
  className?: string;
  disabled?: boolean;
}

const Button = (props: Props): React.ReactElement => {
  const { buttonText, onClick, className, disabled, size } = props;

  return (
    <button
      onClick={onClick}
      className={cn(getButtonStyles(size), className)}
      disabled={disabled}
      type="button"
    >
      {buttonText}
    </button>
  );
};
export default Button;
