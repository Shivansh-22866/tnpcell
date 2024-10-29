import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 py-4 bg-blue-950 w-full'>
      <Image src={"/logo.png"} alt={"Institute Logo"} width={150} height={150} className='w-24 h-24 md:w-40 md:h-40' />
      <div className='flex flex-col items-center md:items-start text-center md:text-left'>
        <h1 className='text-white text-xl md:text-2xl font-bold'>National Institute of Technology Goa</h1>
        <h2 className='text-white text-3xl md:text-5xl'>Training and Placement Cell</h2>
      </div>
    </div>
  );
}

export default Navbar;
