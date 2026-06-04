import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Sparkles,
  Zap,
  BookOpen,
  Film,
  Music,
  UserCircle2,
  ArrowRight,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "创作服务中心 — 洛洛创意工坊" },
      {
        name: "description",
        content:
          "洛洛创意工坊创作服务：Midjourney P 值授权与断充、Niji7 永久词会、AI 漫剧、AI 音乐、IP 形象设计。为创作者提供专业 AI 创作支持。",
      },
      { property: "og:title", content: "创作服务中心 — 洛洛创意工坊" },
      {
        property: "og:description",
        content: "为创作者提供专业 AI 创作支持与内容制作服务。",
      },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Sparkles,
    title: "Midjourney P 值授权",
    desc: "提供灵活稳定的创作授权方案，满足不同阶段创作需求。",
  },
  {
    icon: Zap,
    title: "Midjourney P 值断充",
    desc: "适用于短期创作需求，支持快速创作补充。",
  },
  {
    icon: BookOpen,
    title: "Niji7 永久词会",
    desc: "高质量词包持续更新，创作资源共享交流。",
  },
  {
    icon: Film,
    title: "AI 漫剧制作",
    desc: "角色设定 · 剧情策划 · 漫剧封面制作。",
  },
  {
    icon: Music,
    title: "AI 音乐制作",
    desc: "歌曲封面 · 歌词排版 · 音乐视觉设计。",
  },
  {
    icon: UserCircle2,
    title: "IP 形象设计",
    desc: "原创角色 · 虚拟形象 · 个人品牌设计。",
  },
] as const;

const STEPS = [
  { n: "01", t: "需求沟通", d: "聊清楚方向、用途与期望。" },
  { n: "02", t: "方案确认", d: "确认设定 / 风格板 / 排期。" },
  { n: "03", t: "内容制作", d: "AI + 人工的迭代创作周期。" },
  { n: "04", t: "交付完成", d: "源文件 + 高清成片交付。" },
] as const;

const FAQ = [
  { q: "如何咨询服务？", a: "通过联系页面获取联系方式，添加微信或发送邮件即可。" },
  { q: "是否支持长期合作？", a: "支持长期项目合作，欢迎建立稳定的创作伙伴关系。" },
  { q: "是否支持定制需求？", a: "支持个性化定制，可以根据你的具体需求设计专属方案。" },
] as const;

function ServicesPage() {
  return (
    <>
      {/* BANNER */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div
          aria-hidden
          className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-iris/30 blur-3xl"
        />
        <div className="mx-auto max-w-4xl px-4 pb-12 text-center md:px-8 md:pb-20">
          <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs text-cyan-glow">
            CREATIVE SERVICES
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl animate-fade-up">
            <span className="text-gradient">创作服务中心</span>
          </h1>
          <p
            className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            为创作者提供专业 AI 创作支持与内容制作服务。
          </p>
          <div
            className="mt-8 flex justify-center gap-3 animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <Link to="/contact">
              <GradientButton size="lg">
                <MessageCircle className="h-4 w-4" /> 联系咨询
              </GradientButton>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-16">
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title="服务项目"
          subtitle="围绕 AI 创作生态构建的六大服务方向，灵活组合，按需对接。"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <GlassCard
                key={s.title}
                className="group flex h-full flex-col p-6 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-cyan-glow transition group-hover:gap-2.5 group-hover:text-foreground"
                >
                  了解详情 <ArrowRight className="h-4 w-4" />
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="PROCESS" title="服务流程" />
        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-iris/60 to-transparent md:block"
          />
          <div className="grid gap-5 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="relative animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-glow-strong">
                  <span className="font-display text-lg font-bold text-white">
                    {s.n}
                  </span>
                </div>
                <GlassCard className="mt-5 p-5 text-center">
                  <div className="text-base font-bold">{s.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <SectionHeading eyebrow="FAQ" title="常见问题" align="center" />
        <div className="mt-10 space-y-3">
          {FAQ.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <GlassCard className="relative overflow-hidden p-10 text-center md:p-16">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-primary opacity-25"
          />
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink-glow/40 blur-3xl"
          />
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            <span className="text-gradient">有创作想法？聊聊看</span>
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            所有服务最终都通过 1 对 1 咨询对接，确保方案匹配你的创作需求。
          </p>
          <div className="mt-7 flex justify-center">
            <Link to="/contact">
              <GradientButton size="lg">
                联系咨询 <ArrowRight className="h-4 w-4" />
              </GradientButton>
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}

function FaqItem({
  q,
  a,
  defaultOpen,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <GlassCard className="p-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium">Q：{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
          A：{a}
        </div>
      )}
    </GlassCard>
  );
}
