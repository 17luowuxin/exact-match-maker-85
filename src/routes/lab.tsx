import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Wand2, Users, Lightbulb, Shuffle, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/lab")({
  head: () => ({
    meta: [
      { title: "AI 实验室 — 洛洛小工坊" },
      {
        name: "description",
        content: "互动应用 · 创意实验 · 技术探索。AI 绘图、角色生成、灵感引擎、随机创意。",
      },
      { property: "og:title", content: "AI 实验室 — 洛洛小工坊" },
    ],
  }),
  component: LabPage,
});

const APPS = [
  { icon: Wand2, name: "AI 绘图工具", desc: "输入一段描述，生成蓝紫宇宙风格的视觉。", tag: "Beta" },
  { icon: Users, name: "角色生成器", desc: "几次点击拼装属于你的角色卡。", tag: "Beta" },
  { icon: Lightbulb, name: "灵感生成器", desc: "卡壳时来这里抽一个奇怪的方向。", tag: "Alpha" },
  { icon: Shuffle, name: "随机创意", desc: "一次摇出主题 + 角色 + 情绪 + 色调。", tag: "Alpha" },
];

function LabPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div className="mx-auto max-w-4xl px-4 pb-12 text-center md:px-8 md:pb-20">
          <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs text-cyan-glow">
            EXPERIMENTAL
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl animate-fade-up">
            <span className="text-gradient">AI 实验室</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "120ms" }}>
            这里是洛洛小工坊的工具堆与实验场。一切都还在生长。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-8 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {APPS.map((a, i) => {
            const Icon = a.icon;
            return (
              <GlassCard key={i} className="group p-8 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                    <Icon className="h-7 w-7 text-white" />
                  </span>
                  <span className="rounded-full glass px-3 py-1 text-xs text-cyan-glow">{a.tag}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{a.name}</h3>
                <p className="mt-2 text-muted-foreground">{a.desc}</p>
                <button className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-glow transition group-hover:text-foreground">
                  即将开放 <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </GlassCard>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <GlassCard className="relative overflow-hidden p-10 md:p-16">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-primary opacity-30" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <SectionHeading
              eyebrow="JOIN"
              title="想成为第一批测试者？"
              subtitle="留下联系方式，新工具上线时第一个告诉你。"
            />
            <Link to="/contact">
              <GradientButton size="lg">加入候补名单</GradientButton>
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
