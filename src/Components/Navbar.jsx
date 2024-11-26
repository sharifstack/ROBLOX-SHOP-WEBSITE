import React from "react";

import logo from '../../public/logo.png'
import { Link } from "react-router-dom";
import Container from "../Layout/Container";

const Navbar = () => {
  return (
    <div>
      <nav className="py-6  absolute w-full z-10 backdrop-blur-xl rounded-none md:rounded-b-full pl-5 md:pl-0">
        <Container className="flex items-center ">
          <div className="logo relative">
           <Link to="/"> <img className="w-24" src={logo} alt="" /></Link>
          </div>
          <div className="menu absolute md:left-1/2 -translate-x-1/2  left-3/4 ">
            <ul className="flex md:gap-10 gap-5 items-center justify-center font-arimo font-bold text-lg text-white uppercase ">
              <li className="hover:scale-105 hover:border-b hover:border-white  transition-all duration-200">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:scale-105 transition-all hover:border-b hover:border-white duration-200">
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Navbar;
