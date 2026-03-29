export const PERSONAL = {
  name: 'Md Mustakim Arid',
  title: 'IT & Software Development | AI & Emerging Technologies',
  email: 'mustakimhossainarid@gmail.com',
  phone: '(929) 666-3676',
  github: 'https://github.com/arid871',
  linkedin: 'https://www.linkedin.com/in/mdarid22',
  photo: '/IMG_1281.jpg',
  resume: '/resume.pdf',
} as const;

export const VISION =
  "Building systems that solve real problems -- from autonomous AI agents to accessible mobility solutions. Engineering with purpose, shipping with precision.";

export const AFFILIATIONS = [
  "B.S. Computer Science -- St. John's University",
  "IT Asset Management -- St. John's University",
  "Software Engineering Fellow -- Headstarter",
  "Dean's List -- 2023 to Present",
  "CCPS Honor Society",
];

export interface CaseStudy {
  index: string;
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
    label: 'AI / LLM',
    title: 'University Chatbot & Knowledge Base',
    stat: '35%',
    statLabel: 'accuracy improvement',
    description:
      "LLM-powered knowledge management system for St. John's University. Reduced support ticket volume by 40% through refined prompt engineering and RAG workflows.",
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    index: '02',
    label: '3D / Spatial',
    title: 'Matterport Digital Twin',
    stat: '25%',
    statLabel: 'engagement lift',
    description:
      'Interactive 3D spatial tours for campus navigation. Led vendor collaboration and mobile app integration for student-facing features.',
    image:
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    index: '03',
    label: 'Robotics',
    title: 'Hydraulic Robotic Arm',
    stat: '45%',
    statLabel: 'load capacity increase',
    description:
      'High-torque hydraulic actuation system. Optimized fluid pressure cycles to reduce mechanical vibration by 20% over standard electric motors.',
    image:
      'https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    index: '04',
    label: 'Accessibility',
    title: 'Voice Automated Wheelchair',
    stat: '98%',
    statLabel: 'command accuracy',
    description:
      'Low-latency voice-control system for motor-impaired users. Reduced production costs by 60% (~$1,200 per unit) vs. market alternatives.',
    image:
      'https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export interface Milestone {
  year: string;
  emoji: string;
  title: string;
  description: string;
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
  },
  {
    year: '2023',
    emoji: '\u{1F4BC}',
    title: 'IT Asset Management',
    description:
      'Managing 500+ devices, 95% same-day resolution rate, red-team chatbot testing.',
  },
  {
    year: '2023',
    emoji: '\u{1F4DA}',
    title: "Dean's List",
    description: 'Recognized for academic excellence, maintained through present.',
  },
];
