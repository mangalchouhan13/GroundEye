import React from "react";
import Link from "next/link";
import {
  Building2,
  Camera,
  Video,
  Ruler,
  Compass,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  MapPin,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Asset Intelligence | Physical Property Inspection & Audit | GroundEye",
  description:
    "Distance is yours, duty is ours. Physical property inspections, GPS-timestamped photographs, 4K panoramic walkthroughs, road width measurements, and boundary audits across Udaipur.",
};

export default function AssetIntelligencePage() {
  const service = servicesData.find((s) => s.id === "asset-intelligence")!;

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* Service Hero */}
      <section className="relative py-12 sm:py-20 border-b border-[#CFB483]/30 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#CFB483]/40 text-[10px] font-semibold text-[#9C7948] uppercase tracking-[0.25em]">
              <Building2 className="w-3.5 h-3.5 text-[#B89360]" />
              <span>Pillar 01 • Physical Property Audits</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight leading-tight">
              Asset <span className="italic font-normal text-[#9C7948]">Intelligence</span>
            </h1>

            <p className="text-sm sm:text-base text-[#52524E] font-light leading-relaxed">
              Objective, boots-on-the-ground physical inspections, satellite-verified GPS photography, 4K panoramic video scans, calibrated road width measurements, and perimeter boundary audits across Udaipur, Rajasthan.
            </p>

            <p className="text-xs font-serif italic text-[#7A5C33] pt-1">
              "Distance is yours, duty is ours."
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact?service=asset-intelligence"
                className="px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all flex items-center gap-2"
              >
                <span>Request Asset Inspection</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
              </Link>
              <div className="text-[11px] text-[#73736D] font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B89360]" />
                <span>Udaipur Girwa Tehsil & Peri-Urban Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Detailed Scope"
          title="The Five Pillars of"
          highlight="Asset Intelligence"
          description="Every inspection adheres to standardized physical measurement and optical capture protocols."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.keyFeatures.map((feat, idx) => {
            const getIcon = (title: string) => {
              if (title.includes("Inspection")) return Building2;
              if (title.includes("GPS")) return Camera;
              if (title.includes("4K")) return Video;
              if (title.includes("Road Width")) return Ruler;
              return Compass;
            };
            const FeatIcon = getIcon(feat.title);

            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-4 hover:border-[#B89360] shadow-sm hover:shadow-luxury transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
                  <FeatIcon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#52524E] font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}

          {/* Neutrality Card */}
          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/40 space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-white border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Zero Brokerage Conflict
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              We do not broker real estate. Our field auditors have no financial incentive to sugarcoat defects, downplay road narrowness, or disguise site encroachments.
            </p>
          </div>
        </div>
      </section>

      {/* TARGET CLIENTS & DELIVERABLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-3xl bg-white border border-[#CFB483]/35 shadow-luxury space-y-6">
            <div className="flex items-center gap-2 text-[#7A5C33] text-[10px] font-mono font-semibold uppercase tracking-[0.2em]">
              <FileCheck className="w-4 h-4 text-[#B89360]" />
              <span>Inspection Deliverables</span>
            </div>
            <h3 className="text-2xl font-light text-[#141413] font-editorial">
              Included in Every Audit
            </h3>
            <ul className="space-y-3">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-[#52524E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89360] shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#CFB483]/35 shadow-luxury space-y-6">
            <div className="flex items-center gap-2 text-[#7A5C33] text-[10px] font-mono font-semibold uppercase tracking-[0.2em]">
              <MapPin className="w-4 h-4 text-[#B89360]" />
              <span>Target Beneficiaries</span>
            </div>
            <h3 className="text-2xl font-light text-[#141413] font-editorial">
              Who Relies on Asset Intelligence?
            </h3>
            <ul className="space-y-3">
              {service.targetAudience.map((aud, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-[#52524E]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89360] shrink-0 mt-0.5" />
                  <span className="font-light">{aud}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#CFB483]/40 shadow-luxury space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-[#141413] font-editorial">
            Schedule an Asset Intelligence Audit
          </h2>
          <p className="text-[#52524E] max-w-lg mx-auto text-xs sm:text-sm font-light">
            Provide the plot coordinates or site address in Udaipur. Our field unit will prepare the deployment scope promptly.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=asset-intelligence"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all"
            >
              <span>Schedule Property Audit</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
