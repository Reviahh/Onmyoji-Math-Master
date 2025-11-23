
import React from 'react';
import { SubjectType } from '../types';
import { Axis3d, Divide, Sigma, Infinity, Globe, Layers, Component } from 'lucide-react';

interface SubjectCardProps {
  subject: SubjectType;
  title: string;
  subTitle: string;
  active: boolean;
  onClick: () => void;
  index: number; // Used for "Soul Slot" position numbering
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, title, active, onClick, index }) => {
  
  // Map subjects to colors and icons, simulating different "Souls"
  const getSoulConfig = () => {
    switch (subject) {
      case SubjectType.LINEAR_ALGEBRA:
        return { color: 'bg-rose-900', ring: 'border-rose-500', icon: <Axis3d className="w-6 h-6 text-rose-200" />, pos: '壹' };
      case SubjectType.CALCULUS:
        return { color: 'bg-indigo-900', ring: 'border-indigo-500', icon: <Divide className="w-6 h-6 text-indigo-200" />, pos: '贰' };
      case SubjectType.PROBABILITY:
        return { color: 'bg-amber-800', ring: 'border-amber-500', icon: <Sigma className="w-6 h-6 text-amber-200" />, pos: '叁' };
      case SubjectType.REAL_ANALYSIS:
        return { color: 'bg-emerald-900', ring: 'border-emerald-500', icon: <Infinity className="w-6 h-6 text-emerald-200" />, pos: '肆' };
      case SubjectType.COMPLEX_ANALYSIS:
        return { color: 'bg-violet-900', ring: 'border-violet-500', icon: <Globe className="w-6 h-6 text-violet-200" />, pos: '伍' };
      case SubjectType.SET_THEORY:
        return { color: 'bg-cyan-900', ring: 'border-cyan-500', icon: <Layers className="w-6 h-6 text-cyan-200" />, pos: '陆' };
      case SubjectType.CATEGORY_THEORY:
        return { color: 'bg-fuchsia-900', ring: 'border-fuchsia-500', icon: <Component className="w-6 h-6 text-fuchsia-200" />, pos: '觉' };
      default:
        return { color: 'bg-stone-800', ring: 'border-stone-500', icon: <div />, pos: '?' };
    }
  };

  const config = getSoulConfig();

  return (
    <div className="flex flex-col items-center gap-2 group">
      <button
        onClick={onClick}
        className={`
          relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
          transition-all duration-300 shadow-lg border-2
          ${active 
            ? `scale-110 ${config.color} ${config.ring} shadow-[0_0_15px_rgba(255,255,255,0.3)] ring-2 ring-offset-2 ring-offset-[#1c1917] ring-amber-500` 
            : 'bg-stone-800 border-stone-600 grayscale hover:grayscale-0 hover:scale-105'
          }
        `}
      >
        {/* Inner Ring Decoration */}
        <div className={`absolute inset-1 rounded-full border border-white/10 ${active ? 'animate-spin-slow' : ''}`} />
        
        {/* Icon */}
        <div className="relative z-10 drop-shadow-md">
          {config.icon}
        </div>

        {/* Level Tag (Like +15 in game) */}
        {active && (
          <div className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-400 shadow-sm z-20">
            +15
          </div>
        )}

        {/* Slot Number (Roman Numeral / Kanji style) */}
        <div className="absolute -bottom-2 w-5 h-5 bg-[#1c1917] border border-stone-600 rounded-full flex items-center justify-center">
            <span className="text-[10px] text-stone-400 font-serif">{config.pos}</span>
        </div>
      </button>

      {/* Label */}
      <span className={`
        text-xs md:text-sm font-calligraphy tracking-widest transition-colors duration-300
        ${active ? 'text-amber-500 drop-shadow-md' : 'text-stone-500 group-hover:text-stone-300'}
      `}>
        {title.split(' ')[0]}
      </span>
    </div>
  );
};

export default SubjectCard;
