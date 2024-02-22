import { ButtonSizes } from "./types";

export const getButtonStyles = (size: string): string => {
  switch (size) {
    case ButtonSizes.SMALL:
      return "py-1 px-2 text-xs rounded-md font-sans font-semibold text-gray-500 cursor-pointer outline-none border border-solid border-gray-400";
    case ButtonSizes.MEDIUM:
      return "py-2 px-4 text-sm rounded-md font-sans font-semibold text-gray-500 cursor-pointer outline-none border border-solid border-gray-400";
    case ButtonSizes.LARGE:
      return "py-2 px-4 text-base rounded-md font-sans font-semibold text-gray-500 cursor-pointer outline-none border border-solid border-gray-400";
    case ButtonSizes.EXTRA_LARGE:
      return "py-2 px-4 text-lg rounded-md font-sans font-semibold text-gray-500 cursor-pointer outline-none border border-solid border-gray-400";
    default:
      return "";
  }
};
