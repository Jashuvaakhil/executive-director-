import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  twinkle: number;
  twinkleSpeed: number;
}

export const GoldSilkParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const particles: Particle[] = [];
    const particleCount = 120;

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.2,
      twinkle: Math.random() * Math.PI,
      twinkleSpeed: Math.random() * 0.05 + 0.01,
    });

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;
      
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const drawSilkWave = (ctx: CanvasRenderingContext2D, time: number, yOffset: number, amplitude: number, frequency: number, color1: string, color2: string) => {
      ctx.beginPath();
      ctx.moveTo(0, height);
      
      const gradient = ctx.createLinearGradient(0, yOffset - amplitude, 0, height);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      
      for (let x = 0; x <= width; x += 5) {
        const y = yOffset + 
                Math.sin(x * frequency + time) * amplitude + 
                Math.sin(x * frequency * 0.5 + time * 0.5) * (amplitude * 0.7) +
                Math.cos(x * frequency * 1.5 + time * 1.2) * (amplitude * 0.3);
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add a glowing top edge to the wave
      ctx.beginPath();
      for (let x = 0; x <= width; x += 5) {
        const y = yOffset + 
                Math.sin(x * frequency + time) * amplitude + 
                Math.sin(x * frequency * 0.5 + time * 0.5) * (amplitude * 0.7) +
                Math.cos(x * frequency * 1.5 + time * 1.2) * (amplitude * 0.3);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color1;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    };

    let time = 0;
    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, width, height);

      // Background "silk" layers - Reduced opacity to blend with bg 4.png
      drawSilkWave(ctx, time * 0.4, height * 0.65, 50, 0.0015, 'rgba(191, 167, 122, 0.04)', 'rgba(255, 255, 255, 0)');
      drawSilkWave(ctx, time * 0.7, height * 0.75, 70, 0.0025, 'rgba(191, 167, 122, 0.03)', 'rgba(255, 255, 255, 0)');
      drawSilkWave(ctx, time * 1.1, height * 0.82, 40, 0.004, 'rgba(191, 167, 122, 0.015)', 'rgba(255, 255, 255, 0)');

      // Draw particles
      particles.forEach((p) => {
        // Subtle drift movement
        p.x += p.speedX + Math.sin(time + p.y * 0.01) * 0.1;
        p.y += p.speedY + Math.cos(time + p.x * 0.01) * 0.1;
        p.twinkle += p.twinkleSpeed;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const currentOpacity = p.opacity * (0.3 + Math.sin(p.twinkle) * 0.5);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        if (p.size > 1.2) {
            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
            gradient.addColorStop(0, `rgba(191, 167, 122, ${currentOpacity})`);
            gradient.addColorStop(0.3, `rgba(191, 167, 122, ${currentOpacity * 0.5})`);
            gradient.addColorStop(1, 'rgba(191, 167, 122, 0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(p.x - p.size * 3, p.y - p.size * 3, p.size * 6, p.size * 6);
        } else {
            ctx.fillStyle = `rgba(191, 167, 122, ${currentOpacity})`;
            ctx.fill();
        }
        
        // Extra sparkle for larger particles
        if (p.size > 1.6 && Math.sin(p.twinkle) > 0.9) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 250, 230, ${currentOpacity * 1.1})`;
            ctx.fill();
            
            // Tiny cross flare for the biggest sparkles
            if (p.size > 1.8) {
                ctx.beginPath();
                ctx.moveTo(p.x - p.size * 2, p.y);
                ctx.lineTo(p.x + p.size * 2, p.y);
                ctx.moveTo(p.x, p.y - p.size * 2);
                ctx.lineTo(p.x, p.y + p.size * 2);
                ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity * 0.4})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
