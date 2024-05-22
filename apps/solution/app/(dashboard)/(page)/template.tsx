"use client";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { File, Inbox, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
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

export default function Template(props: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentPage = pathname.split("/").pop() as string;
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={20} minSize={10}>
        <ol className="space-y-2 mr-2 pt-4">
          {navItems.map((item) => (
            <li key={item.title}>
              <Button
                variant={
                  currentPage.toLowerCase() === item.title.toLowerCase()
                    ? "default"
                    : "ghost"
                }
                className="w-full flex justify-between gap-2"
                asChild
              >
                <Link href={`/${item.title.toLocaleLowerCase()}`}>
                  <span className="inline-flex gap-2 items-center">
                    <item.icon />
                    {item.title}
                  </span>
                  {item.label && (
                    <span className="ml-2 text-sm text-gray-500 truncate">
                      {item.label}
                    </span>
                  )}
                </Link>
              </Button>
            </li>
          ))}
        </ol>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80} minSize={75} className="flex flex-col">
        {props.children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
