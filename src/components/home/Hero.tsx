"use client"
import React from "react";
import gradientBg from "@/assets/home/herogradient.png";
import Image from "next/image";
import doubleLine from "@/assets/home/doubleunderline.png";
import LineButton from "../LineButton";
import Marquee from "react-fast-marquee";



// Importing Carousel Images
import CarouselImg1 from "@/assets/home/carousel/CarouselImg1.png"
import CarouselImg2 from "@/assets/home/carousel/CarouselImg2.png"
import CarouselImg3 from "@/assets/home/carousel/CarouselImg3.png"
import CarouselImg4 from "@/assets/home/carousel/CarouselImg4.png"
import CarouselImg5 from "@/assets/home/carousel/CarouselImg5.png"
import CarouselImg6 from "@/assets/home/carousel/CarouselImg6.png"
import CarouselImg7 from "@/assets/home/carousel/CarouselImg7.png"

// Partners carousel images
import partner1 from "@/assets/home/carousel/partners/partners1.png"
import partner2 from "@/assets/home/carousel/partners/partners2.png"
import ShadowButton from "../ShadowButton";

const Hero: React.FC = () => {
  return (
    <>
    <div className="relative flex flex-col  items-center justify-center py-44 sm:h-[70vh] lg:h-[100vh]">
      <Image src={gradientBg}  alt="gradietnBg" className="absolute sm:top-44 sm:scale-150 lg:scale-100 lg:-top-10" />
      <h2 className="font-[600] sm:text-[36px] lg:text-6xl text-center z-10 sm:leading-[43px] lg:leading-[70px] text-[20px] py-6">
        Redifining Your <br /> Stay & Dining{" "}
        <div className="text-[#00413E] inline relative">
          Experience{" "}
          <Image
            src={doubleLine}
            alt="doubelLine"
            className="absolute  right-0 lg:-bottom-8 -bottom-2"
          />
        </div>
      </h2>
      <p className=" sm:text-[16px] lg:text-[20px] text-center font-[500] max-w-[90vw] sm:max-w-[80vw]  z-10 lg:py-10 sm:py-10 text-[13px]">
        At Quiro, we&apos;re revolutionising the industry with a platform designed by
        HoReCa Community, for the community. Our all-in-one solution empowers
        your team to effortlessly manage everything
      </p>
      <div className="flex flex-col gap-4 sm:flex-row pt-8 sm:pt-0 z-10">
      <LineButton text="Get Started" />
      <ShadowButton text="Contact us" />
      </div>


      
    </div>
    <Carousel />
    <Partners />
    </>
  );
};





const Carousel = () => {
  return (
    <Marquee className="lg:py-20" >
      <Image src={CarouselImg1} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
      <Image src={CarouselImg2} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
      <Image src={CarouselImg3} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
      <Image src={CarouselImg4} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
      <Image src={CarouselImg5} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
      <Image src={CarouselImg6} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
      <Image src={CarouselImg7} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
      <Image src={CarouselImg1} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
      <Image src={CarouselImg2} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
      <Image src={CarouselImg3} alt="Carousel Imag 1" height={184} width={143} className="mx-3" />
    </Marquee>
  )
}


const Partners = () => {
  return (
    <div>
      <h5 className="font-[600] text-[24px] text-center lg:py-12 sm:pb-8 pt-20 pb-10 sm:pt-16">Discover our partners from around the world</h5>
      <Marquee className="sm:max-w-[60vw] mx-auto" direction="right">
      <Image src={partner1} alt="Carousel Imag 1" height={121} width={73} className="mx-10" />
      <Image src={partner2} alt="Carousel Imag 1" height={121} width={73} className="mx-10" />
      <Image src={partner1} alt="Carousel Imag 1" height={121} width={73} className="mx-10" />
      <Image src={partner2} alt="Carousel Imag 1" height={121} width={73} className="mx-10" />
      <Image src={partner1} alt="Carousel Imag 1" height={121} width={73} className="mx-10" />
      <Image src={partner2} alt="Carousel Imag 1" height={121} width={73} className="mx-10" />
      </Marquee>
    </div>
  )
}

export default Hero;
