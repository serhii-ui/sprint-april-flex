'use client';

import { useState } from 'react';

const imgHero = "/hero.png";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#fafafa]">

      {/* ─── Mobile menu overlay ─── */}
      <div
        className={`fixed inset-0 z-50 bg-black flex flex-col px-4 py-6 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between shrink-0">
          <span className="capitalize font-semibold text-base text-white tracking-[-0.04em]">H.Studio</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="size-6 relative flex items-center justify-center"
            aria-label="Close menu"
          >
            <span className="absolute block w-full h-[2px] bg-white rotate-45" />
            <span className="absolute block w-full h-[2px] bg-white -rotate-45" />
          </button>
        </div>

        {/* Links with dividers, centered */}
        <nav className="flex flex-col mt-6">
          <div className="h-px bg-white/20" />
          {navLinks.map((item) => (
            <div key={item}>
              <a
                href="#"
                className="block text-center text-white font-light text-4xl uppercase tracking-[-0.02em] py-5 hover:opacity-50 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
              <div className="h-px bg-white/20" />
            </div>
          ))}
        </nav>

        {/* Full-width CTA */}
        <div className="mt-auto pt-8">
          <button className="w-full bg-white text-black font-medium text-sm tracking-[-0.04em] py-4 rounded-full">
            Let&apos;s talk
          </button>
        </div>
      </div>

      {/* ─── Hero ─── */}
      <section className="relative">

        {/* Background photo — fills the entire section */}
        <div className="absolute inset-0">
          <img
            alt="Harvey Specter"
            className="w-full h-full object-cover object-center md:object-top"
            src={imgHero}
          />
        </div>

        {/* Frosted glass — smooth gradient fade from transparent to blurred */}
        <div className="absolute bottom-0 left-0 right-0 h-[349px] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)] [mask-image:linear-gradient(to_bottom,transparent,black_45%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_45%)]" />

        {/* ════════════════════════════════
            DESKTOP LAYOUT  (md and above)
            ════════════════════════════════ */}
        <div className="hidden md:flex flex-col h-[847px]">

          {/* Nav */}
          <nav className="relative flex items-center justify-between px-8 py-6 shrink-0">
            <span className="capitalize font-semibold text-base text-black tracking-[-0.04em]">
              H.Studio
            </span>
            <div className="flex gap-14 items-center font-semibold text-base text-black tracking-[-0.04em] capitalize whitespace-nowrap">
              {navLinks.map((item) => (
                <a key={item} href="#" className="hover:opacity-60 transition-opacity">
                  {item}
                </a>
              ))}
            </div>
            <button className="flex items-center justify-center bg-black px-4 py-3 rounded-full text-white font-medium text-sm tracking-[-0.04em]">
              Let&apos;s talk
            </button>
          </nav>

          {/* ~240px breathing room between nav and H1 */}
          <div className="flex-1" />

          {/* "Hello I'm" label — left-aligned, indented to align with H start */}
          <p className="relative font-mono font-normal leading-[1.1] mix-blend-overlay text-white uppercase text-sm pl-[50px] mb-[-15px]">
            [ Hello i&apos;m ]
          </p>

          {/* H1 — FULL viewport width, no side padding */}
          <p className="relative capitalize font-medium leading-[1.1] mix-blend-overlay text-center text-white w-full whitespace-nowrap text-[13.75vw] tracking-[-0.965vw]">
            Harvey&nbsp;&nbsp;&nbsp;Specter
          </p>

          {/* Description + CTA — right-aligned with padding */}
          <div className="relative flex justify-end px-8 mt-6 pb-10">
            <div className="flex flex-col gap-[17px] items-start w-[294px]">
              <p className="font-bold italic leading-[0] text-[#1f1f1f] text-sm tracking-[-0.04em] uppercase">
                <span className="leading-[1.1]">H.Studio is a </span>
                <span className="font-normal leading-[1.1]">full-service</span>
                <span className="leading-[1.1]"> creative studio creating beautiful digital experiences and products. We are an </span>
                <span className="font-normal leading-[1.1]">award winning</span>
                <span className="leading-[1.1]"> design and art group specializing in branding, web design and engineering.</span>
              </p>
              <button className="bg-black flex items-center justify-center px-4 py-3 rounded-full text-white font-medium text-sm tracking-[-0.04em]">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════
            MOBILE LAYOUT  (below md)
            Min 600px height, paddings only
            ════════════════════════════════ */}
        <div className="flex flex-col md:hidden px-4 pt-4 pb-8 min-h-[645px]">

          {/* Nav */}
          <nav className="relative flex items-center justify-between py-5 shrink-0">
            <span className="capitalize font-semibold text-base text-black tracking-[-0.04em]">
              H.Studio
            </span>
            <button
              className="size-6 shrink-0 flex flex-col justify-center gap-[5px]"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <span className="block w-full h-[2px] bg-black" />
              <span className="block w-full h-[2px] bg-black" />
              <span className="block w-full h-[2px] bg-black" />
            </button>
          </nav>

          {/* Spacer — pushes all content to bottom */}
          <div className="flex-1" />

          {/* Bottom content block */}
          <div className="relative flex flex-col gap-5">
            {/* Label + H1 centered */}
            <div className="flex flex-col items-center">
              <p className="font-mono font-normal leading-[1.1] mix-blend-overlay text-white uppercase text-sm mb-3">
                [ Hello i&apos;m ]
              </p>
              <p className="capitalize font-medium leading-[0.85] mix-blend-overlay text-center text-white w-full text-[25vw] tracking-[-1.8vw]">
                Harvey<br />Specter
              </p>
            </div>
            {/* Description + pill CTA */}
            <div className="flex flex-col gap-[17px]">
              <p className="font-bold italic leading-[0] text-[#1f1f1f] text-sm tracking-[-0.04em] uppercase">
                <span className="leading-[1.1]">H.Studio is a </span>
                <span className="font-normal leading-[1.1]">full-service</span>
                <span className="leading-[1.1]"> creative studio creating beautiful digital experiences and products. We are an </span>
                <span className="font-normal leading-[1.1]">award winning</span>
                <span className="leading-[1.1]"> design and art group specializing in branding, web design and engineering.</span>
              </p>
              <button className="self-start bg-black flex items-center justify-center px-6 py-4 rounded-full text-white font-medium text-sm tracking-[-0.04em]">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* ─── About Section ─── */}
      <section className="bg-[#fafafa]">

        {/* ════ DESKTOP ════ */}
        <div className="hidden md:block px-8 py-[120px]">
          <div className="flex flex-col gap-6">

            {/* Label + divider */}
            <div className="flex flex-col gap-3 items-end">
              <p className="font-mono text-sm text-[#1f1f1f] uppercase leading-[1.1]">
                [ 8+ years in industry ]
              </p>
              <div className="h-px w-full bg-[#1f1f1f]/20" />
            </div>

            {/* Staggered editorial lines — vw-scaled for responsiveness */}
            <div className="flex flex-col gap-2">

              {/* Line 1 */}
              <div className="flex items-start gap-3">
                <p className="font-light text-[6.667vw] text-black tracking-[-0.08em] leading-[0.84] uppercase whitespace-pre">
                  A creative director   /
                </p>
                <span className="font-mono text-sm text-[#1f1f1f] leading-[1.1]">001</span>
              </div>

              {/* Line 2 — 214/1440 = 14.86vw indent */}
              <div className="pl-[14.86vw]">
                <p className="font-light text-[6.667vw] text-black tracking-[-0.08em] leading-[0.84] uppercase whitespace-nowrap">
                  Photographer
                </p>
              </div>

              {/* Line 3 — 610/1440 = 42.36vw indent */}
              <div className="pl-[42.36vw]">
                <p className="font-light text-[6.667vw] text-black tracking-[-0.08em] leading-[0.84] uppercase whitespace-nowrap">
                  Born <span className="font-serif font-normal italic">&</span> raised
                </p>
              </div>

              {/* Line 4 — full left */}
              <p className="font-light text-[6.667vw] text-black tracking-[-0.08em] leading-[0.84] uppercase whitespace-nowrap">
                on the south side
              </p>

              {/* Line 5 — 606/1440 = 42.08vw indent, label absolutely positioned */}
              <div className="relative pl-[42.08vw]">
                <p className="font-light text-[6.667vw] text-black tracking-[-0.08em] leading-[0.84] uppercase whitespace-nowrap">
                  of chicago.
                </p>
                <span className="absolute left-[calc(76.5vw-8px)] top-[24px] font-mono text-sm text-[#1f1f1f] uppercase leading-[1.1] whitespace-nowrap">
                  [ creative freelancer ]
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* ════ MOBILE ════ */}
        <div className="md:hidden px-4 py-12">
          <div className="flex flex-col gap-6">

            {/* Label + divider */}
            <div className="flex flex-col gap-3 items-end">
              <p className="font-mono text-sm text-[#1f1f1f] uppercase leading-[1.1]">
                [ 8+ years in industry ]
              </p>
              <div className="h-px w-full bg-[#1f1f1f]/20" />
            </div>

            {/* Centered text */}
            <div className="flex flex-col items-center gap-2 text-center uppercase">
              <div className="flex flex-col items-center gap-3">
                <span className="font-mono text-sm text-[#1f1f1f] leading-[1.1]">001</span>
                <p className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.84] whitespace-pre">
                  A creative director   /
                </p>
              </div>
              <p className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                Photographer
              </p>
              <p className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                Born <span className="font-serif font-normal italic">&</span> raised
              </p>
              <p className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                on the south side
              </p>
              <div className="flex flex-col items-center gap-3">
                <p className="font-light text-[32px] text-black tracking-[-0.08em] leading-[0.84] whitespace-nowrap">
                  of chicago.
                </p>
                <span className="font-mono text-sm text-[#1f1f1f] leading-[1.1]">
                  [ creative freelancer ]
                </span>
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
