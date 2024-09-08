import React, { useEffect, useRef, useState } from "react";
import Container from "../components/layout/Container";
import Flex from "../components/layout/Flex";
import BreadCrump from "../components/layout/BreadCrump";
import ShopSideBarDropDown from "../components/layout/ShopSideBarDropDown";
import Select from "../components/layout/Select";
import Option from "../components/layout/Option";
import Button from "../components/layout/Button";
import { FaList } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { IoOptionsSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import {
  category,
  color,
  brand,
  price,
} from "../Demo Data/ProductCategoryData";
import Pagination from "../components/layout/Pagination";

const Shop = () => {
  const [paginationItemShow, setPaginationItemShow] = useState(12);
  const [sideBarShow, setSideBarShow] = useState(false);

  let categoryRef = useRef();
  let buttonRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (buttonRef.current.contains(e.target)) {
        setSideBarShow(true);
      } else if (!categoryRef.current.contains(e.target)) {
        setSideBarShow(false);
      }
    });
  }, []);

  return (
    <section className=" ">
      <Container>
        <BreadCrump />
        <Flex
          className={
            "justify-between mt-5 sm:mt-7 md:mt-10 lg:mt-13 xl:mt-16 gap-x-4 sm:gap-x-3 md:gap-x-6 lg:gap-8 xl:gap-x-12 relative"
          }
        >
          <div
            ref={categoryRef}
            className={`${sideBarShow ? " translate-x-0" : " -translate-x-[110%] sm:translate-x-0"} bg-[#f5f5f3] p-4 sm:p-0 w-2/3 sm:w-1/5 sm:static absolute top-0 left-0 sm:bg-white z-10 sm:block rounded-[10px] sm:rounded-none transition duration-300`}
          >
            <ShopSideBarDropDown
              dropDownOn={false}
              dropDownTitle={"shop by category"}
              data={category}
            />
            <ShopSideBarDropDown
              dropDownOn={true}
              dropDownTitle={"shop by color"}
              data={color}
            />
            <ShopSideBarDropDown
              dropDownOn={true}
              dropDownTitle={"shop by brand"}
              data={brand}
            />
            <ShopSideBarDropDown
              dropDownOn={true}
              dropDownTitle={"shop by price"}
              data={price}
            />
            <MdCancel
              onClick={() => setSideBarShow(false)}
              className=" absolute top-4 right-4 cursor-pointer active:scale-110 sm:hidden"
            />
          </div>

          <div className="w-full sm:w-4/5 md:w-4/5">
            <div
              ref={buttonRef}
              className={"flex w-28 gap-2 sm:hidden mb-4 cursor-pointer"}
            >
              <img
                className="w-[20px] rotate-90"
                src="../../public/assets/optionsicon.gif"
                alt=""
              />
              <span>Filtering</span>
            </div>
            <Flex
              className={
                " mb-6 sm:mb-5 md:mb-7 lg:mb-9 xl:mb-10 2xl:mb-12 justify-between items-center"
              }
            >
              <div className="buttons space-x-[8px] sm:space-x-[12px] md:space-x-[16px] lg:space-x-[20px]">
                <Button
                  icon={
                    <BsGridFill className="text-white text-xs sm:text-sm md:text-base xl:text-lg" />
                  }
                  iconAlighnment={"right"}
                  className={"px-1 py-1 lg:px-3 lg:py-2.5 bg-black"}
                />
                <Button
                  icon={
                    <FaList className="text-[#737373] text-xs sm:text-sm md:text-base xl:text-lg" />
                  }
                  iconAlighnment={"right"}
                  className={
                    "px-1 py-1 lg:px-3 lg:py-2.5 border-[#F0F0F0] border-[1px] "
                  }
                />
              </div>
              <div>
                <form
                  action=""
                  className="flex items-center gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-7 xl:gap-x-10"
                >
                  <Flex
                    className={
                      " flex flex-row items-center gap-x-1 sm:gap-x-2 lg:gap-4"
                    }
                  >
                    <label
                      className="text-[12px] sm:text-sm"
                      htmlFor="category"
                    >
                      Sort by:
                    </label>
                    <Select
                      id="category"
                      className=" w-[100px] sm:w-[150px] lg:w-[240px] border-[1px] border-[#F0F0F0] px-1 md:px-4 py-1 md:py-[6px] lg:py-2 text-xs sm:text-sm md:text-base"
                    >
                      <Option
                        optionText="featured"
                        optionValue="featured"
                        selected={true}
                      />
                      <Option
                        className={" px-4 py-2"}
                        optionText="Best Saller"
                        optionValue="best-saller"
                      />
                      <Option
                        className={"px-4 py-5 "}
                        optionText="New Arrivals"
                        optionValue="new-arrivals"
                      />
                    </Select>
                  </Flex>
                  <Flex
                    className={
                      "items-center flex-row gap-x-1 sm:gap-x-2 md:gap-x-3 lg:gap-x-4"
                    }
                  >
                    <label
                      className="text-[12px] sm:text-sm"
                      htmlFor="item-show"
                    >
                      Show:
                    </label>
                    <Select
                      onChange={(e) => setPaginationItemShow(+e.target.value)}
                      id="item-show"
                      className="w-[60px] sm:w-[80px] lg:w-[140px] border-[1px] border-[#F0F0F0] py-1 px-2 md:px-4 md:py-[6px] lg:py-2 text-xs sm:text-sm md:text-base"
                    >
                      <Option
                        optionText="12"
                        optionValue="12"
                        selected={true}
                      />
                      <Option optionText="24" optionValue="24" />
                      <Option optionText="48" optionValue="48" />
                    </Select>
                  </Flex>
                </form>
              </div>
            </Flex>
            <Pagination itemsPerPage={paginationItemShow} />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Shop;
