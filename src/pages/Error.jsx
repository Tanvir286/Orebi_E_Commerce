import React from "react";
import Container from "../components/layout/Container";
import Heading from "../components/layout/Heading";
import Paragraph from "../components/layout/Paragraph";
import Input from "../components/layout/Input";
import Button from "../components/layout/Button";
import CusButton from "../components/layout/CusButton";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <Container>
        <Heading
          tagname="h4"
          text="404"
          className="text-[100px] sm:text-[120px] md:text-[140px] lg:text-[160px] xl:text-[170px] 2xl:text-[200px] font-dm-sans"
        />
        <Paragraph
          text={
            "The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?"
          }
          classname={"text-secondary-color max-w-[600px]"}
        />
        <div className="search-box mt-6 sm:mt-8 md:mt-10 lg:mt-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-[180px] sm:w-[320px] md:w-[400px] lg:w-[500px] xl:w-[600px] bg-white border-[#f0f0f0] border-[2px] rounded relative">
          <Input
            type={"text"}
            placeholder={"search products"}
            className={
              "w-full py-1 sm:py-2.5 md:py-3 pl-2.5 md:pl-5 pr-[28px] md:pr-[53px] lg:pr-[54px] placeholder:text-xs md:placeholder:text-base md:text-base text-xs placeholder:text-[#C4C4C4] font-dm-sans capitalize"
            }
          />
          <Button
            text={<FaSearch className="text-xs md:text-lg" />}
            className={
              " absolute right-0 top-0 py-2 sm:py-3 px-2 md:py-[16px] md:px-[18px]"
            }
          />
        </div>
        <Link to={"/"}>
        <CusButton text={"Back To Home"}/>
        </Link>
      </Container>
    </section>
  );
};

export default Error;
