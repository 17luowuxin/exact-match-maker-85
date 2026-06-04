import { useState } from "react";
import { MessageCircle, X, Mail, Send } from "lucide-react";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8">
      {open && (
        <div className="mb-3 w-72 rounded-2xl glass p-5 shadow-glow-strong animate-fade-up">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">想聊聊创作？</div>
            <button
              aria-label="关闭"
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            扫码加微信，或通过其他渠道联系洛洛。
          </p>

          <div className="mt-4 flex justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-xl border border-iris/40 bg-background/60 text-[10px] text-muted-foreground">
              微信二维码
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-xs">
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">微信</span>
              <span className="text-cyan-glow">luoluo-studio</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">QQ</span>
              <span className="text-cyan-glow">888 888 888</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-muted-foreground">邮箱</span>
              <span className="text-cyan-glow">hello@luoluo.studio</span>
            </li>
          </ul>

          <div className="mt-4 flex gap-2">
            <a
              href="mailto:hello@luoluo.studio"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gradient-primary px-3 py-2 text-xs font-medium text-white shadow-glow"
            >
              <Mail className="h-3.5 w-3.5" /> 发邮件
            </a>
            <a
              href="#"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-lg glass px-3 py-2 text-xs font-medium"
            >
              <Send className="h-3.5 w-3.5" /> 留言
            </a>
          </div>
        </div>
      )}

      <button
        aria-label={open ? "收起联系卡" : "展开联系方式"}
        onClick={() => setOpen((v) => !v)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-glow-strong transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-iris/40 blur-xl animate-breathe" />
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
}
