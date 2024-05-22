"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  cookies().set("___Host-auth", "", { maxAge: 0 });
  redirect("/");
}
