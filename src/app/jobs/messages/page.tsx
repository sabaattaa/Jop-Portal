"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { BiArchiveIn, BiSend } from 'react-icons/bi';
import { CgAttachment } from 'react-icons/cg';
import { JobDetail } from '../view-job/page';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaDeleteLeft } from 'react-icons/fa6';
import { RiDeleteBin2Fill, RiSpam2Fill, RiSpam3Line } from 'react-icons/ri';
const Messages = () => {
  const [setting, setSetting] = useState({
    open: false
  })

  const messages = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,];
  return (
    <div className=' flex h-[87vh]  '>

      <div className="w-[30%] bg-white  h-full overflow-y-auto border-r border-gray-200  ">

        {messages.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 border-b last:border-none border-gray-100 hover:bg-green-50 cursor-pointer transition-all duration-200"
          >

            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
              <Image src="/globe.svg" alt="Logo" width={24} height={24} />
            </div>

            {/* Message Content */}
            <div className="flex flex-col w-full overflow-hidden">
              <div className="flex justify-between items-center">
                <h5 className="font-semibold text-gray-800 text-sm">
                  KSM Media Hut
                </h5>
                <span className="text-xs text-gray-500">Jul 22</span>
              </div>
              <span className="text-sm text-gray-600 text-elipse whitespace-normal">
                Hi SABA ATTA Thank you for your message, we’ll get back to you
                shortly
              </span>
            </div>
          </div>
        ))}

      </div>

      <div className='w-[50%]   flex flex-col justify-between overflow-y-auto   !gz-[-1]'>

        <div

          className="flex items-center gap-3 px-4 py-3 border-b last:border-none border-gray-100 "
        >

          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
            <Image src="/globe.svg" alt="Logo" width={24} height={24} />
          </div>

          {/* Message Content */}
          <div className="flex flex-col w-full overflow-hidden">
            <div className="flex justify-between items-center">
              <h5 className="font-semibold text-gray-800 text-sm">
                KSM Media Hut
              </h5>


            </div>
          </div>
              <div className="relative   ">
                {/* Three Dots Button */}
               <BsThreeDotsVertical
                  className="hover:bg-green-50 hover:text-green-500 cursor-pointer transition-all duration-200 rounded-full text-2xl p-1"
                  onClick={() => setSetting((pre)=>{
                    console.log("im work", setting)
                    return(

                      {
                        ...pre,
                        open:!setting.open
                      }
                    )
                  })}
                />  

                {/* Dropdown Menu */}
                {setting.open && ( 
                <div className="absolute right-0 top-[20] bg-white mt-2 w-40 bg-white shadow-lg rounded-md  text-sm !z-[10]  ">
                  {[
                    { name: "Archive", value: "archive" },
                    { name: "Delete", value: "delete" },
                    { name: "Report Spam", value: "spam" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      // onClick={() => handleClick(opt.value)}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
               )} 
              </div>
        </div>




        <div className="flex flex-col w-full p-4 bg-white shadow-md border-t border-gray-200">
          {/* Textarea */}
          <textarea
            placeholder="Type your message..."
            className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-100 focus:border-green-100 transition"
            rows={3}
          />

          {/* Actions */}
          <div className="flex items-center justify-between mt-3">
            {/* Left side (icons) */}

            <div className='flex '>

              {
                [
                  { icon: CgAttachment, title: "Attachment" }, 
                ].map((i, ind) => {

                  const Icon = i.icon;
                  return (
                    <button
                      key={ind}
                      type="button"
                      className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-green-500 transition"
                    >
                      <Icon size={22} title={i.title} />
                    </button>
                  )
                })
              }


            </div>



            {/* Right side (send button) */}
            <button
              type="button"
              className="bg-green-500 hover:bg-green-600 rounded-full px-5 py-2 text-white font-medium shadow-sm transition"
            >
              Send
            </button>
          </div>
        </div>






      </div>
      <div className='w-[30%]   overflow-y-auto border-l border-gray-300'>


        <JobDetail />

      </div>


    </div>
  )
}

export default Messages