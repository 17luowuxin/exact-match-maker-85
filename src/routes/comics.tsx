import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryPills } from "@/components/CategoryPills";
import { Play, Flame } from "lucide-react";
import work4 from "@/assets/work-4.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import char4 from "@/assets/char-4.jpg";

export const Route = createFileRoute("/comics")({
  head: () => ({
    meta: [
      { title: "AI 漫剧馆 — 洛无辛工作室" },
      {
        name: "description",
        content: "AI 漫剧 · 剧情宇宙 · 视觉叙事平台。连载、完结、短剧、角色番外、实验剧情。",
      },
      { property: "og:title", content: "AI 漫剧馆 — 洛无辛工作室" },
      { property: "og:image", content: work4 },
    ],
  }),
  component: ComicsPage,
});

const CATS = ["全部", "连载中", "完结", "短剧", "角色番外", "实验剧情"];

const SERIES = [
  { src: work4, title: "天道欠我一条命", ep: "第 12 集", status: "更新中", desc: "一个被神明遗忘的少年踏入数字次元。" },
  { src: char4, title: "AI 之城", ep: "第 08 集", status: "更新中", desc: "守护者茜与失控的城市核心。" },
  { src: work1, title: "霓虹方舟", ep: "完结", status: "全 24 集", desc: "在算法终末点燃最后一束光。" },
  { src: work2, title: "洛洛的数字世界", ep: "第 03 集", status: "更新中", desc: "主角色洛洛的日常番外。" },
];

const TOP = [
  { rank: 1, title: "天道欠我一条命" },
  { rank: 2, title: "AI 之城" },
  { rank: 3, title: "洛洛的数字世界" },
];

const TIMELINE = [
  { ch: "Ch.01", who: "洛洛", t: "宇宙觉醒" },
  { ch: "Ch.02", who: "Echo", t: "信号干扰" },
  { ch: "Ch.03", who: "Yumi", t: "声纹之约" },
  { ch: "Ch.04", who: "茜", t: "守护者出现" },
  { ch: "Ch.05", who: "Aether", t: "实验体觉醒" },
  { ch: "Ch.06", who: "—", t: "未来未定" },
];

function ComicsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 md:grid-cols-2 md:px-8 md:pb-24">
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs text-cyan-glow">
              CINEMATIC SERIES
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
              <span className="text-gradient">AI 漫剧馆</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              电影感的画面，剧本式的叙事。AI 生成的角色与分镜在这里成为一部部连载。
            </p>
            <div className="mt-8 flex gap-3">
              <GradientButton size="lg">
                <Play className="h-4 w-4" /> 立即观看
              </GradientButton>
              <Link to="/contact">
                <GradientButton size="lg" variant="ghost">定制漫剧</GradientButton>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-12 -z-10 rounded-full bg-pink-glow/20 blur-3xl animate-breathe" />
            <img
              src={work4}
              alt="漫剧封面"
              width={768}
              height={1024}
              className="rounded-3xl shadow-glow-strong"
            />
          </div>
        </div>
      </section>

      {/* FILTER */}
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <CategoryPills items={CATS} />
      </section>

      {/* SERIES + TOP */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-8 lg:grid-cols-[1fr_280px]">
        <div>
          <h3 className="mb-6 text-lg font-semibold">正在连载</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {SERIES.map((s, i) => (
              <GlassCard
                key={i}
                className="group overflow-hidden p-0 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.src}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <button className="absolute right-4 bottom-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
                    <Play className="h-5 w-5 text-white" />
                  </button>
                  <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs text-cyan-glow">
                    {s.status}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold">{s.title}</h4>
                    <span className="text-xs text-muted-foreground">{s.ep}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <GlassCard className="p-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Flame className="h-4 w-4 text-pink-glow" /> 热门排行
            </div>
            <ul className="mt-4 space-y-4">
              {TOP.map((t) => (
                <li key={t.rank} className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-gradient">
                    {String(t.rank).padStart(2, "0")}
                  </span>
                  <div className="text-sm">{t.title}</div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </aside>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading
          eyebrow="STORY TIMELINE"
          title="剧情时间轴"
          subtitle="点击任意章节，跳进那一刻的故事。"
        />

        <GlassCard className="relative mt-12 overflow-x-auto p-8 md:p-12">
          <div className="relative min-w-[700px]">
            {/* line */}
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 glow-line" />
            <div className="relative grid grid-cols-6 gap-4">
              {TIMELINE.map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="text-xs text-muted-foreground">{t.ch}</div>
                  <div className="my-3 h-4 w-4 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background" />
                  <div className="text-sm font-medium">{t.t}</div>
                  <div className="text-xs text-cyan-glow">{t.who}</div>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <GlassCard className="relative overflow-hidden p-10 md:p-16">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-primary opacity-30" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <SectionHeading
              eyebrow="COLLABORATE"
              title="把你的剧本，做成 AI 漫剧"
              subtitle="定制 AI 漫剧 · 剧情 IP · 角色动画。"
            />
            <Link to="/contact">
              <GradientButton size="lg">联系合作</GradientButton>
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
