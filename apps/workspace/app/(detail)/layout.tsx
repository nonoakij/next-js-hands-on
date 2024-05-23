import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function detailLayout(props: {
  children: React.ReactNode;
  header: React.ReactNode;
  modal: React.ReactNode;
}) {
  const cookieStore = cookies();
  const isAuth = cookieStore.get("___Host-auth");
  if (!isAuth) {
    redirect("/");
  }

  return <main>{props.children}</main>;
}
