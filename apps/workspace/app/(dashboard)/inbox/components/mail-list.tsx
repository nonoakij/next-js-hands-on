"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { MailListData } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { type ComponentProps, memo, useState } from "react";

export function MailList(props: { mailList: MailListData }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col h-full p-4">
      <div className="flex items-center justify-center gap-2">
        <Label htmlFor="search">From:</Label>
        <Input
          id="search"
          className="flex-1"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.currentTarget.value);
          }}
        />
      </div>
      <ScrollArea className="h-full mt-4">
        <div className="space-y-2">
          <SlowSearchResult searchText={searchText} mailList={props.mailList} />
        </div>
      </ScrollArea>
    </div>
  );
}

const SlowSearchResult = memo(function SlowSearchResult(props: {
  searchText: string;
  mailList: MailListData;
}) {
  const startTime = performance.now();
  while (performance.now() - startTime < 100) {
    // Do nothing for 100 ms to emulate extremely slow code
  }
  const filteredMailList = props.mailList.filter((item) => {
    return item.name.toLowerCase().includes(props.searchText.toLowerCase());
  });
  return (
    <>
      {filteredMailList.map((item) => (
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
    </>
  );
});

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
