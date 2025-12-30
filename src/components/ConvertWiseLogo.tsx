import React from 'react';

export function ConvertWiseLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo sizing is handled via Tailwind classes so it can be tuned via CSS (no inline styles). */}
      <img
        src="/convertwiselogo1.svg"
        alt="ConvertWise"
        className="h-16 sm:h-[72px] w-auto object-contain origin-left scale-125 sm:scale-[1.35] transition-all duration-200 hover:opacity-90"
      />
    </div>
  );
}


