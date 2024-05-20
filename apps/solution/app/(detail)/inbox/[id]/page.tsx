import { MailViewer } from "@/components/mail-viewer";
import { mailListData } from "@/lib/mock-data";

export default function InboxDetailsPage(props: {
  params: {
    id: string;
  };
}) {
  const mail = mailListData.find((mail) => mail.id === props.params.id);

  if (!mail) {
    return <div>Mail not found</div>;
  }

  return (
    <div className="h-dvh">
      <MailViewer mail={mail} />
    </div>
  );
}
