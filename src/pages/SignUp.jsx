import React, { useState } from "react";
import Container from "../components/layout/Container";
import BreadCrump from "../components/layout/BreadCrump";
import Paragraph from "../components/layout/Paragraph";
import Heading from "../components/layout/Heading";
import Flex from "../components/layout/Flex";
import InputBox from "../components/layout/InputBox";
import Input from "../components/layout/Input";
import CusButton from "../components/layout/CusButton";

const divisions = [
  { id: 0, name: "please select" },
  { id: 1, name: "Barishal" },
  { id: 2, name: "Chattogram" },
  { id: 3, name: "Dhaka" },
  { id: 4, name: "Khulna" },
  { id: 5, name: "Mymensingh" },
  { id: 6, name: "Rajshahi" },
  { id: 7, name: "Rangpur" },
  { id: 8, name: "Sylhet" },
];

const SignUp = () => {
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
              id={"firstname"}
              labelText={"Your Personal Details"}
              type={"text"}
              className={"w-2/4"}
            />
            <InputBox
              id={"lastname"}
              labelText={"last name"}
              type={"text"}
              className={"w-2/4"}
            />
          </Flex>
          <Flex
            className={
              "justify-between items-center mt-6 mb-10 sm:mb-12 md:mb-14 lg:mb-16 w-full sm:w-3/4 xl:w-2/4 gap-x-3 sm:gap-x-10"
            }
          >
            <InputBox
              id={"email"}
              labelText={"email address"}
              type={"mail"}
              className={"w-2/4"}
            />
            <InputBox
              id={"phone"}
              labelText={"telephone"}
              type={"text"}
              className={"w-2/4"}
            />
          </Flex>
        </div>
        <div className="input-area mt-6 sm:mt-8 md:mt-10 lg:mt-12 border-b-[1px] border-[#f0f0f0]">
          <Heading
            tagname="h4"
            text="new customer"
            className="mb-10 font-dm-sans font-bold capitalize text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] 2xl:text-[49px]"
          />
          <Flex
            className={
              "justify-between items-center w-full sm:w-3/4 xl:w-2/4 gap-x-3 sm:gap-x-10"
            }
          >
            <InputBox
              id={"addressOne"}
              labelText={"address 1"}
              type={"text"}
              className={"w-2/4"}
            />
            <InputBox
              id={"addressTwo"}
              labelText={"address 2"}
              type={"text"}
              className={"w-2/4"}
            />
          </Flex>
          <Flex
            className={
              "justify-between items-center mt-6 w-full sm:w-3/4 xl:w-2/4 gap-x-3 sm:gap-x-10"
            }
          >
            <InputBox
              id={"city"}
              labelText={"city"}
              type={"text"}
              className={"w-2/4"}
            />
            <InputBox
              id={"postcode"}
              labelText={"post code"}
              type={"number"}
              className={"w-2/4"}
            />
          </Flex>
          <Flex
            className={
              "justify-between items-center mt-6 mb-10 sm:mb-12 md:mb-14 lg:mb-16 w-full sm:w-3/4 xl:w-2/4 gap-x-3 sm:gap-x-10 "
            }
          >
            <Flex
              className={
                "flex-col w-2/4 border-b-[1px] text-secondary-color border-[#D8D8D8]"
              }
            >
              <label
                htmlFor="state"
                className="font-bold text-secondary-color font-dm-sans text-sm sm:text-[15px] md:text-base capitalize"
              >
                state
              </label>
              <select
                name="division"
                id=""
                className="py-2.5 outline-none text-sm sm:text-[15px] md:text-base"
              >
                {divisions.map((item) => (
                  <option value={item.name}>{item.name}</option>
                ))}
              </select>
            </Flex>
            <Flex
              className={
                "flex-col w-2/4 border-b-[1px] text-secondary-color border-[#D8D8D8]"
              }
            >
              <label
                htmlFor="district"
                className="font-bold text-secondary-color font-dm-sans text-sm sm:text-[15px] md:text-base capitalize"
              >
                district
              </label>
              <select
                name="division"
                id=""
                className="py-2.5 outline-none text-sm sm:text-[15px] md:text-base"
              >
                {divisions.map((item) => (
                  <option value={item.name}>{item.name}</option>
                ))}
              </select>
            </Flex>
          </Flex>
        </div>
        <div
          className="input-area mt-6 pb-10 sm:pb-12 md:pb-14 lg:pb-16 sm:mt-8 md:mt-10 lg:mt-12 border-b-[1px] border-[#f0f0f0]"
        >
          <Heading
            tagname="h4"
            text="your password"
            className="mb-10 font-dm-sans font-bold capitalize text-[20px] sm:text-[26px] md:text-[32px] lg:text-[38px] xl:text-[42px] 2xl:text-[49px]"
          />
          <Flex
            className={
              "justify-between items-center w-full sm:w-3/4 xl:w-2/4 gap-x-3 sm:gap-x-10"
            }
          >
            <InputBox
              id={"firstpassword"}
              labelText={"password"}
              type={"password"}
              className={"w-2/4"}
            />
            <InputBox
              id={"repeatpassword"}
              labelText={"repeat password"}
              type={"password"}
              className={"w-2/4"}
            />
          </Flex>
        </div>
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14">
          <Flex className={"gap-x-4"}>
            <Input type="checkbox" id="policy" />
            <label
              htmlFor="policy"
              className={"text-secondary-color cursor-pointer"}
            >
              I have read and agree to the Privacy Policy
            </label>
          </Flex>
          <Flex className={"mt-5 gap-x-[33px]"}>
            <Paragraph
              text={"subscribe newsletter"}
              classname={" text-secondary-color capitalize"}
            />
            <Flex className={"items-center gap-2"}>
              <input type="radio" name="subscribe" id="yes" />
              <label
                htmlFor="yes"
                className={"text-secondary-color cursor-pointer"}
              >
                yes
              </label>
            </Flex>
            <Flex className={"items-center gap-2"}>
              <input type="radio" name="subscribe" id="no" />
              <label
                htmlFor="no"
                className={"text-secondary-color cursor-pointer"}
              >
                no
              </label>
            </Flex>
          </Flex>
          <CusButton
            text="log in"
            className={"mt-6 capitalize active:scale-[1.05]"}
          />
        </div>
      </Container>
    </section>
  );
};

export default SignUp;
