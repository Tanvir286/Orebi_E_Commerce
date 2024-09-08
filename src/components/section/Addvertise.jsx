import React from "react";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Image from "../layout/Image";
import { Link } from "react-router-dom";
import addOne from "../../../public/assets/Ad_1.png";
import addTwo from "../../../public/assets/Ad_2.png";
import addThree from "../../../public/assets/Ad_3.png";

const Addvertise = () => {
  return (
    <section className="pt-6 sm:pt-9 md:pt-14 lg:pt-18 xl:pt-20 2xl:pt-24">
      <Container>
        <Flex className={"justify-between gap-x-2.5 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 xl:gap-x-10"}>
          <div>
            <Link>
              <Image imageLink={addOne} />
            </Link>
          </div>
          <Flex className={" flex-col justify-between"}>
            <Link>
              <Image imageLink={addTwo} />
            </Link>
            <Link>
              <Image imageLink={addThree} />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Addvertise;
