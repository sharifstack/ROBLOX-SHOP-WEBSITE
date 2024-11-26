import React from "react";
import Banner from "../Layout/Banner";
import Container from "../Layout/Container";
import { Link } from "react-router-dom";
import "animate.css";
import bg2 from "../../public/bg3.jpg";
import Button from "../Layout/Button";

const Home = () => {
  return (
    <div className=" bg-[url(../public/bg.png)] bg-contain bg-center ">
      <div className="slider">
        <Link to="/shop">
          {" "}
          <Banner />
        </Link>
      </div>
      <Container className='md:py-[100px] py-[15px] '>
        <div
          className={`text  animate__animated animate__fadeIn   text-white bg-[url(../public/bgimg.png)] rounded-xl bg-cover bg-no-repeat bg-center mt-8 py-16 relative z-10 after:content-[""] after:absolute after:w-full after:h-full  after:bg-black/60 after:left-0 after:top-0 after:-z-10 `}
        >
          <div className="headertext text-center animate__animated animate__fadeInDown animate__backOutUp  ">
            <h1 className="md:text-[60px] text-[30px] font-bold font-arimo">
              Buy Robux Easily and Securely
            </h1>
            <h2 className="text-[30px] font-bold font-arimo my-4">
              Your One-Stop Robux Marketplace in Bangladesh!
            </h2>
          </div>

          <div className="description md:w-[700px] w-[450px] text-center mx-auto font-bold my-5 animate__animated animate__fadeInDown animate__backOutUp animate__delay-1s">
            <p>
              Welcome to the ultimate Robux buying platform in Bangladesh!
              Managing a thriving Roblox community on Facebook, I’ve seen the
              challenges buyers face when dealing with individual sellers.
              That’s why I created this website—to bring all your Robux buying
              options under one roof. No more hassle of contacting multiple
              sellers. With my platform, you can easily browse and purchase
              Robux directly, ensuring a smooth, secure, and trustworthy
              experience. By centralizing sales, we provide competitive pricing,
              reliable transactions, and the convenience you deserve. Join the
              revolution and level up your Roblox journey today!
            </p>
          </div>
        </div>
      </Container>
      {/* ---------------------------------------------------SECTIONS----------------------------------------------------- */}
      <Container className="md:py-[150px] py-[45px] backdrop-blur-sm">
        <div className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden items-center">
          <div className="md:w-1/2 animate__animated animate__backInLeft ">
            <img src={bg2} alt="" />
          </div>
          <div className="md:w-1/2 flex flex-col px-5 animate__animated animate__backInRight animate__delay-2s ">
            <h1 className="text-[#FBD784] font-arimo font-bold md:text-5xl text-center text-xl mt-4 md:mt-0">
              HAVE YOU ORDERED YOUR ROBUX YET?
            </h1>
            <p className="text-white text-center md:text-start font-arimo font-bold py-5 md:text-2xl uppercase text-xs">
             
              At Roblox Bangladesh Shop, we are committed to providing a
              seamless and reliable platform for buying Robux in Bangladesh. Our
              focus is on delivering a hassle-free experience, ensuring your
              Robux is delivered within 5 to 30 minutes of purchase. We
              prioritize customer satisfaction and offer secure payment methods
              to give you peace of mind. With competitive pricing and verified
              sellers, we make sure every transaction is safe, quick, and
              trustworthy.
            </p>
            <h1 className="text-white font-arimo font-bold md:text-4xl text-2xl text-center md:text-start">SO ARE YOU READY TO ORDER?</h1>
            <div className="py-7 text-center">
             <Link to="/shop"><Button/></Link> 
            </div>
          </div>
        </div>
      </Container>

    
    </div>
  );
};

export default Home;
