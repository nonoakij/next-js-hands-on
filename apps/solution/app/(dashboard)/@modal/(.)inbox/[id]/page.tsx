import { MailViewer } from "@/components/mail-viewer";
import { mailListData } from "@/lib/mock-data";
import Link from "next/link";

export default function QuickMailViewModal(props: {
  params: {
    id: string;
  };
}) {
  const mail = mailListData.find((mail) => mail.id === props.params.id);

  if (!mail) {
    return <div>Mail not found</div>;
  }

  return (
    <>
      <Link
        className="absolute inset-0 backdrop-brightness-50 z-modal"
        href="/inbox"
      />
      <div className="absolute right-0 top-0 bottom-0 m-auto bg-white border rounded-l-lg w-3/5 z-modal">
        <MailViewer mail={mail} />
      </div>
    </>
  );
}
