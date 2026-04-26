import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import bg5 from "../../bg5.jpg";

export const Route = createFileRoute("/")({
  component: IntroPage,
});

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

function ReactionPanel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (e.clientX > window.innerWidth / 2) {
          setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nodes = [
    { id: 1, label: 'ADAPT', sub: 'TO CHANGE', top: '15%', left: '35%' },
    { id: 2, label: 'LISTEN', sub: 'TO THE GROUND', top: '33%', left: '50%' },
    { id: 3, label: 'DECIDE', sub: 'WITH CLARITY', top: '51%', left: '53%' },
    { id: 4, label: 'EXECUTE', sub: 'WITH PRECISION', top: '69%', left: '43%' },
    { id: 5, label: 'CREATE', sub: 'LASTING IMPACT', top: '87%', left: '30%' },
  ];

  return (
    <div 
      className="absolute inset-y-0 right-0 w-[45%] z-10 overflow-hidden pointer-events-auto hidden md:block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={containerRef}
    >
      <style>{`
        @keyframes flowUp {
          0% { transform: translate(0, 100vh) scale(0.8); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translate(50px, -20vh) scale(1.2); opacity: 0; }
        }
        @keyframes flowUpAlt {
          0% { transform: translate(0, 100vh) scale(1); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translate(-40px, -20vh) scale(0.9); opacity: 0; }
        }
        @keyframes wavePulse {
          0% { opacity: 0.15; transform: scaleY(1); }
          50% { opacity: 0.3; transform: scaleY(1.02); }
          100% { opacity: 0.15; transform: scaleY(1); }
        }
        .reaction-particle-wrapper {
          transition: transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      `}</style>

      {/* Interactive Glow */}
      <div 
        className="absolute w-[400px] h-[400px] bg-[#c29b5a]/10 rounded-full blur-[60px] pointer-events-none transition-all duration-700 ease-out"
        style={{ 
          transform: `translate(${mousePos.x - 200}px, ${mousePos.y - 200}px)`,
          opacity: isHovering ? 1 : 0
        }}
      />

      {/* Organic Glowing Connections */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                 <feGaussianBlur stdDeviation="1.5" result="blur"/>
                 <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                 </feMerge>
              </filter>
           </defs>

           {/* Energy Core */}
           <path 
             d="M 25 -10 C 30 5, 35 5, 35 15 C 35 25, 50 23, 50 33 C 50 43, 53 41, 53 51 C 53 61, 43 59, 43 69 C 43 79, 30 77, 30 87 C 30 97, 25 100, 20 110" 
             fill="none" 
             stroke="#c29b5a" 
             strokeWidth="2.5" 
             vectorEffect="non-scaling-stroke"
             className="opacity-60"
             filter="url(#glow)"
           />
           {/* Secondary Lines */}
           <path 
             d="M 20 -10 C 25 5, 35 5, 35 15 C 35 25, 60 23, 50 33 C 40 43, 53 41, 53 51 C 53 61, 30 59, 43 69 C 56 79, 30 77, 30 87 C 30 97, 15 100, 5 110" 
             fill="none" 
             stroke="#c29b5a" 
             strokeWidth="1"
             vectorEffect="non-scaling-stroke"
             className="opacity-40"
             filter="url(#glow)"
           />
           <path 
             d="M 35 -10 C 35 5, 35 5, 35 15 C 35 25, 40 23, 50 33 C 60 43, 53 41, 53 51 C 53 61, 55 59, 43 69 C 31 79, 30 77, 30 87 C 30 97, 35 100, 35 110" 
             fill="none" 
             stroke="#D4AF37" 
             strokeWidth="1.5"
             vectorEffect="non-scaling-stroke"
             className="opacity-30"
           />
           <path 
             d="M 30 -10 C 30 5, 35 5, 35 15 C 35 25, 45 23, 50 33 C 55 43, 53 41, 53 51 C 51 61, 45 59, 43 69 C 41 79, 30 77, 30 87 C 30 97, 30 100, 25 110" 
             fill="none" 
             stroke="#D4AF37" 
             strokeWidth="1.2" 
             vectorEffect="non-scaling-stroke"
             className="opacity-50"
             filter="url(#glow)"
           />
        </svg>
      </div>
      
      {/* Glowing Nodes (Always Visible UI) */}
      {nodes.map((node) => (
         <div key={node.id} className="absolute flex items-start group cursor-pointer" style={{ top: node.top, left: node.left, marginTop: '-10px', marginLeft: '-10px' }}>
            {/* The Ring & Dot */}
            <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
               <div className="w-1.5 h-1.5 bg-[#c29b5a] rounded-full shadow-[0_0_12px_rgba(194,155,90,1)] relative z-10 group-hover:scale-150 transition-transform duration-300"></div>
               <div className="absolute inset-0 rounded-full border border-[#c29b5a]/60 shadow-[0_0_15px_rgba(194,155,90,0.5)] group-hover:border-[#c29b5a] transition-colors duration-300"></div>
            </div>
            
            {/* The Label Group */}
            <div className="flex flex-col ml-3 pointer-events-none">
               <div className="flex items-center gap-3 h-5">
                 <div className="w-3 h-[2px] bg-[#c29b5a] rounded-full drop-shadow-[0_0_4px_rgba(194,155,90,0.8)]"></div>
                 <span className="text-neutral-100 font-bold tracking-[0.2em] text-xs sm:text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                   {node.label}
                 </span>
               </div>
               <span className="text-neutral-400 text-[8px] sm:text-[9px] font-semibold tracking-[0.1em] uppercase pl-6 leading-none pt-0.5">
                 {node.sub}
               </span>
            </div>
         </div>
      ))}

      {/* Reacting Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
           const left = Math.random() * 100;
           const delay = Math.random() * -20;
           const duration = Math.random() * 10 + 15;
           const isAlt = i % 2 === 0;
           
           const scatterX = isHovering ? (Math.random() - 0.5) * 60 : 0;
           const scatterY = isHovering ? (Math.random() - 0.5) * 60 : 0;

           return (
             <div 
               key={i}
               className="absolute top-0 bottom-0 reaction-particle-wrapper"
               style={{
                 left: `${left}%`,
                 transform: `translate(${scatterX}px, ${scatterY}px)`
               }}
             >
               <div 
                 className="w-[2px] h-[2px] bg-[#c29b5a] rounded-full blur-[1px]"
                 style={{
                   animation: `${isAlt ? 'flowUp' : 'flowUpAlt'} ${duration}s linear infinite`,
                   animationDelay: `${delay}s`,
                 }}
               />
             </div>
           );
        })}
      </div>
    </div>
  );
}

function IntroPage() {
  const navigate = useNavigate();
  const [transitioning, setTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const frame1Ref = useRef<HTMLDivElement>(null);
  const frame2Ref = useRef<HTMLDivElement>(null);
  const frame3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3
      });
      gsap.from(".hero-divider", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "power3.out",
        delay: 1.0
      });
      gsap.from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 1.5
      });
    });
    return () => ctx.revert();
  }, []);

  const handleEnter = () => {
    setTransitioning(true);
    (window as any).__hasSeenIntro = true;
    
    setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => navigate({ to: '/portfolio' })
      });

      // Smooth background fade
      tl.to(overlayRef.current, { opacity: 1, duration: 0.8, ease: "power2.inOut" });
      
      // Frame 1: Soft scale in with blur
      tl.fromTo(frame1Ref.current, 
        { opacity: 0, scale: 0.95, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
      )
      .to(frame1Ref.current, 
        { opacity: 0, scale: 1.02, filter: "blur(4px)", duration: 0.8, ease: "power2.inOut" }, 
        "+=0.8"
      );

      // Frame 2: Elegant float up with blur
      tl.fromTo(frame2Ref.current, 
        { opacity: 0, y: 15, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out" },
        "+=0.1"
      )
      .to(frame2Ref.current, 
        { opacity: 0, y: -15, filter: "blur(4px)", duration: 0.8, ease: "power2.inOut" }, 
        "+=0.8"
      );

      // Frame 3: Soft scale in and hold
      tl.fromTo(frame3Ref.current, 
        { opacity: 0, scale: 0.95, filter: "blur(8px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" },
        "+=0.1"
      )
      .to(frame3Ref.current, 
        { opacity: 0, scale: 1.02, filter: "blur(4px)", duration: 0.8, ease: "power2.inOut" }, 
        "+=1.2"
      );

    }, 50);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0f16]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
          .font-playfair {
            font-family: 'Playfair Display', serif;
          }
        `}
      </style>
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 scale-105"
        style={{
          backgroundImage: `url(${bg5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0a0f16] via-[#0a0f16]/80 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-[#0a0f16]/30" />

      {/* Subtle Cinematic Enhancements */}
      <div className="absolute inset-0 z-0 opacity-[0.08] dust-cloud" style={{ animationDuration: '40s' }} />
      <div className="absolute inset-0 z-0 opacity-[0.06] dust-cloud" style={{ animationDuration: '60s', animationDirection: 'reverse', top: '20%' }} />

      {/* Light Gold Particles */}
      <div className="absolute inset-0 z-0">
        <DustParticles count={25} variant="sparkle" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-[8%] lg:px-[10%]">
        <div className="max-w-4xl">
          <span className="hero-text block text-[#c29b5a] text-sm sm:text-base font-bold tracking-[0.4em] sm:tracking-[0.5em] mb-6 drop-shadow-md uppercase">
            Executive Director
          </span>
          
          <h1 className="hero-text font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem] text-white leading-[1.1] drop-shadow-lg mb-10 whitespace-nowrap">
            S. Venkateswaran
          </h1>
          
          <span className="hero-text block text-[#c29b5a] text-sm sm:text-base font-bold tracking-[0.4em] sm:tracking-[0.5em] mb-4 drop-shadow-md uppercase">
            Portfolio
          </span>
          
          <div className="hero-divider h-[1px] bg-[#c29b5a]/80 w-24 mb-8 shadow-[0_0_10px_rgba(194,155,90,0.3)]"></div>
          
          <p className="hero-text text-xl sm:text-2xl lg:text-3xl text-neutral-200 font-light tracking-wide drop-shadow-md">
            <span className="text-[#c29b5a] italic font-serif">Shaping the Future</span> of Metals & Energy
          </p>
        </div>
      </div>

      <ReactionPanel />

      {/* Interaction Element */}
      <div 
        className="hero-btn absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer group"
        onClick={handleEnter}
      >
        <div className="w-16 h-16 rounded-full border border-[#c29b5a] flex items-center justify-center mb-4 relative transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(194,155,90,0.5)] group-hover:bg-[#c29b5a]/10">
          <div className="absolute inset-0 rounded-full border border-[#c29b5a] animate-ping opacity-20"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c29b5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-y-1">
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </div>
        <span className="text-[#c29b5a] text-[10px] font-bold tracking-[0.3em] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          ENTER PORTFOLIO
        </span>
      </div>
      {/* Bottom Left Corner Details */}
      <div className="hero-text absolute bottom-8 sm:bottom-10 left-[8%] lg:left-[10%] z-20 flex items-center gap-4">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-neutral-500/80">
          <path d="M1 18h3v2H1zM6 12h3v8H6zM11 4h3v16h-3zM16 10h3v10h-3zM21 15h2v5h-2z" />
        </svg>
        <div className="flex items-center gap-3 text-neutral-400 text-[9px] sm:text-[11px] font-bold tracking-[0.2em] uppercase">
          <span>Leadership</span>
          <span className="text-[#c29b5a] text-[13px] opacity-80">|</span>
          <span>Experience</span>
          <span className="text-[#c29b5a] text-[13px] opacity-80">|</span>
          <span>Impact</span>
        </div>
      </div>

      {/* Transition Sequence Overlay */}
      {transitioning && (
        <div ref={overlayRef} className="fixed inset-0 z-50 bg-[#0a0f16] opacity-0 flex items-center justify-center">
          
          {/* Frame 1 */}
          <div ref={frame1Ref} className="absolute flex flex-col items-center opacity-0 px-4 w-full text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-neutral-200 italic font-light tracking-wide uppercase mb-6 drop-shadow-sm whitespace-nowrap">
              "Three Decades of Industrial Leadership"
            </h2>
            <div className="w-16 h-[1px] bg-[#c29b5a] shadow-[0_0_8px_1px_rgba(194,155,90,0.8)]"></div>
          </div>

          {/* Frame 2 */}
          <div ref={frame2Ref} className="absolute flex flex-col items-center opacity-0 px-6 text-center w-full">
            <h2 className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-300 mb-8 uppercase tracking-wider">
              S. Venkateswaran
            </h2>
            <span className="text-[#c29b5a] text-xs sm:text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-5 drop-shadow-md">
              Executive Director
            </span>
            <span className="text-neutral-500 text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              Lloyds Metals & Energy Limited
            </span>
          </div>

          {/* Frame 3 */}
          <div ref={frame3Ref} className="absolute flex flex-col items-center opacity-0 px-4 text-center w-full max-w-5xl">
            <div className="relative py-10 px-8 sm:px-16 md:py-14 md:px-24">
              {/* Top Right Bracket */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#c29b5a] drop-shadow-[0_0_6px_rgba(194,155,90,0.8)]"></div>
              {/* Bottom Left Bracket */}
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#c29b5a] drop-shadow-[0_0_6px_rgba(194,155,90,0.8)]"></div>
              
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-neutral-300 font-light leading-relaxed mb-10 whitespace-nowrap uppercase tracking-wide">
                "Leadership isn't found in certificates.<br/>
                It's proven in <span className="text-[#c29b5a] italic font-medium drop-shadow-[0_0_8px_rgba(194,155,90,0.5)]">results.</span>"
              </h2>
              <span className="text-[#c29b5a] text-xs sm:text-sm md:text-base font-bold tracking-[0.5em] uppercase drop-shadow-md">
                ~ SVN
              </span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}
