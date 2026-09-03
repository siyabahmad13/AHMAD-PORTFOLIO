
import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight, FileText, Terminal, GitBranch, Globe, Mail, Copy, Check, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { HERO_STATS } from '../constants';

interface HeroProps {
  onOpenResume?: () => void;
}

const ROLES = [
  'Full Stack Developer',
  'React 19 & TypeScript Architect',
  'Node.js & Backend Engineer',
  'UI/UX & Design Systems Craftsman',
  'Performance & Web Vitals Specialist',
];

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Interactive Particle/Node Mesh Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: -1000, y: -1000, radius: 140 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Create particles
    const particleCount = Math.min(Math.floor((width * height) / 12000), 75);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1.2,
      color: Math.random() > 0.5 ? '#00bfff' : '#8a2be2',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse reaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= Math.cos(angle) * force * 3;
          p.y -= Math.sin(angle) * force * 3;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connect lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#00bfff';
            ctx.globalAlpha = (1 - dist2 / 120) * 0.22;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleHireClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00BFFF', '#8A2BE2', '#00FFFF', '#FF1493'],
    });
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('msiyab10492@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-50 dark:bg-[#07090e] transition-colors duration-500"
    >
      {/* Interactive Node Mesh Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-auto cursor-crosshair opacity-50 dark:opacity-80"
      />

      {/* Cyber Grid & Ambient Gradient Overlays */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 dark:opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-neon-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-5xl">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[#101728]/90 border border-slate-200 dark:border-gray-700/80 shadow-md mb-6 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-800 dark:text-gray-200 tracking-wide">
            Open for Full-Time Roles & Custom Contracts
          </span>
          <span className="text-slate-400 dark:text-gray-500">•</span>
          <span className="text-xs text-neon-blue dark:text-neon-cyan font-mono font-bold">Q3/Q4 2026</span>
        </div>

        {/* Display Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
          Siab Ahmad{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple">
            Khan
          </span>
        </h1>

        {/* Animated Role Cycler */}
        <div className="mt-5 h-10 sm:h-12 flex items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/90 dark:bg-gray-900/80 border border-slate-200 dark:border-gray-800 text-neon-blue dark:text-neon-cyan text-base sm:text-xl md:text-2xl font-bold font-mono shadow-sm dark:shadow-inner">
            <span className="text-slate-400 dark:text-gray-500">&gt;</span>
            <span className="transition-all duration-300 transform inline-block">
              {ROLES[roleIndex]}
            </span>
            <span className="inline-block w-2 h-5 bg-neon-blue dark:bg-neon-cyan animate-pulse" />
          </div>
        </div>

        {/* Description Bio */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
          I build high-performance, responsive web systems with clean architecture, modern micro-interactions, and scalable design tokens. Bridging design elegance with engineering rigor.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleHireClick}
            className="group relative px-8 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300 shadow-lg shadow-neon-blue/25 hover:shadow-neon-purple/40 transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin-slow" />
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onOpenResume && onOpenResume()}
            className="px-7 py-3.5 rounded-xl text-base font-semibold text-slate-800 dark:text-white bg-white dark:bg-[#11192e] hover:bg-slate-100 dark:hover:bg-[#19243f] border border-slate-300 dark:border-gray-700/80 hover:border-neon-blue dark:hover:border-neon-cyan/50 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 shadow-sm"
          >
            <FileText className="w-4 h-4 text-neon-blue dark:text-neon-cyan" />
            <span>Curriculum Vitae</span>
          </button>

          <a
            href="#projects"
            className="px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white bg-slate-200/80 hover:bg-slate-300/80 dark:bg-gray-900/60 dark:hover:bg-gray-800 border border-slate-300 dark:border-gray-800 transition-all duration-300 flex items-center gap-2 shadow-sm"
          >
            <span>Explore Work</span>
            <ArrowRight className="w-4 h-4 text-neon-blue dark:text-neon-cyan" />
          </a>
        </div>

        {/* Social / Email Micro-actions */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white dark:bg-gray-900/80 border border-slate-200 dark:border-gray-800 text-xs font-mono text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:border-neon-blue dark:hover:border-neon-cyan transition-colors shadow-sm"
            title="Copy email to clipboard"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5 text-neon-blue dark:text-neon-cyan" />
            )}
            <span>msiyab10492@gmail.com</span>
            {copied && <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold ml-1">Copied!</span>}
          </button>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-900/80 border border-slate-200 dark:border-gray-800 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-neon-blue dark:hover:border-neon-cyan transition-colors shadow-sm"
              aria-label="GitHub Profile"
            >
              <GitBranch className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-gray-900/80 border border-slate-200 dark:border-gray-800 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-neon-blue dark:hover:border-neon-cyan transition-colors shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Stats Ticker Cards */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {HERO_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/90 dark:bg-[#0b1220]/80 border border-slate-200 dark:border-gray-800/80 backdrop-blur-md hover:border-neon-blue/40 transition-all duration-300 transform hover:-translate-y-1 shadow-sm dark:shadow-md group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple font-mono group-hover:scale-105 transition-transform inline-block">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center text-xs text-slate-400 dark:text-gray-500 hover:text-neon-blue dark:hover:text-neon-cyan transition-colors group"
          >
            <span className="font-mono tracking-widest uppercase mb-1 text-[10px]">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-neon-blue dark:group-hover:text-neon-cyan" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

