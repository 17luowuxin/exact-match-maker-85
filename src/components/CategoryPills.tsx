import { cn } from "@/lib/utils";
import { useState } from "react";

export function CategoryPills({ items }: { items: string[] }) {
  const [active, setActive] = useState(items[0]);
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={cn(
            "shrink-0 rounded-full px-5 py-2 text-sm transition-all duration-300",
            active === item
              ? "bg-gradient-primary text-white shadow-glow"
              : "glass text-muted-foreground hover:text-foreground",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
