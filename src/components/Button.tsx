// components/Button.tsx
import React from "react";

export const Button: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#112E0D] to-[#208A30] shadow-[0px_0px_12px_#45FF9F]">
      <div className="absolute inset-0">
        <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to-bottom,black,transparent)]" />
        <div className="rounded-lg border border-white/40 absolute inset-0 [mask-image:linear-gradient(to-top,black,transparent)]" />
        <div className="rounded-lg absolute inset-0 shadow-[0_0_12px_rgb(32,138,48,0.7)_inset]" />
      </div>
      <span>{children}</span>
    </button>
  );
};
