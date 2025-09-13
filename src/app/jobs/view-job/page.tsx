"use client"
import { dummyJobs } from '@/lib/dmmy'
import React from 'react'
import { BiLocationPlus, BiSave, BiShare, BiShareAlt } from 'react-icons/bi'
import { BsBagDash, BsFillBrightnessAltLowFill } from 'react-icons/bs'

import { RiChatFollowUpFill, RiChatFollowUpLine } from 'react-icons/ri'
import { SlUserFollow, SlUserFollowing } from 'react-icons/sl'
import { FaVolumeLow } from 'react-icons/fa6'
import { JobSection } from '@/components/JobSection'

const Page = () => {
  return (
    <section className='flex relative'>
      <div className="  w-[70%] ">
        <JobDetail />

      </div>
      <section className="flex px-5 w-[30%] flex-col gap-5 py-5 ">
        {dummyJobs.map((job, index) => (
          <JobSection job={job} index={index} />
        ))}
      </section>
    </section>
  )
}

export default Page




export const JobDetail = () => {



  return (
    <div className="  w-full flex flex-col gap-6 p-10  bg-white shadow-md">

      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h1 className="text-2xl font-bold text-gray-800">UI/UX Designer</h1>

        <div className="flex items-center gap-3">
          <button className="text-nowrap bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium shadow transition">
            Apply Now
          </button>
          <button title='Save' className="p-2 rounded-xl border border-gray-300 text-gray-600 transition">
            <BiSave size={22} className="cursor-pointer text-gray-400 hover:text-gray-500" />
          </button>
          <button title='Share' className="p-2 rounded-xl border border-gray-300 text-gray-600 transition">
            <BiShareAlt size={22} className="cursor-pointer text-gray-400 hover:text-gray-500" />
          </button>
          <button title='Follow Company' className="p-2 rounded-xl border border-gray-300 text-gray-600 transition">

            <SlUserFollow size={22} className="cursor-pointer text-gray-400 hover:text-gray-500" />
            {/* <SlUserFollowing size={22} className="cursor-pointer text-gray-400 hover:text-gray-500" /> */}
          </button>
        </div>
      </div>

      {/* Company & Location */}
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <BsBagDash />
        <div className="flex flex-col">
          <div className="flex gap-3">
            <span>Pixelz Studio</span>
            <span className="flex items-center gap-1">• <BiLocationPlus /> Yogyakarta, Indonesia</span>
          </div>
          <span className="text-gray-500">Fulltime • Remote • 2-4 Years</span>
        </div>
      </div>

      {/* About the Role */}
      <div>
        <h2 className="text-md font-semibold text-gray-700 mb-1">About this role</h2>
        <p className="text-sm text-gray-600">
          As an UI/UX Designer on Pixelz Studio, you'll focus on design user-friendly on several platform (web, mobile, dashboard, etc) to our users needs. Your innovative solution will enhance the user experience on several platforms. Join us and let’s making impact on user engagement at Pixelz Studio.
        </p>
      </div>

      {/* Qualification */}
      <div>
        <h2 className="text-md font-semibold text-gray-700 mb-1">Qualification</h2>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>At least 2-4 years of relevant experience in product design or related roles.</li>
          <li>Knowledge of design validation, either through quantitative or qualitative research.</li>
          <li>Have good knowledge using Figma and FigJam</li>
          <li>Experience with analytics tools to gather data from users.</li>
        </ul>
      </div>

      {/* Responsibilities */}
      <div>
        <h2 className="text-md font-semibold text-gray-700 mb-1">Responsibility</h2>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>Create design and user journey on every features and product/business units across multiples devices (Web+App)</li>
          <li>Identifying design problems through user journey and devising elegant solutions</li>
          <li>Develop low and hi fidelity designs, user experience flow, & prototype, translate it into highly-polished visual composites following style and brand guidelines.</li>
          <li>Brainstorm and works together with Design Lead, UX Engineers, and PMs to execute a design sprint on specific story or task</li>
        </ul>
      </div>

      {/* Attachment Section */}
      <div>
        <h2 className="text-md font-semibold text-gray-700 mb-2">Attachment</h2>
        <div className="flex gap-4">
          <img src="/path-to-image-1.png" alt="Job Requirement" className="w-32 h-20 object-cover rounded" />
          <img src="/path-to-image-2.png" alt="Company Benefits" className="w-32 h-20 object-cover rounded" />
        </div>
      </div>
    </div>
  )
}