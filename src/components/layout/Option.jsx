import React from "react";

const Option = ({ className, optionValue, selected, optionText }) => {

  return selected ? (
    <option className={className} value={optionValue} selected>
      {optionText}
    </option>
  ) : (
    <option className={className} value={optionValue}>{optionText}</option>
  );
};

export default Option;
