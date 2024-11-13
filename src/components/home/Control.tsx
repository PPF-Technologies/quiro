import React from "react";
import Image from "next/image";
import control1 from "../../assets/home/control/control1.png";
import control2 from "../../assets/home/control/control2.png";
import control3 from "../../assets/home/control/control3.png";
import control4 from "../../assets/home/control/control4.png";
import control5 from "../../assets/home/control/control5.png";
import control6 from "../../assets/home/control/control6.png";
import control7 from "../../assets/home/control/control7.png";
import services from "../../assets/home/AbsoluteImages/services.png";

const Control: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 gap-2 lg:px-40">
      <div className="flex flex-col justify-center items-center px-10">
        

        <h1 className="font-[600] text-[24px]  text-center lg:text-[48px] md:text-[24px] lg:leading-[57px] relative md:leading-[29px] mb-4">
          <Image src={services} alt="services" width={100} />
          A Product That Puts You in Control
        </h1>
        <p className="font-[500] text-[13px] text-center leading-[19.5px] lg:text-[20px] lg:py-4">
          All-in-one software that helps you take charge of your operations
          and unlock more revenue
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full lg:pt-8">
        {/* Upper Half */}
        <div className="flex flex-row justify-center items-center m-6">
          <div className="w-[72%]  flex flex-col space-y-4">
            <div className="flex flex-row justify-center items-center w-full lg:gap-2">
              <div className="w-[71%]">
                <Image
                  src={control1}
                  alt="control"
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-full "
                />
              </div>
              <div className="w-[29%] h-full pr-3">
                <Image
                  src={control2}
                  alt="control"
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className=" h-full mr-4">
              <Image
                src={control3}
                alt="control"
                layout="responsive"
               
              />
            </div>
          </div>
          <div className=" w-[28%] h-full">
            <Image
              src={control4}
              alt="control"
              
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Lower Half */}
        <div className="flex flex-col space-y-4 mx-6">
          <div className="w-full h-full">
            <Image
              src={control5}
              alt="control"
              
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-row w-full space-x-4">
            <div className="w-1/2 h-full">
              <Image
                src={control6}
                alt="control"
                layout="responsive"
               
              />
            </div>
            <div className="w-1/2 h-full">
              <Image
                src={control7}
                alt="control"
                layout="responsive"
               
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
