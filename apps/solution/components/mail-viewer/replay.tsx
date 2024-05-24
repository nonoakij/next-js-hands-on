"use client";
import { formatEmail } from "@/components/mail-viewer/action";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useAction } from "@/hooks/useAction";
import { useCallback, useState } from "react";

export function Replay(props: { mailText: string; placeholder: string }) {
  const [reply, setReply] = useState("");
  const [dispatch, isLoading] = useAction(formatEmail);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClickFormat = useCallback(async () => {
    setErrorMessage(null);
    try {
      const data = await dispatch({ message: props.mailText, reply });
      setReply(data.corrected_reply);
      setErrorMessage(null);
    } catch {
      setErrorMessage("Failed to format email. Please try again.");
    }
  }, [dispatch, props.mailText, reply]);
  return (
    <div className="grid gap-4">
      <Textarea
        name="reply"
        className="p-4"
        placeholder={props.placeholder}
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />
      {errorMessage && (
        <p role="alert" className="text-red-500 text-xs">
          {errorMessage}
        </p>
      )}
      <div className="flex justify-between items-center">
        <Label
          htmlFor="mute"
          className="flex items-center gap-2 text-xs font-normal"
        >
          <Switch id="mute" aria-label="Mute thread" /> Mute this thread
        </Label>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="ml-auto"
            disabled={isLoading}
            onClick={handleClickFormat}
          >
            {isLoading ? "Formatting..." : "Format"}
          </Button>
          <Button size="sm" className="ml-auto">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
