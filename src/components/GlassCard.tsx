import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function GlassCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass rounded-2xl shadow-card transition-all duration-300",
        "hover:border-iris/40 hover:shadow-glow",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
