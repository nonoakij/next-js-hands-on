import { MailList } from "@/app/(dashboard)/inbox/components/mail-list";
import type { MailListData } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox | The Joke Mail Service",
  description: "Inbox page for the Joke Mail Service.",
};

export default async function InboxPage() {
  const res = (await fetch("http://localhost:8000/inbox", {
    cache: "no-cache",
  }).then((res) => res.json())) as MailListData;
  return <MailList mailList={res} />;
}
