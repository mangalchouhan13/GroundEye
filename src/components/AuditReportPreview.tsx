"use client";

import React, { useState } from "react";
import GroundEyeEmblem from "@/components/GroundEyeEmblem";
import {
  ShieldCheck,
  MapPin,
  Calendar,
  Ruler,
  Camera,
  Compass,
  CheckCircle2,
} from "lucide-react";

export default function AuditReportPreview() {
  const [activeTab, setActiveTab] = useState<"overview" | "gps" | "measurements">("overview");

  return (
    <div className="bg-white border border-[#CFB483]/35 rounded-2xl shadow-luxury overflow-hidden">
      {/* Top Dossier Header Bar */}
      <div className="bg-[#FAF8F5] px-6 py-4 border-b border-[#CFB483]/25 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <GroundEyeEmblem size={34} />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#141413] tracking-wider uppercase">
                GroundEye Field Dossier
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#EFECE3] text-[#7A5C33] border border-[#CFB483]/50">
                SAMPLE • NOT A REAL AUDIT
              </span>
            </div>
            <p className="text-[11px] text-[#73736D] font-mono">
              REF: GE-UDR-AUD-8821 • Cadastral Parcel Audit
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1 bg-[#F4F0E6] p-1 rounded-full text-xs">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
              activeTab === "overview"
                ? "bg-[#141413] text-white shadow-sm"
                : "text-[#52524E] hover:text-[#141413]"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("gps")}
            className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
              activeTab === "gps"
                ? "bg-[#141413] text-white shadow-sm"
                : "text-[#52524E] hover:text-[#141413]"
            }`}
          >
            GPS Telemetry
          </button>
          <button
            onClick={() => setActiveTab("measurements")}
            className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all ${
              activeTab === "measurements"
                ? "bg-[#141413] text-white shadow-sm"
                : "text-[#52524E] hover:text-[#141413]"
            }`}
          >
            Road Width & Boundary
          </button>
        </div>
      </div>

      {/* Dossier Body Content */}
      <div className="p-6 sm:p-8 space-y-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/25 space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#9C7948]">
                  Inspected Geolocation
                </span>
                <p className="text-xs font-semibold text-[#141413] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B89360]" />
                  Sukher Industrial Extension, Udaipur
                </p>
                <p className="text-[10px] text-[#73736D] font-mono">Tehsil: Girwa | Pin: 313001</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/25 space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#9C7948]">
                  Audit Timestamp
                </span>
                <p className="text-xs font-semibold text-[#141413] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#B89360]" />
                  14 Nov 2026 • 10:42:18 IST
                </p>
                <p className="text-[10px] text-[#73736D] font-mono">Atomic GPS Time Stamp Sync</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/25 space-y-1">
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#9C7948]">
                  Field Unit Attribution
                </span>
                <p className="text-xs font-semibold text-[#141413] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B89360]" />
                  Field Inspection Team #04
                </p>
                <p className="text-[10px] text-[#73736D] font-mono">Calibrated Rolling Distance Gauge</p>
              </div>
            </div>

            {/* Photographic Telemetry Frame */}
            <div className="relative rounded-xl overflow-hidden border border-[#CFB483]/30 bg-[#FAF8F5] aspect-[4/3] sm:aspect-video max-h-80 sm:max-h-72">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50" />

              {/* Architectural Telemetry HUD */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[9px] sm:text-[10px] font-mono text-white bg-black/50 px-2 sm:px-3 py-1.5 rounded-xl sm:rounded-full border border-white/20 backdrop-blur-md">
                <span className="w-full sm:w-auto flex items-center gap-1.5 text-[#DFCBA6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CFB483] animate-pulse" />
                  OPTICAL CAM 01 • 4K UHD 60FPS
                </span>
                <span>LAT: 24.6201° N | LNG: 73.7153° E</span>
                <span className="sm:ml-auto">ALT: 598m ASL</span>
              </div>

              {/* Watermark HUD */}
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 bg-[#141413]/90 text-white p-2.5 sm:p-3 rounded-xl border border-[#CFB483]/30 text-[10px] sm:text-xs backdrop-blur-md flex flex-col items-start sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="font-semibold text-[11px] sm:text-xs leading-snug tracking-wider text-white">
                    ILLUSTRATIVE SAMPLE • NOT REAL AUDIT EVIDENCE
                  </p>
                  <p className="text-slate-400 text-[9px] sm:text-[10px] leading-relaxed font-mono mt-1">
                    Bearing: 184° S (True North Calibrated) | Frontage Width: 30.2 ft
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[9px] font-mono bg-[#B89360] text-white font-bold">
                  SAMPLE IMAGE
                </span>
              </div>
            </div>

            {/* Key Findings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/20 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89360] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#141413]">Boundary Pillars Intact:</span>
                  <p className="text-[#52524E] mt-0.5 text-[11px] leading-relaxed">
                    Physical stone markers verified at all perimeter vertices; zero civil encroachment detected.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/20 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89360] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#141413]">Approach Road Width:</span>
                  <p className="text-[#52524E] mt-0.5 text-[11px] leading-relaxed">
                    Measured front approach road width: 30.2 feet clear bituminous tarmac with unhindered heavy vehicle turning radius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "gps" && (
          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/25 space-y-3 text-xs">
            <h4 className="font-semibold text-[#141413] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#B89360]" />
              Geodetic Satellite Telemetry Record (WGS 84 Datum)
            </h4>
            <p className="text-[#52524E] text-[11px] leading-relaxed">
              GroundEye field cameras log raw satellite metadata cross-verified against multi-constellation GNSS (GPS + GLONASS + NavIC).
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
              <div className="p-2.5 rounded-lg bg-white border border-[#CFB483]/25">
                <span className="text-[9px] text-[#73736D] block">Latitude</span>
                <span className="text-[#141413] font-bold">24.62014° N</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-[#CFB483]/25">
                <span className="text-[9px] text-[#73736D] block">Longitude</span>
                <span className="text-[#141413] font-bold">73.71532° E</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-[#CFB483]/25">
                <span className="text-[9px] text-[#73736D] block">Elevation</span>
                <span className="text-[#141413] font-bold">598.2 m</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-[#CFB483]/25">
                <span className="text-[9px] text-[#73736D] block">DOP Accuracy</span>
                <span className="text-[#9C7948] font-bold">± 1.2 meters</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === "measurements" && (
          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#CFB483]/25 space-y-3 text-xs">
            <h4 className="font-semibold text-[#141413] flex items-center gap-2">
              <Ruler className="w-4 h-4 text-[#B89360]" />
              Physical Road & Perimeter Measurements
            </h4>
            <p className="text-[#52524E] text-[11px]">
              Direct physical measurements using calibrated digital rolling wheels and laser rangefinders. Never relying on secondary satellite approximations.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#CFB483]/20">
                <span className="text-[#52524E]">Frontage Access Road Width</span>
                <span className="text-[#141413] font-mono font-bold">30.2 ft / 9.20 m</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#CFB483]/20">
                <span className="text-[#52524E]">Clear Road Setback to Gate</span>
                <span className="text-[#141413] font-mono font-bold">8.5 ft / 2.59 m</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#CFB483]/20">
                <span className="text-[#52524E]">Front Boundary Linear Span</span>
                <span className="text-[#141413] font-mono font-bold">62.0 ft / 18.89 m</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-6 py-3 bg-[#FAF8F5] border-t border-[#CFB483]/20 flex items-center justify-between text-[11px] text-[#73736D]">
        <span>Illustrative Sample Dossier • Not a Real Property Audit</span>
      </div>
    </div>
  );
}
