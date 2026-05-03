'use client';

import { useState } from 'react';

const imgHero = "/hero.png";
const imgAboutPortrait = "https://www.figma.com/api/mcp/asset/87e3d5cd-3153-4633-a348-c80b5c9e94cc";
const imgPhotographer = "https://www.figma.com/api/mcp/asset/ba2c320c-9238-427c-8f9c-221e911e8247";
const imgArrowIcon = "https://www.figma.com/api/mcp/asset/cce75f48-9701-4a66-8544-d6f10faa8e2a";

const newsItems = [
  {
    img: "https://www.figma.com/api/mcp/asset/73801f64-7785-453e-96f3-e0c373f350fc",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
  {
    img: "https://www.figma.com/api/mcp/asset/e68a5794-9524-40e9-b17f-7c7ab80a36bf",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: true,
  },
  {
    img: "https://www.figma.com/api/mcp/asset/ef0a147a-c5ca-4209-9fd7-20dce494c675",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
];

const testimonials = [
  {
    logo: "https://www.figma.com/api/mcp/asset/6f7e82b1-113c-4bff-9ad3-62576c3d5e85",
    logoW: 143, logoH: 19,
    text: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    deg: -6.85, dx: 102, dy: 142,
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/23e4ef1a-d159-4a87-bd60-826b8562fb09",
    logoW: 138, logoH: 19,
    text: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    deg: 2.9, dx: 676, dy: 272,
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/c69d7857-26b6-4231-8fc7-5d76f81160bb",
    logoW: 109, logoH: 31,
    text: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    deg: 2.23, dx: 305, dy: 553,
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/484dbbcf-48cf-47d1-993f-86b4318ac422",
    logoW: 81, logoH: 36,
    text: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    deg: -4.15, dx: 987, dy: 546,
  },
];

const projects = [
  { title: "Surfers Paradise",   tags: ["Social Media", "Photography"], img: "https://www.figma.com/api/mcp/asset/eef0cc17-e08b-487e-91ef-c785e3758c63" },
  { title: "Cyberpunk Caffe",    tags: ["Social Media", "Photography"], img: "https://www.figma.com/api/mcp/asset/3d988d5e-8ba0-48c0-b842-ab797e9aadc0" },
  { title: "Agency 976",         tags: ["Social Media", "Photography"], img: "https://www.figma.com/api/mcp/asset/fda7c998-6b88-42bb-adb1-d8c1afe7f2f4" },
  { title: "Minimal Playground", tags: ["Social Media", "Photography"], img: "https://www.figma.com/api/mcp/asset/53b3c61a-bdae-4ad4-b698-82fb0b948f63" },
];

const services = [
  {
    num: "1",
    title: "Brand Discovery",
    desc: "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.",
    img: "https://www.figma.com/api/mcp/asset/6ab7fc61-a931-40ec-bc3c-0ffdae035e97",
    imgFit: "object-center" as const,
  },
  {
    num: "2",
    title: "Web Design & Dev",
    desc: "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.",
    img: "https://www.figma.com/api/mcp/asset/74b33bcf-fe86-4793-a46c-642311e78913",
    imgFit: "object-center" as const,
  },
  {
    num: "3",
    title: "Marketing",
    desc: "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.",
    img: "https://www.figma.com/api/mcp/asset/6f704d59-65b0-47db-83f8-10dc95c518e2",
    imgFit: "object-center" as const,
  },
  {
    num: "4",
    title: "Photography",
    desc: "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.",
    img: "https://www.figma.com/api/mcp/asset/b766875d-ce3e-4b19-905a-e21d2619cc48",
    imgFit: "object-bottom" as const,
  },
];

function TestimonialCard({ logo, logoW, logoH, text, name, deg }: {
  logo: string; logoW: number; logoH: number; text: string; name: string; deg: number;
}) {
  return (
    <div style={{ transform: `rotate(${deg}deg)` }}>
      <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] w-[353px]">
        <div className="relative shrink-0" style={{ width: logoW, height: logoH }}>
          <img alt="" className="absolute inset-0 w-full h-full object-contain object-left" src={logo} />
        </div>
        <p className="text-[18px] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">{text}</p>
        <p className="font-black text-[16px] text-black tracking-[-0.04em] uppercase whitespace-nowrap">{name}</p>
      </div>
    </div>
  );
}

function ProjectCard({ title, tags, img, imgHeight, titleSize = 'text-[36px]' }: {
  title: string; tags: string[]; img: string; imgHeight: string; titleSize?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className={`relative w-full ${imgHeight} overflow-hidden`}>
        <img alt={title} className="absolute inset-0 w-full h-full object-cover" src={img} />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map(tag => (
            <span key={tag} className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full text-sm font-medium text-[#111] tracking-[-0.04em] whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className={`font-black ${titleSize} text-black tracking-[-0.04em] uppercase leading-[1.1] whitespace-nowrap`}>
          {title}
        </p>
        <div className="size-8 shrink-0 -rotate-90">
          <img alt="" className="w-full h-full" src={imgArrowIcon} />
        </div>
      </div>
    </div>
  );
}

function BracketCorner({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`shrink-0 ${className}`}>
      <path d="M13 1H1V13" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

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

      {/* ─── About Photo Section (002) ─── */}
      <section className="bg-[#fafafa]">

        {/* ════ DESKTOP ════ */}
        <div className="hidden lg:flex items-start justify-between px-8 py-20">

          {/* [ About ] label — top-left */}
          <p className="font-mono text-sm text-[#1f1f1f] uppercase leading-[1.1] shrink-0">
            [ About ]
          </p>

          {/* Right block: text frame + 002 / photo */}
          <div className="flex items-end gap-8">

            {/* Text with viewfinder brackets, bottom-aligned to photo */}
            <div className="flex items-stretch gap-3 w-[465px]">
              {/* Left bracket column: NW top, SW bottom */}
              <div className="flex flex-col justify-between shrink-0 w-4">
                <BracketCorner />
                <BracketCorner className="-rotate-90" />
              </div>
              {/* Paragraph text */}
              <p className="flex-1 text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em] py-3">
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
              {/* Right bracket column: NE top, SE bottom */}
              <div className="flex flex-col justify-between shrink-0 w-4">
                <BracketCorner className="rotate-90" />
                <BracketCorner className="rotate-180" />
              </div>
            </div>

            {/* 002 number + portrait photo side by side, top-aligned */}
            <div className="flex gap-6 items-start shrink-0">
              <p className="font-mono text-sm text-[#1f1f1f] uppercase leading-[1.1]">002</p>
              <div className="w-[436px] h-[614px] overflow-hidden relative shrink-0">
                <img
                  alt="Portrait"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={imgAboutPortrait}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ════ MOBILE / TABLET ════ */}
        <div className="lg:hidden px-4 py-12 flex flex-col gap-5">
          <p className="font-mono text-sm text-[#1f1f1f] uppercase leading-[1.1]">002</p>
          <p className="font-mono text-sm text-[#1f1f1f] uppercase leading-[1.1]">[ About ]</p>

          {/* Text with viewfinder brackets */}
          <div className="flex items-stretch gap-3">
            <div className="flex flex-col justify-between shrink-0 w-4">
              <BracketCorner />
              <BracketCorner className="-rotate-90" />
            </div>
            <p className="flex-1 text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em] py-3">
              Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
            </p>
            <div className="flex flex-col justify-between shrink-0 w-4">
              <BracketCorner className="rotate-90" />
              <BracketCorner className="rotate-180" />
            </div>
          </div>

          {/* Portrait photo — full width, maintains aspect ratio */}
          <div className="w-full overflow-hidden relative" style={{ aspectRatio: '422/594' }}>
            <img
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover"
              src={imgAboutPortrait}
            />
          </div>
        </div>

      </section>

      {/* ─── Photographer full-bleed photo ─── */}
      <section>
        {/* Desktop: landscape crop */}
        <div className="hidden lg:block w-full aspect-[16/9] overflow-hidden">
          <img
            alt="Photographer"
            className="w-full h-full object-cover object-center"
            src={imgPhotographer}
          />
        </div>

        {/* Mobile / Tablet: portrait crop, panned to face */}
        <div className="lg:hidden w-full overflow-hidden" style={{ aspectRatio: '3/4' }}>
          <img
            alt="Photographer"
            className="w-full h-full object-cover object-[25%_40%]"
            src={imgPhotographer}
          />
        </div>
      </section>

      {/* ─── Services Section ─── */}
      <section className="bg-black px-4 py-12 lg:px-8 lg:py-20 flex flex-col gap-8 lg:gap-12">

        {/* [ Services ] label */}
        <p className="font-mono text-sm text-white uppercase leading-[1.1]">[ Services ]</p>

        {/* [4] Deliverables header */}
        <div className="flex items-center justify-between">
          <span className="font-light text-[32px] lg:text-[96px] text-white uppercase tracking-[-0.08em] leading-none">[4]</span>
          <span className="font-light text-[32px] lg:text-[96px] text-white uppercase tracking-[-0.08em] leading-none">Deliverables</span>
        </div>

        {/* Service items */}
        <div className="flex flex-col gap-12">
          {services.map((service) => (
            <div key={service.num} className="flex flex-col gap-2">

              {/* Number + divider */}
              <p className="font-mono text-sm text-white uppercase leading-[1.1]">[ {service.num} ]</p>
              <div className="h-px w-full bg-white/30" />

              {/* Desktop: title left, description+image right | Mobile: stacked */}
              <div className="mt-2 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <p className="font-bold italic text-[36px] text-white tracking-[-0.04em] uppercase leading-[1.1] whitespace-nowrap">
                  {service.title}
                </p>
                <div className="flex flex-col lg:flex-row gap-6 items-start w-full lg:w-auto">
                  <p className="text-sm text-white/80 leading-[1.3] tracking-[-0.04em] w-full lg:w-[393px]">
                    {service.desc}
                  </p>
                  <div className="size-[151px] overflow-hidden shrink-0 relative">
                    <img
                      alt={service.title}
                      className={`absolute inset-0 w-full h-full object-cover ${service.imgFit}`}
                      src={service.img}
                    />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ─── Selected Work / Portfolio Section ─── */}
      <section className="bg-[#fafafa] px-4 py-12 lg:px-8 lg:py-20">

        {/* ════ DESKTOP HEADER ════ */}
        <div className="hidden lg:flex items-start justify-between mb-16">
          <div className="flex items-start gap-3">
            <div className="font-light text-[96px] text-black uppercase tracking-[-0.08em] leading-[0.86]">
              <p>Selected</p>
              <p>Work</p>
            </div>
            <span className="font-mono text-sm text-[#1f1f1f] mt-1">004</span>
          </div>
          <div className="flex items-center justify-center h-[110px] w-4">
            <p className="-rotate-90 font-mono text-sm text-[#1f1f1f] uppercase whitespace-nowrap">[ portfolio ]</p>
          </div>
        </div>

        {/* ════ MOBILE HEADER ════ */}
        <div className="lg:hidden flex flex-col gap-4 mb-8">
          <p className="font-mono text-sm text-[#1f1f1f] uppercase">[ portfolio ]</p>
          <div className="flex items-start justify-between">
            <div className="font-light text-[32px] text-black uppercase tracking-[-0.08em] leading-[0.86]">
              <p>Selected</p>
              <p>Work</p>
            </div>
            <span className="font-mono text-sm text-[#1f1f1f]">004</span>
          </div>
        </div>

        {/* ════ DESKTOP: staggered two-column grid ════ */}
        <div className="hidden lg:flex gap-6 items-stretch">

          {/* Left column */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Cards grouped at top */}
            <div className="flex flex-col gap-10">
              <ProjectCard {...projects[0]} imgHeight="h-[744px]" />
              <ProjectCard {...projects[1]} imgHeight="h-[699px]" />
            </div>

            {/* CTA bracket box — pushed to bottom, aligned with last right-column image */}
            <div className="flex items-stretch gap-3 w-[465px]">
              <div className="flex flex-col justify-between shrink-0 w-4">
                <BracketCorner />
                <BracketCorner className="-rotate-90" />
              </div>
              <div className="flex-1 flex flex-col gap-3 py-3">
                <p className="text-sm italic text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
                  Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
                </p>
                <button className="self-start bg-black px-4 py-3 rounded-full text-white font-medium text-sm tracking-[-0.04em]">
                  Let&apos;s talk
                </button>
              </div>
              <div className="flex flex-col justify-between shrink-0 w-4">
                <BracketCorner className="rotate-90" />
                <BracketCorner className="rotate-180" />
              </div>
            </div>
          </div>

          {/* Right column — offset down by 240px */}
          <div className="flex-1 flex flex-col gap-10 pt-60">
            <ProjectCard {...projects[2]} imgHeight="h-[699px]" />
            <ProjectCard {...projects[3]} imgHeight="h-[744px]" />
          </div>

        </div>

        {/* ════ MOBILE: stacked cards ════ */}
        <div className="lg:hidden flex flex-col gap-6">
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} imgHeight="h-[390px]" titleSize="text-[24px]" />
          ))}

          {/* CTA bracket box */}
          <div className="flex items-stretch gap-3">
            <div className="flex flex-col justify-between shrink-0 w-4">
              <BracketCorner />
              <BracketCorner className="-rotate-90" />
            </div>
            <div className="flex-1 flex flex-col gap-3 py-3">
              <p className="text-sm italic text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">
                Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
              </p>
              <button className="self-start bg-black px-4 py-3 rounded-full text-white font-medium text-sm tracking-[-0.04em]">
                Let&apos;s talk
              </button>
            </div>
            <div className="flex flex-col justify-between shrink-0 w-4">
              <BracketCorner className="rotate-90" />
              <BracketCorner className="rotate-180" />
            </div>
          </div>
        </div>

      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="bg-[#fafafa]">

        {/* ════ DESKTOP: scattered cards over large centred text ════ */}
        <div className="hidden lg:flex flex-col items-center justify-center relative px-8 py-[120px] min-h-[950px] overflow-hidden">
          {/* "Testimonials" hero word — fixed size, always centered */}
          <p
            className="font-medium text-[198px] text-black text-center leading-[1.1] capitalize relative z-[5] select-none w-full"
            style={{ letterSpacing: '-0.07em' }}
          >
            Testimonials
          </p>
          {/* Cards: vw positions scale across viewports; Lukas sits behind the text */}
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`absolute ${t.name === 'Lukas Weber' ? 'z-[1]' : 'z-10'}`}
              style={{ left: `${(t.dx / 1440) * 100}vw`, top: t.dy }}
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* ════ MOBILE / TABLET: title + scrollable card strip ════ */}
        <div className="lg:hidden px-4 py-16 flex flex-col gap-8">
          <p className="font-medium text-[64px] text-black leading-[0.8] capitalize" style={{ letterSpacing: '-4.48px' }}>
            Testimonials
          </p>
          {/* Outer div handles horizontal scroll; inner div holds rotated cards with vertical room */}
          <div className="-mx-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-3 px-4 py-8">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="shrink-0 w-[280px]"
                  style={{ transform: `rotate(${i % 2 === 0 ? '-3.5deg' : '2deg'})` }}
                >
                  <div className="bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-3 p-5 rounded-[4px]">
                    <div className="relative shrink-0" style={{ width: t.logoW, height: t.logoH }}>
                      <img alt="" className="absolute inset-0 w-full h-full object-contain object-left" src={t.logo} />
                    </div>
                    <p className="text-[15px] text-[#1f1f1f] leading-[1.3] tracking-[-0.03em]">{t.text}</p>
                    <p className="font-black text-[13px] text-black tracking-[-0.03em] uppercase">{t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ─── News Section ─── */}
      <section className="bg-[#f3f3f3]">

        {/* ════ DESKTOP ════ */}
        <div className="hidden lg:flex items-end gap-[250px] px-8 py-[120px] overflow-hidden">

          {/* Rotated title */}
          <div className="flex items-center justify-center shrink-0 w-[110px] h-[706px]">
            <div className="-rotate-90 whitespace-nowrap">
              <p className="font-light text-[64px] text-black uppercase leading-[0.86]" style={{ letterSpacing: '-5.12px' }}>
                Keep up with my latest<br />news &amp; achievements
              </p>
            </div>
          </div>

          {/* 3 article cards — 353px wide matching Figma; cards overflow flex-1 container → last card half-cut */}
          <div className="flex-1 min-w-0 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <div className="flex items-start">
              {newsItems.map((item, i) => (
                <div key={i} className="flex items-start shrink-0">
                  {i > 0 && <div className="w-px self-stretch bg-[#1f1f1f]/20 mx-8" />}
                  <div className={`flex flex-col gap-4 w-[353px]${item.offset ? ' pt-[120px]' : ''}`}>
                    <div className="h-[600px] w-full overflow-hidden relative shrink-0">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={item.img} />
                    </div>
                    <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">{item.text}</p>
                    <div className="flex items-center gap-2 border-b border-black pb-1 self-start">
                      <span className="font-medium text-sm text-black tracking-[-0.04em]">Read more</span>
                      <div className="size-[18px] shrink-0 -rotate-90">
                        <img alt="" className="w-full h-full" src={imgArrowIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ════ MOBILE / TABLET ════ */}
        <div className="lg:hidden px-4 py-16 flex flex-col gap-8">
          <p className="font-light text-[32px] text-black uppercase leading-[0.86]" style={{ letterSpacing: '-2.56px' }}>
            Keep up with my latest news &amp; achievements
          </p>
          <div className="-mx-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            <div className="flex gap-4 px-4 pb-4">
              {newsItems.map((item, i) => (
                <div key={i} className="flex flex-col gap-4 w-[300px] shrink-0">
                  <div className="h-[398px] w-full overflow-hidden relative shrink-0">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover" src={item.img} />
                  </div>
                  <p className="text-sm text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">{item.text}</p>
                  <div className="flex items-center gap-2 border-b border-black pb-1 self-start">
                    <span className="font-medium text-sm text-black tracking-[-0.04em]">Read more</span>
                    <div className="size-[18px] shrink-0 -rotate-90">
                      <img alt="" className="w-full h-full" src={imgArrowIcon} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-black pt-12 px-8 pb-0 flex flex-col gap-[120px] lg:gap-[120px]">

        {/* ════ TOP ROW ════ */}
        <div className="flex flex-col gap-6 lg:gap-12">

          {/* Desktop: 3-col row | Mobile: stacked */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

            {/* Left: tagline + CTA */}
            <div className="flex flex-col gap-3">
              <p className="font-light italic text-[24px] text-white uppercase leading-[1.1]" style={{ letterSpacing: '-0.96px' }}>
                Have a <span className="font-black not-italic">project</span> in mind?
              </p>
              <button className="border border-white text-white text-sm font-medium tracking-[-0.56px] px-4 py-3 rounded-[24px] self-start uppercase">
                Let&apos;s talk
              </button>
            </div>

            {/* Center: social col 1 (desktop) / stacked list (mobile) */}
            <div className="flex flex-col gap-4 lg:items-center lg:gap-0 lg:w-[298px]">
              <p className="text-[18px] text-white uppercase leading-[1.1] tracking-[-0.72px] lg:text-center">Facebook</p>
              <p className="text-[18px] text-white uppercase leading-[1.1] tracking-[-0.72px] lg:text-center">Instagram</p>
            </div>

            {/* Right: social col 2 (desktop) / continues stacked list (mobile) */}
            <div className="flex flex-col gap-4 lg:items-end lg:gap-0 lg:w-[298px]">
              <p className="text-[18px] text-white uppercase leading-[1.1] tracking-[-0.72px] lg:text-right">X.com</p>
              <p className="text-[18px] text-white uppercase leading-[1.1] tracking-[-0.72px] lg:text-right">Linkedin</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/20" />
        </div>

        {/* ════ BOTTOM ROW ════ */}

        {/* DESKTOP */}
        <div className="hidden lg:flex items-end justify-between">

          {/* Large clipped "H.Studio" wordmark with rotated label */}
          <div className="relative flex-1 min-w-0 h-[219px] overflow-hidden">
            {/* Rotated "[ Coded By Claude ]" on far left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-[15px] h-[160px]">
              <div className="-rotate-90 whitespace-nowrap">
                <p className="font-mono text-[14px] text-white uppercase leading-[1.1]">[ Coded By Claude ]</p>
              </div>
            </div>
            {/* The giant wordmark — top-edge flush with container, bottom bleeds out (clipped) */}
            <div className="absolute left-[26px] -translate-y-1/2" style={{ top: 'calc(50% + 6.5px)' }}>
              <p className="font-semibold text-[290px] text-white capitalize leading-[0.8] whitespace-nowrap" style={{ letterSpacing: '-17.4px' }}>
                H.Studio
              </p>
            </div>
          </div>

          {/* Bottom-right legal links */}
          <div className="flex gap-[34px] items-center pb-8 shrink-0">
            <span className="text-[12px] text-white uppercase tracking-[-0.48px] underline cursor-pointer">Licences</span>
            <span className="text-[12px] text-white uppercase tracking-[-0.48px] underline cursor-pointer">Privacy Policy</span>
          </div>
        </div>

        {/* MOBILE */}
        <div className="lg:hidden flex flex-col gap-4 pb-0">
          {/* Legal links */}
          <div className="flex gap-[34px] items-center justify-center">
            <span className="text-[12px] text-white uppercase tracking-[-0.48px] underline cursor-pointer">Licences</span>
            <span className="text-[12px] text-white uppercase tracking-[-0.48px] underline cursor-pointer">Privacy Policy</span>
          </div>
          {/* [ Coded By Claude ] + clipped wordmark */}
          <div className="flex flex-col gap-3 overflow-hidden">
            <p className="font-mono text-[10px] text-white uppercase leading-[1.1]">[ Coded By Claude ]</p>
            <p className="font-semibold text-[91px] text-white capitalize leading-[0.8] whitespace-nowrap" style={{ letterSpacing: '-5.46px' }}>
              H.Studio
            </p>
          </div>
        </div>

      </footer>
    </div>
  );
}
