import React, { ReactNode } from 'react';

interface ScrollContainerProps {
  children: ReactNode;
  title: string;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children, title }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-8 perspective-1000">
      {/* Top Scroll Roller */}
      <div className="h-8 bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 rounded-full shadow-lg relative z-20 border-b-2 border-amber-950">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-stone-900 rounded-full border-4 border-amber-700 -ml-2" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-stone-900 rounded-full border-4 border-amber-700 -mr-2" />
      </div>

      {/* Paper Body */}
      <div className="bg-[#f7f2e6] relative shadow-2xl mx-2 min-h-[600px] overflow-hidden">
        
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply" 
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/rice-paper-2.png")` }} 
        />

        {/* Content Wrapper */}
        <div className="relative p-8 md:p-12 text-stone-800">
          
          {/* Inner Border */}
          <div className="absolute top-4 bottom-4 left-4 right-4 border border-stone-300 pointer-events-none" />
          <div className="absolute top-5 bottom-5 left-5 right-5 border border-stone-300 pointer-events-none opacity-50" />

          {/* Header */}
          <div className="text-center mb-12 border-b-2 border-stone-800 pb-6 mx-auto max-w-lg">
            <h2 className="text-4xl md:text-5xl font-calligraphy text-stone-900 mb-2 drop-shadow-sm">
              {title}
            </h2>
            <div className="flex items-center justify-center gap-2 text-red-800">
               <span className="text-xs tracking-[0.5em] uppercase">阴阳师数学课</span>
            </div>
          </div>

          {/* Dynamic Content */}
          {children}

        </div>
      </div>

      {/* Bottom Scroll Roller */}
      <div className="h-8 bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 rounded-full shadow-lg relative z-20 border-t-2 border-amber-950 -mt-1">
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-stone-900 rounded-full border-4 border-amber-700 -ml-2" />
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-stone-900 rounded-full border-4 border-amber-700 -mr-2" />
      </div>
    </div>
  );
};

export default ScrollContainer;