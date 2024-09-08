import React, { useState } from "react";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import BreadCrump from "../components/layout/BreadCrump";
import Paragraph from "../components/layout/Paragraph";
import Button from "../components/layout/Button";
import Image from "../components/layout/Image";
import Input from "../components/layout/Input";
import CusButton from "../components/layout/CusButton";
import capimage from "../../public/assets/cap.png";
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Heading from "../components/layout/Heading";
import { Link } from "react-router-dom";

const Cart = () => {
  const [productsQuantity, setProductsQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState(55);
  const [totalProductPrice, setTotalProductPrice] = useState(productPrice);

  const handleProductIncrement = () => {
    setProductsQuantity(productsQuantity + 1);
    setTotalProductPrice(totalProductPrice + productPrice);
  };
  const handleProductdeccrement = () => {
    if (productsQuantity > 1) {
      setProductsQuantity(productsQuantity - 1);
      setTotalProductPrice(totalProductPrice - productPrice);
    }
  };

  return (
    <section>
      <Container>
        <BreadCrump />
        <Flex
          className={`bg-[#f5f5f3] justify-between items-center py-8 px-2.5 mt-16 capitalize text-sm md:text-base`}
        >
          <Paragraph classname={"sm:w-[40%]"} text="product" />
          <Paragraph classname={"sm:w-[15%]"} text="price" />
          <Paragraph classname={"sm:w-[15%]"} text="size" />
          <Paragraph classname={"sm:w-[15%]"} text="quantity" />
          <Paragraph classname={"sm:w-[15%]"} text="Total" />
        </Flex>
        <Flex
          className={
            "Product-item  items-center py-7 px-3 border-t-0 bg-white border-[2px] border-[#f0f0f0]"
          }
        >
          <div className="w-[40%]">
            <Flex className={" items-center gap-x-2.5"}>
              <picture>
                <Image
                  imageLink={capimage}
                  altText={"cart image"}
                  className={"w-[80px] md:w-[100px]"}
                />
              </picture>
              <Paragraph
                text={"Primium Hip-Hop Hat"}
                classname={"font-dm-sans text-[13px] md:text-lg"}
              />
            </Flex>
          </div>
          <div className="w-[15%]">
            <Paragraph
              text={`$${productPrice}.00`}
              classname={"font-dm-sans"}
            />
          </div>
          <div className="w-[15%]">
            <select
              name=""
              id=""
              className=" capitalize md:w-[100px] border px-2.5 py-1 outline-none"
            >
              <option value="m">m</option>
              <option value="s">s</option>
              <option value="l">l</option>
              <option value="xl">xl</option>
              <option value="2xl">2xl</option>
            </select>
          </div>
          <div className="sm:w-[16%] md:w-[15%]">
            <Flex className="justify-between items-center w-[100px] md:w-[140px] text-secondary-color border-[2px] border-[#F0F0F0] outline-none">
              <Button
                onClick={handleProductdeccrement}
                icon={<FaMinus />}
                iconAlighnment={"left"}
                className={"px-3 py-[7px] sm:py-[4x] md:py-[9px]"}
              />
              {productsQuantity}
              <Button
                onClick={handleProductIncrement}
                icon={<FaPlus />}
                iconAlighnment={"left"}
                className={"px-3 py-[7px] sm:py-[4x] md:py-[9px]"}
              />
            </Flex>
          </div>
          <div className="sm:w-[14%] md:w-[15%]">
            <Flex className="items-center justify-between">
              <Paragraph text={`${"$" + totalProductPrice.toFixed(2)}`} classname={"sm:text-sm md:text-base"}/>
              <RxCross2 className="lg:text-[25px] cursor-pointer" />
            </Flex>
          </div>
        </Flex>
      
        <Flex
          className={
            "justify-between items-center px-3 py-5 border-t-0 border-[2px] border-[#f0f0f0]"
          }
        >
          <Input
            type={"text"}
            placeholder={"Apply coupon here.."}
            className={"outline-none placeholder:text-primary-color sm:placeholder:text-sm  md:placeholder:text-lg"}
          />
          <Button text={"update cart"} className={"capitalize sm:text-sm md:text-base"} />
        </Flex>
        <Flex className={"justify-end "}>
          <div className="text-end w-full sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
            <Heading
              tagname="h5"
              text="Cart Totals"
              className="text-base sm:text-lg md:text-[20px] font-bold mb-6 mt-12"
            />
            <table className="w-full border-[2px] border-[#f0f0f0] text-start">
              <tr>
                <td className="w-2/4  border-[2px] border-[#f0f0f0] py-4 px-5 font-bold">
                  Subtotal
                </td>
                <td className="w-2/4  border-[2px] border-[#f0f0f0] py-4 px-5">{`${"$" + totalProductPrice.toFixed(2)}`}</td>
              </tr>
              <tr>
                <td className="w-2/4  border-[2px] border-[#f0f0f0] py-4 px-5 font-bold">
                  Discount
                </td>
                <td className="w-2/4  border-[2px] border-[#f0f0f0] py-4 px-5">
                  {`10%`}
                </td>
              </tr>
              <tr>
                <td className="w-2/4  border-[2px] border-[#f0f0f0] py-4 px-5 font-bold">
                  Total
                </td>
                <td className="w-2/4  border-[2px] border-[#f0f0f0] py-4 px-5">
                  {`$${(totalProductPrice - (totalProductPrice / 100) * 10).toFixed(2)}`}
                </td>
              </tr>
            </table>
            <Link to={"/checkout"}>
              <CusButton text={"Proceed to Checkout"} className={"mt-8"} />
            </Link>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Cart;
