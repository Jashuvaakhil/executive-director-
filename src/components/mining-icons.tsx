import { type CSSProperties } from "react";

// ===== Mining-themed SVG icons =====

export function PickaxeIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none">
      <path d="M8 56 L34 30" stroke="#171e19" strokeWidth="4" strokeLinecap="round" />
      <path
        d="M44 8 C 30 14, 22 22, 16 36 L28 36 C 32 26, 40 18, 56 14 Z"
        fill="#171e19"
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M32 32 L40 24" stroke="#c29b5a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function GearIcon({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none">
      <g stroke="#000" strokeWidth="2.5" fill="#c29b5a">
        <path d="M32 4 L36 12 L44 10 L46 18 L54 22 L50 30 L56 36 L48 40 L48 48 L40 48 L36 56 L28 52 L20 56 L18 48 L10 46 L14 38 L8 32 L14 26 L10 18 L18 16 L22 8 L30 12 Z" />
        <circle cx="32" cy="32" r="9" fill="#171e19" />
        <circle cx="32" cy="32" r="3" fill="#c29b5a" />
      </g>
    </svg>
  );
}

export function OreIcon({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none">
      <polygon
        points="14,46 24,18 44,14 56,32 50,52 26,56"
        fill="#b7c6c2"
        stroke="#000"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <polygon
        points="24,18 44,14 36,30"
        fill="#c29b5a"
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <polygon
        points="36,30 56,32 50,52"
        fill="#171e19"
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <polygon
        points="14,46 36,30 26,56"
        fill="#fff"
        stroke="#000"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HelmetIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none">
      <path
        d="M8 44 C 8 26, 22 14, 32 14 C 42 14, 56 26, 56 44 Z"
        fill="#c29b5a"
        stroke="#000"
        strokeWidth="2.5"
      />
      <rect
        x="6"
        y="44"
        width="52"
        height="8"
        rx="2"
        fill="#171e19"
        stroke="#000"
        strokeWidth="2"
      />
      <rect x="28" y="14" width="8" height="14" fill="#171e19" />
      <circle cx="32" cy="22" r="3" fill="#c29b5a" stroke="#000" strokeWidth="1.5" />
    </svg>
  );
}

export function DumpTruckIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 80 64" className={className} style={style} fill="none">
      <path d="M4 20 L40 12 L40 40 L4 40 Z" fill="#171e19" stroke="#000" strokeWidth="2.5" />
      <rect x="40" y="22" width="20" height="18" fill="#c29b5a" stroke="#000" strokeWidth="2.5" />
      <rect x="58" y="28" width="14" height="12" fill="#fff" stroke="#000" strokeWidth="2" />
      <circle cx="20" cy="48" r="8" fill="#171e19" stroke="#000" strokeWidth="2.5" />
      <circle cx="20" cy="48" r="3" fill="#b7c6c2" />
      <circle cx="56" cy="48" r="8" fill="#171e19" stroke="#000" strokeWidth="2.5" />
      <circle cx="56" cy="48" r="3" fill="#b7c6c2" />
      <circle cx="14" cy="18" r="2" fill="#c29b5a" />
      <circle cx="22" cy="16" r="2" fill="#fff" />
      <circle cx="30" cy="14" r="2" fill="#b7c6c2" />
    </svg>
  );
}

export function DrillIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} fill="none">
      <rect
        x="20"
        y="6"
        width="24"
        height="28"
        rx="3"
        fill="#171e19"
        stroke="#000"
        strokeWidth="2.5"
      />
      <rect x="26" y="10" width="12" height="6" fill="#c29b5a" />
      <polygon points="32,34 24,42 40,42" fill="#b7c6c2" stroke="#000" strokeWidth="2" />
      <polygon points="32,42 28,52 36,52" fill="#171e19" stroke="#000" strokeWidth="2" />
      <polygon points="32,52 30,60 34,60" fill="#171e19" stroke="#000" strokeWidth="2" />
    </svg>
  );
}

export function ExcavatorIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 100 64" className={className} style={style} fill="none">
      {/* Chassis & Tracks */}
      <rect x="10" y="44" width="45" height="10" rx="4" fill="#171e19" stroke="#000" strokeWidth="2" />
      <circle cx="18" cy="49" r="3" fill="#333" />
      <circle cx="47" cy="49" r="3" fill="#333" />
      
      {/* Main Body */}
      <path d="M15 25 L50 20 L55 44 L12 44 Z" fill="#c29b5a" stroke="#000" strokeWidth="2" />
      <rect x="18" y="28" width="12" height="8" fill="#fff" opacity="0.6" />
      
      {/* Excavator Arm */}
      <g className="excavator-arm" style={{ transformOrigin: '48px 30px' }}>
        <rect x="48" y="28" width="30" height="6" rx="2" fill="#171e19" stroke="#000" strokeWidth="1" />
        <g className="excavator-forearm" style={{ transformOrigin: '76px 31px' }}>
          <rect x="76" y="28" width="20" height="5" rx="2" fill="#171e19" stroke="#000" strokeWidth="1" />
          <path d="M94 33 L100 45 L85 45 L88 33 Z" fill="#171e19" stroke="#000" strokeWidth="1" />
        </g>
      </g>
    </svg>
  );
}



export function UsersIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function RupeeIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="m6 13 12-10" />
      <path d="M18 13H6c0 0 12 4.5 12 9.5" />
    </svg>
  );
}

// ===== Floating bg layer with mining icons =====
export function MiningIconsLayer() {
  const items = [
    { Cmp: PickaxeIcon, top: "8%", left: "6%", size: 64, delay: 0, rot: -20, anim: "mine-float" },
    { Cmp: GearIcon, top: "14%", left: "88%", size: 80, delay: 1, rot: 0, anim: "mine-spin" },
    { Cmp: OreIcon, top: "62%", left: "4%", size: 70, delay: 2, rot: 10, anim: "mine-float" },
    { Cmp: HelmetIcon, top: "78%", left: "92%", size: 72, delay: 0.5, rot: 12, anim: "mine-float" },
    { Cmp: GearIcon, top: "86%", left: "10%", size: 56, delay: 0, rot: 0, anim: "mine-spin-rev" },
    {
      Cmp: DumpTruckIcon,
      top: "40%",
      left: "94%",
      size: 90,
      delay: 1.5,
      rot: -8,
      anim: "mine-float",
    },
    { Cmp: DrillIcon, top: "30%", left: "2%", size: 60, delay: 0.8, rot: 5, anim: "mine-float" },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((it, i) => {
        const Icon = it.Cmp;
        return (
          <div
            key={i}
            style={
              {
                position: "absolute",
                top: it.top,
                left: it.left,
                width: it.size,
                height: it.size,
                opacity: 0.55,
                transform: `rotate(${it.rot}deg)`,
              } as CSSProperties
            }
          >
            <Icon className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
}

// ===== Falling ore particles =====
export function OreParticles({ count = 14 }: { count?: number }) {
  const particles = Array.from({ length: count }).map((_, i) => {
    const left = (i * 97) % 100;
    const dur = 8 + ((i * 7) % 10);
    const delay = (i * 1.3) % 8;
    const size = 14 + ((i * 5) % 18);
    const Cmp = i % 3 === 0 ? OreIcon : i % 3 === 1 ? GearIcon : OreIcon;
    return { left, dur, delay, size, Cmp, key: i };
  });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => {
        const Cmp = p.Cmp;
        return (
          <div
            key={p.key}
            className="ore-particle"
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              opacity: 0.35,
            }}
          >
            <Cmp className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
}
