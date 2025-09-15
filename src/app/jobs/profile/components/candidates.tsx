import React from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Candidates = () => {
  return (
    <div>
      
<div className="  mx-auto bg-white shadow-lg rounded-xl p-6 space-y-3 border border-gray-300">
     
      <div className="flex items-center gap-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Candidate Avatar"
          className="w-24 h-24 rounded-full border border-gray-300  "
        />
        <div className='w-full'>
          <h1 className="text-2xl font-bold text-gray-800">Jane Doe</h1>
          <p className="text-gray-500 flex items-center gap-2">
            <FaEnvelope /> jane.doe@example.com
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 text-nowrap"
        >
          Download Resume
        </a>
    
      </div>
  
     
     

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
          Reject
        </button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
          Shortlist
        </button>
      </div>
    </div>



    </div>
  )
}

export default Candidates