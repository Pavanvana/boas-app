import React from "react";

interface CustomToastProps {
  message: string;
}

const CustomToast: React.FC<CustomToastProps> = ({ message }) => (
  <div className="bg-green-100 text-green-600 rounded">{message}</div>
);

export default CustomToast;
