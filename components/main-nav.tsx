import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { AllFolders, NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import LeftSidebar from "./shared/Sidebar"
import LeftSidebarItem from "./shared/Sidebar/Item"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const AllFolders = [{ name: "inbox" }, { name: "sent" }]
  const open = true
  return (
    <div className="flex gap-6 md:gap-10">
      <Sheet>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>

        <SheetContent side={"left"}>
          <SheetHeader className="">
            <Link href="/" className="flex">
              {/* NOTE: you can insert logo here */}
              <Icons.logo className="h-16 dark:invert" />
            </Link>
          </SheetHeader>

          <div className="flex h-full flex-col justify-between py-2">
            <ul
              className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
              data-testid="sidebar-item-group"
            >
              {AllFolders.length ? (
                AllFolders.map((folder, i) => (
                  <LeftSidebarItem key={i} folder={folder} open={open} />
                ))
              ) : (
                <>Something Went Wrong</>
              )}
            </ul>
            <ul
              className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
              data-testid="flowbite-sidebar-item-group"
            >
              <li>
                <div className="mb-2 mt-0.5 flex items-center justify-between p-2 px-4 text-lg font-semibold tracking-tight">
                  {open && (
                    <span className="ml-3 whitespace-nowrap">Folders</span>
                  )}
                  <span className="inline-flex cursor-pointer justify-end rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <Icons.add />
                  </span>
                </div>
              </li>

              <li>
                <div className="mb-2 mt-0.5 flex items-center justify-between p-2 px-4 text-lg font-semibold tracking-tight">
                  {open && (
                    <span className="ml-3 whitespace-nowrap">Labels</span>
                  )}
                  <span className="inline-flex cursor-pointer justify-end rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <Icons.add />
                  </span>
                </div>
              </li>
            </ul>
            {/* {open && <DisplayLeftSidebarCard />} */}

            <div className="flex items-center justify-center gap-x-5">
              <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="sr-only">Tweaks</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 20 20"
                  className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white "
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
              </button>
              <div>
                <div className="w-fit" data-testid="flowbite-tooltip-target">
                  <a
                    href="/users/settings"
                    className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 20 20"
                      className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
                <div
                  tabIndex={-1}
                  className="invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                  id=":r10:"
                  role="tooltip"
                  style={{
                    position: "absolute",
                    top: 893,
                    left: "62.586px",
                  }}
                >
                  <div className="relative z-20">Settings page</div>
                  <div
                    className="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700"
                    style={{ bottom: "-4px", left: "54.5px" }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="w-fit dark:text-white"
                  data-testid="flowbite-tooltip-target"
                >
                  <button className="flex items-center">
                    <span className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                      X
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
        {items?.length ? (
          <nav className="flex gap-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </Sheet>
    </div>
  )
}
