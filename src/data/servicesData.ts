export interface ServicePillar {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  tagline: string;
  badge: string;
  iconName: string;
  heroImage: string;
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  deliverables: string[];
  targetAudience: string[];
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const servicesData: ServicePillar[] = [
  {
    id: "asset-intelligence",
    slug: "asset-intelligence",
    title: "Asset Intelligence",
    subtitle: "On-Ground Property Audits & Verification",
    shortDescription:
      "Physical inspections, GPS-timestamped imagery, 4K panoramic walkthroughs, road width measurements, and boundary audits across Udaipur.",
    tagline: "Unbiased physical ground truths for remote landowners, investors, and family estates.",
    badge: "Pillar 01",
    iconName: "ShieldCheck",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Physical Property Inspections",
        description:
          "Comprehensive on-site ground audits conducted by trained field auditors. We evaluate structural presence, physical condition, access roads, and current occupancy.",
        icon: "Building2",
      },
      {
        title: "GPS-Timestamped Photographs",
        description:
          "Every high-resolution photo is watermarked with immutable satellite GPS coordinates, elevation, compass bearing, and precise UTC timestamps.",
        icon: "Camera",
      },
      {
        title: "4K Panoramic Video Walkthroughs",
        description:
          "Cinematic yet unedited 4K 60fps stabilized exterior and interior walkthroughs providing complete situational awareness of the asset and immediate surroundings.",
        icon: "Video",
      },
      {
        title: "Road Width Measurements",
        description:
          "Accurate physical measurements of access roads, right-of-way bottlenecks, approach lane dimensions, and municipal road demarcations using calibrated rolling gauges.",
        icon: "Ruler",
      },
      {
        title: "Property Boundary & Site Audits",
        description:
          "Physical perimeter inspections to check boundary walls, fencing integrity, neighbor encroachments, soil terrain observations, and utility connections.",
        icon: "Compass",
      },
    ],
    deliverables: [
      "Standardized GroundEye Digital Audit Dossier (PDF)",
      "High-Resolution GPS-watermarked photo gallery",
      "Cloud access to raw 4K panoramic video walkthrough",
      "Field surveyor road width & access report",
      "Perimeter & boundary condition evaluation",
      "Immediate anomaly & encroachment alert notifications",
    ],
    targetAudience: [
      "Non-Resident Indians (NRIs) with ancestral or acquired land in Udaipur",
      "Remote investors evaluating vacant plots, commercial plots, or residential assets",
      "Out-of-state property buyers requiring neutral pre-transaction verification",
      "Legal counsel & financial institutions needing verifiable asset status evidence",
    ],
    workflow: [
      {
        step: "01",
        title: "Scope & Geolocation Intake",
        description: "Submit property boundaries, Khasra/Plot details, and specific focus areas for our audit team.",
      },
      {
        step: "02",
        title: "Field Auditor Deployment",
        description: "Our dedicated Udaipur field inspection unit travels directly to the property site with optical & measurement gear.",
      },
      {
        step: "03",
        title: "Physical Audit & Optical Capture",
        description: "Executing the standardized inspection checklist, GPS logging, road measuring, and perimeter checks.",
      },
      {
        step: "04",
        title: "Verified Dossier Delivery",
        description: "A tamper-evident, detailed audit report with cloud-hosted media delivered directly to your portal and email.",
      },
    ],
  },
  {
    id: "villa-bnb-care",
    slug: "villa-bnb-care",
    title: "Villa & BnB Care",
    subtitle: "On-Ground Concierge & Property Safeguarding",
    shortDescription:
      "Guest reception, key handovers, on-call property assistance, maintenance vendor coordination, and check-in/out damage inspections.",
    tagline: "Your reliable, physical presence in Udaipur for luxury villas, homestays, and boutique stays.",
    badge: "Pillar 02",
    iconName: "KeyRound",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Guest Reception & Key Handovers",
        description:
          "Warm, professional in-person guest greetings, identity verification, orientation of property amenities, and secure physical key management.",
        icon: "KeyRound",
      },
      {
        title: "On-Call Property Assistance",
        description:
          "Direct local point-of-contact for staying guests, handling immediate logistical inquiries, guidance, and emergency response during their stay in Udaipur.",
        icon: "PhoneCall",
      },
      {
        title: "Maintenance Vendor Coordination",
        description:
          "On-site supervision of local electricians, plumbers, HVAC technicians, pool maintenance, and cleaners to ensure high-quality workmanship.",
        icon: "Wrench",
      },
      {
        title: "Guest Check-In/Check-Out Inspections",
        description:
          "Thorough pre-arrival checklist validation and post-departure room-by-room walkthroughs to verify property condition and asset safety.",
        icon: "ClipboardCheck",
      },
      {
        title: "Property Damage Reporting",
        description:
          "Immediate photographic documentation and time-stamped incident reporting of any guest-caused breakages, wear, or equipment failures.",
        icon: "AlertTriangle",
      },
    ],
    deliverables: [
      "Guest check-in & check-out confirmation logs with timestamps",
      "Pre-arrival cleanliness and amenity audit reports",
      "Immediate photographic damage reports with repair assessments",
      "Supervised vendor maintenance sign-off logs",
      "Secure key custody with tamper-evident chain of custody",
      "24/7 emergency escalation contact in Udaipur",
    ],
    targetAudience: [
      "Owners of luxury vacation villas and heritage havelis in Udaipur",
      "Airbnb, Vrbo, and boutique homestay operators residing outside Rajasthan",
      "High-end residential property owners hosting seasonal guests",
      "Property management agencies seeking reliable ground-level operational partners",
    ],
    workflow: [
      {
        step: "01",
        title: "Property Onboarding & SOP Audit",
        description: "Site visit to catalog amenities, keys, electrical panels, vendor contacts, and host guidelines.",
      },
      {
        step: "02",
        title: "Reservation Schedule Sync",
        description: "Coordinating guest arrival timelines, special requests, and pre-stay preparation.",
      },
      {
        step: "03",
        title: "In-Person Welcome & Stay Support",
        description: "Welcoming guests on arrival, handing over keys, and remaining available for on-call assistance.",
      },
      {
        step: "04",
        title: "Departure Inspection & Report",
        description: "Post-stay walkthrough, damage audit, vendor handoff for turnaround, and host debrief.",
      },
    ],
  },
  {
    id: "fast-rent-scout",
    slug: "fast-rent-scout",
    title: "Fast-Rent Scout",
    subtitle: "Direct Landlord Verification & Rental Matchmaking",
    shortDescription:
      "Direct landlord verification, digital property listings, 30-second interior video, physical visit assistance, and transparent tenant matchmaking.",
    tagline: "Authentic, zero-middleman rental scouting with physically verified homes in Udaipur.",
    badge: "Pillar 03",
    iconName: "SearchCheck",
    heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Direct Landlord Verification",
        description:
          "We personally meet the property owner, confirm authentic ownership credentials, and establish clear rental terms—eliminating unauthorized sub-brokers.",
        icon: "ShieldAlert",
      },
      {
        title: "Digital Property Listings",
        description:
          "Clean, verified digital showcases featuring precise floor plans, verified amenity checklists, natural daylight photography, and authentic neighborhood context.",
        icon: "FileText",
      },
      {
        title: "30-Second Interior Video",
        description:
          "Rapid, unedited, realistic 30-second continuous walkthrough videos that reveal true dimensions, plumbing status, and natural lighting without deceiving wide lenses.",
        icon: "Video",
      },
      {
        title: "Physical Property Visit Assistance",
        description:
          "On-ground concierge accompanied visits for prospective tenants, coordinating building access and answering local neighborhood questions.",
        icon: "Navigation",
      },
      {
        title: "Tenant Matchmaking",
        description:
          "Connecting verified, respectable tenants with genuine landlords based on mutual expectations, lease term alignments, and verified credentials.",
        icon: "Users",
      },
    ],
    deliverables: [
      "Physically verified property badge & verification dossier",
      "Direct owner-tenant communication link without broker interference",
      "Unedited 30-second interior raw continuous video",
      "Accompanied on-ground property viewings in Udaipur",
      "Verified lease parameter summary and move-in checklist",
      "Neighborhood infrastructure overview (water supply, parking, commute)",
    ],
    targetAudience: [
      "Professionals, doctors, educators, and families relocating to Udaipur",
      "Landlords seeking trustworthy, verified tenants without relentless broker spam",
      "Remote workers and digital nomads looking for authentic, vetted long-term rentals",
      "College faculties, corporate executives, and students seeking legitimate housing",
    ],
    workflow: [
      {
        step: "01",
        title: "Property & Owner Verification",
        description: "Our team inspects the rental unit in person, meets the landlord, and verifies ownership documentation.",
      },
      {
        step: "02",
        title: "Media Capture & Scouting Showcase",
        description: "Capturing the 30-second raw interior video, verifying utility fixtures, water pressure, and dimensions.",
      },
      {
        step: "03",
        title: "Targeted Matchmaking & Visits",
        description: "Matching pre-screened tenants with suitable properties and escorting physical visits.",
      },
      {
        step: "04",
        title: "Direct Handover Facilitation",
        description: "Direct connection between landlord and tenant with clean terms, zero broker commission markups.",
      },
    ],
  },
];
