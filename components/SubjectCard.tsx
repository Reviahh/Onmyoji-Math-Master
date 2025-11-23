import React from 'react';
import { SubjectType } from '../types';

interface SubjectCardProps {
  subject: SubjectType;
  title: string;
  subTitle: string;
  active: boolean;
  onClick: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject, title, subTitle, active, onClick }) => {
  // Theme colors based on subject
  const getTheme = () => {
    switch (subject) {
      case SubjectType.LINEAR_ALGEBRA:
        return 'border-rose-800 text-rose-900 hover:bg-rose-50';
      case SubjectType.CALCULUS:
        return 'border-indigo-800 text-indigo-900 hover:bg-indigo-50';
      case SubjectType.PROBABILITY:
        return 'border-amber-700 text-amber-900 hover:bg-amber-50';
      default:
        return 'border-stone-800 text-stone-900';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative flex flex-col items-center justify-center p-4 md:p-6 
        border-2 md:border-4 rounded-lg transition-all duration-300
        w-full font-serif group overflow-hidden
        ${active ? 'bg-[#fdfbf7] scale-105 shadow-xl z-10' : 'bg-[#e7e5e4] opacity-70 hover:opacity-100 scale-100'}
        ${getTheme()}
        ${active ? getTheme().replace('hover:', '') : ''}
      `}
    >
      {/* Decorative circles */}
      <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full border border-current opacity-20" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border-2 border-current opacity-20" />

      <span className="text-xs md:text-sm tracking-[0.3em] uppercase mb-1 opacity-80 font-semibold">
        {subject}
      </span>
      <h3 className="text-2xl md:text-3xl font-calligraphy mb-2">{title}</h3>
      <span className="text-xs opacity-70 italic font-serif">{subTitle}</span>
      
      {/* Active Indicator (looks like a talisman seal) */}
      {active && (
        <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-current animate-pulse" />
      )}
    </button>
  );
};

export default SubjectCard;