import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { SectionHeading } from "@/components/SectionHeading";
import {
  MessageCircle,
  QrCode,
  Sparkles,
  BookOpen,
  Film,
  Music,
  UserCircle2,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "联系洛洛 — 洛洛创意工坊" },
      {
        name: "description",
        content:
          "欢迎交流创作与合作：AI 创作支持、Niji7 词会、AI 漫剧合作、AI 音乐合作、IP 设计合作。",
      },
      { property: "og:title", content: "联系洛洛 — 洛洛创意工坊" },
    ],
  }),
  component: ContactPage,
});

const TOPICS = [
  { icon: Sparkles, name: "AI 创作支持", desc: "P 值授权 / 断充 · 灵活方案" },
  { icon: BookOpen, name: "Niji7 词会", desc: "高质量词包 · 持续更新" },
  { icon: Film, name: "AI 漫剧合作", desc: "角色 · 剧情 · 封面共创" },
  { icon: Music, name: "AI 音乐合作", desc: "封面 · 歌词 · 视觉" },
  { icon: UserCircle2, name: "IP 设计合作", desc: "原创角色 · 虚拟形象" },
] as const;

function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div
          aria-hidden
          className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-iris/30 blur-3xl"
        />
        <div className="mx-auto max-w-4xl px-4 pb-12 text-center md:px-8 md:pb-16">
          <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs text-cyan-glow">
            LET'S CREATE
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl animate-fade-up">
            <span className="text-gradient">联系洛洛</span>
          </h1>
          <p
            className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            欢迎交流创作与合作。
          </p>
          <div
            className="mt-8 flex justify-center animate-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            <a href="#contact-channels">
              <GradientButton size="lg">
                <MessageCircle className="h-4 w-4" /> 立即咨询
              </GradientButton>
            </a>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <SectionHeading eyebrow="TOPICS" title="可以聊的方向" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t, i) => {
            const Icon = t.icon;
            return (
              <GlassCard
                key={t.name}
                className="flex items-start gap-4 p-6 animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow">
                  <Icon className="h-6 w-6 text-white" />
                </span>
                <div>
                  <div className="text-base font-bold">{t.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {t.desc}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* QR CARDS */}
      <section
        id="contact-channels"
        className="mx-auto max-w-5xl px-4 py-16 md:px-8"
      >
        <SectionHeading
          eyebrow="CONTACT"
          title="扫码联系"
          subtitle="添加微信或 QQ，一对一沟通创作需求。"
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          {[
            { name: "微信", id: "luoluo-studio" },
            { name: "QQ", id: "888 888 888" },
          ].map((c, i) => (
            <GlassCard
              key={c.name}
              className="p-6 text-center animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center rounded-2xl border border-iris/30 bg-background/60">
                <QrCode className="h-16 w-16 text-muted-foreground opacity-50" />
              </div>
              <div className="mt-5 text-lg font-bold">{c.name}</div>
              <div className="mt-1 text-sm text-cyan-glow">{c.id}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                二维码上传后将在此处展示
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/services">
            <GradientButton size="lg">
              立即咨询 <ArrowRight className="h-4 w-4" />
            </GradientButton>
          </Link>
        </div>
      </section>
    </>
  );
}
