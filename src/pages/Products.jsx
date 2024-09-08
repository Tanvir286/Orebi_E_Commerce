import React, { useState } from "react";
import Container from "../components/layout/Container";
import BreadCrump from "../components/layout/BreadCrump";
import productOne from "../../public/assets/p5.png";
import productTwo from "../../public/assets/p6.png";
import productThree from "../../public/assets/p7.png";
import productFour from "../../public/assets/p8.png";
import Flex from "../components/layout/Flex";
import { Link } from "react-router-dom";
import Image from "../components/layout/Image";
import Heading from "../components/layout/Heading";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Paragraph from "../components/layout/Paragraph";
import Button from "../components/layout/Button";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { color } from "../../src/Demo Data/ProductCategoryData";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import InputBox from "../components/layout/InputBox";
import Textarea from "../components/layout/Textarea";
import CusButton from "../components/layout/CusButton";

const Products = () => {
  const [productsQuantity, setProductsQuantity] = useState(1);
  const [descriptionAndReviewToggle, setDescriptionAndReviewToggle] =
    useState("review");

  return (
    <section>
      <Container>
        <BreadCrump />
        <Heading
          tagname={"h3"}
          text={"Products Image"}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 font-dm-sans font-bold text-primary-color text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] mb-7"
        />
        <Flex
          className={
            "justify-between flex-wrap  mt-2 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16"
          }
        >
          <Link className="w-[49%] mb-[6px] sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7">
            <Image imageLink={productOne} className={"w-full"} />
          </Link>
          <Link className="w-[49%] mb-[6px] sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7">
            <Image imageLink={productTwo} className={"w-full"} />
          </Link>
          <Link className="w-[49%] mb-[6px] sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7">
            <Image imageLink={productThree} className={"w-full"} />
          </Link>
          <Link className="w-[49%] mb-[6px] sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7">
            <Image imageLink={productFour} className={"w-full"} />
          </Link>
        </Flex>
        <div className="products-information w-full sm:w-3/4 xl:w-2/4">
          <Heading
            tagname="h5"
            text="Product details"
            className="text-[20px] sm:text-[23px] md:text-[26px] lg:text-[29px] xL:text-[32px] font-bold capitalize mb-2 sm:mb-3 md:mb-4 font-dm-sans"
          />
          <div className="border-b-[1px] border-[#F0F0F0] ">
            <Flex className={"gap-4 items-center mb-5"}>
              <Flex className="icons gap-[2px]">
                <IoIosStar className="text-[#FFD881] text-[20px]" />
                <IoIosStar className="text-[#FFD881] text-[20px]" />
                <IoIosStar className="text-[#FFD881] text-[20px]" />
                <IoIosStar className="text-[#FFD881] text-[20px]" />
                <IoIosStarHalf className="text-[#FFD881] text-[20px]" />
              </Flex>
              <Paragraph
                text={"99 Review"}
                classname={"font-dm-sans text-sm md:text-lg text-secondary-color"}
              />
            </Flex>
            <Flex className={"gap-3 items-center mb-4 md:mb-5"}>
              <Paragraph
                text={"$88.00"}
                classname={"text-secondary-color text line-through md:text-lg"}
              />
              <Paragraph text={"$44.00"} classname={"font-bold md:text-xl"} />
            </Flex>
          </div>
          <div className="border-b-[1px] border-[#F0F0F0] ">
            <Flex className={"mt-4 sm:mt-5 md:mt-6 lg:mt-7 gap-x-[50px] sm:gap-x-[60px] items-center mb-4 sm:mb-5 md:mb-6 lg:mb-8"}>
              <Paragraph text={"Color:"} classname={"font-bold text-sm md:text-base uppercase"} />
              <Flex className="color-box gap-x-3 sm:gap-x-4">
                {/* {color.map((item) => (
                  <div className={`w-5 h-5 ${item.colorcode} rounded-full hover:scale-[1.2] transition duration-200 ease-in cursor-pointer relative after:content-[''] after:absolute after:-top-[100%] after:text-xs after:left-2/4 after:-translate-x-2/4 after:capitalize  after:hover:content-['${item.colorname}']`}></div>
                ))} */}
                {color.map((item) => (
                  
                  <div
                    className={` w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 ${item.colorcode} rounded-full hover:scale-[1.2] transition duration-200 ease-in cursor-pointer relative after:content-[''] after:absolute after:-top-[100%] text-[8px] sm:after:text-[10px] md:after:text-xs after:left-2/4 after:transition after:duration-200 after:ease-in-out after:text-primary-color after:-translate-x-2/4 after:capitalize  after:hover:content-['color']`}
                  ></div>
                ))}
              </Flex>
            </Flex>
            <Flex className={"mt-4 sm:mt-5 md:mt-6 lg:mt-7 gap-x-[68px] sm:gap-x-[78px] items-center mb-4 sm:mb-5 md:mb-6 lg:mb-8"}>
              <Paragraph text={"Size:"} classname={"font-bold text-sm md:text-base uppercase"} />
              <select
                name=""
                id=""
                className=" capitalize w-[110px] sm:w-[140px] text-secondary-color border-[2px] border-[#F0F0F0] px-[15px] outline-none py-[3px] sm:py-[4px] md:py-[5px]"
              >
                <option value="s" selected>
                  s
                </option>
                <option value="m">m</option>
                <option value="l">l</option>
                <option value="xl">xl</option>
                <option value="2xl">2xl</option>
              </select>
            </Flex>
            <Flex className={"mt-7 gap-x-[26px] items-center mb-8"}>
              <Paragraph text={"QUANTITY:"} classname={"font-bold text-sm md:text-base uppercase"} />
              <Flex className=" justify-between items-center sm:w-[140px] text-secondary-color border-[2px] border-[#F0F0F0] outline-none">
                <Button
                  onClick={() =>
                    productsQuantity > 1 &&
                    setProductsQuantity(productsQuantity - 1)
                  }
                  icon={<FaMinus />}
                  iconAlighnment={"left"}
                  className={"px-4 py-[7px] sm:py-[8px] md:py-[9px]"}
                />
                {productsQuantity}
                <Button
                  onClick={() => setProductsQuantity(productsQuantity + 1)}
                  icon={<FaPlus />}
                  iconAlighnment={"left"}
                  className={"px-4 py-[7px] sm:py-[8px] md:py-[9px]"}
                />
              </Flex>
            </Flex>
          </div>
          <Flex className="border-b-[1px] py-5 items-center gap-10 border-[#F0F0F0] ">
            <Paragraph text={"status:"} classname={"font-bold text-sm md:text-base uppercase"} />
            <Paragraph
              text={"In stock"}
              classname={"font-bold text-sm md:text-base text-secondary-color capitalize"}
            />
          </Flex>
          <Flex className="sm:space-x-3 sm:justify-start justify-between border-b-[1px] py-5 sm:py-6 md:py-7 border-[#F0F0F0] ">
            <Button
              text="add to wish list"
              className=" font-dm-sans font-bold py-2 sm:py-3 md:py-4 px-8 sm:px-6 md:px-8 lg:px-10 border-[1px] border-primary-color capitalize text-sm hover:bg-primary-color hover:text-white transition duration-300 ease-in-out"
            />
            <Button
              text="add to cart"
              className=" font-dm-sans font-bold py-2 sm:py-3 md:py-4 px-8 sm:px-6 md:px-8 lg:px-10 border-[1px] border-primary-color capitalize text-sm hover:bg-primary-color hover:text-white transition duration-300 ease-in-out"
            />
          </Flex>
          <Accordion
            className="w-full [&>*:last-child]:border-none border-b-[1px] border-[#F0F0F0]"
            allowToggle
          >
            <AccordionItem
              className="bg-white border-b-[1px] border-[#F0F0F0]"
              onClick={() => setCountry("Germany")}
            >
              <AccordionButton className="flex justify-between py-4 sm:py-5 md:py-6">
                <Heading
                  tagname="h4"
                  text="FEATURES & DETAILS"
                  className=" font-dm-sans font-semibold text-sm sm:text-base md:text-lg xl:text-[20px]"
                />
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Paragraph
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                  classname={" font-dm-sans text-secondary-color pb-6"}
                />
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              className="bg-white border-b-[1px] border-[#F0F0F0]"
              onClick={() => setCountry("Germany")}
            >
              <AccordionButton className="flex justify-between py-4 sm:py-5 md:py-6">
                <Heading
                  tagname="h4"
                  text="FEATURES  & DETAILS"
                  className=" font-dm-sans font-semibold text-sm sm:text-base md:text-lg xl:text-[20px]"
                />
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                <Paragraph
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                  classname={" font-dm-sans text-secondary-color pb-6"}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <div className="review-and-description mt-20">
            <div className="space-x-14">
              <Button
                onClick={() => setDescriptionAndReviewToggle("description")}
                text={"Description"}
                className={
                  descriptionAndReviewToggle === "description"
                    ? "capitalize text-primary-color font-bold text-lg"
                    : "text-secondary-color text-lg"
                }
              />
              <Button
                onClick={() => setDescriptionAndReviewToggle("review")}
                text={["review", <span>(1)</span>]}
                className={
                  descriptionAndReviewToggle === "review"
                    ? "capitalize text-primary-color font-bold text-lg"
                    : "text-secondary-color text-lg"
                }
              />
            </div>
          </div>
          {descriptionAndReviewToggle === "review" && (
            <div className="mt-10">
              <Paragraph
                text={"1 review for product"}
                classname={"font-dm-sans text-base text-secondary-color"}
              />
              <div className="reivew border-t-[1px] border-b-[1px] border-t-[#f0f0f0]  pt-8 pb-5 mt-4">
                <Flex className={"items-center justify-between mb-4"}>
                  <Flex className={"items-center gap-x-10"}>
                    <Heading
                      tagname={"h4"}
                      text={"john ford"}
                      className="capitalize text-[20px]"
                    />
                    <Flex className="icons gap-[2px]">
                      <IoIosStar className="text-[#FFD881] text-[17px]" />
                      <IoIosStar className="text-[#FFD881] text-[17px]" />
                      <IoIosStar className="text-[#FFD881] text-[17px]" />
                      <IoIosStar className="text-[#FFD881] text-[17px]" />
                      <IoIosStarHalf className="text-[#FFD881] text-[17px]" />
                    </Flex>
                  </Flex>
                  <Paragraph text="6 months ago" />
                </Flex>
                <Paragraph
                  text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
                  classname={"text-secondary-color"}
                />
              </div>
              <div id="add-a-review" className="mt-9 w-full sm:w-3/4 lg:w-2/4">
                <Heading
                  tagname="h5"
                  text="Add a Review"
                  className="capitalize text-primary-color font-bold text-lg mb-12"
                />
                <InputBox
                  id={"name"}
                  labelText={"Name"}
                  placeholder={"Your name here"}
                  className={"mb-5"}
                />
                <InputBox
                  id={"email"}
                  labelText={"email"}
                  placeholder={"Your email here"}
                  className={"mb-12"}
                />
                <Textarea
                  id={"review"}
                  labelText={"Review"}
                  placeholder={"Your review here"}
                  className={"mb-7"}
                />
                <CusButton text="post" />
              </div>
            </div>
          )}
          {descriptionAndReviewToggle === "description" && (
            <div className="mt-10">
              <Heading
                tagname="h5"
                text="Product Information"
                className="font-bold text-xl"
              />
              <Paragraph
                text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus commodi quis non ullam ipsam. Dolores non assumenda, est, rerum obcaecati dolore ratione ullam ut odio quaerat in eius ab molestias neque, iste suscipit reiciendis voluptates corporis? Itaque dignissimos aspernatur cupiditate nisi, dolores ab reprehenderit impedit magni. Tempore, totam! Laudantium deleniti vero corrupti itaque cupiditate ea eligendi nemo numquam dolor, dolorem provident molestiae. Voluptatem laboriosam, nam placeat esse molestias et tempore maxime cupiditate numquam nostrum reiciendis ut deleniti quaerat, quia suscipit laborum asperiores ab? Facere quia nemo beatae, recusandae sapiente facilis vitae porro labore? Ipsa optio eum quibusdam cum nostrum tenetur repudiandae sequi, voluptatibus aut natus facilis quaerat consequatur laborum, consequuntur eius, corporis fugit iusto velit magni atque eligendi nobis quae minus quas. Suscipit, hic illo excepturi dicta debitis molestiae asperiores delectus ad, porro eos molestias atque natus, rerum alias vero cupiditate. Inventore repellendus aspernatur alias hic eius incidunt corporis quisquam atque ea. Deserunt et ratione quo ipsum impedit, fugiat, dicta ut nobis quidem vel eius iure assumenda hic id? Minus nesciunt vitae eveniet tenetur provident veritatis, excepturi a adipisci perferendis quas, expedita laudantium laboriosam nostrum ullam! Quibusdam, magni veritatis officiis, vitae ad similique delectus iusto repudiandae voluptatum, voluptates sunt eos!"
                classname={"text-secondary-color mt-4 text-justify"}
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Products;
