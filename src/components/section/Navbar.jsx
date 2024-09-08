import React, { useEffect, useRef, useState } from "react";
import Image from "../layout/Image";
import Container from "../layout/Container";
import Flex from "../layout/Flex";
import Button from "../layout/Button";
import orebiLogo from "../../../public/assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaXmark, FaBars } from "react-icons/fa6";
import Header from "./Header";

const navigation = [
  { name: "home", href: "/" },
  { name: "shop", href: "/shop" },
  { name: "about-us", href: "/about-us" },
  { name: "contacts", href: "/contacts" },
  { name: "journal", href: "/journal" },
];

const Navbar = () => {
  const [navMenuShow, setNavMenuShow] = useState(false);
  let sideMenuRef = useRef();
  let sideButtonRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (sideButtonRef.current.contains(e.target)) {
        setNavMenuShow(true);
      } else if (!sideMenuRef.current.contains(e.target)) {
        setNavMenuShow(false);
      }
    });
  }, []);

  return (
    <div className=" sticky top-0 left-0 right-0 !z-50">
      <nav className="py-3 md:py-[14px] lg:py-4 xl:py-5 !z-20 bg-white backdrop-blur-lg">
        <Container>
          <Flex
            className={
              " justify-between sm:justify-start sm:gap-x-[200px] md:gap-x-[300px] lg:gap-x-[400px] items-center xl:gap-x-[543px]"
            }
          >
            <Link to={"/"}>
              <Image
                imageLink={orebiLogo}
                altText={"company-logo"}
                className={
                  "w-[45px] sm:w-[50px] md:w-[55px] lg:w-[60px] xl:w-[65] 2xl:w-[70px]"
                }
              />
            </Link>
            <Button
              buttonRef={sideButtonRef}
              icon={<FaBars />}
              iconAlighnment={"left"}
              className={"sm:hidden text-xs"}
            />
            <div className="hidden text-xs lg:text-[15px] xl:text-[18px] capitalize sm:flex justify-end gap-x-6 md:gap-x-8 lg:gap-x-9 xl:gap-x-10 font-dm-sans">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) => {
                    return isActive
                      ? "font-semibold after:transition-all after:ease-in-out after:duration-300 relative after:content-[''] after:bg-primary-color after:w-full after:h-[2px] after:absolute after:-bottom-[5px] after:left-2/4 after:rounded-xl after:hover:w-full after:-translate-x-2/4"
                      : "font-regular after:transition-all after:ease-in-out after:duration-300 relative after:content-[''] after:bg-primary-color after:w-0 after:h-[2px] after:absolute after:-bottom-[5px] after:left-2/4 after:rounded-xl after:hover:w-full after:-translate-x-2/4";
                  }}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Flex>
        </Container>
      </nav>
      <Header />
      <div
        ref={sideMenuRef}
        className={`bg-white/60 border-l border-gray-200 !z-20 backdrop-blur-sm w-[300px] h-full px-2.5 py-4 md:py-5 fixed top-0 right-0  sm:hidden transition-all duration-300 ${navMenuShow ? "translate-x-0" : "translate-x-full"}`}
      >
        <Flex className={"justify-between items-center"}>
          <picture>
            <Image
              imageLink={orebiLogo}
              altText={"company-logo"}
              className={"w-[45px] sm:w-[50px]"}
            />
          </picture>
          <Button
            onClick={() => setNavMenuShow(!navMenuShow)}
            icon={<FaXmark className="sm:hidden text-sm" />}
            iconAlighnment={"left"}
          />
        </Flex>
        <div className="text-base capitalize font-dm-sans mt-8">
          {navigation.map((item) => (
            <NavLink
              onClick={() => setNavMenuShow(!navMenuShow)}
              key={item.name}
              to={item.href}
              className={({ isActive }) => {
                return isActive
                  ? "font-bold after:transition-all after:ease-in-out after:duration-300 relative after:content-[''] after:bg-primary-color after:w-[21%] after:h-[2px] after:absolute after:bottom-0 after:left-0 after:rounded-xl after:hover:w-1/4"
                  : "font-reguler after:transition-all after:ease-in-out after:duration-300 relative after:content-[''] after:bg-primary-color after:w-0 after:h-[2px] after:absolute after:bottom-0 after:left-0 after:rounded-xl after:hover:w-1/4";
              }}
            >
              <p className="mb-2.5">{item.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
