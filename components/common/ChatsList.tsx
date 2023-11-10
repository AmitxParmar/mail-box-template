import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function ChatsList({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            {" "}
            <div className="flex h-12 w-full flex-row items-center justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div className="ml-2 text-2xl font-bold">QuickChat</div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-2">
          <div className="flex shrink-0 flex-col py-8 pl-6 pr-2">
            <div className="mt-8 flex flex-col">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="mr-2 flex items-center justify-center rounded-full bg-orange-100 px-2 py-0.5 text-sm font-semibold text-orange-800 dark:bg-orange-200 dark:text-orange-900">
                  7
                </span>
              </div>
              <ScrollArea className="h-96">
                <div className="-mx-2 mt-4 flex flex-col space-y-1 px-2">
                  <button className="flex flex-row items-center rounded-xl p-2 hover:bg-gray-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200">
                      H
                    </div>
                    <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                  </button>
                  <button className="flex flex-row items-center rounded-xl p-2 hover:bg-gray-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                      M
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      Marta Curtis
                    </div>
                    <div className="ml-auto flex h-4 w-4 items-center justify-center rounded bg-red-500 text-xs leading-none text-white">
                      2
                    </div>
                  </button>
                </div>
              </ScrollArea>

              <div className="mt-6 flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Archivied</span>
                <span className="mr-2 flex items-center justify-center rounded-full bg-orange-100 px-2 py-0.5 text-sm font-semibold text-orange-800 dark:bg-orange-200 dark:text-orange-900">
                  7
                </span>
              </div>

              <ScrollArea>
                <div className="-mx-2 mt-4 flex flex-col space-y-1 px-2">
                  <button className="flex flex-row items-center rounded-xl p-2 hover:bg-gray-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200">
                      H
                    </div>
                    <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                  </button>
                  <button className="flex flex-row items-center rounded-xl p-2 hover:bg-gray-700">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                      M
                    </div>
                    <div className="ml-2 text-sm font-semibold">
                      Marta Curtis
                    </div>
                    <div className="ml-auto flex h-4 w-4 items-center justify-center rounded bg-red-500 text-xs leading-none text-white">
                      2
                    </div>
                  </button>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
