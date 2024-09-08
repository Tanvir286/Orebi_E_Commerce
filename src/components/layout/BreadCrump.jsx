import React from "react";
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Paragraph from "./Paragraph";

const BreadCrump = ({ title }) => {
  return (
    <>
      <Heading
        tagname="h1"
        text={window.location.pathname.split("/")[1]}
        className="font-dm-sans font-bold capitalize text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] 2xl:text-[49px] mt-7 sm:mt-9 md:mt-11 lg:mt-13 xl:mt-15 2xl:mt-16"
      />
      <Paragraph
        text={[
          <Link to={"/"}>Home</Link>,
          <IoIosArrowForward />,
          window.location.pathname.split("/")[1],
        ]} 
        classname="font-dm-sans capitalize text-secondary-color font-bold  text-[10px] sm:text-[12px] md:text-[14px] flex items-center gap-1"
      />
    </>
  );
};

export default BreadCrump;
