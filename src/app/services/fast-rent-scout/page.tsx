import React from "react";
import Link from "next/link";
import {
  SearchCheck,
  ShieldCheck,
  Video,
  Navigation,
  Users,
  CheckCircle2,
  ArrowRight,
  FileText,
  MapPin,
  Sparkles,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { servicesData } from "@/data/servicesData";

export const metadata = {
  title: "Fast-Rent Scout | Direct Landlord Verification & Scouting | GroundEye",
  description:
    "Distance is yours, duty is ours. Direct landlord verification, digital showcases, 30-second interior videos, accompanied physical property visits in Udaipur.",
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
              <span>Pillar 03 • Direct Rental Scouting & Verification</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight leading-tight">
              Fast-Rent <span className="italic font-normal text-[#9C7948]">Scout</span>
            </h1>

            <p className="text-sm sm:text-base text-[#52524E] font-light leading-relaxed">
              Authentic, zero-middleman rental scouting across Udaipur. Direct landlord verification, verified digital property showcases, unedited 30-second interior walkthrough videos, and escorted on-ground property visits.
            </p>

            <p className="text-xs font-serif italic text-[#7A5C33] pt-1">
              "Distance is yours, duty is ours."
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact?service=fast-rent-scout"
                className="px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all flex items-center gap-2"
              >
                <span>Request Rental Scouting</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
              </Link>
              <div className="text-[11px] text-[#73736D] font-mono flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#B89360]" />
                <span>Verified Homes in Udaipur • Zero Sub-Broker Spam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SCOUTING CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Scope"
          title="The Five Pillars of"
          highlight="Fast-Rent Scout"
          description="Transforming rental discovery into a transparent, physically verified experience in Udaipur."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.keyFeatures.map((feat, idx) => {
            const getIcon = (title: string) => {
              if (title.includes("Landlord")) return ShieldCheck;
              if (title.includes("Listings")) return FileText;
              if (title.includes("30-Second")) return Video;
              if (title.includes("Visit")) return Navigation;
              return Users;
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

          <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/40 space-y-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-white border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Uncut 30-Second Video
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              No misleading optical lenses or digital touchups. A genuine continuous walkthrough from the entrance door through all rooms, verifying ventilation and water pressure.
            </p>
          </div>
        </div>
      </section>

      {/* WHY SCOUTING IS SUPERIOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#CFB483]/35 p-8 sm:p-12 shadow-luxury space-y-8">
          <SectionHeader
            badge="The Scouting Standard"
            title="Conventional Portals vs."
            highlight="GroundEye Fast-Rent Scout"
            description="How our boots-on-the-ground verification protects you from deceptive listings."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#F4F0E6]">
            {/* Conventional Portals */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-red-200 space-y-4">
              <span className="text-[10px] font-mono font-bold text-red-700 uppercase tracking-widest">
                Conventional Broker Portals
              </span>
              <ul className="space-y-3 text-xs text-[#52524E] font-light">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Fake listings and stock photos that do not match reality.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Multiple unauthorized sub-brokers spamming you with unwanted calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✕</span>
                  <span>Exaggerated descriptions masking severe water, dampness, or road issues.</span>
                </li>
              </ul>
            </div>

            {/* GroundEye Fast-Rent Scout */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/40 space-y-4">
              <span className="text-[10px] font-mono font-bold text-[#7A5C33] uppercase tracking-widest">
                GroundEye Fast-Rent Scout
              </span>
              <ul className="space-y-3 text-xs text-[#242422] font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89360] shrink-0" />
                  <span>Direct landlord verification with confirmed property ownership.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89360] shrink-0" />
                  <span>Uncut 30-second continuous interior video recorded in daylight.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B89360] shrink-0" />
                  <span>Accompanied on-ground visits with our courteous Udaipur field representative.</span>
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
              <span>Scout Deliverables</span>
            </div>
            <h3 className="text-2xl font-light text-[#141413] font-editorial">
              Included Deliverables
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
              Who Relies on Fast-Rent Scout?
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
            Find Your Verified Home in Udaipur
          </h2>
          <p className="text-[#52524E] max-w-lg mx-auto text-xs sm:text-sm font-light">
            Whether you are a landlord listing a verified residence or a tenant seeking authentic housing in Udaipur, let our scout team assist you.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?service=fast-rent-scout"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all"
            >
              <span>Connect with Rental Scout</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
