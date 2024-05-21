import { MailList } from "@/app/(dashboard)/(page)/inbox/components/mail-list";
import type { MailListData } from "@/lib/types";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Inbox | The Joke Mail Service",
  description: "Inbox page for the Joke Mail Service.",
};

export default function InboxPage() {
  return (
    <Suspense fallback={<div className="text-center">Loading...</div>}>
      <Mail />
    </Suspense>
  );
}

async function Mail() {
  const res = (await fetch("http://localhost:8000/inbox", {
    cache: "no-cache",
  }).then((res) => res.json())) as MailListData;
  return <MailList mailList={res} />;
}
