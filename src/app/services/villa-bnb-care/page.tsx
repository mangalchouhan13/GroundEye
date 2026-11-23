import React from "react";
import Link from "next/link";
import {
  KeyRound,
  PhoneCall,
  ClipboardCheck,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Villa & Homestay Custody | GroundEye",
  description:
    "Two monthly 35-point property audits, dampness and seepage checks, key lockbox with numbered security seals, guest inventory and turnover checks, and 30–45 minute priority breakdown dispatch in Udaipur.",
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
              <span>Pillar 02 • Villa & Homestay Custody</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight leading-tight">
              Villa & <span className="italic font-normal text-[#9C7948]">Homestay Custody</span>
            </h1>

            <p className="text-sm sm:text-base text-[#52524E] font-light leading-relaxed">
              Two detailed 35-point audits each month, including dampness and seepage checks and essential-system testing. Secure keys in a lockbox with numbered security seals, perform guest inventory and turnover checks, and get a 30–45 minute priority dispatch commitment within Udaipur for urgent breakdowns.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact?service=villa-bnb-care"
                className="px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all flex items-center gap-2"
              >
                <span>Request Property Custody</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
              </Link>
              <div className="text-[11px] text-[#73736D] font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B89360]" />
                <span>Luxury Villas, Second Homes & Homestays in Udaipur</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CONCIERGE CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Scope"
          title="Villa & Homestay"
          highlight="Custody"
          description="Regular, documented property oversight and secure key custody for owners of luxury villas, second homes, and homestays."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.keyFeatures.map((feat, idx) => {
            const getIcon = (title: string) => {
              if (title.includes("35-Point")) return ClipboardCheck;
              if (title.includes("Key")) return KeyRound;
              if (title.includes("Guest")) return ShieldCheck;
              return PhoneCall;
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
            title="The GroundEye Custody"
            highlight="Cycle"
            description="How we document property condition, secure keys, and respond to urgent breakdowns."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#F4F0E6]">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#7A5C33] uppercase tracking-widest">
                Phase A: Monthly Audits
              </span>
              <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                35-Point Property Inspection
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Two detailed audits each month covering dampness, seepage, and essential-system testing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#7A5C33] uppercase tracking-widest">
                Phase B: Key & Turnover Control
              </span>
              <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                Secure Key and Inventory Checks
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Keys are held in a lockbox with numbered security seals, alongside guest inventory and turnover checks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#7A5C33] uppercase tracking-widest">
                Phase C: Urgent Breakdowns
              </span>
              <h4 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                Priority On-Ground Dispatch
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Priority dispatch within 30–45 minutes in Udaipur for urgent property breakdowns.
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
              <span>Owner Assurance</span>
            </div>
            <h3 className="text-2xl font-light text-[#141413] font-editorial">
              Audit & Custody Records
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
              Who Needs Villa & Homestay Custody?
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
            Protect Your Udaipur Property
          </h2>
          <p className="text-[#52524E] max-w-lg mx-auto text-xs sm:text-sm font-light">
            Arrange regular property audits, secure key custody, and priority breakdown dispatch for your villa or homestay.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=villa-bnb-care"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all"
            >
              <span>Request Property Custody</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
