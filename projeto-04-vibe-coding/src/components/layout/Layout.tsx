import React from 'react';
import { useQrStore } from '../../store/useQrStore';
import { cn } from '../../lib/utils';

interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
  accentColor?: string;
}

export function Layout({ header, sidebar, children, accentColor = '#9333ea' }: LayoutProps) {
  const { theme } = useQrStore();
  const isDark = theme === 'dark';

  return (
    <div className={cn(
      "min-h-screen flex flex-col font-sans transition-colors duration-500",
      isDark ? "bg-[#050505] text-white" : "bg-slate-100 text-slate-900"
    )}>
      {/* Header */}
      <header className={cn(
        "h-16 sticky top-0 z-30 flex items-center px-6 shrink-0 border-b",
        isDark ? "bg-black/80 backdrop-blur-md border-white/10" : "bg-black border-transparent"
      )}>
        {header}
      </header>

      {/* Futuristic Banner */}
      <div 
        className="w-full h-56 flex flex-col items-start justify-center px-12 md:px-24 text-left gap-2 relative overflow-hidden group"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-[100px] animate-pulse delay-1000" />
        </div>

        <div 
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ 
            background: isDark 
              ? `linear-gradient(135deg, #000 0%, ${accentColor}44 50%, #000 100%)`
              : `linear-gradient(to right, black, ${accentColor}, white)` 
          }}
        />
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] uppercase italic leading-none">
            ABN<span className="text-slate-100 lowercase font-medium opacity-80">Grid</span>
          </h2>
          <div className="mt-4 space-y-1">
            <p className="text-sm md:text-lg font-bold text-white tracking-[0.2em] uppercase">
              Premium QR Code Generator
            </p>
            <p className="text-xs md:text-sm font-light text-white/60 italic tracking-widest">
              The future of digital connectivity is here
            </p>
          </div>
        </div>

        {/* Neon Line */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[2px] shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center p-6 md:p-12 overflow-y-auto">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar - Configurações */}
          <aside className={cn(
            "w-full lg:w-[400px] border transition-all duration-500 shrink-0",
            isDark 
              ? "bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]" 
              : "bg-white border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
          )}>
            <div className="p-8 space-y-8">
              {sidebar}
            </div>
          </aside>

          {/* Main Content - Preview */}
          <main className={cn(
            "flex-1 w-full border relative overflow-hidden transition-all duration-500",
            isDark 
              ? "bg-black/20 backdrop-blur-sm border-white/10 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]" 
              : "bg-white border-slate-200 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]"
          )}>
            {/* Grid Pattern for Dark Mode */}
            {isDark && (
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
              />
            )}
            
            <div className="min-h-[750px] flex flex-col items-center justify-center p-4 md:p-8 overflow-x-auto relative z-10">
              <div className="w-full h-full flex items-center justify-center min-w-min">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
