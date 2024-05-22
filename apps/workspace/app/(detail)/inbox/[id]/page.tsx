import { MailViewer } from "@/components/mail-viewer";
import type { MailData } from "@/lib/types";

export default async function InboxDetailsPage(props: {
  params: {
    id: string;
  };
}) {
  const res = (await fetch(`http://localhost:8000/inbox/${props.params.id}`, {
    cache: "no-cache",
  }).then((res) => res.json())) as MailData;

  return (
    <div className="h-dvh">
      <MailViewer mail={res} />
    </div>
  );
}
