import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProductCard = ({ className,Price, src, detail}) => {
  return (
    <div className={` group md:w-[250px] sm:w-[220px] mx-2 w-[185px] md:mx-0 ${className} bg-white rounded-2xl overflow-hidden hover:scale-105 transition-all duration-200`}>
      <div className="">
        <img className="w-full group-hover:scale-105 transition-all duration-500" src={src} alt="" />
      </div>
      <div className="text md:my-3 my-2 ml-4">
        <div className="price">
          <h4 className="font-arimo font-bold md:text-2xl text-lg"> {Price}</h4>
          <p className="font-arimo font-bold flex items-center text-sm sm:text-[16px] gap-1"><FiArrowRight />{detail}</p>
        </div>
      </div>
      <div className="group btn transition-all duration-200 text-center  group-hover:bg-black  group-hover:text-white">
        <Link to="/checkout"><button className="md:py-4 py-2 md:px-6 px-3  text-black transition-all duration-200  font-bold font-arimo group-hover:text-white">BUY</button></Link>
      </div>
    </div>
  );
};

export default ProductCard;
