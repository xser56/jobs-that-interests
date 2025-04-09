import React from 'react'
interface props
{
    baseImage: string,
    hoverLogo: string
}

const JobSelect = () => {
  return (
    <div className="relative w-fit group">
    {/* Base Image */}
    <img src="/assets/jobCards/pocketpair.jpg" 
    alt="pocketpair"
    className='hover: cursor-pointer'/>
    
    {/* Hover Image */}
    <img
      src="/assets/jobCards/pocketpairlogo.png"
      alt="logo"
      className="absolute bottom-27 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
  </div>
  
  )
}

export default JobSelect
