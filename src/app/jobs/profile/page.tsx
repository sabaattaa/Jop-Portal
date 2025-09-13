"use client"
import React, { useState } from "react";
import { BiBriefcase, BiChevronDown, BiChevronRight, BiUser } from "react-icons/bi";
import UserProfile from "./components/userProfile";
import CreateJob from "./components/createJob";
import Candidates from "./components/candidates";
import Interviews from "./components/interviews";
const Profile = () => {

  const [setting, setSetting] = useState({

    selectedValue: "Profile"

  })

  const [openMenu, setOpenMenu] = useState<string | null>(null);



  const menuItems = [
    { name: "Profile", icon: <BiUser size={18} />, children: null },
    {
      name: "Post Job",
      icon: <BiBriefcase size={18} />,
      children: [
        { name: "Post a Job" },
        { name: "Candidates" },
        { name: "Interviews" },
      ],
    },
  ];

  return (
    <div className="mt-5 flex h-screen">
      {/* Sidebar */}
      <div className="w-[20%] bg-gray-50 border-r shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Dashboard</h2>

        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === item.name ? null : item.name)
                }
                className="flex items-center justify-between w-full px-3 py-2 rounded-md hover:bg-green-100 hover:text-green-600 text-gray-700 font-medium transition"
              >
                <span className="flex items-center gap-2"

                  onClick={() => {
                    if (!item.children || item.children.length === 0) {
                      setSetting((pre) => {
                        return ({
                          ...pre,
                          selectedValue: item.name
                        })
                      })
                    }
                  }}
                >
                  {item.icon}
                  {item.name}
                </span>
                {item.children &&
                  (openMenu === item.name ? (
                    <BiChevronDown size={18} />
                  ) : (
                    <BiChevronRight size={18} />
                  ))}
              </button>

              {/* Submenu */}
              {item.children && openMenu === item.name && (
                <ul className="ml-8 mt-2 space-y-1">
                  {item.children.map((child, cIndex) => (
                    <li key={cIndex} onClick={() => {
                      setSetting((pre) => {
                        return ({
                          ...pre,
                          selectedValue: child.name
                        })
                      })
                    }}>
                      <button className="w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-green-600 hover:underline transition">
                        {child.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-[80%] p-6">
        

        {setting.selectedValue==="Profile"
        && <UserProfile/>
        }

        {setting.selectedValue==="Post a Job"
        && <CreateJob/>
        }{setting.selectedValue==="Candidates"
        && <Candidates/>
        }{setting.selectedValue==="Interviews"
        && <Interviews/>
        }
      </div>
    </div>
  );
};

export default Profile;
