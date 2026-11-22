import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  KeyRound,
  SearchCheck,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { ServicePillar } from "@/data/servicesData";

interface ServiceCardProps {
  service: ServicePillar;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "ShieldCheck":
        return Building2;
      case "KeyRound":
        return KeyRound;
      case "SearchCheck":
        return SearchCheck;
      default:
        return ShieldCheck;
    }
  };

  const Icon = getIcon(service.iconName);

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between border bg-white ${
        featured
          ? "border-[#B89360] shadow-luxury"
          : "border-[#CFB483]/35 hover:border-[#B89360] shadow-sm hover:shadow-luxury-hover"
      }`}
    >
      {/* Visual Header Image */}
      <div className="relative h-64 w-full overflow-hidden bg-[#FAF8F5]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] bg-white/90 text-[#7A5C33] border border-[#CFB483]/40 backdrop-blur-md font-semibold">
            {service.badge}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/90 border border-[#CFB483]/40 flex items-center justify-center text-[#9C7948] backdrop-blur-md">
            <Icon className="w-4 h-4" />
          </div>
        </div>

        {/* Title over base of image */}
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#CFB483] font-semibold">
            {service.subtitle}
          </p>
          <h3 className="text-2xl font-light text-white font-editorial mt-0.5">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed font-light">
            {service.shortDescription}
          </p>

          {/* Key Feature Highlights */}
          <div className="mt-5 space-y-2.5 pt-4 border-t border-[#F4F0E6]">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9C7948]">
              Standard Inclusions:
            </p>
            {service.keyFeatures.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#242422]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89360] shrink-0 mt-0.5" />
                <span className="font-light">{feat.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-[#F4F0E6] flex items-center justify-between">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#141413] group-hover:text-[#9C7948] transition-colors"
          >
            <span>Explore Scope</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#B89360]" />
          </Link>

          <Link
            href={`/contact?service=${service.slug}`}
            className="text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#CFB483]/40 text-[#141413] hover:bg-[#141413] hover:text-white transition-all"
          >
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
}
