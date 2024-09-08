import React, { useState } from "react";
import Container from "../components/layout/Container";
import BreadCrump from "../components/layout/BreadCrump";
import Flex from "../components/layout/Flex";
import ListItem from "../components/layout/ListItem";
import Paragraph from "../components/layout/Paragraph";
import List from "../components/layout/List";
import Heading from "../components/layout/Heading";

const MyAccount = () => {
  const [itemOpen, setItemOpen] = useState("dashboard");
  return (
    <section>
      <Container>
        <BreadCrump />
        <Flex className={"mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-18 2xl:mt-20 gap-x-4 sm:gap-x-10"}>
          <div className="w-1/3 sm:w-1/4">
            <List>
              <ListItem
                onClick={() => setItemOpen("dashboard")}
                className={`text-sm md:text-base font-dm-sans ${itemOpen == "dashboard" ? "bg-[#f5f5f3] text-primary-color" : " bg-white text-secondary-color"} px-1 md:px-3 hover:bg-[#f5f5f3] transition duration-300 ease-in-out py-2.5 sm:py-[14px] lg:py-5 border-b-[1px] border-[#f0f0f0] capitalize cursor-pointer`}
              >
                Dashboard
              </ListItem>
              <ListItem
                onClick={() => setItemOpen("others")}
                className={`text-sm md:text-base font-dm-sans ${itemOpen == "others" ? "bg-[#f5f5f3] text-primary-color" : " bg-white text-secondary-color"} px-1 md:px-3 hover:bg-[#f5f5f3] transition duration-300 ease-in-out py-2.5 sm:py-[14px] lg:py-5 border-b-[1px] border-[#f0f0f0] capitalize cursor-pointer`}
              >
                others
              </ListItem>
              <ListItem
                onClick={() => setItemOpen("downloads")}
                className={`text-sm md:text-base font-dm-sans ${itemOpen == "downloads" ? "bg-[#f5f5f3] text-primary-color" : " bg-white text-secondary-color"}  px-1 md:px-3 hover:bg-[#f5f5f3] transition duration-300 ease-in-out py-2.5 sm:py-[14px] lg:py-5 border-b-[1px] border-[#f0f0f0] capitalize cursor-pointer`}
              >
                Donwloads
              </ListItem>
              <ListItem
                onClick={() => setItemOpen("addresses")}
                className={`text-sm md:text-base font-dm-sans ${itemOpen == "addresses" ? "bg-[#f5f5f3] text-primary-color" : " bg-white text-secondary-color"} px-1 md:px-3 hover:bg-[#f5f5f3] transition duration-300 ease-in-out py-2.5 sm:py-[14px] lg:py-5 border-b-[1px] border-[#f0f0f0] capitalize cursor-pointer`}
              >
                Addresses
              </ListItem>
              <ListItem
                onClick={() => setItemOpen("accountDetails")}
                className={`text-sm md:text-base font-dm-sans ${itemOpen == "accountDetails" ? "bg-[#f5f5f3] text-primary-color" : " bg-white text-secondary-color"} px-1 md:px-3 hover:bg-[#f5f5f3] transition duration-300 ease-in-out py-2.5 sm:py-[14px] lg:py-5 border-b-[1px] border-[#f0f0f0] capitalize cursor-pointer`}
              >
                Account details
              </ListItem>
              <ListItem
                onClick={() => setItemOpen("logout")}
                className={`text-sm md:text-base font-dm-sans ${itemOpen == "logout" ? "bg-[#f5f5f3] text-primary-color" : " bg-white text-secondary-color"} px-1 md:px-3 hover:bg-[#f5f5f3] transition duration-300 ease-in-out py-2.5 sm:py-[14px] md:py-5 border-b-[1px] border-[#f0f0f0] capitalize cursor-pointer`}
              >
                Logout
              </ListItem>
            </List>
          </div>
          <div className="w-2/3 sm:w-3/4">
            {itemOpen == "dashboard" && (
              <List>
                <ListItem className={"text-secondary-color text-xs sm:text-sm md:text-lg mb-10"}>
                  Hello{" "}
                  <span className="font-bold cursor-pointer text-primary-color">
                    admin
                  </span>{" "}
                  (not{" "}
                  <span className="font-bold cursor-pointer text-primary-color">
                    admin?
                  </span>{" "}
                  <span className="font-bold cursor-pointer text-primary-color">
                    log out
                  </span>
                  )
                </ListItem>
                <ListItem className={"text-secondary-color text-xs sm:text-sm md:text-lg mb-10"}>
                  From your account dashboard you can view your{" "}
                  <span className="font-bold cursor-pointer text-primary-color">
                    recent orders
                  </span>{" "}
                  recent orders, manage your{" "}
                  <span className="font-bold cursor-pointer text-primary-color">
                    shipping and billing addresses
                  </span>{" "}
                  , and{" "}
                  <span className="font-bold cursor-pointer text-primary-color">
                    edit your password and account details.
                  </span>
                </ListItem>
              </List>
            )}
            {itemOpen == "others" && (
              <div className="w-full">
                <Heading tagname="h4" text="this is Others" className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-[27px] 2xl:text-[30px] capitalize mb-2.5"/>
                <Paragraph
                classname={"md:w-9/12 text-secondary-color"}
                  text={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
                  }
                />
              </div>
            )}
            {itemOpen == "downloads" && (
              <div className="w-full">
              <Heading tagname="h4" text="this is Others" className="font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-[27px] 2xl:text-[30px] capitalize mb-2.5"/>
              <Paragraph
              classname={"md:w-9/12 text-secondary-color"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
                }
              />
            </div>
            )}
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default MyAccount;
