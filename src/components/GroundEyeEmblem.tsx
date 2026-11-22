import React from "react";
import Image from "next/image";

interface EmblemProps {
  className?: string;
  size?: number;
}

export default function GroundEyeEmblem({ className = "", size = 44 }: EmblemProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 transition-transform ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        src="/images/groundeye-emblem-transparent.png"
        alt="GroundEye Transparent Emblem"
        width={size * 2}
        height={size * 2}
        priority
        className="w-full h-full object-contain filter drop-shadow-sm select-none"
      />
    </div>
  );
}
