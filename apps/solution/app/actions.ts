"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
	cookies().set("___Host-auth", "auth-id");
	redirect("/inbox");
}
