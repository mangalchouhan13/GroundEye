import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  KeyRound,
  SearchCheck,
  ArrowRight,
  MapPin,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Our Three Services | GroundEye On-Ground Concierge & Asset Audit",
  description:
    "Distance is yours, duty is ours. Explore GroundEye's three core pillars: Asset Intelligence (physical inspections & GPS audits), Villa & BnB Care (concierge & key handovers), and Fast-Rent Scout (landlord verification).",
};

export default function ServicesPage() {
  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* Services Hero Banner */}
      <section className="relative py-12 sm:py-20 border-b border-[#CFB483]/30 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#CFB483]/40 text-[10px] font-semibold text-[#9C7948] uppercase tracking-[0.25em]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89360]" />
            <span>Specialized Capabilities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight max-w-4xl mx-auto leading-tight">
            Our Three <span className="italic font-normal text-[#9C7948]">Business Pillars</span>
          </h1>

          <p className="text-sm sm:text-base text-[#52524E] font-light max-w-2xl mx-auto leading-relaxed">
            GroundEye does not offer generic brokerage or property sales. We deploy physical field units across Udaipur strictly focused on three core disciplines: physical asset audits, villa concierge care, and verified rental scouting.
          </p>

          <p className="text-xs font-serif italic text-[#7A5C33]">
            "Distance is yours, duty is ours."
          </p>
        </div>
      </section>

      {/* THREE SERVICES CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} featured={idx === 0} />
          ))}
        </div>
      </section>

      {/* AUDIENCE COMPARISON & FIT MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#CFB483]/35 p-8 sm:p-12 shadow-luxury space-y-10">
          <SectionHeader
            badge="Client Alignment"
            title="Which Service"
            highlight="Fits Your Need?"
            description="Clear operational scopes designed for specific asset scenarios in Udaipur."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6 border-t border-[#F4F0E6]">
            {/* Asset Intelligence Audience */}
            <div className="space-y-4 p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-full bg-white border border-[#B89360] flex items-center justify-center text-[#9C7948]">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-[#141413] uppercase tracking-wider">
                  Asset Intelligence
                </h3>
                <p className="text-[10px] text-[#7A5C33] font-mono uppercase tracking-widest">
                  Best For Landowners & Investors
                </p>
                <p className="text-xs text-[#52524E] font-light leading-relaxed">
                  Designed for remote NRI families, out-of-town investors, institutions, and buyers who require impartial, verified physical evidence of land parcels, boundary walls, and access roads.
                </p>
                <div className="pt-2 space-y-1.5">
                  <p className="text-[10px] font-semibold text-[#141413] uppercase tracking-wider">
                    Typical Scenarios:
                  </p>
                  <ul className="text-xs text-[#73736D] space-y-1 font-light">
                    <li>• Verifying vacant ancestral land in Udaipur</li>
                    <li>• Pre-purchase physical access and road width audit</li>
                    <li>• Detecting boundary wall tampering or encroachment</li>
                  </ul>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/services/asset-intelligence"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white hover:bg-[#141413] hover:text-white border border-[#CFB483]/40 text-xs font-semibold uppercase tracking-wider text-[#141413] transition-all"
                >
                  <span>View Asset Intelligence</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Villa Care Audience */}
            <div className="space-y-4 p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-full bg-white border border-[#B89360] flex items-center justify-center text-[#9C7948]">
                  <KeyRound className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-[#141413] uppercase tracking-wider">
                  Villa & BnB Care
                </h3>
                <p className="text-[10px] text-[#7A5C33] font-mono uppercase tracking-widest">
                  Best For Homestay & Villa Hosts
                </p>
                <p className="text-xs text-[#52524E] font-light leading-relaxed">
                  Designed for owners of heritage havelis, farmstays, and Airbnb villas who reside elsewhere and require responsible physical concierge, guest check-ins, and damage oversight.
                </p>
                <div className="pt-2 space-y-1.5">
                  <p className="text-[10px] font-semibold text-[#141413] uppercase tracking-wider">
                    Typical Scenarios:
                  </p>
                  <ul className="text-xs text-[#73736D] space-y-1 font-light">
                    <li>• Personal guest reception and key handovers</li>
                    <li>• On-call guest assistance during stay in Udaipur</li>
                    <li>• Immediate departure damage inspections & logs</li>
                  </ul>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/services/villa-bnb-care"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white hover:bg-[#141413] hover:text-white border border-[#CFB483]/40 text-xs font-semibold uppercase tracking-wider text-[#141413] transition-all"
                >
                  <span>View Villa & BnB Care</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Fast Rent Scout Audience */}
            <div className="space-y-4 p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-full bg-white border border-[#B89360] flex items-center justify-center text-[#9C7948]">
                  <SearchCheck className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-[#141413] uppercase tracking-wider">
                  Fast-Rent Scout
                </h3>
                <p className="text-[10px] text-[#7A5C33] font-mono uppercase tracking-widest">
                  Best For Tenants & Landlords
                </p>
                <p className="text-xs text-[#52524E] font-light leading-relaxed">
                  Designed for tenants relocating to Udaipur who need authentic 30-second interior video tours and direct landlord connections without unauthorized middlemen.
                </p>
                <div className="pt-2 space-y-1.5">
                  <p className="text-[10px] font-semibold text-[#141413] uppercase tracking-wider">
                    Typical Scenarios:
                  </p>
                  <ul className="text-xs text-[#73736D] space-y-1 font-light">
                    <li>• Relocating to Udaipur for work, medical, or education</li>
                    <li>• Avoiding misleading ultra-wide angle photography</li>
                    <li>• Escorted, safe on-ground property visits</li>
                  </ul>
                </div>
              </div>
              <div className="pt-6">
                <Link
                  href="/services/fast-rent-scout"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white hover:bg-[#141413] hover:text-white border border-[#CFB483]/40 text-xs font-semibold uppercase tracking-wider text-[#141413] transition-all"
                >
                  <span>View Fast-Rent Scout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INQUIRY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#CFB483]/40 shadow-luxury space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-[#141413] font-editorial">
            Need a Customized On-Ground Scope?
          </h2>
          <p className="text-[#52524E] max-w-lg mx-auto text-xs sm:text-sm font-light">
            Contact our Udaipur operations center to discuss your property coordinates or concierge schedule.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all"
            >
              <span>Submit Directive to Field Team</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
