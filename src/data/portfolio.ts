export const PERSONAL = {
  name: 'Md Mustakim Arid',
  title: 'IT & Software Development | AI & Emerging Technologies',
  email: 'mustakimhossainarid@gmail.com',
  phone: '(929) 666-3676',
  github: 'https://github.com/arid871',
  linkedin: 'https://www.linkedin.com/in/mdarid22',
  photo: '/profile.jpg',
  resume: '/resume.pdf',
} as const;

export const VISION =
  "Computer Science graduate with three years of hands-on IT experience -- deploying and managing 500+ devices, troubleshooting infrastructure, and red-teaming university chatbots for prompt injection vulnerabilities. Now building full-stack and AI projects independently in React, Python, and Node.js. I'm drawn to the overlap between software engineering and IT systems: build it, break it, fix it, ship it.";

export const AFFILIATIONS = [
  "B.S. Computer Science -- St. John's University",
  "Enterprise IT Support & Systems Technician -- St. John's University",
  "Software Engineering Fellow -- Headstarter",
  "Dean's List -- 2023 to 2026",
  "CCPS Honor Society",
];

export interface Moment {
  date: string;
  title: string;
  description: string;
  images: string[];
}

export const MOMENTS: Moment[] = [
  {
    date: 'November 2025',
    title: 'Inducted into the CCPS Honor Society',
    description:
      "Recognized for combining scholarship, leadership, integrity, and service by The Lesley H. and William L. Collins College of Professional Studies Honor Society at St. John's University.",
    images: ['/moments-ccps-honor-society.jpg', '/honors-society-cert.jpg'],
  },
  {
    date: '2024',
    title: 'Phi Eta Sigma National Honor Society',
    description:
      "Initiated into the St. John's University chapter of Phi Eta Sigma, the nation's oldest honor society recognizing academic excellence.",
    images: ['/national-honors-society-cert.png'],
  },
];

export interface CaseStudy {
  index: string;
  slug: string;
  label: string;
  title: string;
  stat: string;
  statLabel: string;
  description: string;
  image: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    index: '01',
    slug: 'ai-jobtrackr',
    label: 'Full-Stack / AI',
    title: 'AI-JobTrackr',
    stat: 'GPT-4o',
    statLabel: 'resume match scoring',
    description:
      'Full-stack job application tracker with AI-powered resume match scoring, interview prep, and follow-up email generation. Deployed on AWS with JWT auth, REST API, and CI/CD.',
    image: '/jobtrackr-banner.png',
  },
  {
    index: '02',
    slug: 'university-chatbot',
    label: 'AI / LLM',
    title: 'University Chatbot & Knowledge Base',
    stat: '35%',
    statLabel: 'accuracy improvement',
    description:
      "LLM-powered knowledge management system for St. John's University. Reduced support ticket volume by 40% through refined prompt engineering and RAG workflows.",
    image: '/chatbot-padded.png',
  },
  {
    index: '03',
    slug: 'voice-automated-wheelchair',
    label: 'Accessibility',
    title: 'Voice Automated Wheelchair',
    stat: '98%',
    statLabel: 'command accuracy',
    description:
      'Low-latency voice-control system for motor-impaired users. Reduced production costs by 60% (~$1,200 per unit) vs. market alternatives.',
    image: '/wheelchair-banner.png',
  },
  {
    index: '04',
    slug: 'hydraulic-robotic-arm',
    label: 'Robotics',
    title: 'Hydraulic Robotic Arm',
    stat: '45%',
    statLabel: 'load capacity increase',
    description:
      'High-torque hydraulic actuation system. Optimized fluid pressure cycles to reduce mechanical vibration by 20% over standard electric motors.',
    image: '/hydraulic-arm-banner.png',
  },
  {
    index: '05',
    slug: 'nas-server',
    label: 'Infrastructure',
    title: 'NAS Server',
    stat: '10TB+',
    statLabel: 'data consolidated',
    description:
      'Centralized NAS infrastructure using Linux SMB and Docker, consolidating fragmented data and eliminating $500/year in cloud subscription costs with automated redundant backups.',
    image: '/nas-server-banner.png',
  },
  {
    index: '06',
    slug: 'matterport-digital-twin',
    label: '3D / Spatial',
    title: 'Matterport Digital Twin',
    stat: '25%',
    statLabel: 'engagement lift',
    description:
      'Interactive 3D spatial tours for campus navigation, from scanning to app integration. Managed end-to-end and handed over on completion.',
    image: '/matterport-scan.jpg',
  },
];

export interface Milestone {
  year: string;
  emoji: string;
  title: string;
  description: string;
  image?: string;
}

export const MILESTONES: Milestone[] = [
  {
    year: '2026',
    emoji: '\u{1F393}',
    title: 'Graduation',
    description: "B.S. in Computer Science from St. John's University.",
  },
  {
    year: '2026',
    emoji: '\u{1F9E0}',
    title: 'NVIDIA Deep Learning',
    description:
      'Certified in neural network training for CV and NLP using PyTorch.',
    image: '/nvidia-cert.png',
  },
  {
    year: '2024',
    emoji: '\u{1F680}',
    title: 'Headstarter Fellowship',
    description:
      'Built autonomous agents with LangChain, hardened LLM security, deployed on AWS.',
  },
  {
    year: '2024',
    emoji: '\u{1F310}',
    title: 'Cisco Certified',
    description:
      'Get Connected certification in network structures and troubleshooting.',
    image: '/cisco-cert.png',
  },
  {
    year: '2023 – 2026',
    emoji: '\u{1F4BC}',
    title: 'Enterprise IT Support & Systems Technician',
    description:
      'Managing 500+ devices, 95% same-day resolution rate, red-team chatbot testing.',
  },
  {
    year: '2023 – 2026',
    emoji: '\u{1F4DA}',
    title: "Dean's List",
    description: 'Recognized for academic excellence, maintained through 2026.',
  },
];
