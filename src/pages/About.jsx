import React from "react";
import Container from "../components/layout/Container";
import BreadCrump from "../components/layout/BreadCrump";
import Flex from "../components/layout/Flex";
import Image from "../components/layout/Image";
import aboutUsOne from "../../public/assets/about-us-1.png";
import aboutUsTwo from "../../public/assets/about-us-2.png";
import Heading from "../components/layout/Heading";
import { Link } from "react-router-dom";
import Paragraph from "../components/layout/Paragraph";

const About = () => {
  return (
    <section>
      <Container>
        <BreadCrump title={"About"} />
        <Flex
          className={
            "justify-between gap-x-3 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 xl:gap-x-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16"
          }
        >
          <Link>
            <Image imageLink={aboutUsOne} className={"w-full"} altText={"random-image"}/>
          </Link>
          <Link>
            <Image imageLink={aboutUsTwo} className={"w-full"} altText={"random-image"}/>
          </Link>
        </Flex>
        <Heading
          text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
          className="font-dm-sans text-[20px] sm:text-[23px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16"
        />
        <Flex className={"justify-between flex-wrap"}>
          <div className=" w-full  lg:w-[32%] mb-4 lg:mb-0">
            <Heading
              text="Our Vision"
              className="font-bold text-[20px] capitalize mb-2.5"
            />
            <Paragraph
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
              }
              classname={"text-[#767676]"}
            />
          </div>
          <div className=" w-full  lg:w-[32%]  mb-4 lg:mb-0">
            <Heading
              text="Our story"
              className="font-bold text-[20px] capitalize mb-2.5"
            />
            <Paragraph
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
              }
              classname={"text-[#767676]"}
            />
          </div>
          <div className=" w-full  lg:w-[32%]  mb-4 lg:mb-0">
            <Heading
              text="Our brand"
              className="font-bold text-[20px] capitalize mb-2.5"
            />
            <Paragraph
              text={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
              }
              classname={"text-[#767676]"}
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
