
import React, { useState, useEffect } from 'react';
import { CHAPTERS } from './constants';
import { SubjectType } from './types';
import ScrollContainer from './components/ScrollContainer';
import MathRenderer from './components/MathRenderer';
import { BookOpen, Flame, Calculator, Sparkles, ChevronRight, ChevronLeft, Map, ScrollText } from 'lucide-react';

// Utility to parse text with inline LaTeX ($...$) and render efficiently
const MathParser: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  const parts = text.split(/(\$[^$]+\$)/g);
  
  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
          const formula = part.slice(1, -1);
          return <MathRenderer key={index} formula={formula} block={false} />;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

const App: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState<SubjectType>(SubjectType.LINEAR_ALGEBRA);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentChapter = CHAPTERS.find(c => c.subject === activeSubject) || CHAPTERS[0];
  
  const safeSectionIndex = activeSectionIndex < currentChapter.sections.length ? activeSectionIndex : 0;
  const activeSection = currentChapter.sections[safeSectionIndex];

  useEffect(() => {
    setActiveSectionIndex(0);
  }, [activeSubject]);

  const handleSectionChange = (index: number) => {
    if (index === safeSectionIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSectionIndex(index);
      setIsTransitioning(false);
    }, 200);
  };

  const nextSection = () => {
    if (safeSectionIndex < currentChapter.sections.length - 1) {
      handleSectionChange(safeSectionIndex + 1);
    }
  };

  const prevSection = () => {
    if (safeSectionIndex > 0) {
      handleSectionChange(safeSectionIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#1c1917] text-stone-200 selection:bg-red-900 selection:text-white overflow-x-hidden font-serif">
      
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/10 rounded-full blur-3xl animate-pulse duration-[10000ms]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-3xl"></div>
         <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-6 pb-2 px-4 text-center border-b border-stone-800/50 bg-[#1c1917]/80 backdrop-blur-md">
        <div className="flex items-center justify-center gap-4">
           <div className="hidden md:flex items-center gap-2 p-1 px-3 border border-amber-800/40 rounded-full bg-stone-900/50">
              <Sparkles className="w-3 h-3 text-amber-500" />
              <span className="text-amber-500/80 text-xs tracking-widest">阴阳寮 · 必修课程</span>
           </div>
           <h1 className="text-3xl md:text-4xl font-calligraphy text-[#e7e5e4] drop-shadow-md">
             平安京 · 数学绘卷
           </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-2 md:px-6 pt-6 pb-12">
        
        {/* Improved Subject Navigation: Horizontal Ribbon */}
        <div className="relative mb-8 group">
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#1c1917] to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#1c1917] to-transparent z-10 pointer-events-none md:hidden" />
          
          <div className="flex overflow-x-auto pb-4 gap-4 px-2 snap-x snap-mandatory scrollbar-hide md:justify-center">
            {Object.values(SubjectType).map((sub) => {
              const chap = CHAPTERS.find(c => c.subject === sub);
              const isActive = activeSubject === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setActiveSubject(sub)}
                  className={`
                    flex-shrink-0 snap-center relative
                    flex flex-col items-center justify-center 
                    w-32 h-20 md:w-40 md:h-24 px-2 py-1
                    border-2 rounded transition-all duration-300
                    ${isActive 
                      ? 'bg-[#292524] border-amber-600 text-amber-500 -translate-y-1 shadow-[0_4px_20px_rgba(180,83,9,0.4)]' 
                      : 'bg-[#1c1917] border-stone-800 text-stone-600 hover:border-stone-600 hover:text-stone-400 hover:bg-[#222]'}
                  `}
                >
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                  )}
                  <div className="text-2xl md:text-3xl font-calligraphy mb-1">
                    {chap?.title.split(' ')[0]}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                     {sub.replace('_', ' ')}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto min-h-[600px]">
          
          {/* Sidebar Menu */}
          <div className="lg:col-span-3 flex flex-col gap-3">
             <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-800 backdrop-blur-sm">
                <h3 className="text-stone-400 text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <ScrollText className="w-4 h-4" /> 章节目录
                </h3>
                <div className="space-y-2">
                  {currentChapter.sections.map((section, index) => {
                    const isActive = safeSectionIndex === index;
                    return (
                      <button
                        key={index}
                        onClick={() => handleSectionChange(index)}
                        className={`
                          w-full text-left p-3 rounded transition-all duration-300 relative overflow-hidden group
                          ${isActive 
                            ? 'bg-[#2a2725] border-l-4 border-amber-600 shadow-lg' 
                            : 'hover:bg-stone-800/50 border-l-4 border-transparent text-stone-500'}
                        `}
                      >
                        <div className="flex items-start gap-3 relative z-10">
                          <span className={`font-serif font-bold text-sm ${isActive ? 'text-amber-600' : 'text-stone-600 group-hover:text-stone-400'}`}>
                            {['壹','贰','叁','肆','伍'][index]}
                          </span>
                          <div>
                            <span className={`block text-sm font-medium ${isActive ? 'text-stone-100' : 'text-stone-400 group-hover:text-stone-200'}`}>
                                {section.title.split('=')[0]}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
             </div>

             <div className="hidden lg:block bg-stone-900/30 p-4 rounded-lg border border-stone-800/50 mt-auto">
                <p className="text-stone-500 text-xs italic leading-relaxed">
                   "{currentChapter.description}"
                </p>
             </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 flex flex-col h-full">
            <ScrollContainer title={activeSection.title}>
              <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                
                <div className="flex flex-col xl:flex-row gap-8 mb-8">
                    
                    <div className="flex-1 space-y-6">
                       <div className="text-lg text-stone-800 leading-loose font-serif">
                          <MathParser text={activeSection.content} />
                       </div>
                       
                       {activeSection.formula && (
                        <div className="bg-stone-800 text-amber-50 rounded-lg p-5 shadow-xl border-l-4 border-amber-600 relative overflow-hidden">
                           <MathRenderer formula={activeSection.formula} block />
                        </div>
                       )}

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50/80 p-4 rounded border-l-2 border-blue-800">
                           <h4 className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">
                             <BookOpen className="w-3 h-3" /> 数学原理
                           </h4>
                           <p className="text-stone-700 text-sm leading-relaxed">
                             <MathParser text={activeSection.explanation} />
                           </p>
                        </div>
                        <div className="bg-red-50/80 p-4 rounded border-l-2 border-red-800">
                           <h4 className="flex items-center gap-2 text-xs font-bold text-red-900 uppercase tracking-wider mb-2">
                             <Flame className="w-3 h-3" /> 游戏映射
                           </h4>
                           <p className="text-stone-700 text-sm font-medium leading-relaxed">
                             <MathParser text={activeSection.analogy} />
                           </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full xl:w-64 flex-shrink-0">
                      <div className="bg-stone-200 p-2 rounded shadow-inner border border-stone-300 -rotate-1 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-stone-800 rounded overflow-hidden relative aspect-[3/4] group cursor-pointer">
                           <div className="absolute inset-0 bg-[#292524] flex items-center justify-center">
                              <span className="font-calligraphy text-4xl text-stone-700 opacity-20">{activeSection.characterName?.split(' ')[1]}</span>
                           </div>
                           {activeSection.characterImage && (
                              <img 
                                src={activeSection.characterImage} 
                                alt={activeSection.characterName}
                                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                              />
                           )}
                           <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-90" />
                           <div className="absolute bottom-0 left-0 right-0 p-3 pt-8">
                             <div className="text-amber-500 text-[10px] font-bold tracking-widest uppercase mb-1">Key Character</div>
                             <div className="text-stone-100 font-calligraphy text-xl">{activeSection.characterName}</div>
                           </div>
                        </div>
                      </div>
                    </div>
                </div>

                {activeSection.combatScenario && (
                   <div className="bg-[#2a2a2a] rounded border border-stone-600 overflow-hidden font-mono text-sm shadow-md mt-4">
                     <div className="bg-[#1a1a1a] px-3 py-1.5 border-b border-stone-600 flex justify-between items-center">
                       <span className="text-green-500 font-bold flex items-center gap-2 text-xs tracking-wider">
                         <Calculator className="w-3 h-3" /> BATTLE_SIMULATION_LOG
                       </span>
                     </div>
                     <div className="p-4 space-y-3 text-stone-300">
                        <div className="flex gap-4">
                           <span className="text-stone-500 w-16 shrink-0 text-xs pt-1">SCENARIO</span>
                           <div>
                              <p className="text-stone-100 font-bold"><MathParser text={activeSection.combatScenario.title} /></p>
                              <p className="text-stone-400 text-xs"><MathParser text={activeSection.combatScenario.description} /></p>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <span className="text-blue-500 w-16 shrink-0 text-xs pt-1">CALC</span>
                           <p className="text-blue-200/90 italic"><MathParser text={activeSection.combatScenario.calculation} /></p>
                        </div>
                        <div className="flex gap-4 items-center bg-stone-800/50 p-2 rounded -mx-2">
                           <span className="text-green-500 w-16 shrink-0 text-xs pl-2">RESULT</span>
                           <p className="text-green-400 font-bold"><MathParser text={activeSection.combatScenario.result} /></p>
                        </div>
                     </div>
                   </div>
                )}
              </div>
            </ScrollContainer>
            
            <div className="flex justify-between items-center mt-4 px-2">
               <button 
                 onClick={prevSection}
                 disabled={safeSectionIndex === 0}
                 className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-all
                    ${safeSectionIndex === 0 ? 'opacity-0 pointer-events-none' : 'text-stone-500 hover:text-amber-500'}
                 `}
               >
                 <ChevronLeft className="w-4 h-4" /> Prev
               </button>

               <div className="flex gap-1">
                  {currentChapter.sections.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === safeSectionIndex ? 'w-8 bg-amber-600' : 'w-2 bg-stone-700'}`}
                    />
                  ))}
               </div>

               <button 
                 onClick={nextSection}
                 disabled={safeSectionIndex === currentChapter.sections.length - 1}
                 className={`flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-all
                    ${safeSectionIndex === currentChapter.sections.length - 1 ? 'opacity-0 pointer-events-none' : 'text-stone-500 hover:text-amber-500'}
                 `}
               >
                 Next <ChevronRight className="w-4 h-4" />
               </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default App;
