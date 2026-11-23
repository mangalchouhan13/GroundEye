"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  KeyRound,
  SearchCheck,
  ArrowRight,
} from "lucide-react";
import GroundEyeLogo from "@/components/GroundEyeLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About GroundEye", href: "/about" },
    {
      name: "Our Services",
      href: "/services",
      hasDropdown: true,
      subItems: [
        {
          name: "Asset Intelligence",
          desc: "Physical property inspections, GPS photos & 4K walkthroughs",
          href: "/services/asset-intelligence",
          icon: Building2,
          badge: "Pillar 01",
        },
        {
          name: "Villa & Homestay Custody",
          desc: "Monthly 35-point audits, secure keys & priority dispatch",
          href: "/services/villa-bnb-care",
          icon: KeyRound,
          badge: "Pillar 02",
        },
        {
          name: "Rental Readiness & Key Desk",
          desc: "Monthly checks, key handovers & rental scouting",
          href: "/services/fast-rent-scout",
          icon: SearchCheck,
          badge: "Pillar 03",
        },
      ],
    },
    { name: "How We Work", href: "/how-we-work" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#CFB483]/30 shadow-sm py-3.5"
          : "bg-[#FAF8F5]/85 backdrop-blur-sm border-b border-[#CFB483]/20 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Official GroundEye Logo Emblem + Typography */}
          <Link href="/" className="group transition-transform active:scale-[0.99]">
            <GroundEyeLogo size="md" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium transition-colors flex items-center gap-1 ${
                        pathname.startsWith("/services")
                          ? "text-[#141413] font-semibold border-b border-[#B89360]"
                          : "text-[#52524E] hover:text-[#141413]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 text-[#9C7948] ${
                          servicesDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-80 pt-2 transition-all">
                        <div className="bg-[#FFFFFF] border border-[#CFB483]/35 rounded-xl shadow-xl p-2.5 backdrop-blur-xl">
                          <div className="px-3 py-2 border-b border-[#FAF8F5] mb-1.5">
                            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9C7948]">
                              Three Core Pillars
                            </p>
                            <p className="text-xs text-[#73736D]">
                              Verified on-ground concierge & audit services
                            </p>
                          </div>
                          {link.subItems?.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={`flex items-start gap-3 p-2.5 rounded-lg transition-colors group ${
                                  pathname === sub.href
                                    ? "bg-[#F8F5EE] text-[#141413]"
                                    : "hover:bg-[#FCFAF7] text-[#52524E] hover:text-[#141413]"
                                }`}
                              >
                                <div className="p-2 rounded-md bg-[#FAF8F5] border border-[#CFB483]/40 text-[#9C7948] group-hover:border-[#9C7948] transition-colors">
                                  <SubIcon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-[#141413] group-hover:text-[#9C7948]">
                                      {sub.name}
                                    </span>
                                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F4F0E6] text-[#7A5C33] font-mono">
                                      {sub.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-[#73736D] line-clamp-1 mt-0.5">
                                    {sub.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                          <div className="pt-2 mt-1 border-t border-[#F8F5EE]">
                            <Link
                              href="/services"
                              className="flex items-center justify-between px-3 py-1 text-xs font-semibold text-[#9C7948] hover:text-[#141413] transition-colors"
                            >
                              <span>Explore All Services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                    isActive
                      ? "text-[#141413] font-semibold border-b border-[#B89360]"
                      : "text-[#52524E] hover:text-[#141413]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#141413] hover:bg-[#2B2B28] rounded-full transition-all shadow-sm group"
            >
              <span>Schedule Audit</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 text-[#CFB483]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              href="/contact"
              className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-[#141413] text-white"
            >
              Audit
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg bg-white border border-[#CFB483]/30 text-[#141413] hover:bg-[#F8F5EE] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#141413]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#CFB483]/30 px-5 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2 text-sm font-medium uppercase tracking-wider ${
                pathname === "/" ? "text-[#141413] font-bold" : "text-[#52524E]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-3 py-2 text-sm font-medium uppercase tracking-wider ${
                pathname === "/about" ? "text-[#141413] font-bold" : "text-[#52524E]"
              }`}
            >
              About GroundEye
            </Link>

            <div className="pt-2 pb-1 px-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9C7948] mb-1.5">
                Our Three Pillars
              </p>
              <div className="space-y-1 pl-2 border-l border-[#CFB483]/40">
                <Link
                  href="/services/asset-intelligence"
                  className="flex items-center gap-2 py-1.5 text-xs text-[#52524E] hover:text-[#141413]"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#9C7948]" />
                  <span>Asset Intelligence</span>
                </Link>
                <Link
                  href="/services/villa-bnb-care"
                  className="flex items-center gap-2 py-1.5 text-xs text-[#52524E] hover:text-[#141413]"
                >
                  <KeyRound className="w-3.5 h-3.5 text-[#9C7948]" />
                  <span>Villa & Homestay Custody</span>
                </Link>
                <Link
                  href="/services/fast-rent-scout"
                  className="flex items-center gap-2 py-1.5 text-xs text-[#52524E] hover:text-[#141413]"
                >
                  <SearchCheck className="w-3.5 h-3.5 text-[#9C7948]" />
                  <span>Rental Readiness & Key Desk</span>
                </Link>
              </div>
            </div>

            <Link
              href="/how-we-work"
              className={`block px-3 py-2 text-sm font-medium uppercase tracking-wider ${
                pathname === "/how-we-work" ? "text-[#141413] font-bold" : "text-[#52524E]"
              }`}
            >
              How We Work
            </Link>
            <Link
              href="/contact"
              className={`block px-3 py-2 text-sm font-medium uppercase tracking-wider ${
                pathname === "/contact" ? "text-[#141413] font-bold" : "text-[#52524E]"
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-[#CFB483]/30">
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#141413] text-white font-semibold text-xs uppercase tracking-wider shadow-md"
            >
              <span>Schedule Field Audit</span>
              <ArrowRight className="w-4 h-4 text-[#CFB483]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
