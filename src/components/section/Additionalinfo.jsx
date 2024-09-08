import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Paragraph from "../layout/Paragraph";
import { RiNumber2 } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { IoReloadSharp } from "react-icons/io5";

const Additionalinfo = () => {
  return (
    <section className="-mt-2.5 border-b py-2.5 sm:py-3 md:py-4 lg:py-5">
      <Container>
        <Flex className={"justify-between items-center"}>
          <Flex className={"items-center gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4"}>
            <RiNumber2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" />
            <Paragraph
              text={"Two years warranty"}
              classname={"font-dm-sans text-[10px] md:text-[16px] text-[#6d6d6d]"}
            />
          </Flex>
          <Flex className={"items-center gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4"}>
            <FaTruck className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" />
            <Paragraph
              text={"Free delivary"}
              classname={"font-dm-sans text-[10px] md:text-[16px] text-[#6d6d6d]"}
            />
          </Flex>
          <Flex className={"items-center gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4"}>
            <IoReloadSharp className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" />
            <Paragraph
              text={"Two years warranty"}
              classname={"font-dm-sans text-[10px] md:text-[16px] text-[#6d6d6d]"}
            />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Additionalinfo;
