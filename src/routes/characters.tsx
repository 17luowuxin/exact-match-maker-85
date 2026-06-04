import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryPills } from "@/components/CategoryPills";
import loroHero from "@/assets/loro-hero.jpg";
import char1 from "@/assets/char-1.jpg";
import char2 from "@/assets/char-2.jpg";
import char3 from "@/assets/char-3.jpg";
import char4 from "@/assets/char-4.jpg";

export const Route = createFileRoute("/characters")({
  head: () => ({
    meta: [
      { title: "角色档案馆 — 洛洛小工坊" },
      {
        name: "description",
        content:
          "NijiMJ / 洛洛小工坊 · IP 角色宇宙系统：主角色、AI 向导、漫剧角色、音乐角色、实验体。",
      },
      { property: "og:title", content: "角色档案馆 — 洛洛小工坊" },
      { property: "og:image", content: loroHero },
    ],
  }),
  component: CharactersPage,
});

const CATS = ["全部", "主角", "AI 向导", "漫剧角色", "音乐角色", "实验体", "未解锁"];

const CHARS = [
  { src: loroHero, name: "洛洛 Luoluo", tag: "主角 · MAIN", line: "蓝紫宇宙的创世者，永远好奇。", heat: 9842 },
  { src: char1, name: "Echo", tag: "AI 向导", line: "用数据流谱写每一段引导。", heat: 5421 },
  { src: char2, name: "Yumi 波频", tag: "音乐角色", line: "声音是她触碰世界的方式。", heat: 6713 },
  { src: char3, name: "Aether 灵体", tag: "实验体", line: "在结晶与意识的边界游走。", heat: 3902 },
  { src: char4, name: "茜 · 创意守护者", tag: "漫剧角色", line: "持光剑斩断混沌的少女。", heat: 7211 },
  { src: char1, name: "Nova", tag: "AI 向导", line: "宇宙级的搜索引擎，温柔版本。", heat: 4120 },
];

function CharactersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 md:grid-cols-[1fr_auto] md:px-8 md:pb-24">
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs text-cyan-glow">
              IP UNIVERSE · NijiMJ
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
              <span className="text-gradient">角色档案馆</span>
            </h1>
            <p className="mt-4 max-w-lg text-lg text-muted-foreground">
              NijiMJ · 洛洛小工坊 IP 角色宇宙系统。每一个角色都不是孤岛，
              而是同一个数字世界里的不同表情。
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {["主角色", "AI 向导", "漫剧角色", "音乐角色", "实验体"].map((t) => (
                <span key={t} className="glass rounded-full px-3 py-1">{t}</span>
              ))}
            </div>
            <div className="mt-8 flex gap-3">
              <GradientButton size="lg">进入宇宙</GradientButton>
              <Link to="/contact">
                <GradientButton size="lg" variant="ghost">定制角色</GradientButton>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -z-10 m-auto h-full w-full rounded-full bg-iris/40 blur-3xl animate-breathe" />
            <div className="pointer-events-none absolute inset-0 -z-10 m-auto h-[120%] w-[120%] rounded-full border border-iris/30 animate-spin-slow" />
            <img
              src={loroHero}
              alt="洛洛"
              width={1024}
              height={1280}
              className="relative rounded-3xl shadow-glow-strong animate-float-y"
            />
          </div>
        </div>
      </section>

      {/* MAIN CHARACTERS rail */}
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="MAIN CHARACTERS"
          title="核心角色"
          subtitle="贯穿所有作品、漫剧与音乐的灵魂人物。"
        />
        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CHARS.slice(0, 5).map((c) => (
            <GlassCard key={c.name} className="group min-w-[280px] overflow-hidden p-0">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="text-xs text-cyan-glow">{c.tag}</div>
                <div className="mt-1 text-lg font-bold">{c.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.line}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <CategoryPills items={CATS} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHARS.map((c, i) => (
            <GlassCard
              key={i}
              className="group overflow-hidden p-0 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={c.src}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-glow">{c.tag}</span>
                  <span className="text-pink-glow">♥ {c.heat.toLocaleString()}</span>
                </div>
                <div className="mt-1 text-lg font-bold">{c.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{c.line}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* WORLD MAP */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading
          eyebrow="WORLDVIEW"
          title="NijiMJ 世界观结构"
          subtitle="以洛洛为中心向外辐射的关系网络。每条发光的连线，都是一段故事。"
          align="center"
        />

        <GlassCard className="relative mt-12 overflow-hidden p-8 md:p-12">
          <div className="relative mx-auto aspect-square w-full max-w-2xl">
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(195 100% 60%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(290 90% 65%)" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glow"><feGaussianBlur stdDeviation="2" /></filter>
              </defs>
              {[
                [200, 60], [340, 160], [340, 280], [200, 360], [60, 280], [60, 160],
              ].map(([x, y], i) => (
                <line
                  key={i}
                  x1="200" y1="200" x2={x} y2={y}
                  stroke="url(#lineGrad)" strokeWidth="1.5" filter="url(#glow)"
                />
              ))}
              {[
                [200, 60], [340, 160], [340, 280], [200, 360], [60, 280], [60, 160],
              ].map(([x, y], i) => (
                <circle key={`d-${i}`} cx={x} cy={y} r="6" fill="hsl(195 100% 70%)" filter="url(#glow)" />
              ))}
            </svg>

            {/* center: Luoluo */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-full bg-iris/60 blur-2xl animate-breathe" />
                <img
                  src={loroHero}
                  alt="洛洛"
                  loading="lazy"
                  className="h-28 w-28 rounded-full border-2 border-iris/60 object-cover shadow-glow-strong md:h-36 md:w-36"
                />
                <div className="mt-2 text-center text-sm font-bold">洛洛</div>
              </div>
            </div>

            {/* satellites */}
            {[
              { label: "AI 音乐角色", x: "50%", y: "8%" },
              { label: "AI 漫剧角色", x: "92%", y: "32%" },
              { label: "实验体角色", x: "92%", y: "70%" },
              { label: "创意守护者", x: "50%", y: "92%" },
              { label: "AI 向导", x: "8%", y: "70%" },
              { label: "未解锁角色", x: "8%", y: "32%" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs"
                style={{ left: s.x, top: s.y }}
              >
                {s.label}
              </div>
            ))}
          </div>
        </GlassCard>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <GlassCard className="relative overflow-hidden p-10 md:p-16">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-primary opacity-30" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <SectionHeading
              eyebrow="CUSTOM"
              title="为你打造专属角色 IP"
              subtitle="AI 角色设计 · 人设卡制作 · 漫剧角色创建 · IP 世界观搭建。"
            />
            <Link to="/contact">
              <GradientButton size="lg">开始定制</GradientButton>
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
