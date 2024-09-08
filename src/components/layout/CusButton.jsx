import React from "react";

const CusButton = ({ text, onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={` font-dm-sans text-white bg-black py-2 sm:py-3 md:py-4 px-12 sm:px-15 md:px-[72px] lg:px-[84px] xl:px-24 ${className} transition duration-300 ease-in-out`}
    >
      {text}{children}
    </button>
  );
};

export default CusButton;
