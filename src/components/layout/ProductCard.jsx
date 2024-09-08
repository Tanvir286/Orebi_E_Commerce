import React from "react";
import Image from "../layout/Image";
import Heading from "../layout/Heading";
import Paragraph from "../layout/Paragraph";
import Flex from "../layout/Flex";
import Button from "../layout/Button";
import { FaRegHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({
  className,
  tag,
  productImageLink,
  productName,
  productPrice,
  productColor,
}) => {
  return (
    <div className={`${className} group`}>
      <div className="relative overflow-y-hidden top-part">
        <Image
          imageLink={productImageLink}
          altText={"product-image"}
          className={"w-full"}
        />
        {tag && (
          <Paragraph
            text={tag}
            classname={
              "capitalize bg-primary-color text-white inline-block px-3 py-1 text-xs md:px-7 md:py-2.5 md:text-sm font-dm-sans font-bold top-5 left-5 absolute"
            }
          />
        )}
        <Flex className="absolute bottom-0 left-0 flex-col w-full px-8 py-6 transition-all duration-300 ease-in-out translate-y-full bg-white group-hover:translate-y-0 text-end gap-y-5 hover-part">
          <Button
            text="add to wish list"
            icon={<FaRegHeart className=" text-primary-color" />}
            iconAlighnment={"right"}
            className={
              "flex items-center justify-end gap-x-2.5 2xl:gap-x-[15px] font-dm-sans capitalize text-sm sm:text-[15px] xl:text-lg font-bold text-[#767676]"
            }
          />
          <Button
            text="compare"
            icon={
              <TfiReload className="transition-all duration-300 ease-in-out text-primary-color group-hover/compare:rotate-180" />
            }
            iconAlighnment={"right"}
            className={
              "flex items-center justify-end gap-x-[15px] font-dm-sans capitalize text-sm sm:text-[15px] xl:text-lg font-bold text-[#767676] group/compare "
            }
          />
          <Button
            text="Add to cart"
            icon={
              <FaShoppingCart className="transition-all duration-300 ease-in-out text-primary-color" />
            }
            iconAlighnment={"right"}
            className={
              "flex items-center justify-end gap-x-[15px] font-dm-sans capitalize text-sm sm:text-[15px] xl:text-lg font-bold "
            }
          />
        </Flex>
      </div>
      <Flex className="items-center justify-between pt-3 md:pt-[14px] xl:pt-5 pb-1 xl:pb-[15px] product-info">
        <Heading
          text={productName}
          className="text-[15px] md:text-lg xl:text-xl font-bold capitalize font-dm-sans"
        />
        <Paragraph
          text={productPrice}
          classname={
            "font-dm-sans text-xs md:text-base text-[#767676] capitalize"
          }
        />
      </Flex>
      <Paragraph
        text={productColor}
        classname={
          "font-dm-sans text-xs md:text-base text-[#767676] capitalize"
        }
      />
    </div>
  );
};

export default ProductCard;
