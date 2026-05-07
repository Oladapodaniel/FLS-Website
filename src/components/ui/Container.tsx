import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16",
        className,
      )}
      {...props}
    />
  );
}
