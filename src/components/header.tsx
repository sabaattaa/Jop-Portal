import Link from 'next/link'
import React from 'react'

const Header = () => {
  return ( 
         <header className="flex justify-between items-center h-[60px] px-6   bg-green-100/60 ">
           {/* Logo / Title */}
           <span className="font-bold text-xl text-green-600 cursor-pointer">Remote Jobs</span>
   
           {/* Navigation Links */}
           <nav className="flex gap-6">
             {[ 
               { name: "Jobs", url: "/" },
               { name: "Saved Jobs", url: "/saved-jobs" },
               { name: "Shared Jobs", url: "/shared-jobs" },
             ].map((item, index) => (
               <Link
                 key={index}
                 href={item.url}
                 className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
               >
                 {item.name}
               </Link>
             ))}
           </nav>
   
           {/* Action Buttons */}
           <div className="flex gap-3">
             <Link
               href="/register"
               className="px-4 py-1 rounded-lg text-sm font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition duration-200"
             >
               Register
             </Link>
             <Link
               href="/login"
               className="px-4 py-1 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
             >
               Login
             </Link>
           </div>
         </header>
  )
}

export default Header