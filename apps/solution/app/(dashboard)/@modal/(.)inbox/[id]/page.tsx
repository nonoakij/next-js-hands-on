import { MailViewer } from "@/components/mail-viewer";
import type { MailData } from "@/lib/types";
import Link from "next/link";
import { Suspense } from "react";

export default function QuickMailViewModal(props: {
  params: {
    id: string;
  };
}) {
  return (
    <>
      <Link
        className="absolute inset-0 backdrop-brightness-50 z-modal"
        href="/inbox"
      />
      <div className="absolute right-0 top-0 bottom-0 m-auto bg-white border rounded-l-lg w-3/5 z-modal">
        <Suspense
          fallback={<div className="text-center mt-10">Loading...</div>}
        >
          <Mail id={props.params.id} />
        </Suspense>
      </div>
    </>
  );
}

async function Mail(props: { id: string }) {
  const res = (await fetch(`http://localhost:8000/inbox/${props.id}`, {
    cache: "no-cache",
  }).then((res) => res.json())) as MailData;

  return <MailViewer mail={res} />;
}
