import {
  createFileRoute,
  Link,
  Outlet,
  useRouterState,
  useNavigate,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { isLoggedIn, login, logout } from "@/lib/admin-store";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "管理后台 | 洛洛创意工坊" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminLayout,
});

const NAV: { to: string; label: string; exact?: boolean }[] = [
  { to: "/admin", label: "总览", exact: true },
  { to: "/admin/works", label: "创意作品" },
  { to: "/admin/characters", label: "角色档案" },
  { to: "/admin/comics", label: "AI 漫剧" },
  { to: "/admin/music", label: "AI 音乐" },
  { to: "/admin/services", label: "创作服务" },
  { to: "/admin/inquiries", label: "咨询留言" },
];

function AdminLayout() {
  const [authed, setAuthed] = useState(false);
  const [ready, setReady] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  useEffect(() => {
    setAuthed(isLoggedIn());
    setReady(true);
  }, []);

  if (!ready) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!authed) {
    return <LoginScreen onSuccess={() => setAuthed(true)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex max-w-7xl">
        <aside className="sticky top-0 hidden h-screen w-56 shrink-0 border-r border-border/60 p-4 md:block">
          <div className="mb-6">
            <div className="text-sm text-muted-foreground">管理后台</div>
            <div className="text-lg font-semibold">洛洛创意工坊</div>
          </div>
          <nav className="space-y-1">
            {NAV.map((item) => {
              const active = item.exact
                ? pathname === item.to
                : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 space-y-2 border-t border-border/60 pt-4">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-xs text-muted-foreground hover:bg-accent"
            >
              ← 返回前台
            </Link>
            <button
              onClick={() => {
                logout();
                setAuthed(false);
                navigate({ to: "/admin" });
              }}
              className="block w-full rounded-md px-3 py-2 text-left text-xs text-muted-foreground hover:bg-accent"
            >
              退出登录
            </button>
          </div>
        </aside>

        <div className="flex-1 p-4 md:p-8">
          {/* mobile nav */}
          <div className="-mx-1 mb-4 flex gap-2 overflow-x-auto md:hidden">
            {NAV.map((item) => {
              const active = item.exact
                ? pathname === item.to
                : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function LoginScreen({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      onSuccess();
    } else {
      setError("密码不正确");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-2xl border border-border bg-card/60 p-8 backdrop-blur"
      >
        <h1 className="text-xl font-semibold text-foreground">管理后台登录</h1>
        <p className="mt-1 text-xs text-muted-foreground">
          初始密码：loluo2026（可在 src/lib/admin-store.ts 修改）
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          placeholder="请输入密码"
          className="mt-5 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          autoFocus
        />
        {error && (
          <div className="mt-2 text-xs text-destructive">{error}</div>
        )}
        <button
          type="submit"
          className="mt-5 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          进入后台
        </button>
      </form>
    </div>
  );
}
