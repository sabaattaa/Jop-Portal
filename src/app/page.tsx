"use client";
import Header from "@/components/header";
import { dummyJobs } from "@/lib/dmmy";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiBaguette, BiLocationPlus, BiMoney, BiSave, BiSearch } from "react-icons/bi";
import { BsBag, BsJournalBookmark } from "react-icons/bs";
import { FiWatch } from "react-icons/fi";
import { PiParagraph } from "react-icons/pi";

export default function Home() {

  return (
    <div className="flex flex-col w-full gap-6 ">
      <Header />
      {/* Search bar  */}
      <div className="flex justify-center ">

        <div className="bg-gray-100 rounded-full p-2 px-3 flex gap-2 items-center">
          <BiSearch className="text-xl text-gray-500" />
          <input
            placeholder="Search here "
            className="w-full md:w-2xl outline-none border-none text-gray-500" />

          <span className="text-gray-600 pe-5">|</span>
          <span className="text-gray-600 pe-5" title="Location">Remote</span>
        </div>



      </div>
      {/* Job lists  */}
      <section className="flex px-14 w-full flex-col gap-5 pb-10 ">
        {dummyJobs.map((job, index) => (
          <JobSection job={job} index={index} />
        ))}
      </section>
    </div>
  );
}



export const JobSection = ({ job, index }: any) => {

  const router = useRouter();

  return (
    <div key={index} className="rounded-xl shadow-sm flex flex-col p-5 gap-3 hover:shadow-lg transition duration-200 border-t border-gray-200 bg-green-100/40">
      <div className="w-full flex justify-between items-center">
        <span className="text-blue-500 bg-blue-500/20 px-2 rounded-sm p-1 text-xs">{job.timeAgo}</span>
        <BiSave className="text-xl text-gray-500 cursor-pointer" title="Save Job" />
      </div>
      <div className="flex gap-2">
        <BsBag className="text-xl text-gray-500 mt-1" />
        <div className="flex flex-col">
          <h1 className="font-bold text-lg">{job.title}</h1>
          <span className="text-sm text-gray-600">{job.description}</span>
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center flex-wrap">
        <div className="flex gap-4 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            <FiWatch className="text-blue-500 text-xl" />
            <span className="text-sm" style={{ color: "blue" }}>{job.company}</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FiWatch className="text-blue-500 text-xl" />
            <span className="text-sm" style={{ color: "blue" }}>{job.timeAgo}</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <BiMoney className="text-green-500 text-xl" />
            <span className="text-sm" style={{ color: "green" }}>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <BiLocationPlus className="text-blue-500 text-xl" />
            <span className="text-sm" style={{ color: "blue" }}>{job.location}</span>
          </div>
        </div>
        <button

          onClick={() => {
            router.push("/user/view-job");
          }}

          className="
              bg-green-100 
              text-green-800 
              text-sm 
              px-4 
              py-2 
              rounded-lg 
              font-medium 
              hover:bg-green-200 
              hover:scale-105 
              transition 
              duration-200 
              shadow-sm
              focus:outline-none
            ">
          View Job Details
        </button>
      </div>
    </div>
  )
}