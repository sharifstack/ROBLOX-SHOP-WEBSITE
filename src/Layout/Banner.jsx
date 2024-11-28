import React from "react";
import Slider from "react-slick";
import banner1 from "../../public/banner/banner1.jpg";
import banner2 from "../../public/banner/banner2.jpg";
import banner3 from "../../public/banner/banner3.jpg";
import Container from "./Container";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "./Button";

const Banner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute right-1/3 bottom-0 translate-y-3 md:right-5 md:top-1/2 md:-translate-y-full rounded-full md:w-16 md:h-16 w-10 h-10 justify-center items-center"
        style={{ ...style, display: "flex", background: "#979797" }}
        onClick={onClick}
      >
        <FaArrowRight className="text-white" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute  left-1/3 bottom-0  translate-y-3 md:left-5 md:top-1/2 md:-translate-y-full rounded-full md:w-16 md:h-16 w-10 h-10 justify-center items-center z-10"
        style={{ ...style, display: "flex", background: "#979797" }}
        onClick={onClick}
      >
        <FaArrowLeft className="text-white" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    fade: false,
    autoplay: true,
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div className="relative"><img src={banner3} alt="" />
        <div className="md:absolute md:top-[48%] md:left-[7%] md:-translate-y-[48%] md:-translate-x-[-7%] md:z-10 hidden md:block">
          <Button/>
        </div>
        </div>
        <img src={banner2} alt="" />
        <img src={banner1} alt="" />
      </Slider>
    </div>
  );
};

export default Banner;
