import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GradientButton } from "./GradientButton";
import { cn } from "@/lib/utils";
import lwxLogo from "@/assets/lwx-logo.png.asset.json";

const NAV = [
  { to: "/", label: "首页" },
  { to: "/services", label: "创作服务" },
  { to: "/works", label: "创意作品馆" },
  { to: "/characters", label: "角色档案馆" },
  { to: "/comics", label: "AI 漫剧馆" },
  { to: "/music", label: "AI 音乐馆" },
  { to: "/lab", label: "AI 实验室" },
  { to: "/contact", label: "联系我" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass border-b border-iris/20"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative flex h-10 w-10 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-iris/40 blur-lg opacity-70 animate-pulse-glow" />
            <img
              src={lwxLogo.url}
              alt="LWX 洛无辛工坊"
              className="relative h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
            />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground group-hover:text-gradient">
            洛无辛工坊
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "rounded-full px-4 py-2 text-sm text-foreground bg-iris/15 border border-iris/30",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/contact">
            <GradientButton size="sm">聊聊创作</GradientButton>
          </Link>
        </div>

        <button
          aria-label="菜单"
          className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* glow line */}
      {scrolled && (
        <div className="absolute inset-x-0 bottom-0 h-px glow-line opacity-70" />
      )}

      {/* mobile drawer */}
      {open && (
        <div className="glass border-t border-iris/20 lg:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base text-muted-foreground hover:bg-iris/10 hover:text-foreground"
                activeProps={{
                  className:
                    "rounded-xl px-4 py-3 text-base text-foreground bg-iris/15",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2">
              <GradientButton size="md" className="w-full">
                聊聊创作
              </GradientButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
