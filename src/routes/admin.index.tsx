import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SCHEMAS, readAll, type ResourceKey } from "@/lib/admin-store";

export const Route = createFileRoute("/admin/")({
  component: AdminHome,
});

function AdminHome() {
  const [counts, setCounts] = useState<Partial<Record<ResourceKey, number>>>({});

  useEffect(() => {
    const c: Partial<Record<ResourceKey, number>> = {};
    (Object.keys(SCHEMAS) as ResourceKey[]).forEach((k) => {
      c[k] = readAll(k).length;
    });
    setCounts(c);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">总览</h1>
        <p className="text-sm text-muted-foreground">
          欢迎回来，洛洛 ✦ 这是你的创作内容总览。
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {(Object.keys(SCHEMAS) as ResourceKey[]).map((k) => (
          <Link
            key={k}
            to={`/admin/${k}` as "/admin"}
            className="rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-colors hover:border-primary/50"
          >
            <div className="text-sm text-muted-foreground">
              {SCHEMAS[k].label}
            </div>
            <div className="mt-2 text-3xl font-bold text-foreground">
              {counts[k] ?? 0}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
