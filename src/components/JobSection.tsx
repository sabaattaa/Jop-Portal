import { useRouter } from "next/navigation";
import { BiLocationPlus, BiMoney, BiSave } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { FiWatch } from "react-icons/fi";


export const JobSection = ({ job, index }: any) => {

  const router = useRouter();

  return (
    <div key={index} className="rounded-xl shadow-sm flex flex-col p-5 gap-3 hover:shadow-lg transition duration-200 border-t border-gray-200 bg-green-100/40">
      <div className="w-full flex justify-between items-center">
        <span className="text-blue-500 bg-blue-500/20 px-2 rounded-sm p-1 text-xs">{job.timeAgo}</span>
        <BiSave className="text-xl text-gray-600 hover:text-green-500 cursor-pointer" title="Save Job" />
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
            router.push("/jobs/view-job");
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