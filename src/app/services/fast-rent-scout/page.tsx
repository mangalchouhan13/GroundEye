import React from "react";
import Link from "next/link";
import {
  SearchCheck,
  ShieldCheck,
  Video,
  ClipboardCheck,
  Wrench,
  KeyRound,
  Users,
  CheckCircle2,
  ArrowRight,
  FileText,
  MapPin,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Rental Readiness & Key Desk | GroundEye",
  description:
    "Monthly rental property checks, move-in and move-out audits, key handovers, utility logs, cleaning and repair coordination, and non-brokerage rental scouting in Udaipur.",
};

export default function FastRentScoutPage() {
  const service = servicesData.find((s) => s.id === "fast-rent-scout")!;

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* Service Hero */}
      <section className="relative py-12 sm:py-20 border-b border-[#CFB483]/30 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#CFB483]/40 text-[10px] font-semibold text-[#9C7948] uppercase tracking-[0.25em]">
              <SearchCheck className="w-3.5 h-3.5 text-[#B89360]" />
              <span>Pillar 03 • Rental Readiness, Key Desk & Scouting</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight leading-tight">
              Rental Readiness <span className="italic font-normal text-[#9C7948]">& Key Desk</span>
            </h1>

            <p className="text-sm sm:text-base text-[#52524E] font-light leading-relaxed">
              Two routine monthly checks, move-in and move-out condition audits, fixture and lock logs, AVVNL / PHED meter readings, cleaning and repair coordination, and signed key handovers. We also retain direct, non-brokerage rental scouting with property videos and accompanied visits.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact?service=fast-rent-scout"
                className="px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all flex items-center gap-2"
              >
                <span>Request Rental Readiness</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
              </Link>
              <div className="text-[11px] text-[#73736D] font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B89360]" />
                <span>Udaipur • Strictly Non-Brokerage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SCOUTING CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Scope"
          title="Rental Readiness &"
          highlight="Key Desk"
          description="Practical monthly oversight for owners, with direct rental scouting and tenant visits available through the same service pillar."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.keyFeatures.map((feat, idx) => {
            const getIcon = (title: string) => {
              if (title.includes("Monthly")) return ClipboardCheck;
              if (title.includes("Condition")) return ShieldCheck;
              if (title.includes("Logs")) return FileText;
              if (title.includes("Coordination")) return Wrench;
              if (title.includes("Key")) return KeyRound;
              if (title.includes("Scouting")) return SearchCheck;
              return Video;
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
        </div>
      </section>

      {/* PROPERTY CARE & SCOUTING STANDARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#CFB483]/35 p-8 sm:p-12 shadow-luxury space-y-8">
          <SectionHeader
            badge="The Rental Standard"
            title="Documented Property Care &"
            highlight="Direct Rental Scouting"
            description="One on-ground point of contact for routine property checks, key handovers, and non-brokerage rental support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#F4F0E6]">
            {/* Informal Property Oversight */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-red-200 space-y-4">
              <span className="text-[10px] font-mono font-bold text-red-700 uppercase tracking-widest">
                Without Documented Oversight
              </span>
              <ul className="space-y-3 text-xs text-[#52524E] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>No routine check records or move-in / move-out condition reports.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Unlogged fixture, lock, and utility meter readings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Unrecorded key handovers and unclear repair coordination.</span>
                </li>
              </ul>
            </div>

            {/* GroundEye Rental Readiness & Key Desk */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/40 space-y-4">
              <span className="text-[10px] font-mono font-bold text-[#7A5C33] uppercase tracking-widest">
                GroundEye Rental Readiness & Key Desk
              </span>
              <ul className="space-y-3 text-xs text-[#242422] font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89360] shrink-0" />
                  <span>Two routine monthly checks and full move-in / move-out audits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89360] shrink-0" />
                  <span>Fixture, lock, AVVNL / PHED meter logs, plus cleaning and repair coordination.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89360] shrink-0" />
                  <span>Signed key handover to the owner's chosen tenant and direct, non-brokerage scouting.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES & WHO BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-3xl bg-white border border-[#CFB483]/35 shadow-luxury space-y-6">
            <div className="flex items-center gap-2 text-[#7A5C33] text-[10px] font-mono font-semibold uppercase tracking-[0.2em]">
              <FileText className="w-4 h-4 text-[#B89360]" />
              <span>Property Logs & Scouting</span>
            </div>
            <h3 className="text-2xl font-light text-[#141413] font-editorial">
              Reports & Rental Support
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
              <Users className="w-4 h-4 text-[#B89360]" />
              <span>Target Audience</span>
            </div>
            <h3 className="text-2xl font-light text-[#141413] font-editorial">
              Who Uses This Service?
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
            Keep Your Rental Ready in Udaipur
          </h2>
          <p className="text-[#52524E] max-w-lg mx-auto text-xs sm:text-sm font-light">
            Get routine property checks, clear condition records, and key handover support. Direct rental scouting is also available on request.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=fast-rent-scout"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all"
            >
              <span>Request Rental Support</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
