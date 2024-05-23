"use client";
import { formatEmail } from "@/components/mail-viewer/action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import type { MailData } from "@/lib/types";
import { format } from "date-fns";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function MailViewer(props: { mail: MailData }) {
  const [reply, setReply] = useState<string>("");

  const onClickFormat = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const data = await formatEmail(props.mail.text, reply);
    setReply(data.corrected_reply);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4">
        <Button asChild size="icon" variant="ghost">
          <Link href="/inbox" className="inline-flex items-center gap-2">
            <ChevronLeft />
          </Link>
        </Button>
      </div>
      <Separator />
      <div className="flex flex-col h-full">
        <div className="flex items-start p-4">
          <div className="flex items-start gap-4 text-sm">
            <Avatar>
              <AvatarImage alt={props.mail.name} />
              <AvatarFallback>
                {props.mail.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-semibold">{props.mail.name}</div>
              <div className="line-clamp-1 text-xs">{props.mail.subject}</div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Reply-To:</span>{" "}
                {props.mail.email}
              </div>
            </div>
          </div>
          {props.mail.date && (
            <div className="ml-auto text-xs text-muted-foreground">
              {format(new Date(props.mail.date), "PPpp")}
            </div>
          )}
        </div>
        <Separator />
        <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
          {props.mail.text}
        </div>
        <Separator className="mt-auto" />
        <div className="p-4">
          <div className="grid gap-4">
            <Textarea
              name="message"
              className="p-4"
              placeholder={`Reply ${props.mail.name}...`}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />
            <div className="flex justify-between items-center">
              <Label
                htmlFor="mute"
                className="flex items-center gap-2 text-xs font-normal"
              >
                <Switch id="mute" aria-label="Mute thread" /> Mute this thread
              </Label>
              <div className="flex items-center gap-2">
                <Button size="sm" className="ml-auto" onClick={onClickFormat}>
                  Format
                </Button>
                <Button size="sm" className="ml-auto">
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
