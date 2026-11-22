import React from "react";
import Link from "next/link";
import GroundEyeEmblem from "@/components/GroundEyeEmblem";
import {
  ShieldCheck,
  MapPin,
  Mail,
  Clock,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#CFB483]/30 text-[#52524E] relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <GroundEyeEmblem size={44} className="group-hover:scale-105 transition-transform" />
              <div className="flex flex-col">
                <span className="font-logo text-2xl sm:text-3xl font-bold tracking-tight text-[#141413] group-hover:text-[#9C7948] transition-colors leading-none">
                  Ground<span className="text-[#9C7948] font-medium">Eye</span>
                </span>
                <span className="text-[9px] tracking-[0.24em] uppercase text-[#7A5C33] font-medium mt-1">
                  Property Intelligence & Custodianship
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#52524E] leading-relaxed pr-4 font-light">
              GroundEye is an independent on-ground concierge and asset audit enterprise headquartered in Udaipur, Rajasthan. We serve as your objective, physical eyes on the ground—delivering verified photographic, GPS-timestamped, and concierge intelligence.
            </p>

            <div className="pt-1">
              <p className="text-xs font-serif italic text-[#7A5C33]">
                "Distance is yours, duty is ours."
              </p>
            </div>

            {/* Operating Guarantees */}
            <div className="pt-2 space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-[#242422]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89360] shrink-0" />
                <span>100% Unbiased Audits — Zero Broker Conflict</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#242422]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89360] shrink-0" />
                <span>Tamper-Proof GPS & Geolocation Watermarks</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#242422]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89360] shrink-0" />
                <span>Dedicated Local Field Teams in Udaipur</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#141413] font-sans border-l-2 border-[#B89360] pl-2.5">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link href="/" className="text-[#52524E] hover:text-[#141413] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#52524E] hover:text-[#141413] transition-colors">
                  About GroundEye
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#52524E] hover:text-[#141413] transition-colors">
                  Our Three Services
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="text-[#52524E] hover:text-[#141413] transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#52524E] hover:text-[#141413] transition-colors">
                  Contact Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* The Three Pillars */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#141413] font-sans border-l-2 border-[#B89360] pl-2.5">
              Three Pillars
            </h3>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <Link
                  href="/services/asset-intelligence"
                  className="text-[#52524E] hover:text-[#141413] transition-colors flex items-center justify-between group"
                >
                  <span>Asset Intelligence</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B89360]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/villa-bnb-care"
                  className="text-[#52524E] hover:text-[#141413] transition-colors flex items-center justify-between group"
                >
                  <span>Villa & BnB Care</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B89360]" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fast-rent-scout"
                  className="text-[#52524E] hover:text-[#141413] transition-colors flex items-center justify-between group"
                >
                  <span>Fast-Rent Scout</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#B89360]" />
                </Link>
              </li>
            </ul>
            <div className="pt-2">
              <p className="text-[11px] text-[#73736D] font-mono">
                Serving Udaipur Urban & Peri-Urban Sectors
              </p>
            </div>
          </div>

          {/* Udaipur Hub */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#141413] font-sans border-l-2 border-[#B89360] pl-2.5">
              Udaipur Office
            </h3>
            <ul className="space-y-2.5 text-xs text-[#52524E] font-light">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B89360] shrink-0 mt-0.5" />
                <span>
                  Parshav Colony, Back Side of Navdeep Academy, Near Kalka Mata Road, Pahada, Udaipur, Rajasthan 313001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B89360] shrink-0" />
                <span className="hover:text-[#141413] transition-colors">
                  contact.groundeye@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[#B89360] shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sun: 8:30 AM - 7:30 PM</p>
                  <p className="text-[10px] text-[#7A5C33]">
                    Emergency Villa Concierge: Active 24/7
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Clarification Banner */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-[#CFB483]/30 text-xs text-[#52524E]">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#B89360] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <p className="font-semibold text-[#141413]">
                Official Business Clarification & Entity Identity
              </p>
              <p className="leading-relaxed text-[11px] font-light">
                GroundEye operates strictly as an independent on-ground concierge and asset audit agency in Udaipur, Rajasthan. GroundEye is <strong className="text-[#141413] font-semibold">NOT</strong> a real estate broker, property dealer, listing portal, or property marketing portal. We do not sell real estate or collect transaction commissions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#CFB483]/20 flex flex-col sm:flex-row items-center justify-between text-xs text-[#73736D] gap-4">
          <p>© {currentYear} GROUNDEYE. Distance Is Yours. Duty Is Ours.</p>
          <div className="flex items-center space-x-4 text-[11px] text-[#73736D]">
            <span>Udaipur, Rajasthan</span>
            <span className="w-1 h-1 rounded-full bg-[#CFB483]" />
            <span>Asset Intelligence</span>
            <span className="w-1 h-1 rounded-full bg-[#CFB483]" />
            <span>Villa & BnB Care</span>
            <span className="w-1 h-1 rounded-full bg-[#CFB483]" />
            <span>Fast-Rent Scout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
