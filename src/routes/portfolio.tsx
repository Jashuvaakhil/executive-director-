import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';

import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { useReveal, useParallax } from "@/hooks/use-reveal";
import background from "../background.png";
import pic from "../../picture.png";
import {
  MiningIconsLayer,
  PickaxeIcon,
  GearIcon,
  OreIcon,
  HelmetIcon,
  DumpTruckIcon,
  DrillIcon,
  ExcavatorIcon,
  UsersIcon,
  RupeeIcon,
} from "@/components/mining-icons";
import { GoldSilkParticles } from "@/components/gold-silk-particles";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/portfolio")({
  component: Index,
  head: () => ({
    meta: [
      { title: "S. Venkateswaran" },
      {
        name: "description",
        content:
          "Portfolio of an Executive Director at Lloyds Metals and Energy Limited. Three decades of field-to-boardroom leadership in mining, earthmoving and steel operations.",
      },
      { property: "og:title", content: "Executive Director — Mining & Heavy Industry Leader" },
      {
        property: "og:description",
        content:
          "From ground-level supervisor to boardroom: 30+ years of operational integrity in heavy industry.",
      },
    ],
  }),
});

function BoltIcon({ fill = "#c29b5a" }: { fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
        fill={fill}
        stroke={fill}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function AwardIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  );
}


function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-20 flex items-center header-glass ${isScrolled ? 'header-scrolled' : ''}`}
    >
      <div className="mx-auto max-w-7xl w-full px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold tracking-[0.05em] uppercase text-[#111]">
            S. Venkateswaran
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {[
            { name: "About", href: "#about" },
            { name: "Journey", href: "#journey" },
            { name: "Leadership", href: "#leadership" },
            { name: "Achievements", href: "#achievements" },

          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link-premium text-base tracking-wide"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <a
            href="#contact"
            className="btn-brut btn-white btn-brut-sm"
            style={{ fontSize: '14px', borderRadius: '10px' }}
          >
            Get in Touch →
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="about"
      className="relative border-b border-[#9bb0ab] text-[#171e19] overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mx-auto max-w-7xl px-6 pt-4 lg:pt-8 grid lg:grid-cols-2 gap-12 items-center lg:items-start">
        <div className="pb-8 lg:pb-14">
          <span className="inline-flex items-center gap-2 bg-transparent border border-[#171e19] text-[#171e19] rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider portfolio-label">
            <span className="h-2 w-2 rounded-full bg-[#171e19] animate-pulse" />
            Executive Director · Lloyds Metals
          </span>
          <h1 className="mt-8 font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-[#171e19]">
            From the <span className="inline-block text-[#c29b5a]">Pit Floor</span> to the
            <br />
            Boardroom.
          </h1>
          <p className="mt-6 text-lg max-w-xl text-[#1A1A1A] font-medium portfolio-body">
            S. Venkateswaran — an Executive Director with 30+ years of industrial experience, moving from ground-level supervision to corporate boardrooms. Prioritizing operational logic over traditional theory.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#journey"
              className="btn-brut btn-black"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}
            >
              Read the Journey →
            </a>
            <a
              href="#contact"
              className="btn-brut btn-white"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem' }}
            >
              Connect →
            </a>
          </div>
        </div>
        <RotatableImage src={pic} />
      </div>
    </section>
  );
}

function RotatableImage({ src }: { src: string }) {
  return (
    <div
      className="reveal-right flex justify-center items-end w-full h-full"
    >
      <img
        src={src}
        alt="Executive Director"
        className="w-96 md:w-[600px] h-auto object-contain pointer-events-none"
        style={{
          mixBlendMode: "multiply",
          filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))",
        }}
      />
    </div>
  );
}

function ConveyorStrip() {
  const items = [
    {
      label: "Industrial Operations",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      )
    },
    {
      label: "Mining Leadership",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      )
    },
    {
      label: "Executive Strategy",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      label: "Large-Scale Projects",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18" /><path d="M19 21V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14" /><path d="M9 5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" /><path d="M12 9v4" /><path d="M9 13h6" />
        </svg>
      )
    },
    {
      label: "Operational Excellence",
      icon: (
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#C9A14A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#0c100d] border-y border-[#272727] py-10 overflow-hidden relative group">
      {/* Background Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#C9A14A 1px, transparent 0px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Edge Fades for smooth entry/exit */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0c100d] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0c100d] to-transparent z-10 pointer-events-none" />

      <div className="flex marquee group-hover:[animation-play-state:paused] items-center">
        {/* Multiply items to ensure seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center"
          >
            <div className="mx-4 flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C9A14A]/30 bg-[#121613] shadow-[0_0_12px_rgba(201,161,74,0.06)] transition-all duration-500 hover:scale-105 hover:border-[#C9A14A] hover:shadow-[0_0_20px_rgba(201,161,74,0.3)] cursor-default">
              <span className="flex-shrink-0 opacity-80">{item.icon}</span>
              <span className="text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                {item.label}
              </span>
            </div>
            {/* Dot Separator */}
            <div className="w-1 h-1 rounded-full bg-[#C9A14A]/30 mx-1.5" />
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "LLOYDS METALS",
    "THRIVENI EARTHMOVERS",
    "GADCHIROLI MINING",
    "STEEL OPERATIONS",
    "INDUSTRIAL REVIVAL",
    "BOARDROOM LEADERSHIP",
  ];
  return (
    <section className="bg-[#171e19] border-b border-[#272727] py-6 overflow-hidden relative">
      <div className="marquee">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-3xl whitespace-nowrap tracking-widest"
            style={{ color: "rgba(183,198,194,0.45)" }}
          >
            {it}
            <span className="text-[#BFA77A] opacity-50">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}

import section2Bg from "../../section 2 bg pic.png";
import miningBg from "../../mining-bg.png";
import bg3 from "../../bg 3.png";
import bg4 from "../../bg 4.png";


function StatCounter({ target, suffix = "", prefix = "", decimals = 0 }: { target: number; suffix?: string; prefix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Find the closest pinned section to ensure ScrollTrigger works correctly during pinning
    const pinnedSection = elementRef.current.closest('section');

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.fromTo(obj, 
        { val: 0 },
        {
          val: target,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 90%",
            pinnedContainer: pinnedSection || undefined,
            // Restart whenever entering from top or bottom
            toggleActions: "restart none none restart",
          },
          onUpdate: () => {
            setCount(obj.val);
          }
        }
      );
    });

    return () => ctx.revert();
  }, [target]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

function ProblemSolution() {
  return (
    <section className="bg-white border-b-2 border-black pt-20 pb-10 relative overflow-hidden">
      {/* Background Image Layer - Subtled down */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url(${section2Bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
        }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="max-w-5xl anim-box mx-auto text-center mb-20">
          <div className="flex flex-col items-center gap-3 mb-6 anim-content">
            <span className="text-[#c29b5a] text-xs font-bold uppercase tracking-[0.3em] portfolio-label">
              Leadership Philosophy
            </span>
            <div className="w-10 h-px bg-[#c29b5a]"></div>
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black anim-content whitespace-nowrap">
            The Director's Way.
          </h2>
          <p className="mt-6 text-lg font-medium text-neutral-900 anim-content max-w-2xl mx-auto leading-relaxed portfolio-body">
            Industrial leadership doesn't come from textbooks. It comes from the pit, the plant, and
            the people.
          </p>
        </div>

        <div className="max-w-4xl mx-auto anim-grid">
          <div className="anim-box text-center">
            <div className="flex items-center justify-center gap-3 mb-6 anim-content">
              <div className="w-6 h-0.5 bg-[#c29b5a]"></div>
              <span className="text-[#c29b5a] text-[10px] font-bold uppercase tracking-[0.25em] portfolio-label">
                Pillar One & Two
              </span>
              <div className="w-6 h-0.5 bg-[#c29b5a]"></div>
            </div>
            <h3 className="font-display text-4xl font-bold text-black uppercase tracking-tight mb-8">
              Field-First Logic & Strategic Integrity
            </h3>
            <p className="text-lg leading-relaxed text-neutral-900 font-medium anim-content portfolio-body">
              Decisions driven by pit-floor realities, with direct engagement at ground level.
              A strong emphasis on logic-based problem solving, prioritizing practical thinking
              over theory, combined with high-intensity operational standards. Boardroom transparency
              with direct reporting, scaling operations through site-specific insights, and
              maintaining people-first leadership during complex situations — ensuring accountability
              across corporate structures.
            </p>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="mt-10 pt-8 border-t border-black/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 anim-grid relative">
          {/* Stat 1: Project Sites */}
          <div className="text-center anim-box relative flex flex-col items-center px-4">
            <div className="mb-4 h-10 flex items-center justify-center">
              <ExcavatorIcon className="h-full w-auto text-[#c29b5a]" />
            </div>
            <div className="text-4xl font-display font-bold text-black mb-2 leading-none tracking-tight">
              <StatCounter target={150} suffix="+" />
            </div>
            <span className="text-[#c29b5a] text-[9px] font-bold uppercase tracking-[0.2em] mb-3 portfolio-label">
              Project Sites Executed
            </span>
            <p className="text-[11px] text-neutral-900 font-medium leading-relaxed max-w-[180px] portfolio-body">
              Across mining, earthmoving and infrastructure zones
            </p>

            {/* Vertical Divider 1 */}
            <div className="hidden lg:flex absolute -right-[1px] top-0 bottom-0 flex-col items-center justify-center pointer-events-none opacity-40">
              <div className="w-px flex-1 bg-[#c29b5a]"></div>
            </div>
          </div>

          {/* Stat 2: Heavy Equipment */}
          <div className="text-center anim-box relative flex flex-col items-center px-4">
            <div className="mb-4 h-10 flex items-center justify-center">
              <DumpTruckIcon className="h-full w-auto text-[#c29b5a]" />
            </div>
            <div className="text-4xl font-display font-bold text-black mb-2 leading-none tracking-tight">
              <StatCounter target={500} suffix="+" />
            </div>
            <span className="text-[#c29b5a] text-[9px] font-bold uppercase tracking-[0.2em] mb-3 portfolio-label">
              Heavy Equipment Deployed
            </span>
            <p className="text-[11px] text-neutral-900 font-medium leading-relaxed max-w-[180px] portfolio-body">
              Excavators, dumpers and large-scale machinery
            </p>

            {/* Vertical Divider 2 */}
            <div className="hidden lg:flex absolute -right-[1px] top-0 bottom-0 flex-col items-center justify-center pointer-events-none opacity-40">
              <div className="w-px flex-1 bg-[#c29b5a]"></div>
            </div>
          </div>

          {/* Stat 3: Workforce */}
          <div className="text-center anim-box relative flex flex-col items-center px-4">
            <div className="mb-4 h-10 flex items-center justify-center">
              <UsersIcon className="h-8 w-auto text-[#c29b5a]" />
            </div>
            <div className="text-4xl font-display font-bold text-black mb-2 leading-none tracking-tight">
              <StatCounter target={3000} suffix="+" />
            </div>
            <span className="text-[#c29b5a] text-[9px] font-bold uppercase tracking-[0.2em] mb-3 portfolio-label">
              Workforce Led
            </span>
            <p className="text-[11px] text-neutral-900 font-medium leading-relaxed max-w-[180px] portfolio-body">
              Operators, engineers and support teams across sites
            </p>

            {/* Vertical Divider 3 */}
            <div className="hidden lg:flex absolute -right-[1px] top-0 bottom-0 flex-col items-center justify-center pointer-events-none opacity-40">
              <div className="w-px flex-1 bg-[#c29b5a]"></div>
            </div>
          </div>

          {/* Stat 4: Project Value */}
          <div className="text-center anim-box flex flex-col items-center px-4">
            <div className="mb-4 h-10 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border-2 border-[#c29b5a] flex items-center justify-center">
                <RupeeIcon className="h-5 w-auto text-[#c29b5a]" />
              </div>
            </div>
            <div className="text-4xl font-display font-bold text-black mb-2 leading-none tracking-tight flex items-baseline gap-1">
              <StatCounter target={500} prefix="₹ " suffix="+ CR" />
            </div>
            <span className="text-[#c29b5a] text-[9px] font-bold uppercase tracking-[0.2em] mb-3 portfolio-label">
              Project Value Managed
            </span>
            <p className="text-[11px] text-neutral-900 font-medium leading-relaxed max-w-[180px] portfolio-body">
              End-to-end execution of large-scale industrial projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const items = [
    {
      num: "01",
      title: "DIRECT MANAGEMENT",
      body: "Common sense and field realities lead every decision — built from ground-level execution. A hands-on approach ensures clarity, speed, and accountability in every operation.",
      statTarget: 30,
      statSuffix: "+",
      label: "EXPERIENCE",
      subLabel: "YEARS",
      icon: <AwardIcon className="w-10 h-10 text-[#c29b5a]" />
    },
    {
      num: "02",
      title: "ORGANIZATIONAL LOYALTY",
      body: "Company-first mindset with complete operational transparency across large-scale mining sites. Loyalty to the mission and people drives long-term strength and sustainable growth.",
      statTarget: 8500,
      statSuffix: "+",
      label: "LAND MANAGED",
      subLabel: "HECTARES",
      icon: <UsersIcon className="w-10 h-10 text-[#c29b5a]" />
    },
    {
      num: "03",
      title: "OPERATIONAL STANDARDS",
      body: "Strict industrial discipline ensuring performance, compliance, and zero-compromise safety. Built systems that maintain excellence in the most demanding environments.",
      statTarget: 99.8,
      statSuffix: "%",
      statDecimals: 1,
      label: "SAFETY RECORD",
      subLabel: "SAFETY COMPLIANCE",
      icon: <ShieldCheckIcon className="w-10 h-10 text-[#c29b5a]" />
    },
  ];

  return (
    <section
      id="leadership"
      className="border-y-2 border-black pt-24 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for readability - Reverted to original 60% */}
      <div className="absolute inset-0 bg-[#0c121e]/60 pointer-events-none z-0"></div>

      <div className="relative z-0">
        <BackgroundParticles />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Center Vertical Timeline - Perfectly centered between columns */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#c29b5a]/30 -translate-x-1/2 hidden lg:block z-20">
          <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c29b5a] shadow-[0_0_15px_#BFA77A,0_0_30px_#BFA77A] border-4 border-[#0c121e]"></div>
          <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c29b5a] shadow-[0_0_15px_#BFA77A,0_0_30px_#BFA77A] border-4 border-[#0c121e]"></div>
          <div className="absolute top-[78%] left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c29b5a] shadow-[0_0_15px_#BFA77A,0_0_30px_#BFA77A] border-4 border-[#0c121e]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start relative z-10">

          {/* Left Column: Title & Intro */}
          <div className="anim-box pt-4">
            <span className="inline-block text-sm font-bold uppercase tracking-[0.5em] text-[#c29b5a] mb-3 anim-content portfolio-label">
              LEADERSHIP
            </span>
            <div className="w-24 h-0.5 bg-[#c29b5a] mb-12 anim-content"></div>
            <h2 className="font-display text-4xl lg:text-[52px] text-white leading-[1.1] font-bold mb-16 anim-content">
              THREE PILLARS<br />
              OF THE DIRECTOR'S<br />
              DOCTRINE.
            </h2>

            <div className="flex items-start gap-6 anim-content">
              <div className="w-10 h-0.5 bg-[#c29b5a] mt-3 flex-shrink-0"></div>
              <p className="text-neutral-400 text-lg leading-relaxed max-w-md portfolio-body">
                Built on decades of field execution, the doctrine is grounded in practical decision-making, organizational loyalty, and uncompromising operational standards — where leadership is defined not by position, but by impact on the ground.
              </p>
            </div>
          </div>

          {/* Right Column: List of Pillars */}
          <div className="flex flex-col gap-12 lg:gap-16 anim-grid lg:pl-16">
            {items.map((it, idx) => (
              <div key={it.title} className="group relative anim-box grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Text Content */}
                <div className="md:col-span-8">
                  <span className="text-[#c29b5a] text-2xl font-bold mb-3 block anim-content portfolio-label">{it.num}</span>
                  <h3 className="font-display text-2xl tracking-wider text-white font-bold uppercase mb-4 group-hover:text-[#c29b5a] transition-colors anim-content">
                    {it.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#c29b5a] mb-8 anim-content"></div>
                  <p className="text-neutral-400 text-sm leading-relaxed anim-content portfolio-body">
                    {it.body}
                  </p>
                </div>

                {/* Vertical Divider Line inside pillar block */}
                <div className="hidden md:block md:col-span-1 h-24 border-l border-neutral-700/50 mx-auto self-end mb-4"></div>

                {/* Icon & Stat Section */}
                <div className="md:col-span-3 flex flex-col items-start gap-6 self-end pb-2">
                  <div className="text-[#c29b5a]">
                    {it.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.25em] mb-1 portfolio-label">
                      {it.label}
                    </span>
                    <span className="text-4xl font-display text-[#c29b5a] font-bold leading-none mb-1">
                      <StatCounter
                        target={it.statTarget}
                        suffix={it.statSuffix}
                        decimals={it.statDecimals}
                      />
                    </span>
                    <span className="text-[#c29b5a] text-[10px] font-bold uppercase tracking-[0.25em] portfolio-label">
                      {it.subLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    {
      title: "EARLY YEARS",
      heading: "Foundation of Discipline",
      sub: "Tamil Government School",
      text: "Educated at a Tamil Government School; completed BA English via self-study while managing family health responsibilities.",
    },
    {
      title: "SERVICE SECTOR",
      heading: "Bakery Industry",
      sub: "High-Intensity Environment",
      text: "Dedicated tenure in the bakery industry, establishing a baseline for high-intensity work ethics.",
    },
    {
      title: "INDUSTRIAL RISE",
      heading: "From Supervisor to Director",
      sub: "Thriveni Earthmovers",
      text: "Joined Thriveni Earthmovers as a Supervisor; rose through the ranks based on field performance and operational results.",
    },
    {
      title: "CURRENT",
      heading: "Executive Director",
      sub: "Lloyds Metals and Energy Limited",
      text: "Maintaining board-level status through field expertise and strategic operational leadership.",
    },
  ];



  return (
    <section
      id="journey"
      className="relative pt-40 pb-40 overflow-hidden border-b border-black/50"
      style={{
        backgroundImage: `url(${bg4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Light overlay to reduce brightness/intensity */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none z-0" />

      <GoldSilkParticles />



      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 relative">

          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-32">
            <span className="inline-block text-[#c29b5a] text-xl font-bold uppercase tracking-[0.5em] mb-6">
              CAREER
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 leading-tight uppercase">
              The Road to <br className="md:hidden" />
              <span className="text-[#c29b5a] italic font-serif">Leadership</span>
            </h2>
            <div className="mt-8 w-32 h-[1px] bg-[#c29b5a]/40 mx-auto"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">

            {/* Background Path (Continuous static line) */}
            <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#c29b5a]/10 -translate-x-1/2 z-0" />

            {/* Timeline Items */}
            <div className="flex flex-col relative z-10">
              {steps.map((s, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={i} className="flex flex-col md:flex-row items-center w-full relative timeline-item group min-h-[400px]">

                    {/* Animated Vertical Line Segment */}
                    <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] z-0">
                      <div className="line-segment absolute top-0 left-0 w-full h-full bg-[#c29b5a] origin-top shadow-[0_0_20px_#c29b5a,0_0_40px_rgba(194,155,90,0.5)]" />
                    </div>

                    {/* Content Card Side */}
                    <div className={`w-full md:w-1/2 flex pl-20 md:pl-0 ${isEven ? 'md:justify-end md:pr-32' : 'md:justify-start md:pl-32 md:order-last'}`}>
                      <div className="timeline-card w-full max-w-md p-10 rounded-[24px] bg-white/70 backdrop-blur-xl border border-[#BFA77A]/30 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700 hover:border-[#BFA77A]/60 hover:bg-white/90">
                        <span className="text-[#c29b5a] text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block opacity-70 portfolio-label">
                          {s.title}
                        </span>
                        <h3 className="font-display text-2xl md:text-3xl text-neutral-900 mb-3">
                          {s.heading}
                        </h3>
                        <h4 className="text-sm font-medium text-neutral-500 mb-6 tracking-wide">
                          {s.sub}
                        </h4>
                        <p className="text-neutral-700 leading-relaxed text-sm font-light portfolio-body">
                          {s.text}
                        </p>
                      </div>
                    </div>

                    {/* Center Point (Node) */}
                    <div className="absolute left-[24px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#c29b5a] timeline-node z-20 shadow-[0_0_30px_#c29b5a,0_0_60px_rgba(194,155,90,0.8)] border-[3px] border-white">
                    </div>

                    {/* Horizontal Connector Line */}
                    <div
                      className={`absolute top-1/2 h-[2px] bg-[#c29b5a] connector-line z-10 shadow-[0_0_20px_#c29b5a,0_0_40px_rgba(194,155,90,0.6)]
                        ${isEven
                          ? 'left-[24px] w-[56px] origin-left md:left-auto md:right-1/2 md:w-[128px] md:origin-right'
                          : 'left-[24px] w-[56px] origin-left md:left-1/2 md:w-[128px]'
                        }
                      `}
                    />

                    {/* Spacer for alternating layout */}
                    <div className={`hidden md:block w-1/2 ${isEven ? 'order-last' : ''}`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DustParticles({ count = 12, variant = 'dust' }: { count?: number, variant?: 'dust' | 'sparkle' }) {
  const particles = Array.from({ length: count }).map((_, i) => {
    const size = variant === 'sparkle' ? Math.random() * 3 + 1 : Math.random() * 6 + 3;
    const left = Math.random() * 100;
    const top = variant === 'sparkle' ? 100 : Math.random() * 100;
    const animDuration = variant === 'sparkle' ? Math.random() * 10 + 10 : Math.random() * 50 + 50;
    const animDelay = variant === 'sparkle' ? Math.random() * -10 : Math.random() * -100;
    const animationName = variant === 'sparkle' ? 'riseSparkle' : 'floatDust';

    return (
      <div
        key={i}
        className="absolute rounded-full opacity-0"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: variant === 'sparkle' ? undefined : `${top}%`,
          bottom: variant === 'sparkle' ? '-20px' : undefined,
          backgroundColor: variant === 'sparkle' ? '#BFA77A' : (i % 3 === 0 ? '#c8a070' : '#a07840'),
          filter: variant === 'sparkle' ? 'blur(1px)' : 'blur(3px)',
          boxShadow: variant === 'sparkle' ? '0 0 10px #BFA77A' : 'none',
          animation: `${animationName} ${animDuration}s linear infinite`,
          animationDelay: `${animDelay}s`,
        }}
      />
    );
  });

  return <div className="absolute inset-0 pointer-events-none z-0">{particles}</div>;
}

// Stable particle data generated once at module load — avoids re-randomisation on every render
const SAND_PARTICLES = Array.from({ length: 150 }, (_, i) => ({
  size: (i * 1.37 % 4) + 1,
  left: (i * 3.33) % 100,
  top: (i * 7.77) % 100,
  animDuration: (i * 1.23 % 8) + 4,
  animDelay: -((i * 2.17) % 15),
  color: ['#b22222','#8b0000','#a0522d','#d2691e','#c2410c','#7c2d12'][i % 6],
  opacity: (i * 0.017 % 0.5) + 0.3,
  borderRadius: `${(i * 4.1 % 40) + 20}%`,
}));

function RedSandParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Lightweight background gradient tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#8b4513]/15 via-transparent to-transparent" />

      {/* Atmospheric mist — single cheap radial gradient, no blur filter */}
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 40%, #a0522d22 0%, transparent 70%)' }}
      />

      {/* Primary particle layer — GPU-composited transforms only */}
      <div className="absolute inset-0">
        {SAND_PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              backgroundColor: p.color,
              opacity: p.opacity,
              borderRadius: p.borderRadius,
              animation: `sandStorm ${p.animDuration}s linear infinite`,
              animationDelay: `${p.animDelay}s`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const bg = containerRef.current.querySelector<HTMLElement>('.motion-bg-layer');
    if (!bg) return;
    // Animate backgroundPositionX — the image content pans inside the div.
    // The element itself never moves so no white edges appear.
    bg.style.backgroundPositionX = '30%';
    const anim = gsap.to(bg, {
      backgroundPositionX: '70%',
      duration: 14,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    return () => { anim.kill(); };
  }, []);

  const columns = [
    {
      pill: "ETHICS",
      title: "ZERO COMPROMISES",
      body: "A three-decade career across heavy industry, maintained without a single ethical or financial compromise.",
      statTarget: 30,
      statUnit: "YRS",
      statLabel: "EXPERIENCE",
      colorClass: "text-[#849b95]",
      curveColor: "border-[#849b95]",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      pill: "SCALING",
      title: "INDUSTRIAL REVIVAL",
      body: "Instrumental in the growth of Thriveni Earthmovers and the revival of Lloyds Metals' mining assets in Gadchiroli.",
      statTarget: 2.4,
      statSuffix: "M",
      statDecimals: 1,
      statUnit: "TONNES",
      statLabel: "PROCESSED",
      colorClass: "text-[#BFA77A]",
      curveColor: "border-[#BFA77A]",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="17 4 21 4 21 8" />
          <path d="M5 11l5-5 4 4 7-7" />
          <rect x="5" y="15" width="2" height="6" />
          <rect x="11" y="12" width="2" height="9" />
          <rect x="17" y="9" width="2" height="12" />
        </svg>
      )
    },
    {
      pill: "BOARDROOM",
      title: "FIELD-TO-BOARD",
      body: "Attained board-level status in a public-listed company through field expertise — not traditional certifications.",
      statNum: "PUBLIC",
      statUnit: "CO.",
      statLabel: "LEADERSHIP",
      colorClass: "text-black",
      curveColor: "border-[#272727]",
      icon: (
        <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" x2="21" y1="22" y2="22" />
          <line x1="6" x2="6" y1="18" y2="11" />
          <line x1="10" x2="10" y1="18" y2="11" />
          <line x1="14" x2="14" y1="18" y2="11" />
          <line x1="18" x2="18" y1="18" y2="11" />
          <polygon points="12 2 20 7 4 7" />
          <line x1="4" x2="20" y1="20" y2="20" />
          <line x1="4" x2="20" y1="9" y2="9" />
        </svg>
      )
    },
  ];

  return (
    <section
      ref={containerRef}
      id="achievements"
      className="bg-[#f5f5f5] pt-24 pb-24 border-b-2 border-black relative overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.45] pointer-events-none motion-bg-layer"
        style={{
          backgroundImage: `url(${miningBg})`,
          backgroundSize: '150% auto',
          backgroundPosition: '30% center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
        <RedSandParticles />
      </div>

      {/* Decorative Dot Matrices */}
      <svg className="absolute top-16 right-12 text-[#BFA77A]/40 w-24 h-24 pointer-events-none z-0" fill="currentColor" viewBox="0 0 100 100">
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle fill="currentColor" cx="2" cy="2" r="1.5"></circle>
        </pattern>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
      </svg>
      <svg className="absolute bottom-12 left-12 text-[#BFA77A]/40 w-24 h-24 pointer-events-none z-0" fill="currentColor" viewBox="0 0 100 100">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
      </svg>

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Header Section */}
        <div className="w-full max-w-none anim-box mb-16">
          <div className="inline-block anim-content">
            <span className="text-[#BFA77A] text-xl font-bold uppercase tracking-[0.2em]">
              ACHIEVEMENTS
            </span>
            <div className="w-10 h-[3px] bg-[#BFA77A] mt-2 mb-6"></div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold uppercase leading-[1.1] text-black anim-content lg:whitespace-nowrap">
            BUILT ON RESULTS, <span className="text-[#BFA77A]">NOT RESUMES.</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-neutral-800 anim-content leading-relaxed lg:whitespace-nowrap portfolio-body">
            Three decades of hands-on leadership in heavy industry — defined not by titles, but by impact that lasts.
          </p>
        </div>

        {/* 3-Column Content */}
        <div className="grid md:grid-cols-3 gap-16 md:gap-0 anim-grid relative pt-8">
          {columns.map((c, i) => (
            <div
              key={c.title}
              className="flex flex-col items-center text-center relative px-4 md:px-8 anim-box group"
            >
              {/* Vertical Divider with Dot (Except for last item) */}
              {i !== columns.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-[70%] bg-[#A67C33]/60 z-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#A67C33]"></div>
                </div>
              )}

              {/* Icon Circle Wrapper */}
              <div className="relative mb-8 mt-2">
                {/* The colored crescent/curve */}
                <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[110%] h-[110%] rounded-full border-b-[5px] ${c.curveColor} transition-transform duration-500 group-hover:-translate-y-2`}></div>
                {/* The main white circle */}
                <div className="relative w-24 h-24 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  {c.icon}
                </div>
              </div>

              {/* Pill & Title */}
              <span className="text-[#A67C33] text-[14px] font-bold uppercase tracking-[0.2em] mb-3 anim-content portfolio-label">
                {c.pill}
              </span>
              <h3 className="font-display text-[22px] font-bold uppercase text-black mb-4 anim-content tracking-wide">
                {c.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-900 font-medium leading-relaxed mb-12 max-w-[280px] anim-content text-sm portfolio-body">
                {c.body}
              </p>

              {/* Bottom Metric */}
              <div className="mt-auto relative inline-flex flex-col items-start text-left border-l-2 border-[#BFA77A] pl-4">
                <div className="flex items-baseline gap-1.5">
                  <span className={`font-display text-4xl lg:text-[40px] font-bold leading-none ${c.colorClass}`}>
                    {c.statTarget !== undefined ? (
                      <StatCounter
                        target={c.statTarget}
                        suffix={c.statSuffix}
                        decimals={c.statDecimals}
                      />
                    ) : (
                      c.statNum
                    )}
                  </span>
                  <span className="text-[11px] font-bold text-black uppercase tracking-widest mt-1">
                    {c.statUnit}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-black tracking-[0.2em] mt-1.5 uppercase portfolio-label">
                  {c.statLabel}
                </span>
                {/* Bottom Gold Line */}
                <div className="absolute -bottom-3 left-4 w-6 h-[2px] bg-[#BFA77A]"></div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function CTA() {
  return (
    <section
      id="contact"
      className="bg-[#c29b5a] py-28 border-b-2 border-black relative overflow-hidden"
    >


      <div className="relative mx-auto max-w-4xl px-6 text-center anim-box">
        <span className="inline-block bg-white border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-wider rounded shadow-brut-sm anim-content">
          Get in Touch
        </span>
        <h2 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] anim-content">
          Open to{" "}
          <span style={{ WebkitTextStroke: "2px #000", color: "transparent" }}>boardroom</span>{" "}
          conversations & speaking sessions.
        </h2>
        <p className="mt-6 text-lg font-medium max-w-2xl mx-auto anim-content portfolio-body">
          Reach out for advisory, industrial collaboration, media interviews, or technical speaking
          engagements on mining, steel, and large-scale earthmoving operations.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5 anim-content">
          <a href="mailto:office@lloydsmetals.com" className="btn-brut btn-black">
            Email the Office →
          </a>
          <a href="#" className="btn-brut btn-white" style={{ boxShadow: "4px 4px 0px 0px #000" }}>
            LinkedIn Profile
          </a>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto anim-grid">
          {[
            { l: "Office", v: "Lloyds Metals & Energy Ltd." },
            { l: "Network", v: "LinkedIn Profile" },
            { l: "Email", v: "Professional Address" },
          ].map((c) => (
            <div
              key={c.l}
              className="bg-white border-2 border-black rounded-xl p-4 text-left anim-box"
              style={{ boxShadow: "4px 4px 0px 0px #000" }}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 anim-content">
                {c.l}
              </div>
              <div className="mt-1 font-bold anim-content">{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { h: "Profile", links: ["About", "Career Journey", "Leadership", "Achievements"] },
    {
      h: "Work",
      links: ["Lloyds Metals", "Thriveni Earthmovers", "Gadchiroli Project", "Case Studies"],
    },

    { h: "Contact", links: ["Office", "Email", "LinkedIn", "Press"] },
  ];
  return (
    <footer className="bg-[#171e19] text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">

              <span className="font-display text-xl uppercase">
                S. Venkateswaran
              </span>
            </div>
            <p className="mt-4 text-sm text-[#b7c6c2] font-medium">
              Three decades of field-to-boardroom industrial leadership.
            </p>
            <div className="mt-6 flex gap-3">
              {["in", "X", "✉", "→"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="h-10 w-10 bg-[#272727] border-2 border-neutral-700 rounded-md flex items-center justify-center text-xs font-bold transition-colors hover:bg-[#c29b5a] hover:text-black hover:border-black"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="font-display text-sm uppercase tracking-wider text-[#c29b5a]">
                {c.h}
              </div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm font-medium text-[#b7c6c2] hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-6 border-t-2 border-[#272727] flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-[#b7c6c2]">
          <div>© {new Date().getFullYear()} Executive Director Portfolio. All rights reserved.</div>
          <div>Built with operational logic & field integrity.</div>
        </div>
      </div>
    </footer>
  );
}

gsap.registerPlugin(ScrollTrigger);

function BackgroundParticles() {
  const particles = Array.from({ length: 18 }).map((_, i) => {
    const size = Math.random() * 8 + 3; // 3px to 11px
    const left = Math.random() * 100; // 0% to 100%
    const animDuration = Math.random() * 30 + 30; // 30s to 60s
    const animDelay = Math.random() * -60; // Random staggered start
    const shape = Math.random() > 0.5 ? '50%' : '2px'; // Mix of circles and rough particles

    return (
      <div
        key={i}
        className="bg-particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          borderRadius: shape,
          animation: `floatParticle ${animDuration}s linear infinite`,
          animationDelay: `${animDelay}s`,
        }}
      />
    );
  });

  return <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">{particles}</div>;
}


function Index() {
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement>(null);
  useReveal();
  useParallax();

  useEffect(() => {
    if (!(window as any).__hasSeenIntro) {
      navigate({ to: '/', replace: true });
      return;
    }
    
    if (!mainRef.current) return;
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    const ctx = gsap.context(() => {

      // 2. Sync Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);

      // 3. GSAP Scroll-Controlled Animations (Pinning & Sequence)

      // Select all sections that contain animation elements
      const sections = document.querySelectorAll("section:has(.anim-box)");

      sections.forEach((section) => {
        const isHero = section.id === 'about';
        const boxes = section.querySelectorAll(".anim-box");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: isHero ? "top 20%" : "top top",
            end: isHero ? "bottom top" : `+=${boxes.length * 500}`,
            scrub: 1,
            pin: !isHero,
            anticipatePin: 1,
          },
        });

        let currentGroupLabel = "";
        boxes.forEach((box, i) => {
          const contentElements = box.querySelectorAll(".anim-content");
          const grid = box.closest(".anim-grid");
          const gridBoxes = grid ? grid.querySelectorAll(".anim-box") : [];
          const isFirstInGrid = grid ? gridBoxes[0] === box : true;
          const isLastInGrid = grid ? gridBoxes[gridBoxes.length - 1] === box : true;

          // Create a new group label if this is the first item in a grid or not in a grid
          if (i === 0 || !grid || isFirstInGrid) {
            currentGroupLabel = `group-${i}`;
            tl.addLabel(currentGroupLabel, i === 0 ? 0 : ">-0.1");
          }

          tl.fromTo(box,
            { opacity: 0, y: 80, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, ease: "none" },
            currentGroupLabel
          );

          if (contentElements.length > 0) {
            tl.fromTo(contentElements,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, stagger: 0.05, ease: "none" },
              currentGroupLabel
            );
          }

          // Only add a scroll pause once the entire group (grid or single box) is done
          if (isLastInGrid) {
            tl.to({}, { duration: 0.2 });
          }
        });
      });

      // 4. Career Journey Timeline Animations
      // NOTE: Must live here (after Lenis sync) so scrub works correctly.
      const journeyItems = document.querySelectorAll(".timeline-item");
      journeyItems.forEach((item, index) => {
        const card = item.querySelector(".timeline-card") as HTMLElement;
        const node = item.querySelector(".timeline-node") as HTMLElement;
        const connector = item.querySelector(".connector-line") as HTMLElement;
        const line = item.querySelector(".line-segment") as HTMLElement;

        if (!card || !node || !connector || !line) return;

        const isEven = index % 2 === 0;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",  // opens on enter, closes on leave (both directions)
          }
        });

        // Step 1: Vertical line grows fast
        tl.fromTo(line, { scaleY: 0 }, { scaleY: 1, duration: 0.4, ease: "none" });
        // Step 2: Node pops in
        tl.fromTo(node, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.25 }, ">-0.05");
        // Step 3: Horizontal connector draws
        tl.fromTo(connector, { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: "power2.inOut" }, ">-0.05");
        // Step 4: Card slides in
        tl.fromTo(card,
          { opacity: 0, x: isEven ? -40 : 40, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: "power2.out" },
          ">-0.1"
        );
      });

      // 5. Parallax Background Elements
      const bgElements = document.querySelectorAll(".mine-spin, .mine-spin-rev, [aria-hidden='true']");
      bgElements.forEach((el) => {
        gsap.to(el, {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });

    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <div ref={mainRef} className="portfolio-scope bg-white text-black overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <ConveyorStrip />
        <ProblemSolution />
        <Leadership />
        <Journey />
        <Achievements />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
