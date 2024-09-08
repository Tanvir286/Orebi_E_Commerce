import React from "react";
import Container from "../layout/Container";
import Heading from "../layout/Heading";
import Flex from "../layout/Flex";
import ProductCard from "../layout/ProductCard";
import { bestsaller } from "../../Demo Data/ProductCategoryData";

const BestSaller = () => {
  return (
    <section className="pt-10 sm:pt-14 md:pt-18 lg:pt-23 xl:pt-28 2xl:pt-32">
      <Container>
        <Heading
          tagname="h1"
          text="Best Saller"
          className="font-bold font-dm-sans text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[35px] 2xl:text-[40px] capitalize pb-3 sm:pb-5 md:pb-8 lg:pb-10 2xl:pb-12"
        />
        <Flex className={"justify-center gap-x-6 md:gap-x-8 flex-wrap"}>
          {bestsaller.map((item, index) => (
            <div className="mb-4 w-full sm:w-[300px] md:w-[47%] lg:w-[31%] xl:w-[23%]">
              <ProductCard
                key={index}
                className="mx-auto w-[95%] sm:w-full"
                productImageLink={item.productImageSrc}
                tag={item.badgeText}
                tagVisibility={item.badge}
                productName={item.productName}
                productPrice={item.productPrice}
                productColor={item.productColor}
              />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default BestSaller;
