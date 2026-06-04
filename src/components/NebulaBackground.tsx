export function NebulaBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* drifting grain */}
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
          backgroundSize: "3px 3px",
        }}
      />
      {/* floating orbs */}
      <div className="absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-iris/30 blur-[120px] animate-breathe" />
      <div
        className="absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-pink-glow/25 blur-[120px] animate-breathe"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-glow/20 blur-[120px] animate-breathe"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}
