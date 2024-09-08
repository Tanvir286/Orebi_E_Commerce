import React from "react";
import BreadCrump from "../components/layout/BreadCrump";
import Container from "../components/layout/Container";
import Paragraph from "../components/layout/Paragraph";
import Heading from "../components/layout/Heading";
import Flex from "../components/layout/Flex";
import InputBox from "../components/layout/InputBox";
import CusButton from "../components/layout/CusButton";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <Container>
        <BreadCrump />
        <div className="border-b-[1px] border-[#f0f0f0]">
          <Paragraph
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
            classname={
              "text-secondary-color mt-6 sm:mt-8 md:mt-10 lg:mt-12 x:14 2xl:mt-16 lg:mb-14 mb-5 sm:mb-7 md:mb-9 w-full sm:w-[644px] text-xs sm:text-sm md:text-base"
            }
          />
        </div>
        <div className="input-area mt-6 sm:mt-8 md:mt-10 lg:mt-12 border-b-[1px] border-[#f0f0f0]">
          <Heading
            tagname="h4"
            text="returning customer"
            className="mb-10 font-dm-sans font-bold capitalize text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] 2xl:text-[49px]"
          />
          <Flex
            className={
              "justify-between items-center w-full sm:w-3/4 xl:w-2/4 gap-x-3 sm:gap-x-10"
            }
          >
            <InputBox
              id={"email"}
              labelText={"email address"}
              type={"text"}
              className={"w-2/4"}
            />
            <InputBox
              id={"password"}
              labelText={"password"}
              type={"password"}
              className={"w-2/4"}
            />
          </Flex>
          <CusButton
            text="log in"
            className="mt-7 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16 bg-white border !border-primary-color !text-primary-color capitalize hover:!text-white hover:bg-primary-color"
          />
        </div>
        <div>
          <Heading
            tagname="h4"
            text="new customer"
            className="mb-5 md:mb-7 xl:mb-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16  font-dm-sans font-bold capitalize text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] 2xl:text-[49px] "
          />
          <Paragraph
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
            }
            classname={
              "text-secondary-color mb-12 w-full sm:w-[644px] text-xs sm:text-sm md:text-base"
            }
          />

          <button
            className={` font-dm-sans text-white bg-black py-2 sm:py-3 md:py-4 px-12 sm:px-15 md:px-[72px] lg:px-[84px] xl:px-24 capitalize hover:bg-white hover:text-primary-color border border-primary-color transition duration-300 ease-in-out`}
          >
            <Link to={"/signup"}>Continue</Link>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Login;
