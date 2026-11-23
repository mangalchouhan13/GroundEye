import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Camera,
  ArrowRight,
  Target,
  FileCheck,
  Building2,
  KeyRound,
  SearchCheck,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "About GroundEye | On-Ground Concierge & Asset Audit | Udaipur",
  description:
    "Distance Is Yours. Duty Is Ours. Learn about GroundEye's mission — on-ground concierge and asset audit. Operating out of Udaipur, Rajasthan.",
};

export default function AboutPage() {
  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* Hero Banner */}
      <section className="relative py-12 sm:py-20 border-b border-[#CFB483]/30 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#CFB483]/40 text-[10px] font-semibold text-[#9C7948] uppercase tracking-[0.25em]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89360]" />
            <span>Corporate Identity & Purpose</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight max-w-4xl mx-auto leading-tight">
            Distance Is Yours. <span className="italic font-normal text-[#9C7948]">Duty Is Ours.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#52524E] font-light max-w-2xl mx-auto leading-relaxed">
            Headquartered in Udaipur, Rajasthan, GroundEye operates as an independent on-ground concierge and asset audit enterprise. We bridge the critical gap between digital listings and tangible physical reality.
          </p>

        </div>
      </section>

      {/* CORE IDENTITY & WHY WE EXIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              centered={false}
              badge="The Genesis"
              title="Why Physical Presence"
              highlight="Matters"
              description="Real estate platforms have digitized listings, photographs, and transactions. Yet the physical asset remains grounded in the soil."
            />

            <div className="space-y-4 text-[#52524E] text-xs sm:text-sm leading-relaxed font-light">
              <p>
                A high-resolution marketing render cannot disclose whether an access road has narrowed, whether neighbor boundaries have crept into the perimeter, or whether a vacant plot has been subjected to unapproved dumping.
              </p>
              <p>
                Similarly, vacation villa owners located in Delhi, Mumbai, or overseas cannot personally inspect whether an incoming guest has arrived, whether air conditioners are leaking, or whether maintenance work was done properly before the weekend.
              </p>
              <p>
                <strong className="text-[#141413] font-semibold">GroundEye was built to solve this exact vulnerability.</strong> We deploy trained, equipped field professionals who inspect, verify, document, and manage on-site tasks in Udaipur with meticulous optical precision and zero personal bias.
              </p>
            </div>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#CFB483]/30 flex items-start gap-3 shadow-sm">
                <AlertCircle className="w-4 h-4 text-[#B89360] shrink-0 mt-0.5" />
                <div className="text-xs text-[#52524E] space-y-0.5 font-light">
                  <span className="font-semibold text-[#141413] block">
                    Our Clear Business Boundary:
                  </span>
                  <p>
                    GroundEye is <strong>NOT</strong> a real estate broker, dealer, or property selling portal. We do not sell real estate or take transaction cuts. We operate strictly as your independent physical eyes and audit team.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#CFB483]/30 shadow-luxury bg-white p-2">
              <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1200&auto=format&fit=crop"
                  alt="Udaipur architectural landscape and ground inspection"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-[#CFB483]/30 backdrop-blur-md text-xs text-[#52524E]">
                  <div className="flex items-center gap-2 text-[#141413] font-semibold mb-0.5">
                    <Target className="w-3.5 h-3.5 text-[#B89360]" />
                    <span>The GroundEye Standard</span>
                  </div>
                  <p className="font-light text-[11px]">
                    Every finding is backed by GPS-tagged optical media, calibrated measurements, and field inspector sign-offs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE OPERATIONAL VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Guiding Principles"
          title="Our Non-Negotiable"
          highlight="Foundations"
          description="Every field audit, concierge task, and rental verification is guided by four core operational principles."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Absolute Neutrality
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              We have no financial interest in whether a transaction proceeds or stalls. We report pure, unaltered facts as observed on site.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <Camera className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Optical Precision
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              We capture unedited 4K footage and GPS-stamped still imagery that reflect true dimensions, natural daylight, and site conditions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Local Grounding
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              Rooted in Udaipur, our field staff understands the physical layout of Girwa tehsil, city sectors, lake perimeters, and industrial belts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <FileCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Accountability
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              Every audit dossier bears a unique verification serial, time-stamped telemetry log, and named field officer attribution.
            </p>
          </div>
        </div>
      </section>

      {/* THREE PILLARS SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#CFB483]/35 shadow-luxury space-y-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono font-semibold text-[#7A5C33] uppercase tracking-[0.2em]">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#141413] font-editorial mt-1">
              Structured Across Three Business Pillars
            </h2>
            <p className="text-xs sm:text-sm text-[#52524E] mt-2 font-light">
              Our operations are disciplined and specialized. We do not dilute our focus with peripheral services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#F4F0E6]">
            <div className="space-y-3 p-5 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/20">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#B89360]" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#141413]">
                  Asset Intelligence
                </h3>
              </div>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Physical property inspections, GPS-timestamped photography, 4K panoramic walkthroughs, road width measurements, and boundary audits.
              </p>
              <Link
                href="/services/asset-intelligence"
                className="text-xs font-semibold text-[#9C7948] hover:text-[#141413] inline-flex items-center gap-1"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/20">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-[#B89360]" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#141413]">
                  Villa & Homestay Custody
                </h3>
              </div>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Two monthly 35-point audits, dampness and seepage checks, secure key custody, guest inventory and turnover checks, and priority breakdown dispatch.
              </p>
              <Link
                href="/services/villa-bnb-care"
                className="text-xs font-semibold text-[#9C7948] hover:text-[#141413] inline-flex items-center gap-1"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3 p-5 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/20">
              <div className="flex items-center gap-2">
                <SearchCheck className="w-4 h-4 text-[#B89360]" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#141413]">
                  Rental Readiness & Key Desk
                </h3>
              </div>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Direct landlord verification, digital property listings, 30-second interior video, physical property visit assistance, and tenant matchmaking.
              </p>
              <Link
                href="/services/fast-rent-scout"
                className="text-xs font-semibold text-[#9C7948] hover:text-[#141413] inline-flex items-center gap-1"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#CFB483]/40 shadow-luxury space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-[#141413] font-editorial">
            Connect With Our Udaipur Operations Desk
          </h2>
          <p className="text-[#52524E] max-w-lg mx-auto text-xs sm:text-sm font-light">
            Have a land parcel to verify, a villa requiring concierge oversight, or a rental scouting requirement in Udaipur? Talk to our team today.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all"
            >
              <span>Initiate Ground Directive</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
