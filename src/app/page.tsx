import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Building2,
  KeyRound,
  SearchCheck,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Camera,
  Ruler,
  Compass,
  Video,
  ExternalLink,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import AuditReportPreview from "@/components/AuditReportPreview";
import GroundEyeEmblem from "@/components/GroundEyeEmblem";
import { servicesData } from "@/data/servicesData";

export default function HomePage() {
  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* HERO SECTION - ARCHITECTURAL EDITORIAL STYLE MATCHING REFERENCE */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-4 pb-12 sm:pb-20">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Brand Eyebrow - GroundEye in Professional Typography & 100% Transparent Emblem */}
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center gap-3 sm:gap-4 mb-2">
              <GroundEyeEmblem size={52} className="hover:scale-105 transition-transform" />
              <h2 className="font-logo text-3xl sm:text-5xl font-bold tracking-tight text-[#141413]">
                Ground<span className="text-[#9C7948] font-normal">Eye</span>
              </h2>
            </div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#7A5C33] font-semibold mt-0.5">
              Udaipur, Rajasthan • Property Intelligence & Custodianship
            </p>
          </div>

          {/* Architectural Hero Visual Frame with Hairline Gold Corner */}
          <div className="relative mx-auto max-w-3xl architectural-frame">
            <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full overflow-hidden rounded-lg shadow-luxury border border-[#CFB483]/30 bg-[#F4F0E6]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                alt="GroundEye luxury architectural asset inspection and concierge in Udaipur"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Subtle decorative gold hairline badge on visual */}
            <div className="absolute top-4 right-4 bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#CFB483]/40 text-[9px] uppercase tracking-[0.2em] font-semibold text-[#7A5C33]">
              Verified Physical Ground Units
            </div>
          </div>

          {/* Editorial Headline & Taglines EXACTLY Matching Reference Inspiration */}
          <div className="pt-6 sm:pt-10 space-y-4 max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight leading-[1.12]">
              A New Perspective. <br />
              <span className="italic font-normal">A New Presence.</span>
            </h1>

            <p className="text-base sm:text-xl text-[#52524E] font-light tracking-wide font-sans">
              Distance is yours, duty is ours.
            </p>

            <div className="pt-1">
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#9C7948]">
                Distance Is Yours. Duty Is Ours.
              </span>
            </div>

            {/* Clear Positioning Statement */}
            <p className="text-xs sm:text-sm text-[#73736D] max-w-xl mx-auto font-light leading-relaxed pt-2">
              GroundEye is an independent on-ground concierge and asset audit enterprise based in Udaipur. We bridge the gap between digital listings and tangible physical reality.
            </p>

            {/* Neutrality Disclaimer Pill */}
            <div className="inline-flex items-center gap-2 text-[10px] text-[#7A5C33] bg-[#F4F0E6] px-3.5 py-1.5 rounded-full border border-[#CFB483]/40 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B89360]" />
              <span>Independent Audit & Concierge • Zero Brokerage • Zero Sales Bias</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md group flex items-center justify-center gap-2"
              >
                <span>Schedule On-Ground Audit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CFB483] transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#F8F5EE] border border-[#CFB483]/40 text-[#141413] text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2"
              >
                <span>Our Three Pillars</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9C7948]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLAR FEATURES BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#CFB483]/30 shadow-luxury grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#141413] font-semibold text-xs tracking-wider uppercase">
              <Camera className="w-4 h-4 text-[#B89360]" />
              <span>GPS Watermarking</span>
            </div>
            <p className="text-[11px] text-[#73736D] font-light leading-relaxed">
              Every photo embedded with satellite coordinates, elevation, and atomic timestamps.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#141413] font-semibold text-xs tracking-wider uppercase">
              <Ruler className="w-4 h-4 text-[#B89360]" />
              <span>Road Width Audits</span>
            </div>
            <p className="text-[11px] text-[#73736D] font-light leading-relaxed">
              Calibrated measuring gauges verify real right-of-way and approach dimensions.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#141413] font-semibold text-xs tracking-wider uppercase">
              <KeyRound className="w-4 h-4 text-[#B89360]" />
              <span>Villa & BnB Concierge</span>
            </div>
            <p className="text-[11px] text-[#73736D] font-light leading-relaxed">
              In-person guest welcomes, secure key handovers, and departure damage logs.
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[#141413] font-semibold text-xs tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-[#B89360]" />
              <span>Zero Broker Conflict</span>
            </div>
            <p className="text-[11px] text-[#73736D] font-light leading-relaxed">
              We never broker sales. We deliver completely objective physical reality.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#9C7948]">
              Why GroundEye Exists
            </div>

            <h2 className="text-3xl sm:text-5xl font-light text-[#141413] font-editorial leading-tight">
              Bridging the Divide Between Digital Claims and{" "}
              <span className="italic font-normal text-[#9C7948]">Physical Reality</span>.
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#52524E] leading-relaxed font-light">
              <p>
                In an era of edited listing photos, exaggerated promotional brochures, and remote property ownership, discovering the ground truth is challenging. Remote landowners, NRI families, luxury homestay hosts, and relocating professionals often face conflicting claims and second-hand accounts.
              </p>
              <p>
                <strong className="text-[#141413] font-semibold">GroundEye changes this in Udaipur.</strong> We are not a property broker, dealer, or speculative portal. We are an operational field service team equipped with optical and measurement tools, dedicated to being your trusted eyes and hands on site.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#F4F0E6] text-[#9C7948] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#141413]">
                    Deep Local Udaipur Grounding
                  </h4>
                  <p className="text-xs text-[#73736D] font-light">
                    Direct knowledge of Girwa tehsil revenue circles, lake belts, urban expansion zones, and hospitality corridors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-[#F4F0E6] text-[#9C7948] mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#141413]">
                    Immutable Evidence, Not Hearsay
                  </h4>
                  <p className="text-xs text-[#73736D] font-light">
                    Satellite GPS telemetry, 4K panoramic video scans, and calibrated physical road width measurements.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#141413] hover:text-[#9C7948] transition-colors group"
              >
                <span>Read our full operational standards</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#B89360]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#CFB483]/30 shadow-luxury bg-white p-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern architectural asset in Udaipur audited by GroundEye"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 border border-[#CFB483]/30 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#7A5C33] uppercase text-[10px]">
                      Operational Ethos
                    </span>
                    <span className="text-[#9C7948] font-mono text-[10px] font-bold">100% Unbiased</span>
                  </div>
                  <p className="text-xs text-[#52524E] mt-1 font-light italic">
                    "We never represent sellers. We never take sales commissions. Our client is the person seeking ground truth."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE THREE BUSINESS PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Specialized Focus"
          title="Our Three"
          highlight="Business Pillars"
          description="GroundEye specializes strictly in three core pillars of on-ground services in Udaipur. Each executed by trained field personnel."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} featured={idx === 0} />
          ))}
        </div>
      </section>

      {/* HOW GROUNDEYE WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#CFB483]/35 p-8 sm:p-12 lg:p-16 shadow-luxury relative overflow-hidden">
          <SectionHeader
            badge="Standard Operating Procedure"
            title="How GroundEye"
            highlight="Executes On-Ground"
            description="From initial assignment intake to verified field dossier delivery, our 4-stage process ensures consistent quality and zero ambiguity."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3 p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/25">
              <span className="text-3xl font-light font-editorial text-[#9C7948]">
                01
              </span>
              <h3 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                Assignment Intake
              </h3>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Submit property boundaries, Khasra numbers, or BnB care instructions. We establish clear objectives and timelines.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/25">
              <span className="text-3xl font-light font-editorial text-[#9C7948]">
                02
              </span>
              <h3 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                Field Mobilization
              </h3>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Our Udaipur field team mobilizes to the physical site equipped with optical gear, distance gauges, and GPS tools.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/25">
              <span className="text-3xl font-light font-editorial text-[#9C7948]">
                03
              </span>
              <h3 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                Physical Audit & Capture
              </h3>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Boundary checks, GPS-watermarked photography, 4K panoramic video, access road measurement, or guest care.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/25">
              <span className="text-3xl font-light font-editorial text-[#9C7948]">
                04
              </span>
              <h3 className="text-sm font-semibold text-[#141413] uppercase tracking-wider">
                Tamper-Proof Delivery
              </h3>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Standardized GroundEye Digital Audit Dossier with uncompressed media access, surveyor notes, and observations.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#141413] hover:text-[#9C7948] transition-colors"
            >
              <span>Explore our complete field methodologies</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B89360]" />
            </Link>
          </div>
        </div>
      </section>

      {/* SAMPLE AUDIT REPORT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              centered={false}
              badge="Trust & Transparency"
              title="Verified Evidence,"
              highlight="Not Assumptions"
              description="Review a sample output of what our field auditors generate on-ground in Udaipur. Every deliverable is calibrated, watermarked, and tamper-resistant."
            />

            <div className="space-y-3 text-xs text-[#52524E] font-light">
              <div className="p-4 rounded-xl bg-white border border-[#CFB483]/30 space-y-1">
                <div className="flex items-center gap-2 text-[#141413] font-semibold">
                  <Camera className="w-4 h-4 text-[#B89360]" />
                  <span>GPS Telemetry Watermarking</span>
                </div>
                <p className="text-[11px] text-[#73736D]">
                  Every photo is embedded with satellite latitude, longitude, compass azimuth, and UTC time stamps.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#CFB483]/30 space-y-1">
                <div className="flex items-center gap-2 text-[#141413] font-semibold">
                  <Ruler className="w-4 h-4 text-[#B89360]" />
                  <span>Physical Road & Boundary Checks</span>
                </div>
                <p className="text-[11px] text-[#73736D]">
                  Direct physical measurement of approach roads, right-of-way bottlenecks, and boundary demarcation pillars.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#CFB483]/30 space-y-1">
                <div className="flex items-center gap-2 text-[#141413] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#B89360]" />
                  <span>Independent Third-Party Neutrality</span>
                </div>
                <p className="text-[11px] text-[#73736D]">
                  Because GroundEye does not sell property or take broker cuts, our reports have zero commercial bias.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AuditReportPreview />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE GROUNDEYE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The GroundEye Advantage"
          title="Why Remote Owners Trust"
          highlight="GroundEye"
          description="Built to eliminate distance barriers and ensure total peace of mind for properties located in Udaipur."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Absolute Independence
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              We never act as brokers, dealers, or property sellers. We represent strictly your interests on the ground with zero conflict of interest.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Precision Geolocation
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              High-accuracy GNSS coordinates, compass bearings, and satellite overlays confirm exactly what parcel was audited.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <Video className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Uncut 4K Visual Records
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              Stabilized 4K panoramic walkthroughs and unedited 30-second interior videos provide full optical truth without deceptive angles.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Local Udaipur Coverage
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              From Udaipur City Center to Sukher, Bhuwana, Shobhagpura, Fatehsagar, Goverdhan Vilas, and peri-urban rural tracts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <KeyRound className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Responsible Key Custody
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              Secure physical handling of keys, verified guest check-in orientations, and immediate departure damage inspection reports.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#CFB483]/30 space-y-3 shadow-sm hover:shadow-luxury transition-all">
            <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948]">
              <Building2 className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-[#141413] uppercase tracking-wider">
              Standardized Dossiers
            </h3>
            <p className="text-xs text-[#52524E] font-light leading-relaxed">
              Clear, structured digital PDF dossiers with high-resolution cloud links suitable for personal review or legal records.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#CFB483]/40 p-8 sm:p-12 lg:p-16 text-center space-y-6 shadow-luxury">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#CFB483]/40 text-[10px] text-[#7A5C33] font-mono uppercase tracking-widest">
            <MapPin className="w-3 h-3 text-[#B89360]" />
            <span>Operational Base: Udaipur, Rajasthan</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-[#141413] font-editorial max-w-3xl mx-auto leading-tight">
            Need Boots on the Ground in Udaipur?
          </h2>

          <p className="text-[#52524E] text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
            Whether you require an urgent physical property inspection, reliable guest concierge for your villa, or verified rental scouting, GroundEye is ready to deploy.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Contact Field Operations</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-[#F4F0E6] border border-[#CFB483]/40 text-[#141413] text-xs uppercase tracking-[0.2em] font-semibold transition-all"
            >
              <span>Review The Three Pillars</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
