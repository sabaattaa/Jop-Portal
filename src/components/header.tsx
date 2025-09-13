import React from 'react'
import Link from 'next/link'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { TiMessages } from 'react-icons/ti'

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[60px] px-6 bg-green-100/60 ">
      <span className="font-bold text-xl text-green-600 cursor-pointer">Remote Jobs</span>
      <nav className="flex gap-6">
        {[
          { name: "Jobs", url: "/" },
          { name: "Applied Jobs", url: "/applied-jobs" },
          { name: "Saved Jobs", url: "/saved-jobs" },
          { name: "Shared Jobs", url: "/shared-jobs" },
        ].map((item, index) => (
          <Link
            key={index}
            href={"#"}
            // href={item.url}
            className="text-gray-600 hover:text-green-500 font-medium transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex gap-3">
        {[
          { id: 1, icon: TiMessages, title: "Messages", url: "/jobs/messages" },
          { id: 2, icon: IoMdNotificationsOutline, title: "Notifications", url: "/jobs/notifications" },
          { id: 3, icon: IoPersonCircleOutline, title: "Profile", url: "/jobs/profile" },
        ].map(({ id, icon: Icon, title, url }) => (
          <Link
          key={id}
            href={url}>
            <Icon
              key={id}
              title={title}
              className="text-2xl text-gray-600 hover:text-green-500 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header