
import React, { useState } from 'react';
import { CHAPTERS } from './constants';
import { SubjectType, Section } from './types';
import SubjectCard from './components/SubjectCard';
import ScrollContainer from './components/ScrollContainer';
import MathRenderer from './components/MathRenderer';
import { BookOpen, Sword, Dna, Flame, Calculator, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState<SubjectType>(SubjectType.LINEAR_ALGEBRA);

  const currentChapter = CHAPTERS.find(c => c.subject === activeSubject) || CHAPTERS[0];

  return (
    <div className="min-h-screen bg-[#1c1917] text-stone-200 pb-20 selection:bg-red-900 selection:text-white overflow-x-hidden">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/10 rounded-full blur-3xl animate-pulse duration-[10000ms]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-900/5 rounded-full z-0"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-900/5 rounded-full z-0 rotate-45"></div>
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-10 pt-8 pb-4 px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-4 p-2 px-4 border border-amber-800/60 rounded-full bg-stone-900/80 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs md:text-sm">阴阳寮 · 必修课程</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
        </div>
        <h1 className="text-5xl md:text-7xl font-calligraphy text-[#e7e5e4] drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mb-2">
          平安京 · 数学绘卷
        </h1>
        <p className="mt-4 text-stone-400 text-sm md:text-lg max-w-2xl mx-auto font-serif leading-relaxed">
          以<span className="text-red-500 mx-1 font-bold">阴阳师</span>之名，参悟<span className="text-amber-500 mx-1 font-bold">高数线代概率</span>之奥义。<br/>
          <span className="text-xs opacity-60">（普通玩家也能听懂的硬核考研数学）</span>
        </p>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-4">
        
        {/* Subject Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 mt-8">
          <SubjectCard 
            subject={SubjectType.LINEAR_ALGEBRA} 
            title="线性代数" 
            subTitle="御魂矩阵与式神向量"
            active={activeSubject === SubjectType.LINEAR_ALGEBRA}
            onClick={() => setActiveSubject(SubjectType.LINEAR_ALGEBRA)}
          />
          <SubjectCard 
            subject={SubjectType.CALCULUS} 
            title="高等数学" 
            subTitle="战斗时序的微积分"
            active={activeSubject === SubjectType.CALCULUS}
            onClick={() => setActiveSubject(SubjectType.CALCULUS)}
          />
          <SubjectCard 
            subject={SubjectType.PROBABILITY} 
            title="概率论" 
            subTitle="玄学抽卡与暴击分布"
            active={activeSubject === SubjectType.PROBABILITY}
            onClick={() => setActiveSubject(SubjectType.PROBABILITY)}
          />
        </div>

        {/* The Scroll Content */}
        <ScrollContainer title={currentChapter.title}>
          <div className="space-y-16">
            
            {/* Intro Text */}
            <div className="text-center mb-8">
              <p className="text-stone-700 font-serif text-xl border-y-2 border-double border-stone-300 py-6 inline-block px-12 bg-[#fdfbf7]/50">
                {currentChapter.description}
              </p>
            </div>

            {/* Loop through sections */}
            {currentChapter.sections.map((section: Section, index: number) => (
              <div key={index} className="relative group">
                {/* Section Number Watermark */}
                <div className="absolute -left-6 -top-8 text-9xl font-serif text-stone-400/20 pointer-events-none select-none z-0">
                  {index + 1}
                </div>

                <div className="relative z-10 pl-0 md:pl-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6 border-b border-stone-300 pb-2">
                    <div className="w-8 h-8 bg-red-800 rounded flex items-center justify-center text-stone-100 font-bold font-serif shadow-sm">
                      {['壹','贰','叁','肆','伍','陆'][index] || (index+1)}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-stone-900 font-serif">
                      {section.title}
                    </h3>
                  </div>

                  <div className="flex flex-col xl:flex-row gap-8">
                    
                    {/* Left/Top Column: Math & Content */}
                    <div className="flex-1 space-y-6">
                      {/* Main Text */}
                      <div className="text-lg text-stone-800 leading-loose font-serif">
                        {section.content}
                      </div>

                      {/* Formula Box */}
                      {section.formula && (
                        <div className="bg-stone-800 text-amber-50 rounded-lg p-6 shadow-xl border-2 border-stone-700 relative overflow-hidden group-hover:border-amber-700 transition-colors">
                           <div className="absolute top-0 right-0 p-1 bg-stone-700 text-[10px] uppercase tracking-wider text-stone-400">Formula</div>
                           <MathRenderer formula={section.formula} block />
                        </div>
                      )}

                      {/* Explanation Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50/80 p-5 rounded-lg border-l-4 border-blue-800 shadow-sm">
                           <h4 className="flex items-center gap-2 text-sm font-bold text-blue-900 uppercase tracking-wider mb-2">
                             <BookOpen className="w-4 h-4" /> 考研数学视角
                           </h4>
                           <p className="text-stone-700 text-sm leading-relaxed">{section.explanation}</p>
                        </div>
                        <div className="bg-red-50/80 p-5 rounded-lg border-l-4 border-red-800 shadow-sm">
                           <h4 className="flex items-center gap-2 text-sm font-bold text-red-900 uppercase tracking-wider mb-2">
                             <Flame className="w-4 h-4" /> 阴阳师视角
                           </h4>
                           <p className="text-stone-700 text-sm font-medium leading-relaxed">{section.analogy}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right/Bottom Column: Character & Visuals */}
                    <div className="w-full xl:w-80 flex flex-col gap-6 shrink-0">
                      
                      {/* Character Card */}
                      <div className="bg-stone-200 p-2 rounded-lg shadow-inner border border-stone-300 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <div className="bg-stone-800 rounded overflow-hidden relative aspect-[3/4] group-card">
                          {/* We use a specific color gradient if image fails, or the image itself */}
                          <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 flex items-center justify-center text-stone-600">
                             <span className="font-calligraphy text-4xl opacity-20">{section.characterName?.split(' ')[1] || '式神'}</span>
                          </div>
                          
                          {/* Generic Placeholder for visual style if real images aren't loaded, but assuming user might put them in */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 p-4 text-center">
                             <div className="w-24 h-24 mb-4 rounded-full bg-stone-700/50 flex items-center justify-center border-2 border-stone-600">
                                <span className="font-serif text-3xl text-stone-400">
                                  {section.characterName?.[0] || '式'}
                                </span>
                             </div>
                             <p className="text-xs uppercase tracking-widest opacity-50">Shikigami Art</p>
                          </div>
                          
                          {/* Overlay Name */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-12">
                            <div className="text-amber-500 text-xs font-bold tracking-widest mb-1">典藏 | 讲师</div>
                            <div className="text-white font-calligraphy text-2xl">{section.characterName || '神秘式神'}</div>
                          </div>
                        </div>
                      </div>

                      {/* Combat Scenario Box */}
                      {section.combatScenario && (
                        <div className="bg-[#2a2a2a] rounded-md border-2 border-stone-600 overflow-hidden font-mono text-sm shadow-lg">
                          <div className="bg-[#1a1a1a] px-3 py-2 border-b border-stone-600 flex justify-between items-center">
                            <span className="text-green-500 font-bold flex items-center gap-2">
                              <Calculator className="w-3 h-3" /> BATTLE LOG
                            </span>
                            <span className="text-stone-500 text-xs">v1.0.4</span>
                          </div>
                          <div className="p-4 space-y-3 text-stone-300">
                            <div>
                              <span className="text-amber-600 block text-xs uppercase tracking-wider mb-1">Scenario</span>
                              <p className="text-stone-100">{section.combatScenario.title}</p>
                              <p className="text-stone-500 text-xs mt-1">{section.combatScenario.description}</p>
                            </div>
                            <div className="pl-3 border-l-2 border-stone-600">
                              <span className="text-blue-500 block text-xs uppercase tracking-wider mb-1">Calculation</span>
                              <p className="text-blue-200/90 italic">{section.combatScenario.calculation}</p>
                            </div>
                            <div className="bg-stone-800/50 p-2 rounded text-green-400 border border-green-900/30">
                              <span className="text-xs uppercase opacity-50 mr-2">RESULT:</span>
                              {section.combatScenario.result}
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              </div>
            ))}

            {/* Footer CTA in Scroll */}
            <div className="mt-24 text-center border-t border-stone-300 pt-12">
               <div className="mb-6">
                 <p className="text-stone-500 text-sm italic font-serif">
                   “所谓数学，不过是阴阳师理解世界本质的另一种御魂罢了。”
                 </p>
               </div>
               <div className="inline-flex flex-col items-center justify-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-16 h-16 border-4 border-red-900 rounded-full flex items-center justify-center bg-red-50">
                     <span className="font-calligraphy text-2xl text-red-900">完</span>
                  </div>
                  <span className="text-xs tracking-[0.3em] text-red-900 uppercase">End of Scroll</span>
               </div>
            </div>

          </div>
        </ScrollContainer>

      </main>
    </div>
  );
};

export default App;
