import {
  Radio,
  DoorOpen,
  Users,
  GraduationCap,
  Wrench,
  Telescope,
  Rocket,
} from "lucide-react";

/* =========================================================================
   PORTFOLIO DATA CONFIG
   ========================================================================= */

export const PROFILE = {
  name: "Ishan Shukla",
  initials: "IS",
  tagline: "B.Tech CSE Student — Full-Stack Developer",
  subtagline: "Building practical web solutions for communities and campuses.",
  intro:
    "I work across the stack, but what pulls me in is the moment an idea leaves the whiteboard and starts running live in someone's browser — a hostel gate-pass that used to take a signature chain now takes a form, a campus club that used to run on WhatsApp forwards now has a real front door. I build for the people who'll actually open the tab, not for a portfolio checklist.",
  location: "Kanpur, Uttar Pradesh, India",
  resumeUrl: "#",
  email: "yajurishanshukla@gmail.com",

  social: {
    github: "https://github.com/vajracoder",
    linkedin: "https://www.linkedin.com/in/ishanshukla2/",
  },
};

export const EDUCATION = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Maharana Pratap Engineering College",
  grad: "Expected 2027",
};

export const NAV_LINKS = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact" },
];

export const PROJECTS = [
  {
    id: "sangam-setu",
    name: "Sangam Setu",
    tagline: "Anonymous, hyperlocal, peer-to-peer — no server in the middle.",
    description:
      "A browser-based communication and file-sharing platform that finds everyone on the same public network — a hostel, an event, or a lecture hall — and drops them into a temporary, anonymized local room. Messages relay over Socket.io, while files move directly between browsers over WebRTC data channels.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "WebRTC",
      "JavaScript",
    ],
    live: "https://sangam-settu.vercel.app/",
    repo: "https://github.com/vajracoder/Sangam-Settu",
    featured: true,
    icon: Radio,
    glyph: "signal",
  },

  {
    id: "campus-dwar",
    name: "Campus Dwar",
    tagline: "Digital hostel gate-passes, with a real approval trail.",
    description:
      "Replaces the manual, signature-chasing gate-pass process with a structured digital workflow. Requests move through coordinator and warden approval in sequence, and every issued pass carries a unique ID and live status that can be checked at the gate.",
    tech: ["React.js", "JavaScript", "CSS", "Role-based workflows"],
    live: "#",
    repo: "#",
    featured: false,
    icon: DoorOpen,
    glyph: "flow",
  },

  {
    id: "abhyudaya-club",
    name: "Abhyudaya Club Website",
    tagline: "The official home for a 500+ member student club.",
    description:
      "A responsive website for the Abhyudaya Science & Literary Club covering events, team members, galleries, and blog posts, designed to be handed off to future club members for ongoing content updates.",
    tech: ["React.js", "JavaScript", "CSS", "GitHub", "Netlify"],
    live: "#",
    repo: "#",
    featured: false,
    icon: Users,
    glyph: "grid",
  },

  {
    id: "gurukul-setu",
    name: "Gurukul Setu",
    tagline: "Admissions discovery for students outside the metros.",
    description:
      "A platform concept aimed at semi-urban and rural students navigating college admissions — bringing verified institutional listings, live seat-availability alerts, multilingual support, and guided documentation into one place.",
    tech: ["React.js", "JavaScript", "UI/UX Design"],
    live: "#",
    repo: "#",
    featured: false,
    icon: GraduationCap,
    glyph: "map",
  },
];

export const SKILLS = {
  Frontend: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],

  Backend: [
    "Node.js",
    "Express.js",
  ],

  "Real-Time": [
    "Socket.io",
    "WebRTC",
  ],

  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Netlify",
    "Firebase",
  ],
};

export const EXPERIENCE = {
  org: "Abhyudaya Science & Literary Club",
  role: "Technical Team Lead",
  period: "2024 — Present",

  points: [
    "Built and maintain the club's public website end-to-end, from layout to deployment on Netlify.",

    "Lead the technical team through event cycles — coordinating what gets built, by when, and who owns it.",

    "Run event-day operations for multi-day initiatives, covering logistics, registration flow, and on-ground troubleshooting.",

    "Organize technical symposiums and workshops from scratch: scheduling, venues, and run-of-show.",

    "Handle guest speaker outreach and sponsorship coordination, turning cold outreach into confirmed partnerships.",

    "Coordinate across technical and creative sub-teams so design, content, and engineering ship on the same timeline.",
  ],
};

export const EVENTS = [
  {
    name: "TechBloom 2.0",
    type: "Technical Symposium",
    description:
      "A campus-wide symposium of competitions, hands-on workshops, and technology quizzes, run across multiple simultaneous tracks.",
    icon: Rocket,
  },

  {
    name: "Antariksh Spardha",
    type: "Astronomy Initiative",
    description:
      "A multi-day astronomy program pairing a competitive quiz with an expert guest talk and a night stargazing session for campus-wide astronomy awareness.",
    icon: Telescope,
  },

  {
    name: "RC Plane Workshop",
    type: "Technical Workshop",
    description:
      "A hands-on aeromodelling workshop organized in collaboration with the Kanpur Aeromodelling Club, from build basics to first flight.",
    icon: Wrench,
  },
];
