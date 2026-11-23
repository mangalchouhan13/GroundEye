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
    title: "Villa & Homestay Custody",
    subtitle: "Monthly Property Audits & On-Ground Safeguarding",
    shortDescription:
      "Two monthly 35-point audits, dampness and seepage checks, essential-system testing, secure key custody, guest inventory and turnover checks, and priority breakdown dispatch in Udaipur.",
    tagline: "Trusted local oversight for luxury villas, second homes, and homestays.",
    badge: "Pillar 02",
    iconName: "KeyRound",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Two Monthly 35-Point Audits",
        description:
          "Two detailed property audits each month, including dampness and seepage checks and essential-system testing.",
        icon: "ClipboardCheck",
      },
      {
        title: "Key Lockbox & Numbered Security Seals",
        description:
          "Secure key custody using a key lockbox and numbered security seals.",
        icon: "KeyRound",
      },
      {
        title: "Guest Inventory & Turnover Checks",
        description:
          "Guest inventory checks and property turnover checks to help owners track readiness between stays.",
        icon: "ShieldCheck",
      },
      {
        title: "Priority Breakdown Dispatch",
        description:
          "A 30–45 minute priority dispatch commitment within Udaipur for urgent breakdowns.",
        icon: "PhoneCall",
      },
    ],
    deliverables: [
      "Two detailed 35-point audit reports each month",
      "Dampness, seepage, and essential-system check records",
      "Key lockbox and numbered security seal records",
      "Guest inventory and property turnover check records",
      "Priority dispatch for urgent breakdowns within Udaipur",
    ],
    targetAudience: [
      "Owners of luxury villas and second homes",
      "Homestay owners seeking regular local property oversight",
      "Remote owners who need documented audits and secure key custody",
    ],
    workflow: [
      {
        step: "01",
        title: "Property Onboarding",
        description: "Record the property details, access arrangements, key lockbox, and owner instructions.",
      },
      {
        step: "02",
        title: "Monthly 35-Point Audits",
        description: "Complete two detailed monthly audits, including dampness, seepage, and essential-system checks.",
      },
      {
        step: "03",
        title: "Key, Inventory & Turnover Checks",
        description: "Secure keys with numbered seals and check guest inventory and property turnover.",
      },
      {
        step: "04",
        title: "Priority Breakdown Dispatch",
        description: "Coordinate priority dispatch within 30–45 minutes in Udaipur for urgent breakdowns.",
      },
    ],
  },
  {
    id: "fast-rent-scout",
    slug: "fast-rent-scout",
    title: "Rental Readiness & Key Desk",
    subtitle: "Rental Readiness, Key Handover & Scouting",
    shortDescription:
      "Monthly property checks, move-in and move-out audits, key handovers, utility logs, and non-brokerage rental scouting in Udaipur.",
    tagline: "A ready, documented property and a direct connection between owners and tenants.",
    badge: "Pillar 03",
    iconName: "SearchCheck",
    heroImage: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop",
    keyFeatures: [
      {
        title: "Monthly Rental Readiness Checks",
        description:
          "Two routine monthly visits for flats, apartments, and independent houses up to 1,500 sq. ft., keeping owners informed about property condition.",
        icon: "ClipboardCheck",
      },
      {
        title: "Move-In & Move-Out Condition Audits",
        description:
          "Full condition audits before move-in and after move-out, with clear records of the property's state.",
        icon: "ShieldCheck",
      },
      {
        title: "Fixture, Lock & Utility Logs",
        description:
          "Documented fixture and lock checks, plus AVVNL / PHED meter-reading logs.",
        icon: "FileText",
      },
      {
        title: "Cleaning & Repair Coordination",
        description:
          "On-ground coordination for cleaning and repair needs identified during property checks.",
        icon: "Wrench",
      },
      {
        title: "Signed Key Handover",
        description:
          "Documented handover of keys to the owner's chosen tenant. GroundEye operates strictly on a non-brokerage basis.",
        icon: "KeyRound",
      },
      {
        title: "Direct Rental Scouting",
        description:
          "Direct owner connections, property listings, and tenant introductions without unauthorized sub-brokers or transaction commissions.",
        icon: "SearchCheck",
      },
      {
        title: "Interior Tours & Property Visits",
        description:
          "Unedited 30-second interior videos and accompanied on-ground visits help prospective tenants assess homes in Udaipur.",
        icon: "Video",
      },
    ],
    deliverables: [
      "Two routine monthly property-check logs",
      "Move-in and move-out condition audit reports",
      "Fixture and lock check records",
      "AVVNL / PHED meter-reading logs",
      "Cleaning and repair coordination updates",
      "Signed key handover record for the owner's chosen tenant",
      "Direct rental-scouting support, interior video, and accompanied visits",
    ],
    targetAudience: [
      "Owners of flats, apartments, and independent houses up to 1,500 sq. ft.",
      "Remote landlords who need regular property checks and key custody in Udaipur",
      "Owners preparing a home for move-in or documenting its condition after move-out",
      "Tenants seeking verified homes and direct owner connections in Udaipur",
    ],
    workflow: [
      {
        step: "01",
        title: "Property Onboarding",
        description: "Confirm the property scope, owner instructions, key arrangements, and preferred reporting details.",
      },
      {
        step: "02",
        title: "Routine Checks & Logs",
        description: "Complete two scheduled monthly visits and record condition, fixtures, locks, and meter readings.",
      },
      {
        step: "03",
        title: "Condition Audits & Rental Scouting",
        description: "Document move-in or move-out condition; provide direct rental-scouting support when requested.",
      },
      {
        step: "04",
        title: "Key Handover & Follow-Up",
        description: "Record the signed key handover to the owner's chosen tenant and coordinate any agreed cleaning or repairs.",
      },
    ],
  },
];
