import { logout } from "@/app/(dashboard)/action";
import { NavItemButton } from "@/app/(dashboard)/components/nav-item";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { navItems } from "@/lib/constants";
import Link from "next/link";

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
            The Joke Mail Service
          </h1>
          <form action={logout}>
            <Button variant="outline">ログアウト</Button>
          </form>
        </div>
        <section className="h-full pt-8">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={20} minSize={10}>
              <ol className="space-y-2 mr-2 pt-4">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <NavItemButton
                      title={item.title}
                      className="w-full flex justify-between gap-2"
                      asChild
                    >
                      <Link href={`/${item.title.toLocaleLowerCase()}`}>
                        <span className="inline-flex gap-2 items-center">
                          <item.icon />
                          {item.title}
                        </span>
                        {item.label && (
                          <span className="ml-2 text-sm text-gray-500 truncate">
                            {item.label}
                          </span>
                        )}
                      </Link>
                    </NavItemButton>
                  </li>
                ))}
              </ol>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel
              defaultSize={80}
              minSize={75}
              className="flex flex-col"
            >
              {props.children}
            </ResizablePanel>
          </ResizablePanelGroup>
        </section>
      </div>
      {props.modal}
    </main>
  );
}
