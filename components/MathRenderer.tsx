import React, { useEffect, useRef } from 'react';

interface MathRendererProps {
  formula: string;
  block?: boolean;
}

declare global {
  interface Window {
    katex: any;
  }
}

const MathRenderer: React.FC<MathRendererProps> = ({ formula, block = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && window.katex) {
      try {
        window.katex.render(formula, containerRef.current, {
          throwOnError: false,
          displayMode: block,
          output: 'html', // Render to HTML for speed
        });
      } catch (e) {
        console.error('KaTeX render error:', e);
        containerRef.current.innerText = formula;
      }
    }
  }, [formula, block]);

  return <div ref={containerRef} className={`${block ? 'my-4 text-center text-lg' : 'inline-block mx-1'}`} />;
};

export default MathRenderer;