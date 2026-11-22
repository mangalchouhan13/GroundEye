import React from "react";
import GroundEyeEmblem from "./GroundEyeEmblem";

interface GroundEyeLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showSubtitle?: boolean;
}

export default function GroundEyeLogo({
  className = "",
  size = "md",
  showText = true,
  showSubtitle = true,
}: GroundEyeLogoProps) {
  const getDimensions = () => {
    switch (size) {
      case "sm":
        return { emblemSize: 32, textClass: "text-xl", subClass: "text-[8px]" };
      case "md":
        return { emblemSize: 44, textClass: "text-2xl sm:text-[26px]", subClass: "text-[9px]" };
      case "lg":
        return { emblemSize: 58, textClass: "text-3xl sm:text-4xl", subClass: "text-[10px]" };
      case "xl":
        return { emblemSize: 78, textClass: "text-4xl sm:text-5xl", subClass: "text-xs" };
      default:
        return { emblemSize: 44, textClass: "text-2xl", subClass: "text-[9px]" };
    }
  };

  const { emblemSize, textClass, subClass } = getDimensions();

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* 100% Transparent Emblem Directly From User Graphic */}
      <GroundEyeEmblem size={emblemSize} />

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-logo font-bold tracking-tight text-[#141413] leading-none ${textClass}`}>
            Ground<span className="text-[#9C7948] font-normal">Eye</span>
          </span>
          {showSubtitle && (
            <span
              className={`tracking-[0.24em] uppercase text-[#7A5C33] font-medium mt-1 ${subClass}`}
            >
              Udaipur, Rajasthan
            </span>
          )}
        </div>
      )}
    </div>
  );
}
