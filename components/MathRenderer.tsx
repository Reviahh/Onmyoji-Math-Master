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
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 50; // Try for 5 seconds

    const renderMath = () => {
      if (containerRef.current && window.katex) {
        try {
          window.katex.render(formula, containerRef.current, {
            throwOnError: false,
            displayMode: block,
            output: 'html', 
            strict: false,
            trust: true,
          });
        } catch (e) {
          console.warn('KaTeX render warning:', e);
          // If render fails, we leave the raw text (children) visible
        }
      }
    };

    if (window.katex) {
      renderMath();
    } else {
      const interval = setInterval(() => {
        if (window.katex) {
          renderMath();
          clearInterval(interval);
        } else {
          retryCount++;
          if (retryCount >= maxRetries) {
            clearInterval(interval);
            // Failed to load KaTeX, but raw text is already rendered as children
          }
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [formula, block]);

  // Block Math
  if (block) {
    return (
      <div className="my-4 text-center overflow-x-auto overflow-y-hidden py-2">
        {/* Render formula as text initially (fallback), KaTeX will overwrite innerHTML if successful */}
        {/* Removed text-stone-300 to allow inheriting color from parent (e.g. text-amber-50 in dark cards) */}
        <span ref={containerRef} className="text-lg font-serif italic">
          {formula}
        </span>
      </div>
    );
  }

  // Inline Math
  return (
    <span className="mx-0.5">
       {/* Render formula as text initially (fallback), KaTeX will overwrite innerHTML if successful */}
       {/* Removed text-stone-800 to allow inheriting color from parent (e.g. text-blue-200 in combat logs) */}
      <span ref={containerRef} className="font-serif italic">
        {formula}
      </span>
    </span>
  );
};

export default MathRenderer;