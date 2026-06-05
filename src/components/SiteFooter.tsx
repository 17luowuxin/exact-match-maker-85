import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle, QrCode, Music } from "lucide-react";
import lwxLogo from "@/assets/lwx-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-iris/15">
      <div className="absolute inset-x-0 top-0 h-px glow-line opacity-60" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-12 md:px-8">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <img
              src={lwxLogo.url}
              alt="LWX 洛无辛工坊"
              className="h-10 w-10 object-contain drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
            />
            <span className="font-display text-lg font-bold">洛无辛工坊</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            玩转 AI，创造无限可能。一个数字创意实验室，专注于 AI 绘画、角色 IP、
            漫剧、音乐与互动应用的探索与表达。
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: MessageCircle, label: "微信" },
              { Icon: Music, label: "B 站" },
              { Icon: Mail, label: "邮箱" },
            ].map(({ Icon, label }) => (
              <span
                key={label}
                aria-label={label}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        {/* QR Cards */}
        <div className="md:col-span-4">
          <h4 className="mb-4 text-sm font-semibold text-foreground">扫码联系</h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "微信", id: "XxyLxs9201314" },
              { name: "QQ", id: "2967923130" },
            ].map((c) => (
              <div
                key={c.name}
                className="glass rounded-2xl p-3 text-center"
              >
                <div className="mx-auto flex aspect-square w-full items-center justify-center rounded-xl border border-iris/30 bg-background/60 text-[10px] text-muted-foreground">
                  <QrCode className="h-8 w-8 opacity-50" />
                </div>
                <div className="mt-2 text-xs font-medium">{c.name}</div>
                <div className="text-[10px] text-muted-foreground">{c.id}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav + Contact */}
        <div className="md:col-span-2">
          <h4 className="mb-4 text-sm font-semibold text-foreground">导航</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/works" className="hover:text-foreground">创意作品馆</Link></li>
            <li><Link to="/characters" className="hover:text-foreground">角色档案馆</Link></li>
            <li><Link to="/comics" className="hover:text-foreground">AI 漫剧馆</Link></li>
            <li><Link to="/music" className="hover:text-foreground">AI 音乐馆</Link></li>
            <li><Link to="/lab" className="hover:text-foreground">AI 实验室</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="mb-4 text-sm font-semibold text-foreground">合作</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>2967923130@qq.com</li>
            <li>微信：XxyLxs9201314</li>
            <li><Link to="/contact" className="hover:text-foreground">联系页面</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-iris/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} 洛无辛工作室</span>
          <span>ICP 备案 XXXXXXX 号 · 用 AI 与爱构建</span>
        </div>
      </div>
    </footer>
  );
}
