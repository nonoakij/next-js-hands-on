import { File, Inbox, Send } from "lucide-react";

export const navItems = [
  {
    title: "Inbox",
    label: "128",
    icon: Inbox,
  },
  {
    title: "Drafts",
    label: "",
    icon: File,
  },
  {
    title: "Sent",
    label: "",
    icon: Send,
  },
] as const;
