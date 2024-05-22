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
