import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Camera,
  Ruler,
  Compass,
  CheckCircle2,
  ArrowRight,
  Layers,
  Lock,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "How We Work | On-Ground Field Methodology | GroundEye Udaipur",
  description:
    "Distance is yours, duty is ours. Learn about GroundEye's systematic on-ground audit and concierge lifecycle in Udaipur: field equipment standards and GPS watermarking.",
};

export default function HowWeWorkPage() {
  const workflowSteps = [
    {
      num: "01",
      title: "Intake & Geolocation Scoping",
      desc: "You submit property coordinates, cadastral/plot details, Khasra numbers, or BnB care instructions through our secure directive intake. Our operations coordinator confirms access feasibility in Udaipur within 2 hours.",
      details: [
        "Collection of satellite boundaries & access landmarks",
        "Clear definition of audit deliverables or guest concierge schedule",
        "Confirmation of municipal jurisdiction in Udaipur",
      ],
    },
    {
      num: "02",
      title: "Field Deployment & Tool Calibration",
      desc: "Our dedicated Udaipur field personnel mobilize directly to the property site equipped with optical gear, laser distance meters, calibrated rolling wheels, and GNSS satellite receivers.",
      details: [
        "Time-synchronization with UTC atomic clock",
        "Calibration of optical sensors and laser rangefinders",
        "Verification of physical approach roads and right-of-way",
      ],
    },
    {
      num: "03",
      title: "Physical Audit & Optical Capture",
      desc: "Executing the standardized on-site inspection protocol. We photograph perimeter boundaries, watermark GPS telemetry, film unedited 4K panoramic walkthroughs, and record physical measurements.",
      details: [
        "Multi-angle boundary pillar inspection",
        "Frontage access road width verification",
        "Uncut 4K panoramic visual scan of site terrain and structures",
      ],
    },
    {
      num: "04",
      title: "Tamper-Evident Dossier Delivery",
      desc: "The field data is compiled into a standardized GroundEye Digital Audit Dossier. You receive immediate electronic access to high-resolution media, surveyor notes, and actionable observations.",
      details: [
        "Comprehensive PDF dossier with executive findings summary",
        "Direct cloud link to raw, uncompressed 4K video footage",
        "Named field auditor attribution and verification seal",
      ],
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* Hero Banner */}
      <section className="relative py-12 sm:py-20 border-b border-[#CFB483]/30 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#CFB483]/40 text-[10px] font-semibold text-[#9C7948] uppercase tracking-[0.25em]">
            <Layers className="w-3.5 h-3.5 text-[#B89360]" />
            <span>Field Methodologies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight max-w-4xl mx-auto leading-tight">
            How GroundEye <span className="italic font-normal text-[#9C7948]">Works</span>
          </h1>

          <p className="text-sm sm:text-base text-[#52524E] font-light max-w-2xl mx-auto leading-relaxed">
            Our systematic 4-phase lifecycle ensures that every field audit, villa concierge task, and rental scout in Udaipur is executed with scientific precision and complete transparency.
          </p>

          <p className="text-xs font-serif italic text-[#7A5C33] pt-1">
            "Distance is yours, duty is ours."
          </p>
        </div>
      </section>

      {/* 4-PHASE DETAILED LIFECYCLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Execution Lifecycle"
          title="From Directive to"
          highlight="Verified Delivery"
          description="A structured workflow designed to provide absolute confidence for remote property owners and hosts."
        />

        <div className="mt-14 space-y-6">
          {workflowSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#CFB483]/30 hover:border-[#B89360] shadow-sm hover:shadow-luxury transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-2">
                <span className="text-5xl sm:text-6xl font-light font-editorial text-[#9C7948] block">
                  {step.num}
                </span>
                <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#7A5C33] mt-1 block">
                  Phase {step.num}
                </span>
              </div>

              <div className="lg:col-span-6 space-y-2">
                <h3 className="text-xl font-light text-[#141413] font-editorial">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#52524E] font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="lg:col-span-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-2">
                <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#9C7948]">
                  Key Milestones:
                </p>
                <ul className="space-y-1.5 text-xs text-[#52524E] font-light">
                  {step.details.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B89360] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HARDWARE & OPTICAL STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#CFB483]/35 p-8 sm:p-12 shadow-luxury space-y-10">
          <SectionHeader
            badge="Field Equipment"
            title="Our On-Ground"
            highlight="Audit Toolset"
            description="We deploy professional optical and physical surveying equipment to capture ground truth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-[#F4F0E6]">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#B89360] flex items-center justify-center text-[#9C7948]">
                <Camera className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#141413]">
                4K UHD Optical Gear
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                High dynamic range image sensors with true-to-life focal lengths. No misleading ultra-wide barrel distortion.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#B89360] flex items-center justify-center text-[#9C7948]">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#141413]">
                Multi-GNSS Telemetry
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Direct satellite telemetry watermarking logging latitude, longitude, altitude, and magnetic compass bearing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#B89360] flex items-center justify-center text-[#9C7948]">
                <Ruler className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#141413]">
                Rolling Measuring Gauges
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                Calibrated digital distance wheels for precise measurement of frontage access roads and right-of-way bottlenecks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#CFB483]/20 space-y-3">
              <div className="w-9 h-9 rounded-full bg-white border border-[#B89360] flex items-center justify-center text-[#9C7948]">
                <Lock className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#141413]">
                Encrypted Client Vault
              </h4>
              <p className="text-xs text-[#52524E] font-light leading-relaxed">
                All photos, 4K walkthroughs, and inspection logs are archived in private cloud storage with restricted client access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#CFB483]/40 shadow-luxury space-y-6">
          <h2 className="text-3xl sm:text-4xl font-light text-[#141413] font-editorial">
            Ready to Deploy GroundEye in Udaipur?
          </h2>
          <p className="text-[#52524E] max-w-lg mx-auto text-xs sm:text-sm font-light">
            Our field operations desk is ready to review your property coordinates and prepare your on-ground directive.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#141413] hover:bg-[#2B2B28] text-white text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all"
            >
              <span>Submit Assignment Details</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CFB483]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
