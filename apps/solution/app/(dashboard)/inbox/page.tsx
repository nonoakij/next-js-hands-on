import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { type MailListData, mailListData } from "@/lib/mock-data";
import { formatDistanceToNow } from "date-fns";
import { Archive, ArchiveX, File, Inbox, Send, Trash2 } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentProps } from "react";

export const metadata: Metadata = {
  title: "Inbox | The Joke Mail Service",
  description: "Inbox page for the Joke Mail Service.",
};

const navItems = [
  {
    title: "Inbox",
    label: "128",
    icon: Inbox,
    variant: "default",
  },
  {
    title: "Drafts",
    label: "9",
    icon: File,
    variant: "ghost",
  },
  {
    title: "Sent",
    label: "",
    icon: Send,
    variant: "ghost",
  },
  {
    title: "Junk",
    label: "23",
    icon: ArchiveX,
    variant: "ghost",
  },
  {
    title: "Trash",
    label: "",
    icon: Trash2,
    variant: "ghost",
  },
  {
    title: "Archive",
    label: "",
    icon: Archive,
    variant: "ghost",
  },
] as const;

export default function InboxPage() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20} minSize={10}>
        <Separator className="mt-16" />
        <ol className="space-y-2 mr-2 mt-2">
          {navItems.map((item) => (
            <li key={item.title}>
              <Button
                variant={item.variant}
                className="w-full flex justify-between gap-2"
              >
                <span className="inline-flex gap-2 items-center">
                  <item.icon />
                  {item.title}
                </span>
                {item.label && (
                  <span className="ml-2 text-sm text-gray-500 truncate">
                    {item.label}
                  </span>
                )}
              </Button>
            </li>
          ))}
        </ol>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80} minSize={75} className="flex flex-col">
        <h1 className="text-2xl font-bold m-4">Inbox</h1>
        <Separator />
        <MailList mailList={mailListData} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export function MailList(props: { mailList: MailListData }) {
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-2 p-4">
        {props.mailList.map((item) => (
          <Link
            key={item.id}
            href={`/inbox/${item.id}`}
            className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.name}</div>
                  {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div className="ml-auto text-xs">
                  {formatDistanceToNow(new Date(item.date), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="text-xs font-medium">{item.subject}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.text.substring(0, 300)}
            </div>
            {item.labels.length ? (
              <div className="flex items-center gap-2">
                {item.labels.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </ScrollArea>
  );
}

function getBadgeVariantFromLabel(
  label: string,
): ComponentProps<typeof Badge>["variant"] {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
