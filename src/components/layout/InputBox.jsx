import React, { useState } from "react";
import Input from "../layout/Input";
import Flex from "../layout/Flex";
import Label from "../layout/Label";

const InputBox = ({
  id,
  labelText,
  type,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <Flex
      className={`${className} flex-col border-b-[1px] text-secondary-color border-[#D8D8D8]`}
    >
      <label
        htmlFor={id}
        className="font-bold font-dm-sans text-sm sm:text-[15px] md:text-base capitalize"
      >
        {labelText}
      </label>
      <Input
        onChange={onChange}
        type={type}
        id={id}
        placeholder={placeholder}
        className={"py-1 sm:py-[6px] md:py-2 outline-none text-sm sm:text-[15px] md:text-base"}
      />
    </Flex>
  );
};

export default InputBox;

// const [showPassword, setShowPassword] = useState(false);
// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa";
// {
//   type == "password" &&
//     (showPassword ? (
//       <FaRegEye
//         onClick={() => setShowPassword(!showPassword)}
//         className=" absolute right-3 top-2/4 -translate-y-2/4 cursor-pointer"
//       />
//     ) : (
//       <FaRegEyeSlash
//         onClick={() => setShowPassword(!showPassword)}
//         className=" absolute right-3 top-2/4 -translate-y-2/4 cursor-pointer"
//       />
//     ));
// }
