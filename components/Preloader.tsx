import React, { useState, useEffect } from "react";
import { Terminal, Cpu, CheckCircle } from "lucide-react";

interface PreloaderProps {
  onComplete?: () => void;
}

const BOOT_LOGS = [
  "Initializing design system & layout engine...",
  "Compiling TypeScript modules & shaders...",
  "Preparing interactive canvas & physics nodes...",
  "Loading featured projects & architecture specs...",
  "Ready. Welcome to Siab Ahmad Khan.",
];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(15);
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (onComplete) onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onComplete]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 250);
          return 100;
        }
        const step = Math.floor(Math.random() * 20) + 12;
        return Math.min(prev + step, 100);
      });
    }, 240);

    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#07090e] flex flex-col justify-center items-center z-[99999] px-4 font-sans select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-neon-blue/15 via-neon-purple/15 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="w-full max-w-md bg-[#0d1322]/95 border border-gray-800/90 rounded-2xl p-7 shadow-2xl relative z-10 backdrop-blur-xl">
        {/* Status indicator bar */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-3 mb-6">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-neon-blue animate-pulse inline-block" />
            <span className="text-xs text-gray-400 font-medium font-mono">
              Portfolio V3.4 • Initializing
            </span>
          </div>
          <span className="text-xs text-neon-cyan font-semibold font-mono">
            {progress}%
          </span>
        </div>

        {/* Center Logo Monogram */}
        <div className="flex flex-col items-center justify-center my-3">
          <div className="relative mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan p-[2px] shadow-[0_0_25px_rgba(0,191,255,0.4)]">
              <div className="w-full h-full bg-[#07090e] rounded-2xl overflow-hidden">
                <img
                  src="/images/image.jpeg"
                  alt="Siyab Ahmad Khan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -inset-1 bg-neon-cyan/20 rounded-2xl blur-md -z-10 animate-pulse" />
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white">
            Siab Ahmad Khan
          </h2>
          <p className="text-xs text-neon-blue font-mono font-medium tracking-wider mt-1">
            FULL STACK ARCHITECT
          </p>
        </div>

        {/* Status stream */}
        <div className="bg-[#070b14] rounded-xl p-3.5 my-5 border border-gray-800 text-xs text-gray-300 min-h-[56px] flex flex-col justify-center">
          <div className="flex items-center gap-2 text-neon-cyan font-mono text-[11px] mb-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping" />
            <span className="truncate">{BOOT_LOGS[logIndex]}</span>
          </div>
          <div className="text-gray-500 font-mono text-[10px] flex items-center justify-between">
            <span>Core Environment: Verified</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle className="w-3 h-3" /> Ready
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-800/80 rounded-full h-2 overflow-hidden border border-gray-700/40">
          <div
            className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan transition-all duration-300 ease-out rounded-full shadow-[0_0_12px_#00bfff]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Skip action */}
        <div className="mt-4 flex justify-between items-center text-[11px] text-gray-500 font-mono">
          <span>Press ESC or skip to enter</span>
          <button
            onClick={() => onComplete && onComplete()}
            className="text-neon-cyan hover:underline transition-colors hover:text-white"
          >
            Skip &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
