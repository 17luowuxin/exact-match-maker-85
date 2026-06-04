import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactCTA } from "@/components/ContactCTA";
import { ArrowLeft, Eye, Heart, Calendar } from "lucide-react";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

const WORKS: Record<
  string,
  {
    title: string;
    tag: string;
    src: string;
    date: string;
    views: string;
    likes: string;
    story: string;
    tools: string[];
  }
> = {
  "neon-city": {
    title: "霓虹之城",
    tag: "海报设计",
    src: work1,
    date: "2025.10",
    views: "12.4k",
    likes: "892",
    story:
      "霓虹反射在湿润的夜街上，赛博东方的视觉切片。整组海报围绕「光的呼吸」展开，主色取自蓝紫与品红，强调湿润反射与电子光纹。",
    tools: ["Midjourney", "Stable Diffusion", "Photoshop"],
  },
  "starry-promise": {
    title: "星辰之约",
    tag: "海报设计",
    src: work2,
    date: "2025.09",
    views: "14.6k",
    likes: "1.1k",
    story:
      "以星河为约定，描绘虚拟少女在数据洪流中等待相遇的瞬间。粒子、长焦景深与柔光是这张图的关键。",
    tools: ["Midjourney", "Photoshop"],
  },
  "night-radio": {
    title: "夜行电波 EP",
    tag: "AI 音乐封面",
    src: work3,
    date: "2025.08",
    views: "9.7k",
    likes: "524",
    story:
      "一张 4 曲 EP 的封面系列，从电子节拍到合成器迷雾。封面字体定制，磁带质感叠加噪点，致敬 80 年代 Synthwave。",
    tools: ["Suno", "Midjourney", "AE"],
  },
  "cyber-touch": {
    title: "漫剧《赛博之触》",
    tag: "AI 漫剧",
    src: work4,
    date: "2025.07",
    views: "21k",
    likes: "1.4k",
    story:
      "短篇 AI 漫剧封面与主视觉。讲述一个能与机械共感的少女，与失落型号 AI 的相遇。强对比的紫红与冷蓝构成情绪基调。",
    tools: ["Midjourney", "Comfy UI", "Procreate"],
  },
};

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const work = WORKS[params.slug];
    if (!work) throw notFound();
    return { work };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.work.title} — 创意作品馆` },
          { name: "description", content: loaderData.work.story.slice(0, 140) },
          { property: "og:title", content: loaderData.work.title },
          { property: "og:description", content: loaderData.work.story.slice(0, 140) },
          { property: "og:image", content: loaderData.work.src },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl font-bold">作品走丢了</h1>
      <p className="mt-3 text-muted-foreground">这件作品可能已下线或链接有误。</p>
      <Link to="/works" className="mt-6 inline-block text-cyan-glow hover:text-foreground">
        ← 返回作品馆
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-3xl font-bold">加载失败</h1>
      <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: WorkDetail,
});

function WorkDetail() {
  const { work } = Route.useLoaderData();

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-10 md:px-8 md:pt-16">
        <Link
          to="/works"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> 返回作品馆
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-iris/30 blur-3xl" />
            <img
              src={work.src}
              alt={work.title}
              className="w-full rounded-3xl shadow-glow-strong"
            />
          </div>

          <div>
            <div className="text-xs text-cyan-glow">{work.tag}</div>
            <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
              <span className="text-gradient">{work.title}</span>
            </h1>

            <div className="mt-5 flex flex-wrap gap-5 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {work.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="h-4 w-4" /> {work.views}
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="h-4 w-4" /> {work.likes}
              </span>
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {work.story}
            </p>

            <GlassCard className="mt-6 p-5">
              <div className="text-xs uppercase tracking-widest text-cyan-glow">
                Tools
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {work.tools.map((t: string) => (
                  <span key={t} className="glass rounded-full px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="CONTACT" title="想要类似风格的作品？" />
        <div className="mt-8">
          <ContactCTA
            title={`让「${work.title}」的风格为你定制`}
            subtitle="商务合作 · 海报定制 · 角色设计 · 漫剧封面 · AI 音乐视觉"
          />
        </div>
      </section>
    </>
  );
}
