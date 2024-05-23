"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import type { ComponentProps, PropsWithChildren } from "react";

export function NavItemButton({
  title,
  ...props
}: PropsWithChildren<
  Omit<ComponentProps<typeof Button>, "variant"> & { title: string }
>) {
  const pathname = usePathname();
  // if the path is /foo/baz/bar, then the currentPage will be "foo"
  const firstPathParam = pathname.split("/")[1] as string;
  return (
    <Button
      variant={
        firstPathParam.toLowerCase() === title.toLowerCase()
          ? "default"
          : "ghost"
      }
      {...props}
    />
  );
}
