
import React, { ReactNode } from 'react';

interface ScrollContainerProps {
  children: ReactNode;
  title: string;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children, title }) => {
  return (
    <div className="relative w-full h-full perspective-1000 flex flex-col">
      {/* Top Scroll Roller */}
      <div className="h-6 md:h-8 bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 rounded-full shadow-lg relative z-20 border-b-2 border-amber-950 shrink-0">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-stone-900 rounded-full border-4 border-amber-700 -ml-2" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-stone-900 rounded-full border-4 border-amber-700 -mr-2" />
      </div>

      {/* Paper Body */}
      <div className="bg-[#f7f2e6] relative shadow-2xl mx-1 md:mx-2 overflow-hidden flex-1 flex flex-col">
        
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply" 
             style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/rice-paper-2.png")` }} 
        />

        {/* Content Wrapper */}
        <div className="relative p-6 md:p-10 text-stone-800 flex-1">
          
          {/* Inner Border */}
          <div className="absolute top-3 bottom-3 left-3 right-3 border border-stone-300 pointer-events-none" />
          <div className="absolute top-4 bottom-4 left-4 right-4 border border-stone-300 pointer-events-none opacity-50" />

          {/* Header */}
          <div className="text-center mb-6 border-b-2 border-stone-800/20 pb-4 mx-auto max-w-lg relative z-10">
            <h2 className="text-2xl md:text-4xl font-calligraphy text-stone-900 mb-1 drop-shadow-sm">
              {title}
            </h2>
          </div>

          {/* Dynamic Content */}
          <div className="relative z-10">
            {children}
          </div>

        </div>
      </div>

      {/* Bottom Scroll Roller */}
      <div className="h-6 md:h-8 bg-gradient-to-r from-amber-900 via-amber-700 to-amber-900 rounded-full shadow-lg relative z-20 border-t-2 border-amber-950 -mt-1 shrink-0">
         <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-stone-900 rounded-full border-4 border-amber-700 -ml-2" />
         <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-stone-900 rounded-full border-4 border-amber-700 -mr-2" />
      </div>
    </div>
  );
};

export default ScrollContainer;
