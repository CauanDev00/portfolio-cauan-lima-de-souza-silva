import React from 'react';
import { cn as cnUtil } from '../../lib/utils';
import { useQrStore } from '../../store/useQrStore';

export const cn = cnUtil;

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  const { theme } = useQrStore();
  const isDark = theme === 'dark';

  return (
    <div className="space-y-1.5 w-full">
      {label && (
        <label className={cn(
          "text-xs font-semibold uppercase tracking-wider ml-1",
          isDark ? "text-white/40" : "text-slate-500"
        )}>
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-3 text-sm transition-all duration-200 rounded-none",
          isDark 
            ? "bg-white/5 border-white/10 text-white focus:bg-white/10 focus:border-white/30 focus:ring-white/5" 
            : "bg-slate-50 border-slate-200 text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-slate-900/5",
          "focus:outline-none focus:ring-2",
          "placeholder:text-slate-500",
          className
        )}
        {...props}
      />
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function Section({ title, children, icon }: SectionProps) {
  const { theme } = useQrStore();
  const isDark = theme === 'dark';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 px-1">
        {icon && <div className={isDark ? "text-white/30" : "text-slate-400"}>{icon}</div>}
        <h3 className={cn(
          "text-sm font-bold uppercase tracking-tight",
          isDark ? "text-white/80" : "text-slate-900"
        )}>{title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

interface SliderProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange'> {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Slider({ label, value, min, max, step = 1, suffix = '', onChange, ...props }: SliderProps) {
  const { theme } = useQrStore();
  const isDark = theme === 'dark';

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center px-1">
        <label className={cn(
          "text-[10px] font-bold uppercase tracking-wider",
          isDark ? "text-white/40" : "text-slate-400"
        )}>{label}</label>
        <span className={cn(
          "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-none",
          isDark ? "text-white bg-white/10" : "text-slate-900 bg-slate-100"
        )}>
          {value}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full h-1.5 rounded-none appearance-none cursor-pointer",
          isDark ? "bg-white/10 accent-white" : "bg-slate-100 accent-slate-900"
        )}
        {...props}
      />
    </div>
  );
}
