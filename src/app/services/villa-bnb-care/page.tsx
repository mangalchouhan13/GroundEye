import React from "react";
import Link from "next/link";
import {
  KeyRound,
  PhoneCall,
  Wrench,
  ClipboardCheck,
  AlertTriangle,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Villa & BnB Care | On-Ground Concierge & Property Safeguarding | GroundEye",
  description:
    "Distance is yours, duty is ours. Guest reception, key handovers, on-call property assistance, maintenance vendor coordination, and check-in/out damage inspections in Udaipur.",
};

export default function VillaBnbCarePage() {
  const service = servicesData.find((s) => s.id === "villa-bnb-care")!;

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* Service Hero */}
      <section className="relative py-12 sm:py-20 border-b border-[#CFB483]/30 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#CFB483]/40 text-[10px] font-semibold text-[#9C7948] uppercase tracking-[0.25em]">
              <KeyRound className="w-3.5 h-3.5 text-[#B89360]" />
              <span>Pillar 02 • On-Ground Hospitality Concierge</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight leading-tight">
              Villa & <span className="italic font-normal text-[#9C7948]">BnB Care</span>
            </h1>

            <p className="text-sm sm:text-base text-[#52524E] font-light leading-relaxed">
              Your trusted, physical presence in Udaipur. In-person guest receptions, responsible key handovers, on-call emergency property assistance, maintenance vendor supervision, and room-by-room damage inspections.
            </p>

            <p className="text-xs font-serif italic text-[#7A5C33] pt-1">
              "Distance is yours, duty is ours."
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact?service=villa-bnb-care"
                className="px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all flex items-center gap-2"
              >
                <span>Request Villa Concierge</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
              </Link>
              <div className="text-[11px] text-[#73736D] font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B89360]" />
                <span>Safeguarding Boutique Stays & Havelis in Udaipur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CONCIERGE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Scope"
          title="The Five Pillars of"
          highlight="Villa & BnB Care"
          description="Providing remote owners with flawless operational control and five-star guest hospitality on the ground."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.keyFeatures.map((feat, idx) => {
            const getIcon = (title: string) => {
              if (title.includes("Key")) return KeyRound;
              if (title.includes("On-Call")) return PhoneCall;
              if (title.includes("Maintenance")) return Wrench;
              if (title.includes("Inspections")) return ClipboardCheck;
              return AlertTriangle;
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

      {/* S.O.P. PROTOCOL OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#CFB483]/35 p-8 sm:p-12 shadow-luxury space-y-10">
          <SectionHeader
            badge="Standard Operating Procedure"
            title="The GroundEye Concierge"
            highlight="Turnaround Cycle"
            description="How we protect your high-value villa asset between every reservation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#F4F0E6]">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#7A5C33] uppercase tracking-widest">
                Phase A: Pre-Arrival Check
              </span>
              <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                Turnaround & Readiness Audit
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Before guests arrive, our concierge audits hot water geysers, air conditioners, pool filtration, lighting, and linen setup to eliminate check-in complaints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#7A5C33] uppercase tracking-widest">
                Phase B: In-Person Welcome
              </span>
              <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                Guest Reception & Orientation
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                We meet guests at the property gate, verify identity credentials, demonstrate appliances and Wi-Fi, and hand over keys securely.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#7A5C33] uppercase tracking-widest">
                Phase C: Post-Stay Audit
              </span>
              <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                Departure Inspection & Log
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Immediate physical walkthrough upon departure to check for broken glass, stained upholstery, damaged electronic appliances, and key retrieval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES & WHO BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="p-8 rounded-3xl bg-white border border-[#CFB483]/35 shadow-luxury space-y-6">
            <div className="flex items-center gap-2 text-[#7A5C33] text-[10px] font-mono font-semibold uppercase tracking-[0.2em]">
              <ShieldCheck className="w-4 h-4 text-[#B89360]" />
              <span>Host Assurance</span>
            </div>
            <h3 className="text-2xl font-light text-[#141413] font-editorial">
              Host Deliverables & Reporting
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
              <span>Target Stays</span>
            </div>
            <h3 className="text-2xl font-light text-[#141413] font-editorial">
              Who Relies on Villa & BnB Care?
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
            Safeguard Your Udaipur Stays Today
          </h2>
          <p className="text-[#52524E] max-w-lg mx-auto text-xs sm:text-sm font-light">
            Connect your reservation calendar with GroundEye's on-call concierge team in Udaipur.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=villa-bnb-care"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all"
            >
              <span>Engage Villa Concierge</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
