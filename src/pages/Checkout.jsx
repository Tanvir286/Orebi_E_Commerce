import React from "react";
import Container from "../components/layout/Container";
import BreadCrump from "../components/layout/BreadCrump";
import Heading from "../components/layout/Heading";
import InputBox from "../components/layout/InputBox";
import Textarea from "../components/layout/Textarea";
import CusButton from "../components/layout/CusButton";
import Flex from "../components/layout/Flex";

const country = [
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

const Checkout = () => {
  return (
    <section>
      <Container>
        <BreadCrump />
        <form
          action=""
          className=" mt-4 sm:mt-7 md:mt-10 lg:mt-13 xl:mt-16 w-full sm:w-3/4 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16"
        >
          <Heading
            tagname={"h3"}
            text={"Billing Details"}
            className=" font-dm-sans font-bold text-primary-color text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] mb-7"
          />
          <Flex className={"gap-x-10"}>
            <InputBox
              className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-2/4"}
              labelText="First Name *"
              id={"firstname"}
              type="text"
              placeholder="first name"
            />
            <InputBox
              className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-2/4"}
              labelText="last name *"
              id={"lastname"}
              type="text"
              placeholder="last name"
            />
          </Flex>
          <InputBox
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-full"}
            labelText="Company Name (optional)"
            id={"comapny"}
            type="text"
            placeholder="Company Name"
          />
          <Flex
            className={
              "flex-col mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-full border-b-[1px] text-secondary-color border-[#D8D8D8]"
            }
          >
            <label
              htmlFor="country"
              className="font-bold text-secondary-color font-dm-sans text-sm sm:text-[15px] md:text-base capitalize"
            >
              country*
            </label>
            <select
              name="country"
              id="country"
              className="py-2.5 outline-none text-sm sm:text-[15px] md:text-base"
            >
              {country.map((item) => (
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </Flex>
          <InputBox
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-full"}
            labelText="street address *"
            id={"street"}
            type="text"
            placeholder="House number and street name"
          />
          <InputBox
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-full"}
            labelText="Town/City *"
            id={"city"}
            type="text"
            placeholder="Town/City"
          />
          <InputBox
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-full"}
            labelText="Post Code *"
            id={"postcode"}
            type="text"
            placeholder="Post Code"
          />
          <InputBox
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-full"}
            labelText="Phone"
            id={"Phone"}
            type="text"
            placeholder="Phone"
          />
          <InputBox
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8 w-full"}
            labelText="Email Address"
            id={"email"}
            type="text"
            placeholder="Email"
          />
        </form>
        <form
          action=""
          className=" mt-4 sm:mt-7 md:mt-10 lg:mt-13 xl:mt-16 w-full sm:w-3/4 mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16"
        >
          <Heading
            tagname={"h3"}
            text={"Additional Information"}
            className=" font-dm-sans font-bold text-primary-color text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] mb-7"
          />
          <Textarea
            className={"mb-5 sm:mb-6 md:mb-7 lg:mb-8"}
            labelText="Other Notes (optional)"
            id={"messege"}
            placeholder={
              "Notes about your order, e.g. special notes for delivery."
            }
          />
          <CusButton text={"Procced to order"} />
        </form>
      </Container>
    </section>
  );
};

export default Checkout;
