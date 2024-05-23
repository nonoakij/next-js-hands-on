"use server";
import { z } from "zod";

const formatEmailResponseSchema = z.object({
  corrected_reply: z.string(),
});
type FormatEmailResponse = z.infer<typeof formatEmailResponseSchema>;

export async function formatEmail(payload: {
  message: string;
  reply: string;
}): Promise<FormatEmailResponse> {
  const response = await fetch("http://localhost:8000/email/format", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (response.ok) {
    const result = formatEmailResponseSchema.safeParse(await response.json());
    if (result.success) {
      return result.data;
    }
  }
  throw new Error("Failed to format email");
}
