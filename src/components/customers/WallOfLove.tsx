import React from "react";
import Image from "next/image";
import pic1 from "@/assets/customers/wallOfLove1.png";
import pic2 from "@/assets/customers/wallOfLove2.png";
import pic4 from "@/assets/customers/wallOfLove4.png";

const WallOfLove: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-[47px] sm:px-[72px] lg:px-[316px]">
      <div className="flex flex-col mb-[30.16px] sm:mb-[36px] lg:mb-[70px]">
        <p className="billyOhioText text-[#006B66] text-[16px] sm:text-[20px] sm:leading-[30px] lg:text-[28px] font-[400] text-start -translate-x-2 sm:-translate-x-6">
          Wall of Love
        </p>
        <h1 className="text-[#000000] text-[20px] leading-[24px] sm:text-[24px] sm:leading-[28.8px] lg:text-[36px] lg:leading-[43.2px] font-[700] pb-[14px] sm:pb-[10px]">
          What Guests Love About Quiro
        </h1>
        <p className="text-[13px] leading-[19.5px] sm:text-[11px] sm:leading-[16.5px] lg:text-[14px] lg:leading-[21px] font-[500]">
          From hassle-free check-ins to unforgettable stays, here’s why loved
          Quiro
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row sm:mb-[17.71px] lg:mb-[22.59px]">
          <div className="flex flex-col bg-[#F58121] pl-[21px] pt-[34.55px] pr-[20px] pb-[26.81px] sm:pt-[20.18px] sm:pr-[20.72px] sm:pl-[15.56px] sm:pb-[20.69px] lg:pt-[34px] lg:pr-[20.32px] lg:pl-[27px] lg:pb-[26.32px] rounded-[7.73px] mb-[20.87px] sm:mb-[0px] sm:mr-[16.22px] lg:mr-[21.15px]">
            <p className="text-[#000000] text-[11px] leading-[19.8px] sm:text-[10px] sm:leading-[18px] lg:text-[14px] lg:leading-[25.2px] font-[600]">
              “Everything was so easy with Quiro. Quick access, fast
              service—made my stay stress-free”
            </p>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col justify-end">
                <p className="text-[#000000] text-[10px] leading-[20px] sm:text-[10px] sm:leading-[20px] lg:text-[13px] lg:leading-[26px] font-[600]">
                  Anita Kapoor
                </p>
                <p className=" text-[#000000] text-[10px] leading-[20px] sm:text-[10px] sm:leading-[20px] lg:text-[13px] lg:leading-[26px] font-[400] pb-[14px] sm:pb-[10px] lg:pb-[13px]">
                  Frequent Traveler
                </p>
              </div>
              <Image
                src={pic1}
                alt="pic1"
                width={1000}
                className="w-[77.67px] sm:w-[57.5px] lg:w-[75px] pt-[93.4px] sm:pt-[70.25px] lg:pt-[54px]"
              />
            </div>
          </div>
          <div className="flex flex-col bg-[#9E326D] pl-[20.71px] pt-[34.43px] pr-[20.28px] pb-[27.03px] sm:pt-[20.18px] sm:pr-[24.49px] sm:pl-[25.57px] sm:pb-[20.69px] lg:pt-[33.58px] lg:pr-[33.01px] lg:pl-[32.53px] lg:pb-[26.38px] rounded-[7.73px] mb-[20.87px] sm:mb-[0px]">
            <p className="text-[#F5F3ED] text-[11px] leading-[19.8px] sm:text-[10px] sm:leading-[18px] lg:text-[14px] lg:leading-[25.2px] font-[600]">
              “My stay was so much more enjoyable with Quiro in the background.
              Everything worked effortlessly, and I didn’t have to worry about
              anything. Loved it!”
            </p>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col justify-end">
                <p className="text-[#F5F3ED] text-[10px] leading-[20px] sm:text-[10px] sm:leading-[20px] lg:text-[13px] lg:leading-[26px] font-[600]">
                  Rohit Sharma
                </p>
                <p className="text-[#F5F3ED] text-[10px] leading-[20px] sm:text-[10px] sm:leading-[20px] lg:text-[13px] lg:leading-[26px] font-[400] pb-[12px] sm:pb-[10px] lg:pb-[12px]">
                  Business Traveler
                </p>
              </div>
              <Image
                src={pic2}
                alt="pic1"
                width={1000}
                className="w-[76px] sm:w-[57.5px] lg:w-[75px] pt-[70px] "
              />
            </div>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col bg-[#E5343E] pl-[20.72px] pt-[34.43px] pr-[20.28px] pb-[27px] sm:pt-[19.74px] sm:pr-[24.72px] sm:pl-[26.15px] sm:pb-[19.88px] lg:pt-[35px] lg:pr-[33.36px] lg:pl-[33px] lg:pb-[25.32px] rounded-[7.73px] mb-[20.87px] sm:mb-[0px]  sm:mr-[16.2px] lg:mr-[21.14px]">
            <p className="text-[#F5F3ED] text-[11px] leading-[19.8px] sm:text-[10px] sm:leading-[18px] lg:text-[14px] lg:leading-[25.2px] font-[600]">
              “Everything was so easy with Quiro. Quick access, fast
              service—made my stay stress-free”
            </p>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col justify-end">
                <p className="text-[#F5F3ED] text-[10px] leading-[20px] sm:text-[10px] sm:leading-[20px] lg:text-[13px] lg:leading-[26px] font-[600]">
                  Anita Kapoor
                </p>
                <p className="text-[#F5F3ED] text-[10px] leading-[20px] sm:text-[10px] sm:leading-[20px] lg:text-[13px] lg:leading-[26px] font-[400] pb-[12px] lg:pb-[15px]">
                  Frequent Traveler
                </p>
              </div>
              <Image
                src={pic1}
                alt="pic1"
                width={1000}
                className="w-[77.67px] sm:w-[57.5px] lg:w-[75px] pt-[70px] sm:pt-[46.93px] lg:pt-[50px]"
              />
            </div>
          </div>

          <div className="flex flex-col bg-[#F3CCE7] pl-[21px] pt-[34.97px] pr-[20px] pb-[17.03px] sm:pt-[29.74px] sm:pr-[22.72px] sm:pl-[25.42px] sm:pb-[24.58px] lg:pt-[35.03px] lg:pr-[29.32px] lg:pl-[33.5px] lg:pb-[31.36px] rounded-[7.73px] mb-[20.87px] sm:mb-[0px] ">
            <p className="text-[#000000] text-[11px] leading-[19.8px] sm:text-[10px] sm:leading-[18px] lg:text-[14px] lg:leading-[25.2px] font-[600]">
              “Everything was so easy with Quiro. Quick access, fast
              service—made my stay stress-free”
            </p>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col justify-end">
                <p className="text-[#000000] text-[10px] leading-[20px] sm:text-[10px] sm:leading-[20px] lg:text-[13px] lg:leading-[26px] font-[600]">
                  Anita Kapoor
                </p>
                <p className="text-[#000000] text-[10px] leading-[20px] sm:text-[10px] sm:leading-[20px] lg:text-[13px] lg:leading-[26px] font-[400] pb-[12px] lg:p-[9px]">
                  Frequent Traveler
                </p>
              </div>
              <Image
                src={pic4}
                alt="pic1"
                width={1000}
                className="w-[77.67px] sm:w-[57.5px] lg:w-[75px] pt-[93.4px] sm:pt-[42.22px] lg:pt-[44px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;