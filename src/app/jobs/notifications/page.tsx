import Image from 'next/image'
import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiDotsHorizontal } from 'react-icons/bi'

const Notifications = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='flex flex-col justify-center items-center w-full md:w-1/2 p-2'>
      <h1 className='font-bold text-xl my-5'>
        Notifications
      </h1>
      <div className='flex items-center gap-2 p-2 rounded-md text-gray-500 border-b border-gray-200'>
        <Image src="/globe.svg" alt="Logo" width={24} height={24} />

        <h5>
          Front end Developerjob description opens in a new window
          Compass Training and Consultancy Pvt. Ltd.
          Lahore
        </h5>
        <AiOutlineDelete  size={28} className='cursor-pointer hover:text-red-500' />
      </div>

      </div>




    </div>
  )
}

export default Notifications