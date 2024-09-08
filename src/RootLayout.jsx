import React from "react";
import Navbar from "./components/section/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/section/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default RootLayout;
