# Md Mustakim Arid — Portfolio

Personal portfolio site for Md Mustakim Arid — IT & Software Development | AI & Emerging Technologies.

**Live site:** [mustakimarid.com](https://mustakimarid.com)

---

## About

Computer Science graduate from St. John's University with three years of hands-on IT experience managing infrastructure, devices, and technical support across campus — from deploying and maintaining 500+ laptops through Jamf and Intune, to red-teaming university chatbots for prompt injection vulnerabilities. Currently building full-stack and AI projects independently in React, Python, and Node.js.

- **Email:** mustakimhossainarid@gmail.com
- **GitHub:** [github.com/arid871](https://github.com/arid871)
- **LinkedIn:** [linkedin.com/in/mdarid22](https://www.linkedin.com/in/mdarid22)

---

## Tech Stack

- **Frontend:** React 18 + TypeScript, Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Icons:** Lucide React
- **Backend/Data:** Supabase (client SDK)
- **Deployment:** GitHub Pages via GitHub Actions, with configs for Netlify and Vercel included

---

## Site Structure

| Section | Description |
|---|---|
| **Hero** | Introduction and profile photo |
| **Moments** | Personal highlights — honor society inductions, awards, and recognitions, presented as an editorial photo layout with a lightbox |
| **Projects** | Six in-depth case studies, each with its own detail page |
| **About** | Bio and background/affiliations |
| **Milestones** | Timeline of education, certifications, and work history, with clickable certificate/diploma viewers where applicable |
| **Resume** | Downloadable resume in a modal |

## Projects Featured

1. **AI-JobTrackr** — Full-stack AI-powered job application tracker (React, Node.js, PostgreSQL, OpenAI GPT-4o, AWS)
2. **University Chatbot & Knowledge Base** — RAG-based LLM chatbot for St. John's University IT support (Python, LangChain, OpenAI API, FAISS)
3. **Voice Automated Wheelchair** — Low-latency voice-controlled wheelchair prototype (Python, Arduino)
4. **Hydraulic Robotic Arm** — High-torque hydraulic actuation system (C++, Arduino)
5. **NAS Server** — Self-hosted centralized storage infrastructure (Linux, SMB, Docker)
6. **Matterport Digital Twin** — Interactive 3D campus tours (Matterport, mobile integration)

Each project page includes an overview, problem statement, technical approach, architecture diagram, testing methodology, outcomes, and (where applicable) wiring diagrams and certifications.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18 or newer recommended)
- npm (comes bundled with Node.js)

### Installation

```bash
git clone https://github.com/arid871/arid871.github.io.git
cd arid871.github.io
npm install
```

### Local Development

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser. Changes hot-reload automatically.

### Production Build

```bash
npm run build
```

Outputs a production-ready build to the `dist/` folder.

### Linting & Type Checking

```bash
npm run lint
npm run typecheck
```

---

## Deployment

This site deploys automatically to **GitHub Pages** via a GitHub Actions workflow (`.github/workflows/deploy.yml`) on every push to `main`. The custom domain (`mustakimarid.com`) is configured directly in the repository's **Settings → Pages** section.

Configuration files for **Netlify** (`netlify.toml`) and **Vercel** (`vercel.json`) are also included, in case the site is ever migrated to either platform — both are pre-configured with the SPA redirect rules React Router needs.

---

## Project Structure

```
├── public/                  # Static assets (images, resume PDF, certificates)
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, Moments, Projects, AboutBlock, Timeline
│   │   └── ui/               # ResumeModal and other shared UI
│   ├── data/
│   │   ├── portfolio.ts      # Personal info, projects list, moments, milestones
│   │   └── projectArticles.ts # Full case-study content for each project
│   ├── hooks/                # Custom hooks (scroll reveal animations)
│   ├── pages/                # Home and ProjectDetail route pages
│   └── App.tsx                # Routing setup
└── .github/workflows/        # CI/CD deployment workflow
```

---

## License

This is a personal portfolio project. Feel free to reference the structure for your own portfolio, but please don't reuse the personal content, photos, or copy as-is.
