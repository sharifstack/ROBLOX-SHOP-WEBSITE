import React from "react";
import { FiArrowRight } from "react-icons/fi";

const ProductCard = ({ className,Price, src, detail}) => {
  return (
    <div className={` group md:w-[250px] w-[220px] mx-2 md:mx-0 ${className} bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-200`}>
      <div className="">
        <img className="w-full group-hover:scale-105 transition-all duration-500" src={src} alt="" />
      </div>
      <div className="text my-3 ml-4">
        <div className="price">
          <h4 className="font-arimo font-bold text-2xl"> {Price}</h4>
          <p className="font-arimo font-bold flex items-center gap-1"><FiArrowRight />{detail}</p>
        </div>
      </div>
      <div className=" group btn border bg-white text-black  text-center hover:bg-black  transition-all duration-200">
        <button className="py-4 px-6 group-hover:text-black  transition-all duration-200  font-bold font-arimo">BUY</button>
      </div>
    </div>
  );
};

export default ProductCard;
