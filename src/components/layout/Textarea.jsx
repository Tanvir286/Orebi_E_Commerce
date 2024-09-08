import React from "react";
import Flex from "../layout/Flex";

const Textarea = ({
  className,
  id,
  labelText,
  placeholder,
  onChange,
  cols,
  rows,
}) => {
  return (
    <Flex
      className={`${className} flex-col border-b-[1px] text-secondary-color border-[#D8D8D8]`}
    >
      <label htmlFor={id} className="font-bold text-sm sm:text-[15px] md:text-base font-dm-sans capitalize">
        {labelText}
      </label>
      <textarea
        onChange={onChange}
        id={id}
        cols={cols}
        rows={rows}
        className={"py-2.5 text-sm sm:text-[15px] md:text-base outline-none min-h-[80px] h-[150px] max-h-[250px]"}
        placeholder={placeholder}
      ></textarea>
    </Flex>
  );
};

export default Textarea;
