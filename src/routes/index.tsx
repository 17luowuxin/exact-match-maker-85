import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Palette,
  Users,
  Film,
  Music,
  FlaskConical,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Zap,
  BookOpen,
  UserCircle2,
} from "lucide-react";
import { GradientButton } from "@/components/GradientButton";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import loroHero from "@/assets/loro-hero.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "洛无辛工作室 | 玩转 AI，创造无限可能" },
      {
        name: "description",
        content:
          "洛无辛工作室数字创意实验室：AI 绘画、广告海报、人设角色卡、IP 立绘、AI 漫剧、AI 歌曲与互动应用。",
      },
      { property: "og:title", content: "洛无辛工作室 | 玩转 AI，创造无限可能" },
      {
        property: "og:description",
        content: "数字创意实验室 · 蓝紫宇宙中的 AI 视觉与 IP 宇宙。",
      },
      { property: "og:image", content: loroHero },
    ],
  }),
  component: Home,
});

const MODULES = [
  {
    icon: Palette,
    title: "创意作品馆",
    desc: "AI 绘画 / 广告海报 / 视觉设计",
    to: "/works",
  },
  {
    icon: Users,
    title: "角色档案馆",
    desc: "人设角色卡 / IP 立绘 / 角色设定",
    to: "/characters",
  },
  {
    icon: Film,
    title: "AI 漫剧馆",
    desc: "漫剧创作 / 分镜设计 / 剧情生成",
    to: "/comics",
  },
  {
    icon: Music,
    title: "AI 音乐馆",
    desc: "AI 歌曲 / 音乐封面 / 声音创作",
    to: "/music",
  },
  {
    icon: FlaskConical,
    title: "AI 实验室",
    desc: "互动应用 / 创意实验 / 技术探索",
    to: "/lab",
  },
  {
    icon: MessageSquare,
    title: "社区中心",
    desc: "创作者交流 / 灵感分享 / 合作对接",
    to: "/contact",
  },
] as const;

const FEATURED = [
  { src: work1, title: "霓虹之城海报", tag: "海报设计" },
  { src: work2, title: "星辰魔法少女", tag: "角色立绘" },
  { src: work4, title: "漫剧《天道欠我》", tag: "漫剧封面" },
  { src: work3, title: "夜行电波 EP", tag: "音乐视觉" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 md:grid-cols-2 md:gap-6 md:px-8 md:pb-32">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-cyan-glow">
              <Sparkles className="h-3.5 w-3.5" />
              数字创意实验室 · NijiMJ
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              玩转 AI，
              <br />
              <span className="text-gradient">创造无限可能</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              在蓝紫色的宇宙里，洛无辛工作室是一个由 AI 驱动的创意据点 ——
              我们用图像、角色、剧情与声音构建一个不断生长的数字世界。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/works">
                <GradientButton size="lg">
                  浏览作品 <ArrowRight className="h-4 w-4" />
                </GradientButton>
              </Link>
              <Link to="/contact">
                <GradientButton size="lg" variant="ghost">
                  想要定制？聊聊
                </GradientButton>
              </Link>
            </div>

            <div className="mt-12 flex gap-8 text-sm">
              {[
                { n: "200+", l: "AI 作品" },
                { n: "30+", l: "IP 角色" },
                { n: "12", l: "漫剧 / 单曲" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-gradient">
                    {s.n}
                  </div>
                  <div className="mt-1 text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="absolute -inset-10 -z-10 rounded-full bg-iris/30 blur-3xl animate-breathe" />
            {/* breathing halo */}
            <div className="pointer-events-none absolute inset-0 -z-10 m-auto h-[110%] w-[110%] rounded-full border border-iris/30 animate-spin-slow" />
            <div className="pointer-events-none absolute inset-0 -z-10 m-auto h-[125%] w-[125%] rounded-full border border-pink-glow/20 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "60s" }} />
            <img
              src={loroHero}
              alt="洛洛 · 核心角色"
              width={1024}
              height={1280}
              className="relative mx-auto w-full max-w-md rounded-3xl shadow-glow-strong animate-float-y"
            />
          </div>
        </div>
      </section>

      {/* SERVICES QUICK GRID */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="SERVICES"
            title="创作服务"
            subtitle="围绕 AI 创作生态的六大服务方向 —— 点击进入创作服务页详细了解。"
          />
          <Link
            to="/services"
            className="group flex items-center gap-2 text-sm text-cyan-glow hover:text-foreground"
          >
            查看全部 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {[
            { icon: Sparkles, label: "P 值授权" },
            { icon: Zap, label: "P 值定制/断" },
            { icon: BookOpen, label: "Niji7 词会" },
            { icon: Film, label: "AI 漫剧" },
            { icon: Music, label: "AI 音乐" },
            { icon: UserCircle2, label: "IP 设计" },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.label}
                to="/services"
                className="group"
              >
                <GlassCard
                  className="flex h-full flex-col items-center justify-center gap-3 p-5 text-center animate-fade-up transition-transform group-hover:-translate-y-1"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                  <div className="text-sm font-medium">{s.label}</div>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MODULES */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="EXPLORE"
          title="六大创作宇宙入口"
          subtitle="从一张海报到一个 IP 世界，洛无辛工作室提供完整的 AI 创意叙事链条。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            return (
              <Link key={m.title} to={m.to} className="group">
                <GlassCard
                  className="h-full p-6 animate-fade-up"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                      <Icon className="h-6 w-6 text-white" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
                </GlassCard>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="FEATURED"
            title="精选作品流"
            subtitle="海报 · 角色卡 · 音乐封面 · 漫剧 —— 来自蓝紫宇宙的视觉切片。"
          />
          <Link
            to="/works"
            className="group flex items-center gap-2 text-sm text-cyan-glow hover:text-foreground"
          >
            查看全部 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {FEATURED.map((w, i) => (
            <GlassCard
              key={w.title}
              className="group overflow-hidden p-0 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-4">
                  <div className="text-xs text-cyan-glow">{w.tag}</div>
                  <div className="mt-1 font-medium">{w.title}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <GlassCard className="relative overflow-hidden p-8 md:p-16">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-pink-glow/30 blur-3xl"
          />
          <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <SectionHeading
                eyebrow="ABOUT"
                title="关于洛无辛工作室"
                subtitle="我们相信 AI 不只是工具，而是新的创作伙伴。洛无辛工作室是一个把模型、IP 与叙事编织在一起的工作室 —— 在这里，每个角色、每段剧情、每一帧画面，都是一次实验。"
              />
            </div>
            <Link to="/contact">
              <GradientButton size="lg">
                了解更多 <ArrowRight className="h-4 w-4" />
              </GradientButton>
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
