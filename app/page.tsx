export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 items-center justify-center overflow-hidden bg-[#f0faf0]">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-pink-200 opacity-40 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-green-200 opacity-50 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100 opacity-60 blur-2xl" />
      </div>

      {/* Floating petals */}
      <span className="pointer-events-none absolute top-10 left-[12%] text-3xl opacity-70 animate-bounce" style={{ animationDuration: "3.2s" }}>🌸</span>
      <span className="pointer-events-none absolute top-24 right-[10%] text-2xl opacity-60 animate-bounce" style={{ animationDuration: "2.8s", animationDelay: "0.4s" }}>🌿</span>
      <span className="pointer-events-none absolute bottom-16 left-[8%] text-2xl opacity-60 animate-bounce" style={{ animationDuration: "3.6s", animationDelay: "0.8s" }}>🌷</span>
      <span className="pointer-events-none absolute bottom-24 right-[14%] text-3xl opacity-70 animate-bounce" style={{ animationDuration: "3s", animationDelay: "0.2s" }}>🌱</span>
      <span className="pointer-events-none absolute top-1/2 left-[5%] text-xl opacity-50 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>🌼</span>
      <span className="pointer-events-none absolute top-1/3 right-[6%] text-xl opacity-50 animate-bounce" style={{ animationDuration: "3.4s", animationDelay: "0.6s" }}>🍃</span>

      {/* Main card */}
      <main className="relative z-10 flex flex-col items-center gap-8 rounded-3xl border border-white/60 bg-white/70 px-12 py-16 text-center shadow-xl backdrop-blur-md max-w-lg w-full mx-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-medium text-green-700">
          <span>🌱</span>
          <span>April 2026</span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-black tracking-tight text-gray-900">
            Spring Sprint
          </h1>
          <p className="text-lg font-medium text-pink-500 tracking-wide uppercase">
            april · flex
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
          <span className="text-green-400 text-lg">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
        </div>

        {/* Description */}
        <p className="text-gray-500 text-base leading-relaxed max-w-sm">
          Fresh builds, flexible systems, and a season of shipping. Welcome to the April Spring Sprint.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button className="flex-1 rounded-2xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-700 active:scale-95">
            Get Started →
          </button>
          <button className="flex-1 rounded-2xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 active:scale-95">
            Learn More
          </button>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-400">
          sprint-april-flex &nbsp;·&nbsp; testing splash
        </p>
      </main>
    </div>
  );
}
