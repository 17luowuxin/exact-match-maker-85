import { Link } from "@tanstack/react-router";
import { Sparkles, Mail, MessageCircle, Music, Palette } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-iris/15">
      <div className="absolute inset-x-0 top-0 h-px glow-line opacity-60" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-lg font-bold">洛洛小工坊</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            玩转 AI，创造无限可能。一个数字创意实验室，专注于 AI 绘画、角色 IP、
            漫剧、音乐与互动应用的探索与表达。
          </p>
          <div className="mt-6 flex gap-3">
            {[Palette, Music, MessageCircle, Mail].map((Icon, i) => (
              <span
                key={i}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">导航</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/works" className="hover:text-foreground">创意作品馆</Link></li>
            <li><Link to="/characters" className="hover:text-foreground">角色档案馆</Link></li>
            <li><Link to="/comics" className="hover:text-foreground">AI 漫剧馆</Link></li>
            <li><Link to="/music" className="hover:text-foreground">AI 音乐馆</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">联系</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>微信 / QQ 商务咨询</li>
            <li>hello@luoluo.studio</li>
            <li><Link to="/contact" className="hover:text-foreground">联系页面</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-iris/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} 洛洛小工坊 · NijiMJ Studio</span>
          <span>ICP 备案 XXXXXXX 号 · 用 AI 与爱构建</span>
        </div>
      </div>
    </footer>
  );
}
