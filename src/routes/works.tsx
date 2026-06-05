import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryPills } from "@/components/CategoryPills";
import { ArrowRight, Flame, Eye, Heart } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import char1 from "@/assets/char-1.jpg";
import char2 from "@/assets/char-2.jpg";
import char4 from "@/assets/char-4.jpg";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "创意作品馆 — 洛无辛工作室" },
      {
        name: "description",
        content: "AI 驱动的视觉创作与数字艺术展示空间：海报、角色立绘、漫剧封面、AI 音乐视觉。",
      },
      { property: "og:title", content: "创意作品馆 — 洛无辛工作室" },
      { property: "og:image", content: work1 },
    ],
  }),
  component: WorksPage,
});

const CATS = [
  "全部",
  "海报设计",
  "角色立绘",
  "人设卡",
  "AI 漫剧",
  "AI 音乐封面",
  "商业案例",
  "实验作品",
];

const WORKS = [
  { slug: "neon-city", src: work1, title: "霓虹之城", tag: "海报设计", views: "12.4k", likes: 892 },
  { slug: null, src: char2, title: "波频少女 Yumi", tag: "角色立绘", views: "8.1k", likes: 612 },
  { slug: "cyber-touch", src: work4, title: "漫剧《赛博之触》", tag: "AI 漫剧", views: "21k", likes: 1.4 },
  { slug: "night-radio", src: work3, title: "夜行电波 EP", tag: "AI 音乐封面", views: "9.7k", likes: 524 },
  { slug: null, src: char1, title: "AI 向导 Echo", tag: "人设卡", views: "6.3k", likes: 410 },
  { slug: null, src: char4, title: "创意守护者", tag: "角色立绘", views: "11.2k", likes: 778 },
  { slug: "starry-promise", src: work2, title: "星辰之约", tag: "海报设计", views: "14.6k", likes: 1.1 },
  { slug: null, src: work1, title: "都市未来曲线", tag: "实验作品", views: "5.4k", likes: 320 },
  { slug: null, src: work4, title: "Side Story · 04", tag: "AI 漫剧", views: "7.8k", likes: 489 },
] as const;

const TOP = [
  { rank: 1, title: "霓虹之城", views: "12.4k" },
  { rank: 2, title: "漫剧《赛博之触》", views: "21k" },
  { rank: 3, title: "星辰之约", views: "14.6k" },
  { rank: 4, title: "夜行电波 EP", views: "9.7k" },
  { rank: 5, title: "创意守护者", views: "11.2k" },
];

function WorksPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 md:grid-cols-2 md:px-8 md:pb-24">
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs text-cyan-glow">
              VISUAL ATELIER
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight md:text-6xl">
              <span className="text-gradient">创意作品馆</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              AI 驱动的视觉创作与数字艺术展示空间。
              <br />
              一切都在蓝紫色的光晕里发生。
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {["AI 绘画", "广告海报", "IP 立绘", "音乐视觉", "漫剧封面"].map((t) => (
                <span key={t} className="glass rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <GradientButton size="lg">浏览全部</GradientButton>
              <Link to="/contact">
                <GradientButton size="lg" variant="ghost">合作定制</GradientButton>
              </Link>
            </div>
          </div>

          {/* layered stack */}
          <div className="relative mx-auto h-[420px] w-full max-w-md md:h-[500px]">
            {[work2, work4, char2].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                className="absolute h-72 w-56 rounded-2xl object-cover shadow-glow-strong animate-float-y"
                style={{
                  left: `${i * 70}px`,
                  top: `${i * 50}px`,
                  zIndex: 3 - i,
                  animationDelay: `${i * 1.2}s`,
                  transform: `rotate(${(i - 1) * 6}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <CategoryPills items={CATS} />
      </section>

      {/* GRID + SIDEBAR */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-8 lg:grid-cols-[1fr_280px]">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((w, i) => {
            const card = (
              <GlassCard
                className="group h-full overflow-hidden p-0 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={w.src}
                    alt={w.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-cyan-glow">{w.tag}</div>
                  <div className="mt-1 font-medium">{w.title}</div>
                  <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {w.views}</span>
                    <span className="flex items-center gap-1"><Heart className="h-3 w-3" /> {w.likes}k</span>
                  </div>
                </div>
              </GlassCard>
            );
            return w.slug ? (
              <Link key={i} to="/works/$slug" params={{ slug: w.slug }}>
                {card}
              </Link>
            ) : (
              <div key={i}>{card}</div>
            );
          })}
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Flame className="h-4 w-4 text-pink-glow" /> 热门 TOP 5
            </div>
            <ul className="mt-4 space-y-3">
              {TOP.map((t) => (
                <li key={t.rank} className="flex items-center gap-3">
                  <span className={`font-display text-2xl font-bold ${t.rank <= 3 ? "text-gradient" : "text-muted-foreground"}`}>
                    {String(t.rank).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-sm">{t.title}</div>
                    <div className="text-xs text-muted-foreground">{t.views} 浏览</div>
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </aside>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <GlassCard className="relative overflow-hidden p-10 md:p-16">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-primary opacity-30" />
          <div aria-hidden className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-pink-glow/40 blur-3xl" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <SectionHeading
                eyebrow="COLLABORATE"
                title="把你的想法变成视觉"
                subtitle="AI 海报设计 · 角色立绘 · 漫剧封面 · AI 音乐视觉。定制服务，48 小时内回复。"
              />
            </div>
            <Link to="/contact">
              <GradientButton size="lg">联系洛洛 <ArrowRight className="h-4 w-4" /></GradientButton>
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
