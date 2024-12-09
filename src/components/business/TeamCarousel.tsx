"use client";
import React, { useState } from "react";
import Image from "next/image";
import team1 from "@/assets/business/TeamCarousel1.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import logo from "@/assets/Logo.png";

const teamMembers = [
  { 
    profileImage: team1, 
    name: "Rocky", 
    text: "Hubs of Joy", 
    description: "Our operations feel more streamlined than ever. Quiro brought the convenience we were missing!" 
  },
  { 
    profileImage: team1, 
    name: "Mayank", 
    text: "Arctic hills", 
    description: "Quiro is soo convinient, managing kitchen was a hassle for me, Quiro came in and made it really quick!" 
  },
  { 
    profileImage: team1, 
    name: "Gaurav", 
    text: "Hiker’s house", 
    description: "Quiro is quite easy to use, my staff got familiar with it within a couple of days" 
  },
];

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full text-center mb-[80px] sm:mb-[96px]">
      <Image
        src={logo}
        alt="logo"
        width={1000}
        className="hidden lg:block w-[188.39px] 3xl:mb-[83px] mb-[62.54px]"
      />
      <p className="text-[14px] leading-[21px] text-[#000000] font-[700] sm:text-[14px] sm:leading-[21px] lg:text-[27.13px] lg:leading-[40.69px] mb-[80px] sm:mb-[43.6px] lg:mb-[79.25px] px-[24px] sm:px-[93px] lg:px-[168px]">
        “The onboarding is seamless, they came, installed QRs & all, and we were
        live before you know it!”
      </p>
      <div className="relative w-full max-w-[265px] sm:max-w-[325px] lg:max-w-[610px]">
        {/* Carousel Content */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full flex flex-col items-center relative"
              >
                <Image
                  src={member.profileImage}
                  alt={`${member.name}'s profile`}
                  className="w-[48px] lg:w-[90.43px] mx-auto"
                />
                <h3 className="text-[13px] font-[500] leading-[19.5px] sm:text-[12.8px] sm:leading-[19.2px] lg:text-[24.11px] lg:leading-[36.17px] mt-[18px] lg:mt-[33.91px] text-[#000000]">
                  {member.name}
                </h3>
                <p className="text-[13px] font-[500] leading-[19.5px] sm:text-[12.8px] sm:leading-[19.2px] lg:text-[24.11px] lg:leading-[36.17px] text-[#006B66]">
                  {member.text}
                </p>
                <p className="text-[12px] leading-[18px] sm:text-[12px] sm:leading-[18px] lg:text-[20px] lg:leading-[30px] text-[#575A5E] mt-2">
                “{member.description}”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Static Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute top-[18%] left-[5%] lg:text-[30px] transform -translate-y-1/2 bg-[#F5F3ED] p-[7.36px] lg:p-[13.88px] rounded-full border-[0.24px] border-[#000000] shadow-[3px_3px_0_rgba(0,0,0,1)]"
        >
          <IoIosArrowRoundBack />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-[18%] right-[5%] lg:text-[30px] transform -translate-y-1/2 bg-[#F5F3ED] p-[7.36px] lg:p-[13.88px] rounded-full border-[0.24px] border-[#000000] shadow-[3px_3px_0_rgba(0,0,0,1)]"
        >
          <IoIosArrowRoundForward />
        </button>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-[52.6px] sm:mt-[55.2px] lg:mt-[104px]">
          {teamMembers.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 mx-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-[#000000]" : "bg-[#D9D9D9]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
