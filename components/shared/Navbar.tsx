import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-8 py-4 bg-blue-950'>
        <Image src={"/logo.png"} alt={"Institute Logo"} width={150} height={150} />
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-white text-2xl font-bold'>National Institute of Technology Goa</h1>
            <h2 className='text-white text-5xl'>Training and Placement Cell</h2>
        </div>
    </div>
  )
}

export default Navbar