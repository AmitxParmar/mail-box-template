import React from "react"

const DisplayLeftSidebarCard = () => {
  return (
    <div className="space-y-1 p-2">
      <div
        id="dropdown-cta"
        className="mt-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900"
        role="alert"
      >
        <div className="mb-3 flex items-center">
          <span className="mr-2 rounded bg-orange-100 px-2.5 py-0.5 text-sm font-semibold text-orange-800 dark:bg-orange-200 dark:text-orange-900">
            Beta
          </span>
          <button
            type="button"
            className="-m-1.5 ml-auto inline-flex h-6 w-6 items-center justify-center rounded-lg bg-blue-50 p-1 text-blue-900 hover:bg-blue-200 focus:ring-2 focus:ring-blue-400 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
            data-dismiss-target="#dropdown-cta"
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
          You can turn the new navigation off for a limited time in your
          profile.
        </p>
        <a
          className="text-sm font-medium text-blue-800 underline hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
          href="#"
        >
          Turn new navigation off
        </a>
      </div>
    </div>
  )
}

export default DisplayLeftSidebarCard
