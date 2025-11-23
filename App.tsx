
import React, { useState, useEffect } from 'react';
import { CHAPTERS } from './constants';
import { SubjectType } from './types';
import ScrollContainer from './components/ScrollContainer';
import MathRenderer from './components/MathRenderer';
import SubjectCard from './components/SubjectCard';
import { 
  BookOpen, Flame, Calculator, Sparkles, ChevronRight, ChevronLeft, ScrollText,
  Sword, Wind, Zap, Heart, Shield, Crosshair, Star, CheckCircle2, XCircle, BrainCircuit
} from 'lucide-react';

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

  // Configuration for "Stat Type" styling based on index
  const getStatConfig = (index: number) => {
    const stats = [
      { label: '攻击', icon: Sword, color: 'text-red-500', bg: 'bg-red-500/10' },     // Attack
      { label: '速度', icon: Wind, color: 'text-blue-400', bg: 'bg-blue-500/10' },    // Speed
      { label: '暴击', icon: Zap, color: 'text-amber-400', bg: 'bg-amber-500/10' },   // Crit
      { label: '暴伤', icon: Crosshair, color: 'text-yellow-200', bg: 'bg-yellow-500/10' }, // Crit Dmg
      { label: '生命', icon: Heart, color: 'text-green-500', bg: 'bg-green-500/10' }, // HP
      { label: '防御', icon: Shield, color: 'text-stone-400', bg: 'bg-stone-500/10' }, // Def
    ];
    return stats[index % stats.length];
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
        
        {/* New Navigation: Soul (Mitama) Inventory Style */}
        <div className="mb-8 p-4 bg-stone-900/30 border border-stone-800 rounded-xl relative overflow-hidden backdrop-blur-sm">
           <div className="absolute top-0 left-0 text-[10px] bg-stone-800 px-2 py-0.5 text-stone-500 uppercase tracking-widest rounded-br">御魂选择 · Soul Select</div>
           
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4">
              {Object.values(SubjectType).map((sub, index) => {
                const chap = CHAPTERS.find(c => c.subject === sub);
                if (!chap) return null;
                
                return (
                  <SubjectCard 
                    key={sub}
                    index={index}
                    subject={sub}
                    title={chap.title}
                    subTitle=""
                    active={activeSubject === sub}
                    onClick={() => setActiveSubject(sub)}
                  />
                );
              })}
           </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto min-h-[600px]">
          
          {/* Sidebar Menu (Stat Panel Style) */}
          <div className="lg:col-span-3 flex flex-col gap-3 order-2 lg:order-1">
             <div className="bg-[#151413] p-1 rounded-lg border border-stone-800 backdrop-blur-sm shadow-xl relative overflow-hidden">
                {/* Panel Header */}
                <div className="flex justify-between items-end px-3 py-3 border-b border-stone-800 mb-1">
                    <div className="flex flex-col">
                        <span className="text-xs text-stone-500 tracking-wider">面板属性</span>
                        <h3 className="text-stone-200 font-bold text-lg flex items-center gap-2">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            评分: SSS
                        </h3>
                    </div>
                    <div className="text-[10px] text-stone-600 bg-stone-900 px-1.5 py-0.5 rounded">
                        觉醒后
                    </div>
                </div>

                {/* Stat Rows */}
                <div className="space-y-1 p-1">
                  {currentChapter.sections.map((section, index) => {
                    const isActive = safeSectionIndex === index;
                    const statConfig = getStatConfig(index);
                    const StatIcon = statConfig.icon;

                    return (
                      <button
                        key={index}
                        onClick={() => handleSectionChange(index)}
                        className={`
                          w-full flex items-center justify-between p-2.5 rounded transition-all duration-200 group
                          ${isActive 
                            ? 'bg-stone-800/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]' 
                            : 'hover:bg-stone-800/40 bg-transparent'}
                        `}
                      >
                        {/* Left: Icon + Label */}
                        <div className="flex items-center gap-3">
                           <div className={`
                                w-7 h-7 rounded flex items-center justify-center shadow-inner
                                ${isActive ? statConfig.bg : 'bg-stone-900'}
                           `}>
                                <StatIcon className={`w-4 h-4 ${isActive ? statConfig.color : 'text-stone-600'}`} />
                           </div>
                           <span className={`text-xs font-bold tracking-widest ${isActive ? statConfig.color : 'text-stone-500'}`}>
                               {statConfig.label}
                           </span>
                        </div>

                        {/* Right: Value (Title) */}
                        <div className="flex items-center gap-2">
                           <span className={`
                                text-sm font-serif text-right truncate max-w-[120px]
                                ${isActive ? 'text-stone-100 font-bold' : 'text-stone-400 group-hover:text-stone-300'}
                           `}>
                                {section.title.split('=')[0].trim()}
                           </span>
                           {isActive && <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />}
                        </div>
                      </button>
                    );
                  })}
                  
                  {/* Fills empty slots to make it look like a full panel if few sections */}
                  {Array.from({ length: Math.max(0, 5 - currentChapter.sections.length) }).map((_, i) => (
                      <div key={`empty-${i}`} className="flex items-center justify-between p-2.5 opacity-30 select-none grayscale">
                         <div className="flex items-center gap-3">
                             <div className="w-7 h-7 bg-stone-900 rounded flex items-center justify-center">
                                <div className="w-3 h-0.5 bg-stone-700" />
                             </div>
                             <span className="text-xs font-bold text-stone-600">??</span>
                         </div>
                         <span className="text-sm text-stone-700">---</span>
                      </div>
                  ))}
                </div>
             </div>

             <div className="hidden lg:block bg-stone-900/30 p-4 rounded-lg border border-stone-800/50 mt-auto">
                <p className="text-stone-500 text-xs italic leading-relaxed">
                   "{currentChapter.description}"
                </p>
             </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 flex flex-col h-full order-1 lg:order-2">
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
                   <div className="bg-[#1f1f1f] rounded border border-stone-600 overflow-hidden font-mono text-sm shadow-md mt-4">
                     <div className="bg-[#151515] px-4 py-2 border-b border-stone-600 flex justify-between items-center">
                       <span className="text-stone-400 font-bold flex items-center gap-2 text-xs tracking-wider">
                         <Calculator className="w-3 h-3" /> COMBAT_SIMULATION_V2.0
                       </span>
                       <span className="text-[10px] text-stone-600">LOG_ID: {Math.floor(Math.random() * 99999)}</span>
                     </div>
                     
                     <div className="p-4 border-b border-stone-700/50 bg-[#232323]">
                        <span className="text-amber-500 text-xs font-bold block mb-1">SCENARIO SETUP:</span>
                        <p className="text-stone-300"><MathParser text={activeSection.combatScenario.intro} /></p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Correct Scenario */}
                        <div className="p-4 bg-green-900/10 border-r border-stone-700/50">
                            <div className="flex items-center gap-2 mb-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span className="text-green-400 font-bold text-xs"><MathParser text={activeSection.combatScenario.correct.label} /></span>
                            </div>
                            <p className="text-stone-400 text-xs mb-2 pl-6"><MathParser text={activeSection.combatScenario.correct.description} /></p>
                            <div className="pl-6 pt-2 border-t border-green-900/30">
                                <span className="text-[10px] text-green-600 uppercase font-bold">Outcome</span>
                                <p className="text-green-200/90 font-medium"><MathParser text={activeSection.combatScenario.correct.result} /></p>
                            </div>
                        </div>

                        {/* Incorrect Scenario */}
                        <div className="p-4 bg-red-900/10">
                            <div className="flex items-center gap-2 mb-2">
                                <XCircle className="w-4 h-4 text-red-500" />
                                <span className="text-red-400 font-bold text-xs"><MathParser text={activeSection.combatScenario.incorrect.label} /></span>
                            </div>
                            <p className="text-stone-400 text-xs mb-2 pl-6"><MathParser text={activeSection.combatScenario.incorrect.description} /></p>
                            <div className="pl-6 pt-2 border-t border-red-900/30">
                                <span className="text-[10px] text-red-600 uppercase font-bold">Outcome</span>
                                <p className="text-red-300/90 font-medium"><MathParser text={activeSection.combatScenario.incorrect.result} /></p>
                            </div>
                        </div>
                     </div>
                     
                     {/* Math Analysis Footer */}
                     <div className="p-3 bg-[#1a1a1a] border-t border-stone-600 flex gap-3">
                        <BrainCircuit className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <div>
                             <span className="text-purple-400 text-[10px] font-bold uppercase block mb-0.5">Analysis</span>
                             <p className="text-stone-400 text-xs leading-relaxed italic">
                                <MathParser text={activeSection.combatScenario.mathAnalysis} />
                             </p>
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
