import React from "react";
import cn from "classnames";
import { inputClass, labelClass } from "./styles";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  required?: boolean;
  requiredMsg?: string;
}

const TextField = (props: Props): React.ReactElement => {
  const {
    value,
    onChange,
    label,
    placeholder,
    required = false,
    requiredMsg,
    className,
  } = props;
  return (
    <div className={cn(className, "flex flex-col")}>
      <label className={labelClass}>{label}</label>
      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
        placeholder={placeholder}
      />
      {required ? <p>{requiredMsg}</p> : null}
    </div>
  );
};
export default TextField;
