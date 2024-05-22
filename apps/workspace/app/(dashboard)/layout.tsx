import { logout } from "@/app/(dashboard)/action";
import { Button } from "@/components/ui/button";

export default function dashboardLayout(props: {
  children: React.ReactNode;
  header: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <main className="relative">
      <div className="p-8 h-dvh">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold tracking-tight">
            {props.header}
          </h1>
          <form action={logout}>
            <Button variant="outline">ログアウト</Button>
          </form>
        </div>
        <section className="h-full pt-8">{props.children}</section>
      </div>
      {props.modal}
    </main>
  );
}
