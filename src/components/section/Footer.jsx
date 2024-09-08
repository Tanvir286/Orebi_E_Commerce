import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import List from "../layout/List";
import ListItem from "../layout/ListItem";
import Image from "../layout/Image";
import Paragraph from "../layout/Paragraph";
import Heading from "../layout/Heading";
import { Link, NavLink } from "react-router-dom";
import orebiLogo from "../../../public/assets/logo.png";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" mt-7 md:mt-[106px] bg-[#F5F5F3] p-4 md:py-14">
      <Container>
        <Flex className={" flex-wrap flex-col-reverse md:flex-row"}>
          <Flex className="menu-part mt-7 sm:mt-8 md:mt-0 flex justify-between flex-wrap w-full md:w-2/4">
            <div className="">
              <Heading
                text="MENU"
                className="mb-4 font-dm text-sm sm:text-base font-bold"
              />
              <List className={"capitalize"}>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>home</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Shop</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>About</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Contact</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Journal1</Link>
                </ListItem>
              </List>
            </div>
            <div className="">
              <Heading
                text="shop"
                className="mb-4 font-dm text-sm sm:text-base font-bold uppercase"
              />
              <List>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Category 1</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Category 2</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Category 3</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Category 4</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Category 5</Link>
                </ListItem>
              </List>
            </div>
            <div className="">
              <Heading
                text="help"
                className="mb-4 font-dm text-sm sm:text-base font-bold uppercase"
              />
              <List>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Privacy Policy</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Terms & Conditions</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Special E-shop</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Shipping</Link>
                </ListItem>
                <ListItem className="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]">
                  <Link to={""}>Secure Payments</Link>
                </ListItem>
              </List>
            </div>
            <div className="mt-8 sm:mt-0">
              <Heading
                tagname="h3"
                text="(052) 611-5711"
                className="font-dm md:mt-7 xl:mt-0 text-sm sm:text-base font-bold uppercase"
              />
              <Heading
                tagname="h3"
                text="company@domain.com"
                className="mb-0 xl:mb-4 font-dm text-sm sm:text-base font-bold"
              />
              <Paragraph
                text={"575 Crescent Ave. Quakertown, PA 18951"}
                classname="font-regular mt-[6px] font-dm text-sm sm:text-base text-[#6D6D6D]"
              />
            </div>
          </Flex>
          <div className="w-full md:w-2/4 flex md:justify-center">
            <picture>
              <Image
                imageLink={orebiLogo}
                className={
                  "w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px] xl:w-[121px] mt-5 md:mt-0"
                }
              />
            </picture>
          </div>
        </Flex>

        <Flex className={" justify-between gap-x-8 sm:gap-x-0 items-center pt-6 sm:pt-7 md:pt-[65px]"}>
          <Flex className="icons space-x-2.5 sm:space-x-6">
            <Link to={""}>
              <FaFacebookF className="sm:text-[20px]"/>
            </Link>
            <Link to={""}>
              <FaLinkedinIn className="sm:text-[20px]" />
            </Link>
            <Link to={""}>
              <IoLogoInstagram className="sm:text-[20px]" />
            </Link>
          </Flex>
          <Paragraph
            text="2020 Orebi Minimal eCommerce Figma Template by Adveits"
            classname={
              "font-regular mt-[6px] font-dm text-[10px] sm:text-base text-[#6D6D6D]"
            }
          />
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;