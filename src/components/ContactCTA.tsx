import { Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { GradientButton } from "@/components/GradientButton";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
};

export function ContactCTA({
  title = "喜欢这个风格？",
  subtitle = "海报设计 / 人设角色 / 漫剧封面 / 音乐视觉，都可以定制。",
}: Props) {
  return (
    <GlassCard className="relative overflow-hidden p-8 md:p-12">
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-pink-glow/30 blur-3xl"
      />
      <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <div className="text-xs uppercase tracking-widest text-cyan-glow">
            LET'S CREATE
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            {subtitle}
          </p>
          <ul className="mt-5 grid gap-1.5 text-xs text-muted-foreground sm:grid-cols-2">
            <li>微信：XxyLxs9201314</li>
            <li>QQ：2967923130</li>
            <li>邮箱：2967923130@qq.com</li>
            <li>48 小时内回复</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <Link to="/contact">
            <GradientButton size="lg">
              <MessageCircle className="h-4 w-4" /> 聊聊创作
              <ArrowRight className="h-4 w-4" />
            </GradientButton>
          </Link>
          <a href="mailto:2967923130@qq.com">
            <GradientButton size="lg" variant="ghost">
              <Mail className="h-4 w-4" /> 发送邮件
            </GradientButton>
          </a>
        </div>
      </div>
    </GlassCard>
  );
}
