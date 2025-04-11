"use client"

import { useRouter } from "next/navigation";
import React from 'react'
interface Props
{
    baseImage: string,
    hoverLogo: string,
    route: string,
}

const JobSelect = ({ baseImage, hoverLogo, route}: Props) => {
  const router = useRouter();

  return (
    <div className="relative w-fit group  rounded-2xl" 
    onClick={() => router.push(route)}
    >
    {/* Base Image */}
    <img src={baseImage}
    alt="Job Logo"
    className='hover: cursor-pointer w-[300px] h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-102 bg-amber-600 border-2 rounded-xl'/>
    
    {/* Hover Image */}
  <img
  src={hoverLogo}  
  alt="logo"
  className="absolute w-[300px] h-[200px] bottom-35 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex justify-center items-center "
  />

  </div>
  
  )
}

export default JobSelect
// div className="top-40 absolute cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center">
//       <img
//   src={hoverLogo}
//   alt="logo"
//   className="w-20 h-20"
//   />
//   <h1 className="flex justify-center text-black font-bold text-[32px]">{logoText}</h1>
//     </div>