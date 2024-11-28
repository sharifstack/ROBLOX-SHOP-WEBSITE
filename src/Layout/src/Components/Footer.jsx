import React from "react";
import Container from "../Layout/Container";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#232527] py-10 ">
        <Container className="flex flex-col items-center gap-8">
          <div className="text  ">
            <ul className=" text-white  flex items-center gap-4 font-arimo">
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to=""> Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="icons flex items-center gap-4">
            <a href="https://www.facebook.com/groups/167322237262382"><FaFacebookF className="text-blue-600 w-7 h-7" /></a>
            <a href="https://wa.me/qr/7AQ54S3FL2IXB1"><IoLogoWhatsapp className="text-[#128C7E] w-7 h-7" /></a>
          </div>

          <div className="rights">
            <p className="text-white font-arimo text-sm text-center">
              Copyright © 2024 - All right reserved by Roblox Bangladesh
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
