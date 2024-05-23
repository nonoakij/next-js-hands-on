"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { type inferFlattenedErrors, z } from "zod";

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});
type State = inferFlattenedErrors<typeof authSchema> | null;

export async function auth(state: State, formData: FormData): Promise<State> {
  const parsedFormData = authSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );
  if (!parsedFormData.success) {
    return parsedFormData.error.formErrors;
  }

  const { email, password } = parsedFormData.data;

  const response = await fetch("http://localhost:8000/auth", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (response.ok) {
    const result = await response.json();
    cookies().set("___Host-auth", result.message);
    redirect("/inbox");
  }
  return null;
}

const formatEmailResponseSchema = z.object({
  corrected_reply: z.string(),
});
type FormatEmailResponse = z.infer<typeof formatEmailResponseSchema>;

export async function formatEmail(
  message: string,
  reply: string,
): Promise<FormatEmailResponse> {
  console.log(message, reply);
  const response = await fetch("http://localhost:8000/email/format", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      reply,
    }),
  });
  if (response.ok) {
    const result = formatEmailResponseSchema.safeParse(await response.json());
    if (result.success) {
      return result.data;
    }
  }
  throw new Error("Failed to format email");
}
