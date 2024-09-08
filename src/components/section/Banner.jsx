import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// image
import bannerImageOne from "../../../public/assets/banner-image.png";
import Image from "../layout/Image";
import { Link } from "react-router-dom";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "9%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "35px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0",
              }
            : {
                width: "35px",
                color: "#262626",
                borderRight: "3px white solid",
                padding: "10px 0",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                left: "8%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "22px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                      padding: "7px 0",
                      fontSize: "12px",
                    }
                  : {
                      width: "22px",
                      color: "#262626",
                      borderRight: "2px white solid",
                      padding: "7px 0",
                      fontSize: "12px",
                      color: "transparent",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 640,
        settings: {
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                left: "5%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "20px",
                      color: "#262626",
                      borderRight: "2px #262626 solid",
                      padding: "5px 0",
                      fontSize: "10px",
                    }
                  : {
                      width: "20px",
                      color: "#262626",
                      borderRight: "2px white solid",
                      padding: "5px 0",
                      fontSize: "10px",
                      color: "transparent",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <section className=" relative">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Link>
              <picture>
                <Image
                  className="w-full"
                  imageLink={bannerImageOne}
                  altText={"banner-item-image"}
                />
              </picture>
            </Link>
          </div>
          <div>
            <Link>
              <picture>
                <Image
                  className="w-full"
                  imageLink={bannerImageOne}
                  altText={"banner-item-image"}
                />
              </picture>
            </Link>
          </div>
          <div>
            <Link>
              <picture>
                <Image
                  className="w-full"
                  imageLink={bannerImageOne}
                  altText={"banner-item-image"}
                />
              </picture>
            </Link>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Banner;
