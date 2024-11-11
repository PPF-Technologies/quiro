import React from 'react'
import line from "@/assets/buttonLine.png"
import Image from "next/image"
import { FaLongArrowAltRight } from "react-icons/fa";

interface buttonType {
    text:string
}

const LineButton:React.FC<buttonType> = ({text}) => {
  return (
    <button className='bg-black relative text-[12px] md:text-base text-white px-10 rounded-lg flex items-center w-fit text-sm py-4'>
      {text} <FaLongArrowAltRight className="ml-2 text-white" />
     <Image src={line} width={100} height={0} alt='line' className='absolute w-full -bottom-2 left-0 px-2' />
    </button>
  )
}

export default LineButton
