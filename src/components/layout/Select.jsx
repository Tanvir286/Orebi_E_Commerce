import React from "react";

const Select = ({ onChange, id, className , children }) => {
  return <select onChange={onChange} id={id} className={className}>{children}</select>;
};

export default Select;
