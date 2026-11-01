export interface ProjectData {
  id: string;
  title: string;
  industry: string;
  image: string;
  categories: string[];
  description: string;
  year: string;
  link: string;
  monogram: string;
}

export const allProjects: ProjectData[] = [
  {
    id: "01",
    title: "SSP Ticketing Platform",
    industry: "Event & Ticketing",
    image: "/images/SSP - Ticketing.webp",
    categories: ["Next.js", "TypeScript", "Tailwind CSS", "Live Entertainment"],
    description:
      "Engineered a highly responsive online ticketing frontend for Seven Star Production delivering a minimalist and modern user interface that streamlined the ticket purchasing process.",
    year: "2026",
    link: "https://github.com/Zakihatta",
    monogram: "ST",
  },
  {
    id: "02",
    title: "AssistCare Indonesia",
    industry: "HealthTech & Medical",
    image: "/images/AssistCare.webp",
    categories: ["Next.js", "Fullstack", "Healthcare Systems", "API Architecture"],
    description:
      "Pioneered the architectural design and full-stack development of an international medical services web platform; achieved a 40% improvement in operational performance and doubled processing speed.",
    year: "2023",
    link: "https://github.com/Zakihatta",
    monogram: "AC",
  },
  {
    id: "03",
    title: "Syndicate Audio",
    industry: "Digital Audio Platform",
    image: "/images/Syndicate.webp",
    categories: ["Web Experience", "Audio Systems", "Dark Editorial", "Next.js"],
    description:
      "A boundary-pushing audio streaming and artist discovery platform built with an atmospheric, dark editorial visual identity and tactile interactions.",
    year: "2025",
    link: "https://github.com/Zakihatta",
    monogram: "SY",
  },
  {
    id: "04",
    title: "Padang Rescue GIS",
    industry: "Disaster Mitigation & GIS",
    image: "/images/Porto.webp",
    categories: ["React Native", "Dijkstra Top-K", "WebSockets", "ArcGIS Pro"],
    description:
      "Engineered a real-time tsunami mitigation mobile GIS system with persistent WebSocket hazard warnings (18x speedup) and 0.4066 ms Failover Node Elimination evacuation routing.",
    year: "2026",
    link: "https://github.com/Zakihatta",
    monogram: "PR",
  },
  {
    id: "05",
    title: "YPRO Corporate",
    industry: "Manufacturing & B2B",
    image: "/images/YPRO.webp",
    categories: ["WordPress", "Divi Builder", "Bespoke Catalogs", "Client UI"],
    description:
      "Developed a corporate website for YPRO, a bag manufacturing and promotional merchandise company, aligning bespoke product catalogs with high-conversion client communication.",
    year: "2025",
    link: "https://github.com/Zakihatta",
    monogram: "YP",
  },
  {
    id: "06",
    title: "Seven Star Production",
    industry: "M.I.C.E & Live Production",
    image: "/images/SSP - Company.webp",
    categories: ["WordPress", "Brand Identity", "Event Showcase", "Web Architecture"],
    description:
      "Developed the corporate digital presence for Seven Star Production in Jakarta, delivering a clean, structured interface for premier live entertainment and arena concerts.",
    year: "2023",
    link: "https://github.com/Zakihatta",
    monogram: "SS",
  },
];
