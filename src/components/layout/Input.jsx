import React from "react";

const Input = ({ type, placeholder, className, onChange, id }) => {
  return (
    <input
      id={id}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
