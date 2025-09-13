"use client";

import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";


const UserProfile = () => {

  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-6">
        <img
          src="https://via.placeholder.com/100"
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-green-400 shadow"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
          <p className="text-gray-500">johndoe@example.com</p>
        </div>
      </div>

      <div>
        <h2 className="block text-gray-700 font-medium mb-1">About</h2>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Describe your work experience..."
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          rows={4}
        />

      </div>
      <div>
        <h2 className="block text-gray-700 font-medium mb-1">Skills</h2>

        <div className="flex gap-2 items-center">

        <input
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Describe your work experience..."
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          
        />

        <BiPlus className="hover:text-green-500 h-8 w-8 rounded-full hover:bg-green-100" size={25}/>
        </div>

      </div>

      {/* Experience */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Experience</label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          placeholder="Describe your work experience..."
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          rows={4}
        />
      </div>

      {/* Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Portfolio URL</label>
          <input
            type="url"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            placeholder="https://your-portfolio.com"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">GitHub</label>
          <input
            type="url"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/username"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">LinkedIn</label>
          <input
            type="url"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/username"
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg shadow transition">
          Save Profile
        </button>
      </div>
    </div>
  )
}

export default UserProfile



