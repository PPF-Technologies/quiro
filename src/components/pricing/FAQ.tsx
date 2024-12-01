"use client";
import React, { useState } from "react";
import Image from "next/image";
import accdown from "@/assets/home/accdown.png";
import accup from "@/assets/home/accup.png";

const Faq: React.FC = () => {
  const faqData = [
    {
      question: "Can we try Quiro before committing to a subscription?",
      answer:
        "Absolutely! We offer a free trial so you can experience Quiro's features and functionality before making a decision. Our team is also available for onboarding assistance during the trial period.",
    },
    {
      question:
        "How is Quiro's pricing structured for different HoReCa business sizes or types?",
      answer:
        "Quiro offers cost-efficient pricing customized to business size and type. Whether you're running a boutique hotel, mid-sized property, or chain, our pricing adapts to suit your specific needs without compromising on value.",
    },
    {
      question: "Are there any setup fees or hidden charges?",
      answer:
        "No, Quiro has a transparent pricing policy. There are no setup fees or hidden charges. You only pay the monthly subscription fee as per your selected plan, which includes all updates, support, and access to features.",
    },
    {
      question: "Can Quiro scale with my business as I expand?",
      answer:
        "Yes, Quiro is designed to grow with your business. Whether you add more rooms, new services, or additional properties, our flexible plans and features ensure that your operations remain smooth and cost-effective at every stage of growth.",
    },
    {
      question:
        "Are discounts available for long-term contracts or bulk purchases?",
      answer:
        "Yes, we offer discounts for annual contracts or properties purchasing licenses in bulk for multiple locations. Contact our sales team to discuss customized pricing based on your needs.",
    },
    {
      question: "Can we try Quiro before committing to a subscription?",
      answer:
        "Absolutely! We offer a free trial so you can experience Quiro's features and functionality before making a decision. Our team is also available for onboarding assistance during the trial period.",
    },
    {
      question:
        "How is Quiro's pricing structured for different HoReCa business sizes or types?",
      answer:
        "Quiro offers cost-efficient pricing customized to business size and type. Whether you're running a boutique hotel, mid-sized property, or chain, our pricing adapts to suit your specific needs without compromising on value.",
    },
    {
      question: "Are there any setup fees or hidden charges?",
      answer:
        "No, Quiro has a transparent pricing policy. There are no setup fees or hidden charges. You only pay the monthly subscription fee as per your selected plan, which includes all updates, support, and access to features.",
    },
    {
      question: "Can Quiro scale with my business as I expand?",
      answer:
        "Yes, Quiro is designed to grow with your business. Whether you add more rooms, new services, or additional properties, our flexible plans and features ensure that your operations remain smooth and cost-effective at every stage of growth.",
    },
    {
      question:
        "Are discounts available for long-term contracts or bulk purchases?",
      answer:
        "Yes, we offer discounts for annual contracts or properties purchasing licenses in bulk for multiple locations. Contact our sales team to discuss customized pricing based on your needs.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center items-center  lg:pb-[142px] sm:pb-[100px] pb-[80px]">
      <div className="max-w-7xl w-full">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className=" font-[600] relative text-[20px] leading-[24px] sm:text-[24px] sm:leading-[28.8px] lg:text-[40px] lg:leading-[48px] 3xl:text-[48px] 3xl:leading-[57.6px] mx:auto max-w-1/2 text-center">
            <span className="billyOhioText text-[#006B66] absolute font-[400] 3xl:text-[36px] lg:text-[38px] lg:leading-[57px] 3xl:leading-[54px] sm:px-0 lg:-left-10 lg:-top-10 3xl:-top-11 sm:-left-6 left-1 -top-6 hidden lg:block">
              Problem?
            </span>
            <span className="billyOhioText text-[#006B66] absolute font-[400] text-[24px] leading-[28.8px] sm:text-[24px] sm:leading-[36px]  sm:px-0 lg:-left-0 lg:-top-10 sm:-left-2 -left-6 -top-6 sm:-top-8 block lg:hidden">
              Help
            </span>
            Frequently Asked Questions
          </h1>
          <p className="font-medium text[13px] sm:text-[12px] sm:leading-[18px] text-[13px] leading-[19.5px] lg:text-[16px] lg:leading-[24px] 3xl:text-[20px] 3xl:leading-[30px] 3xl:pb-[96px] lg:pb-[64.07px] sm:pb-[41px] pb-[40px] text-center lg:mt-[16.39px] 3xl:mt-[16px] sm:mt-[7px] mt-[11px]">
            Get all your questions answered here
          </p>
        </div>

        {/* FAQ List in Two Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-4 sm:gap-4 lg:ml-[149.67px] lg:mr-[130px] sm:ml-[81px] sm:mr-[44px] ml-[55px] mr-[53px] 3xl:ml-[241px] 3xl:mr-[311px] ">
          {/* Left Column */}
          <div>
            {faqData.slice(0, faqData.length / 2).map((faq, index) => (
              <div
                key={index}
                className=" pb-[11.83px] sm:pb-[16.25px] lg:pb-[20.86px] 3xl:pb-[25.42px]"
              >
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center">
                    <div className="w-[22px] h-[22px] 3xl:w-[38px] 3xl:h-[38px] lg:w-[31.61px] lg:h-[30.85px] sm:w-[18px] sm:h-[18px] rounded-full aspect-square lg:border-[0.49px] border-[0.3px] sm:border-[0.6px] 3xl:border-[0.6px] border-black shadow-[2px_2px_0_rgba(0,0,0,1)] flex justify-center items-center p-1">
                      {expandedIndex === index ? (
                        <Image
                          src={accup}
                          alt="accdown"
                          width={1000}
                          className="w-[10px] sm:w-[6px] lg:w-[13px] "
                        />
                      ) : (
                        <Image
                          src={accdown}
                          alt="accdown"
                          width={1000}
                          className="w-[10px] sm:w-[6px]  lg:w-[13px] "
                        />
                      )}
                    </div>
                    <h2 className="3xl:text-[18px] 3xl:leading-[23.4px] lg:[16px] lg:leading-[20.8px] leading-[18px] font-[600] sm:text-[12px] text-[12px] sm:leading-[15.6px] break-words ml-[17.83px] sm:ml-[8.76px] lg:ml-[22.57px] 3xl:ml-[27.5px] ">
                      {faq.question}
                    </h2>
                  </div>
                </div>

                {/* Answer */}
                {expandedIndex === index && (
                  <p className="3xl:text-[18px] 3xl:leading-[23.4px] lg:[16px] lg:leading-[20.8px] leading-[18px]  sm:text-[12px] text-[12px] sm:leading-[15.6px]  font-[400]  text-gray-600 pl-[40px] sm:pl-[28px] lg:pl-[55px] 3xl:pl-[68px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {faqData.slice(faqData.length / 2).map((faq, index) => (
              <div
                key={index}
                className=" pb-[11.83px] sm:pb-[16.25px] lg:pb-[20.86px] 3xl:pb-[25.42px]"
              >
                {/* Question */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFaq(index + faqData.length / 2)} // Offset index for second column
                >
                  <div className="flex items-center">
                    <div className="w-[22px] h-[22px] 3xl:w-[38px] 3xl:h-[38px] lg:w-[31.61px] lg:h-[30.85px] sm:w-[18px] sm:h-[18px] rounded-full aspect-square lg:border-[0.49px] border-[0.3px] sm:border-[0.6px] 3xl:border-[0.6px] border-black shadow-[2px_2px_0_rgba(0,0,0,1)] flex justify-center items-center p-1">
                      {expandedIndex === index + faqData.length / 2 ? (
                        <Image
                          src={accup}
                          alt="accdown"
                          width={1000}
                          className="w-[10px] sm:w-[6px] lg:w-[13px] "
                        />
                      ) : (
                        <Image
                          src={accdown}
                          alt="accdown"
                          width={1000}
                          className="w-[10px] sm:w-[6px] lg:w-[13px] "
                        />
                      )}
                    </div>
                    <h2 className="3xl:text-[18px] font-[600] 3xl:leading-[23.4px] lg:[16px] lg:leading-[20.8px] leading-[18px]  sm:text-[12px] text-[12px] sm:leading-[15.6px] break-words ml-[17.83px] sm:ml-[8.76px] lg:ml-[22.57px] 3xl:ml-[27.5px] ">
                      {faq.question}
                    </h2>
                  </div>
                </div>

                {/* Answer */}
                {expandedIndex === index + faqData.length / 2 && (
                  <p className="3xl:text-[18px] 3xl:leading-[23.4px] lg:[16px] lg:leading-[20.8px] leading-[18px]  sm:text-[12px] text-[12px] sm:leading-[15.6px]  font-[400]  text-gray-600 pl-[40px] sm:pl-[28px] lg:pl-[55px] 3xl:pl-[68px]">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;