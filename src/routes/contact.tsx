import { createFileRoute } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, MessageCircle, QrCode, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "联系洛洛小工坊 — 商务合作" },
      {
        name: "description",
        content: "统一商务入口：微信、QQ、邮箱、B 站、小红书。AI 海报、角色、漫剧、音乐、IP 世界观定制。",
      },
      { property: "og:title", content: "联系洛洛小工坊" },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { icon: QrCode, name: "微信", value: "luoluo-studio", note: "扫码或搜索 ID" },
  { icon: MessageCircle, name: "QQ", value: "888 888 888", note: "工作日 10:00 – 22:00" },
  { icon: Mail, name: "邮箱", value: "hello@luoluo.studio", note: "48 小时内回复" },
  { icon: Send, name: "社交", value: "B 站 / 小红书 @洛洛小工坊", note: "日常作品与花絮" },
];

const SERVICES = [
  "AI 海报设计",
  "角色设计",
  "漫剧制作",
  "AI 音乐制作",
  "IP 世界观构建",
];

const STEPS = [
  { n: "01", t: "提交需求", d: "聊清楚预算、风格、用途。" },
  { n: "02", t: "沟通设定", d: "确认设定卡 / 风格板。" },
  { n: "03", t: "创作设计", d: "进入 AI + 人工的迭代周期。" },
  { n: "04", t: "成品交付", d: "源文件 + 高分辨率成片。" },
];

const FAQ = [
  { q: "可以定制专属角色吗？", a: "可以。我们提供从人设到立绘到 IP 世界观的全流程。" },
  { q: "是否接商业项目？", a: "支持。品牌联名、广告海报、活动主视觉都欢迎合作。" },
  { q: "交付周期一般多久？", a: "单图 3–7 天，系列 / 漫剧 / 音乐项目通常 2–6 周。" },
  { q: "可以签 NDA 吗？", a: "可以，商业项目默认走保密流程。" },
];

function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div className="mx-auto max-w-4xl px-4 pb-12 text-center md:px-8 md:pb-20">
          <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs text-cyan-glow">
            LET'S TALK
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl animate-fade-up">
            <span className="text-gradient">联系洛洛小工坊</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "120ms" }}>
            把你的想法、品牌、剧本、声音 —— 任何 AI 能放大的东西 —— 交给我们。
          </p>
          <div className="mt-8 flex justify-center gap-3 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <GradientButton size="lg">
              <MessageCircle className="h-4 w-4" /> 微信联系
            </GradientButton>
            <GradientButton size="lg" variant="ghost">
              <Mail className="h-4 w-4" /> 邮箱联系
            </GradientButton>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => {
            const Icon = c.icon;
            return (
              <GlassCard key={c.name} className="p-6 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{c.name}</h3>
                <div className="mt-1 text-sm text-cyan-glow">{c.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{c.note}</div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading eyebrow="SERVICES" title="我们能做的事" />
        <div className="mt-10 flex flex-wrap gap-3">
          {SERVICES.map((s) => (
            <span key={s} className="glass rounded-full px-5 py-2.5 text-sm hover:border-iris/60 hover:text-white">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading eyebrow="PROCESS" title="合作流程" />
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <GlassCard key={s.n} className="p-6 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="font-display text-4xl font-bold text-gradient">{s.n}</div>
              <div className="mt-3 text-lg font-bold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <SectionHeading eyebrow="FAQ" title="常见问题" align="center" />
        <div className="mt-10 space-y-4">
          {FAQ.map((f, i) => (
            <GlassCard key={i} className="p-6">
              <div className="font-medium">Q：{f.q}</div>
              <div className="mt-2 text-sm text-muted-foreground">A：{f.a}</div>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
