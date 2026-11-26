import React from "react";
import {
  MapPin,
  Mail,
  Clock,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact GroundEye | On-Ground Concierge & Asset Audit | Udaipur",
  description:
    "Distance is yours, duty is ours. Contact GroundEye in Udaipur, Rajasthan. Schedule an on-ground physical asset inspection, engage villa concierge care, or request verified rental scouting.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ service?: string }>;
}) {
  const selectedService = (await searchParams)?.service;

  const faqs = [
    {
      q: "What geographic areas in and around Udaipur does GroundEye cover?",
      a: "Our field units operate throughout Udaipur Municipal Corporation limits as well as the expanding peri-urban belt—including Sukher, Bhuwana, Shobhagpura, Fatehsagar, Goverdhan Vilas, Kodiyat, Debari, Madri, Titardi, and surrounding agricultural/revenue parcels in Girwa Tehsil.",
    },
    {
      q: "How quickly can GroundEye deploy a field auditor to a property?",
      a: "Standard field audits are mobilized within 24 to 48 hours following assignment scoping and coordinate intake. For emergency villa concierge assistance or urgent guest check-ins, our local on-call team responds swiftly.",
    },
    {
      q: "Is GroundEye involved in real estate sales or property brokerage?",
      a: "No. GroundEye maintains strict operational neutrality. We do not sell properties, broker real estate transactions, or represent developers. Our sole purpose is delivering factual physical field audits and reliable concierge execution.",
    },
    {
      q: "How are the audit reports and 4K media files delivered?",
      a: "Audit dossiers are delivered as standardized, tamper-evident digital PDFs complete with GPS coordinates, compass bearings, and surveyor notes. Full uncompressed 4K video scans and high-resolution photo galleries are accessible via secure cloud links.",
    },
    {
      q: "Can I request specific checkpoints during the inspection?",
      a: "Yes. In addition to our standardized 5-point physical audit, you can specify custom directives such as testing specific electrical panels, inspecting boundary fences along a particular neighbor's boundary, or verifying local water supply points.",
    },
  ];

  const udaipurLocalities = [
    "Sukher & Industrial Zone",
    "Bhuwana & Celebration Area",
    "Shobhagpura & New 100 Feet Road",
    "Fatehsagar & Rani Road",
    "Goverdhan Vilas & Sector 14",
    "Kodiyat & Farmhouse Belts",
    "Debari & Airport Corridor",
    "City Palace & Lake Pichola Periphery",
    "Titardi & Hiran Magri Sectors",
    "Madri & Transport Nagar",
  ];

  return (
    <div className="space-y-24 sm:space-y-36 pb-24">
      {/* Contact Hero */}
      <section className="relative py-12 sm:py-20 border-b border-[#CFB483]/30 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#CFB483]/40 text-[10px] font-semibold text-[#9C7948] uppercase tracking-[0.25em]">
            <MapPin className="w-3.5 h-3.5 text-[#B89360]" />
            <span>Field Operations Desk</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light text-[#141413] font-editorial tracking-tight max-w-4xl mx-auto leading-tight">
            Contact <span className="italic font-normal text-[#9C7948]">GroundEye</span>
          </h1>

          <p className="text-sm sm:text-base text-[#52524E] font-light max-w-2xl mx-auto leading-relaxed">
            Headquartered in Udaipur, Rajasthan. Speak directly with our field coordinators to schedule an asset inspection, set up villa care, or request rental scouting.
          </p>

          <p className="text-xs font-serif italic text-[#7A5C33] pt-1">
            "Distance is yours, duty is ours."
          </p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-semibold text-[#7A5C33] uppercase tracking-[0.2em]">
                Direct Field Hub
              </span>
              <h2 className="text-3xl font-light text-[#141413] font-editorial">
                Udaipur Operations
              </h2>
              <p className="text-xs sm:text-sm text-[#52524E] font-light leading-relaxed">
                Our operations team is physically based in Udaipur to ensure rapid deployment and intimate familiarity with local land records and geography.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              <div className="p-5 rounded-2xl bg-white border border-[#CFB483]/30 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#141413]">
                    Physical Hub Address
                  </h4>
                  <p className="text-xs text-[#52524E] font-light leading-relaxed">
                    Kalka Mata Road, Udaipur (Rajasthan), 313001
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#CFB483]/30 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#141413]">
                    Official Correspondence
                  </h4>
                  <a
                    href="mailto:contact.groundeye@gmail.com"
                    className="text-xs text-[#52524E] font-light hover:text-[#9C7948]"
                  >
                    contact.groundeye@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#CFB483]/30 flex items-start gap-3.5 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-[#FAF8F5] border border-[#B89360] flex items-center justify-center text-[#9C7948] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#141413]">
                    Operational Hours
                  </h4>
                  <p className="text-xs text-[#52524E] font-light">
                    Monday - Sunday: 8:30 AM - 7:30 PM IST
                  </p>
                  <p className="text-[10px] text-[#7A5C33] font-mono">
                    Emergency Villa & BnB Assistance: Active 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Coverage sectors */}
            <div className="p-5 rounded-2xl bg-white border border-[#CFB483]/30 space-y-2.5 shadow-sm">
              <h4 className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#7A5C33] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#B89360]" />
                Key Coverage Sectors Across Udaipur
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {udaipurLocalities.map((loc, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2.5 py-1 rounded-full bg-[#FAF8F5] border border-[#CFB483]/25 text-[#52524E] font-light"
                  >
                    {loc}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact Buttons */}
          <div id="contact-form" className="lg:col-span-7 scroll-mt-28">
            <ContactForm preselectedService={selectedService} />
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Clarifications"
          title="Frequently Asked"
          highlight="Questions"
          description="Straight answers regarding our operational scope, neutrality, and deliverable standards."
        />

        <div className="mt-12 max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white hover:bg-[#FCFAF7] border border-[#CFB483]/30 hover:border-[#B89360] space-y-1.5 shadow-sm hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="flex items-start gap-3">
                <HelpCircle className="w-4 h-4 text-[#B89360] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-[#141413] transition-all duration-300 group-hover:font-bold group-hover:text-[#7A5C33]">
                    {faq.q}
                  </h3>
                  <p className="text-xs text-[#52524E] font-light leading-relaxed transition-all duration-500 ease-in-out group-hover:text-[#3F3F3A] [text-shadow:0_0_0_transparent,_0_0_0_transparent] group-hover:[text-shadow:0.25px_0_0_currentColor,_-0.25px_0_0_currentColor]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
