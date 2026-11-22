import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`space-y-3.5 max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#9C7948] ${
            centered ? "justify-center" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89360]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#141413] font-editorial leading-[1.12]">
        {title}{" "}
        {highlight && (
          <span className="italic font-normal text-[#9C7948]">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-sm sm:text-base text-[#52524E] font-light leading-relaxed pt-1 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
