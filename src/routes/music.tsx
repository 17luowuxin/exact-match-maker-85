import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { useState } from "react";
import work3 from "@/assets/work-3.jpg";
import char2 from "@/assets/char-2.jpg";
import char1 from "@/assets/char-1.jpg";
import char4 from "@/assets/char-4.jpg";
import work2 from "@/assets/work-2.jpg";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "AI 音乐馆 — 洛无辛智能科技工作室" },
      {
        name: "description",
        content: "AI 歌曲 · 虚拟音乐人 · 视觉音乐作品。让算法谱写蓝紫色的节奏。",
      },
      { property: "og:title", content: "AI 音乐馆 — 洛无辛智能科技工作室" },
      { property: "og:image", content: work3 },
    ],
  }),
  component: MusicPage,
});

const PLAYLISTS = [
  { src: work3, name: "夜行电波", count: 12 },
  { src: char2, name: "波频日记", count: 8 },
  { src: work2, name: "星辰之约 OST", count: 15 },
  { src: char4, name: "守护者主题", count: 6 },
];

const ARTISTS = [
  { src: char2, name: "Yumi", voice: "甜美电音", tag: "电子" },
  { src: char1, name: "Echo", voice: "中性合成", tag: "氛围" },
  { src: char4, name: "茜", voice: "清亮高音", tag: "古风" },
];

const SONGS = [
  { title: "蓝紫之夜", time: "3:42", tag: "电子" },
  { title: "Echo Drift", time: "4:15", tag: "氛围" },
  { title: "霓虹序章", time: "3:28", tag: "电子" },
  { title: "守护之歌", time: "4:02", tag: "古风" },
  { title: "数字星河", time: "5:11", tag: "实验" },
  { title: "波频问候", time: "2:58", tag: "Pop" },
];

function MusicPage() {
  const [playing, setPlaying] = useState(false);
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-12 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 md:grid-cols-2 md:px-8 md:pb-24">
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex rounded-full glass px-4 py-1.5 text-xs text-cyan-glow">
              SOUND LAB
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
              <span className="text-gradient">AI 音乐馆</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              AI 歌曲 · 虚拟音乐人 · 视觉音乐作品。让节奏在蓝紫色的宇宙里流动。
            </p>

            {/* mini player */}
            <GlassCard className="mt-8 flex items-center gap-4 p-4">
              <img
                src={work3}
                alt=""
                loading="lazy"
                className={`h-16 w-16 rounded-xl object-cover ${playing ? "animate-spin-slow" : ""}`}
              />
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium">蓝紫之夜</div>
                <div className="text-xs text-muted-foreground">Yumi · 电子</div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-iris/20">
                  <div className="h-full w-1/3 bg-gradient-primary" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-muted-foreground hover:text-foreground">
                  <SkipBack className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setPlaying((v) => !v)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-white shadow-glow"
                >
                  {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button className="text-muted-foreground hover:text-foreground">
                  <SkipForward className="h-4 w-4" />
                </button>
              </div>
            </GlassCard>
          </div>

          {/* waveform visual */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-10 -z-10 rounded-full bg-cyan-glow/20 blur-3xl animate-breathe" />
            <GlassCard className="aspect-square overflow-hidden p-0">
              <img src={work3} alt="" loading="lazy" className="h-full w-full object-cover" />
            </GlassCard>
            {/* fake bars */}
            <div className="mt-6 flex h-20 items-end justify-center gap-1">
              {Array.from({ length: 48 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-full bg-gradient-to-t from-cyan-glow to-pink-glow animate-breathe"
                  style={{
                    height: `${20 + Math.abs(Math.sin(i / 3)) * 70}%`,
                    animationDelay: `${i * 60}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLAYLISTS */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionHeading eyebrow="PLAYLISTS" title="推荐歌单" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLAYLISTS.map((p, i) => (
            <GlassCard
              key={i}
              className="group overflow-hidden p-0 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img src={p.src} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <div className="font-medium">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.count} 首</div>
                </div>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-primary text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <Play className="h-4 w-4" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* AI ARTISTS */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionHeading eyebrow="AI ARTISTS" title="虚拟音乐人" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {ARTISTS.map((a, i) => (
            <GlassCard key={i} className="group overflow-hidden p-0 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={a.src} alt={a.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="text-xs text-cyan-glow">{a.tag}</div>
                <div className="mt-1 text-lg font-bold">{a.name}</div>
                <div className="text-sm text-muted-foreground">声线 · {a.voice}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* SONG LIST */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <SectionHeading eyebrow="TRACKLIST" title="单曲列表" />
        <GlassCard className="mt-10 divide-y divide-iris/10 p-0">
          {SONGS.map((s, i) => (
            <div key={i} className="group flex items-center gap-4 px-5 py-4 transition hover:bg-iris/5">
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-iris/20 text-foreground transition group-hover:bg-gradient-primary group-hover:text-white">
                <Play className="h-3.5 w-3.5" />
              </button>
              <div className="min-w-0 flex-1">
                <div className="truncate font-medium">{s.title}</div>
              </div>
              <span className="rounded-full glass px-3 py-1 text-xs">{s.tag}</span>
              <span className="text-xs text-muted-foreground">{s.time}</span>
            </div>
          ))}
        </GlassCard>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <GlassCard className="relative overflow-hidden p-10 md:p-16">
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-primary opacity-30" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <SectionHeading
              eyebrow="CUSTOM"
              title="定制你的 AI 声音"
              subtitle="AI 音乐制作 · 角色歌曲 · 漫剧 BGM。"
            />
            <Link to="/contact">
              <GradientButton size="lg">开始合作</GradientButton>
            </Link>
          </div>
        </GlassCard>
      </section>
    </>
  );
}
