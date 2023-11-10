"use client"

import "@/styles/globals.css"
import { useState } from "react"
import { Metadata } from "next"

import { AllFolders } from "@/types/nav"
/* import { siteConfig } from "@/config/site" */
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import LeftSidebar from "@/components/shared/Sidebar"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import QuickAccess from "@/components/shared/QuickAccess"

/* export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
} */

interface RootLayoutProps {
  children: React.ReactNode
}
const AllFolders = [
  { name: "inbox" },
  {name:"sent"}
]

export default function RootLayout({ children }: RootLayoutProps) {
  const [open, setOpen] = useState(true)

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            
              <SiteHeader />
             
                <nav className="order-first overflow-y-auto">
                <LeftSidebar
                  open={open}
                  AllFolders={AllFolders as AllFolders[]}
                  />
                </nav>
                 
                {children}
            
            <TailwindIndicator />
          </ThemeProvider>
              {/*  <aside className="absolute hidden overflow-y-auto border-l border-slate-700 bg-red-600 lg:block">
            <QuickAccess />
          </aside> */}
        </body>
      </html>
    </>
  )
}
