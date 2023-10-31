import React from "react"
import Link from "next/link"
import archive from "@/assets/images/archived.png"
import envelope from "@/assets/images/envelope.png"
import inbox from "@/assets/images/inbox.png"
import mail from "@/assets/images/mail.png"
import notes from "@/assets/images/notes.png"
import outbox from "@/assets/images/outbox.png"
import sent from "@/assets/images/sent.png"
import spam from "@/assets/images/spam-mail.png"
import star from "@/assets/images/star.png"
import trash from "@/assets/images/trash.png"
import * as changeCase from "change-case"
import { Trash2 } from "lucide-react"

import { AllFolders } from "@/types/nav"
import { XTooltip } from "@/components/common/tooltip"
import { Icons } from "@/components/icons"

export const MailBoxIcons = {
  inbox: inbox,
  junk: spam,
  sent: sent,
  spam: spam,
  archive: archive,
  drafts: mail,
  deleted: outbox,
  trash: trash,
  starred: star,
  notes: notes,
  outbox: envelope,
}
export type MailBoxIconsType = keyof typeof MailBoxIcons
interface PropsType {
  open: boolean
  folder: AllFolders
}
const LeftSidebarItem = ({ open, folder }: PropsType) => {
  return (
    <li>
      <div className="w-full">
        <Link
          className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          href={"/mail/u/" + folder.name.toLowerCase()}
        >
          {open ? (
            <img
              src={
                MailBoxIcons[
                  (folder.name.toLowerCase() as MailBoxIconsType) || "drafts"
                ].src
              }
              className="h-6 w-6"
            />
          ) : (
            <XTooltip text={changeCase.sentenceCase(folder.name)}>
              <img
                src={
                  MailBoxIcons[
                    (folder.name.toLowerCase() as MailBoxIconsType) || "drafts"
                  ].src
                }
                className="h-6 w-6"
              />
            </XTooltip>
          )}

          {open && (
            <span
              className={`px-4 ${
                open ? "" : "ml-3"
              } transition-width flex-1 whitespace-nowrap`}
            >
              {changeCase.sentenceCase(folder.name)}
            </span>
          )}
          {!open && (
            <img
              src={
                MailBoxIcons[
                  (folder.name.toLowerCase() as MailBoxIconsType) || "drafts"
                ].src
              }
              className="hidden h-6 w-6 lg:block"
            />
          )}
        </Link>
      </div>
    </li>
  )
}

export default LeftSidebarItem
