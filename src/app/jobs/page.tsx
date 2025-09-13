"use client";
import { JobSection } from "@/components/JobSection";
import { dummyJobs } from "@/lib/dmmy";
import { BiSearch } from "react-icons/bi";
 

export default function Home() {

  return (
    <div className="flex flex-col w-full gap-6 py-6"> 
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

