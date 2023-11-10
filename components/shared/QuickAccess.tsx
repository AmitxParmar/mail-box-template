import React from "react"
import Link from "next/link"

import { ChatsList } from "@/components/common/ChatsList"
import { ProfileHoverCard } from "@/components/common/ProfileHoverCard"
import { Icons } from "@/components/icons"

const QuickAccess = () => {
  const active = "text-gray-200 bg-gray-700"
  return (
    <div className="flex h-full w-16 flex-col items-center overflow-hidden rounded  text-gray-400">
      <a className="mt-3 flex items-center justify-center" href="#">
        <Icons.box />
      </a>
      <div className="mt-3 flex flex-col items-center border-t border-gray-700">
        <Link
          className="mt-2 flex h-12 w-12 items-center justify-center rounded bg-gray-700 text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href="/mail/u/inbox"
        >
          <Icons.home />
        </Link>

        <Link
          className="mt-2 flex h-12 w-12 items-center justify-center rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <Icons.analytics />
        </Link>
      </div>
      <div className="mt-2 flex flex-col items-center border-t border-gray-700">
        <Link
          className="mt-2 flex h-12 w-12 items-center justify-center rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <Icons.cart />
        </Link>
        <Link
          className="mt-2 flex h-12 w-12 items-center justify-center rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <Icons.settingsVertical />
        </Link>
        <ChatsList>
          <span className="relative mt-2 flex h-12 w-12 items-center justify-center rounded hover:bg-gray-700 hover:text-gray-300">
            <Icons.message />
            <span className="absolute left-0 top-0 ml-2 mt-2 h-2 w-2 rounded-full bg-indigo-500"></span>
          </span>
        </ChatsList>
      </div>
      <ProfileHoverCard>
        <span className="mt-auto flex h-[62px] w-[64px] items-center justify-center hover:text-gray-300">
          <Icons.userIcon />
        </span>
      </ProfileHoverCard>
    </div>
  )
}

export default QuickAccess
