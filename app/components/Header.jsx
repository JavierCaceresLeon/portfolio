import Image from 'next/image'
import { assets } from "@/assets/assets";
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <div>
            <Image src={assets.profile_img_2} alt='' className='rounded-full w-32' />
      </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi, I'm Javier <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
        <h1 className='text-3xl md:text-6xl lg:text-[66px] font-Ovo'>Telematics Civil Engineering Student</h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
            I am a passionate Telematics Civil Engineering student with a keen interest in software development and data analysis. I enjoy solving complex problems and creating innovative solutions that make a difference in the world.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>contact me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
            <a href="/CV_Javier-Caceres-Leon.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume  <Image src={assets.download_icon} alt='' className='w-4' /></a>
      </div>
    </div>
  )
}

export default Header
