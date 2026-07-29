export interface Certification {
  image: string;
  caption: string;
}

export interface TestingNote {
  title: string;
  description: string;
}

export interface Tester {
  name: string;
  role: string;
}

export interface Command {
  name: string;
  description: string;
}

export interface Diagram {
  image: string;
  caption: string;
}

export interface FeatureGroup {
  category: string;
  items: string[];
}

export interface ProjectArticle {
  slug: string;
  role: string;
  timeframe: string;
  techStack: string[];
  links?: { label: string; url: string }[];
  overview: string;
  problem: string;
  approach: string[];
  features?: string[];
  featureGroups?: FeatureGroup[];
  architecture?: string[];
  buildProcess?: string[];
  hardware?: string[];
  software?: string[];
  commands?: Command[];
  testing?: TestingNote[];
  testers?: Tester[];
  challenges?: string[];
  responsibilities?: string[];
  outcome: string;
  results?: string[];
  futureImprovements?: string[];
  summary?: string;
  certifications?: Certification[];
  diagrams?: Diagram[];
}

/**
 * Note on testers: names below are placeholders (you asked for random names
 * to fill the section) — swap in real names any time, or remove the section
 * entirely if you'd rather not list testers.
 */
export const PROJECT_ARTICLES: Record<string, ProjectArticle> = {
  'university-chatbot': {
    slug: 'university-chatbot',
    role: "Developer — St. John's University IT",
    timeframe: '2023 – 2026',
    techStack: ['Python', 'LangChain', 'OpenAI API', 'RAG', 'FAISS', 'SQLite', 'Git'],
    links: [
      {
        label: 'Live Demo',
        url: 'https://www.stjohns.edu/office-information-technology/technology-labs-and-resources/johnny-chat',
      },
    ],
    overview:
      "The University Chatbot & Knowledge Base is an AI-powered virtual assistant designed to improve how students and staff access IT support information. Instead of relying on static FAQ pages or waiting for support tickets, users can ask natural-language questions and receive context-aware answers generated directly from the university's internal documentation. Built using Python, LangChain, and the OpenAI API, the system leverages Retrieval-Augmented Generation (RAG) to ensure responses are grounded in institutional knowledge rather than relying solely on an LLM's general training.",
    problem:
      "The university's IT department handled hundreds of repetitive support requests covering topics such as password resets, multi-factor authentication, student account access, Wi-Fi configuration, email setup, software installation, university policies, and general IT procedures. Although documentation already existed, it was scattered across multiple webpages and difficult to search efficiently. As a result, users frequently opened support tickets for questions that already had documented answers, increasing workload for the IT support team and slowing response times for more complex issues.",
    approach: [
      'Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline using LangChain and the OpenAI API, enabling the chatbot to retrieve relevant university documentation before generating responses.',
      'Processed internal documentation into searchable text chunks and generated embeddings to create an indexed knowledge base for semantic search.',
      'Engineered prompts to reduce hallucinations and ensure responses remained grounded in retrieved documentation.',
      'Implemented conversation memory to preserve context across multi-turn conversations without requiring users to repeat information.',
      'Added confidence thresholds and fallback responses for questions outside the available documentation, preventing misleading AI-generated answers.',
      'Performed iterative prompt engineering and evaluation, improving response quality and increasing answer accuracy by approximately 35%.',
      'Conducted red-team testing against prompt injection, prompt leakage, and jailbreak attempts, strengthening system guardrails and input validation.',
      'Optimized retrieval parameters including chunk size, overlap, and similarity search settings to improve retrieval precision and reduce irrelevant context.',
    ],
    features: [
      'Natural language question answering',
      'Retrieval-Augmented Generation (RAG)',
      'Semantic document search',
      'Multi-turn conversation support',
      'Context-aware responses',
      'Source-grounded answers',
      'Prompt injection protection',
      'Knowledge base indexing',
      'Fast document retrieval',
      'Modular Python architecture',
    ],
    architecture: [
      'User Question',
      'Python Backend',
      'LangChain Pipeline',
      'Semantic Search (Vector Store)',
      'Relevant University Documents',
      'OpenAI API',
      'Grounded Response',
    ],
    testing: [
      {
        title: 'Functional Testing',
        description:
          'Verified that common university IT questions returned accurate responses using the appropriate internal documentation.',
      },
      {
        title: 'Retrieval Testing',
        description:
          'Evaluated semantic search performance using different document chunk sizes, overlap values, and similarity thresholds to maximize retrieval accuracy.',
      },
      {
        title: 'Prompt Evaluation',
        description:
          'Compared multiple prompt templates to minimize hallucinations while improving factual consistency and answer completeness.',
      },
      {
        title: 'Security Testing',
        description:
          'Performed adversarial testing including prompt injection attempts, jailbreak prompts, prompt leakage, instruction overriding, and invalid user inputs. Guardrails were iteratively refined to prevent unintended behavior.',
      },
      {
        title: 'Performance Testing',
        description:
          'Measured average response latency, retrieval speed, API response consistency, and end-to-end response time to ensure a responsive user experience.',
      },
      {
        title: 'User Acceptance Testing',
        description:
          'The chatbot was demonstrated to university staff and student users, who evaluated ease of use, response clarity, accuracy, and overall usefulness. Feedback from testing sessions was incorporated into later prompt refinements and knowledge base improvements.',
      },
    ],
    outcome:
      'The completed system significantly improved the accessibility of university IT knowledge by enabling students and staff to receive accurate, context-aware answers in seconds.',
    results: [
      '35% improvement in answer accuracy',
      '~40% reduction in repetitive support tickets',
      'Faster access to university documentation',
      'Reduced workload for IT support staff',
      'More consistent responses across common support topics',
      'Improved user experience through conversational search',
    ],
    futureImprovements: [
      'Integrate Microsoft Entra ID / SSO authentication',
      'Add document upload and automatic indexing',
      'Support PDF, DOCX, and SharePoint synchronization',
      'Implement role-based document permissions',
      'Add multilingual support',
      'Introduce citation links for every generated response',
      'Build an analytics dashboard for frequently asked questions',
      'Add feedback collection to continuously improve response quality',
    ],
  },

  'matterport-digital-twin': {
    slug: 'matterport-digital-twin',
    role: 'Project Lead — 3D Scanning, Mobile App Integration & End-to-End Delivery',
    timeframe: '2024',
    techStack: ['Matterport Pro Camera', 'Matterport Cloud', 'Mobile App Integration', '3D Spatial Mapping'],
    links: [],
    overview:
      'The Matterport Digital Twin project created a fully navigable 3D representation of university buildings, enabling students, visitors, and prospective applicants to virtually explore campus from any device. As project lead, I managed the project from physical scanning through deployment — capturing real-world spaces with Matterport technology, processing them into interactive digital twins, integrating the tours into student-facing mobile applications, and validating the final experience before release. The resulting platform provided an immersive alternative to traditional campus maps while improving accessibility and campus familiarity.',
    problem:
      'Traditional campus maps and photo galleries provide limited context and often make it difficult for new students to understand building layouts before arriving on campus. Common challenges included difficulty locating classrooms, confusing building layouts, limited accessibility for remote visitors, static campus maps lacking spatial context, and reduced engagement during virtual admissions tours. The university needed a more interactive way to showcase campus facilities while helping students navigate more confidently.',
    approach: [
      'Planned and coordinated the end-to-end digital twin creation process across multiple campus buildings.',
      'Captured high-resolution 360° spatial scans using Matterport equipment to generate accurate 3D representations.',
      'Processed scan data into fully navigable Matterport digital twins with interactive walkthrough capabilities.',
      'Integrated completed tours into student-facing mobile applications, allowing seamless access without requiring specialized software.',
      'Validated navigation paths, scan alignment, image quality, and interactive hotspots prior to deployment.',
      'Coordinated testing throughout the project to ensure smooth performance across desktop and mobile devices.',
    ],
    featureGroups: [
      {
        category: '3D Spatial Experience',
        items: [
          'Interactive Walkthroughs',
          '360° Navigation',
          'High-Resolution Building Models',
          'Multi-floor Navigation',
          'Remote Campus Tours',
        ],
      },
      {
        category: 'Mobile Integration',
        items: [
          'Embedded Matterport Tours',
          'Mobile-Friendly Viewing',
          'Responsive Navigation',
          'Cross-Platform Compatibility',
        ],
      },
      {
        category: 'User Experience',
        items: [
          'Interactive Hotspots',
          'Natural Walking Experience',
          'Faster Building Familiarization',
          'Improved Remote Accessibility',
        ],
      },
    ],
    architecture: [
      'Campus Building',
      'Matterport 3D Scanning',
      'Cloud Processing',
      'Interactive Digital Twin',
      'Quality Assurance',
      'Mobile App Integration',
      'Student & Visitor Experience',
    ],
    testing: [
      {
        title: 'Scan Validation',
        description:
          'Verified every scan location for alignment accuracy, stitching quality, and complete building coverage.',
      },
      {
        title: 'Navigation Testing',
        description:
          'Walked through every digital tour to confirm natural transitions between scan points and consistent user navigation.',
      },
      {
        title: 'Mobile Testing',
        description:
          'Validated responsiveness and performance on smartphones and tablets, ensuring smooth interaction within the university mobile application.',
      },
      {
        title: 'User Experience Testing',
        description:
          'Collected feedback from university staff and student users regarding navigation clarity, usability, and overall experience before final deployment.',
      },
      {
        title: 'Deployment Testing',
        description:
          'Verified embedded Matterport tours loaded correctly inside the production mobile application without broken links or rendering issues.',
      },
    ],
    responsibilities: [
      'Campus scanning',
      'Scan planning',
      'Matterport processing',
      'Mobile integration',
      'QA testing',
      'Deployment coordination',
      'End-to-end project delivery',
    ],
    outcome:
      'The completed digital twin improved campus exploration by giving students an immersive way to navigate buildings before arriving on campus.',
    results: [
      '25% increase in engagement with campus navigation features',
      'Improved virtual campus experience',
      'Easier navigation for first-year students',
      'Better accessibility for remote visitors',
      'Modernized digital campus experience',
    ],
    futureImprovements: [
      'Add indoor wayfinding between classrooms',
      'Integrate searchable room locations',
      'Add accessibility routes',
      'Support AR navigation inside buildings',
      'Integrate event-specific campus tours',
      'Add analytics for visitor engagement',
      'Expand scanning to the entire campus',
    ],
  },

  'hydraulic-robotic-arm': {
    slug: 'hydraulic-robotic-arm',
    role: 'Engineer',
    timeframe: '2016 – 2017',
    techStack: ['C++', 'Arduino', 'Hydraulic Actuation', 'Motion Control'],
    links: [],
    overview:
      'This project explores a compact hydraulic robotic arm designed for applications that need greater load capacity than a standard electric-motor build can comfortably provide. Instead of relying on small motors alone, the arm uses hydraulic force to improve torque delivery and maintain steadier motion under load.',
    problem:
      'Typical electric-motor robotic arms in this weight class often face a tradeoff: increasing torque can increase vibration, reduce motion smoothness, and make precision tasks harder to repeat consistently. For lifting and positioning heavier objects, that tradeoff becomes a major limitation.',
    approach: [
      'Designed a hydraulic actuation system controlled by Arduino and programmed in C++ to improve lifting strength and motion consistency.',
      'Tuned pressure cycles and actuation timing through iterative tests to reduce vibration and improve placement accuracy.',
      'Chose hydraulic actuation specifically to achieve higher load-bearing performance than a comparable small electric-motor setup.',
      'Built the prototype with modular components so the motion system, control board, and fluid path could be tested independently during development.',
    ],
    buildProcess: [
      'Modeled the arm as a simple prototype first to validate geometry, range of motion, and actuator placement.',
      'Assembled the frame and mounted the hydraulic components to keep the actuation path short and stable.',
      'Connected the control board to the actuation logic and tested each movement stage before combining them into a full sequence.',
      'Repeated test cycles to check for leaks, mechanical binding, inconsistent pressure response, and overshoot in motion.',
    ],
    hardware: [
      'Arduino board',
      'Custom robotic arm frame',
      'Hydraulic cylinders / actuators',
      'Tubing and fluid reservoir',
      'Driver circuitry / relay or valve control components',
      'Power supply',
      'Fasteners, brackets, and mounting hardware',
      'Prototyping materials for the initial build',
    ],
    commands: [
      { name: 'Extend', description: 'Increase actuator length / lift the arm segment' },
      { name: 'Retract', description: 'Lower or return the arm segment' },
      { name: 'Hold', description: 'Maintain position under load' },
      { name: 'Reset', description: 'Return to the default starting position' },
      { name: 'Stop', description: 'Immediately stop motion for safety' },
    ],
    testing: [
      {
        title: 'Load Testing',
        description:
          'Weights were added in controlled steps to determine how much load the arm could lift before motion degraded.',
      },
      {
        title: 'Precision Testing',
        description:
          'The arm was moved to the same target position multiple times to check repeatability and placement consistency.',
      },
      {
        title: 'Vibration Testing',
        description:
          'Motion was observed under load to verify whether the hydraulic system reduced shaking compared with a standard motor-driven approach.',
      },
      {
        title: 'Reliability Testing',
        description:
          'The prototype ran through repeated movement cycles to identify leaks, pressure loss, overheating, loose fittings, or timing drift.',
      },
      {
        title: 'Safety Testing',
        description:
          'Stop behavior was checked frequently, along with stability at maximum load, to reduce the chance of uncontrolled movement.',
      },
    ],
    testers: [
      { name: 'Mehrab Hasan Alfee', role: 'Classmate, Science Fair team' },
      { name: 'Tazbid Siddiqui', role: 'Lab Partner' },
      { name: 'Mahdi Hossain', role: 'Project Reviewer / Instructor' },
      { name: 'Iftesham Ul Islam', role: 'Classmate, Science Fair team' },
    ],
    outcome:
      'The final design increased load-bearing capacity by 45% compared with standard electric-motor control and reduced mechanical vibration by 20% during automated tasks.',
    futureImprovements: [
      'Replace the prototype frame with a more durable mechanical structure.',
      'Improve fluid sealing and pressure consistency.',
      'Add closed-loop feedback for more accurate positioning.',
      'Expand the control logic for multi-step pick-and-place actions.',
      'Run a larger verified user test and record results.',
      'Add wiring diagrams and a short demo video for the website.',
    ],
    summary:
      'The Hydraulic Robotic Arm demonstrates how hydraulic actuation can improve load capacity and motion stability in a compact robotic system. Built with Arduino and C++, it serves as a practical prototype for stronger, smoother automated arm movement.',
    certifications: [
      {
        image: '/hydraulic-arm-cert.png',
        caption:
          'Certificate of Achievement — Manarat Dhaka International School & College, Science Fair 2016–17, Hydraulic Automation project.',
      },
    ],
    diagrams: [
      {
        image: '/hydraulic-arm-wiring.png',
        caption:
          'Control wiring diagram — 12V supply and Arduino feed the relay/valve driver, which switches the hydraulic pump and solenoid valve to extend or retract the cylinder.',
      },
    ],
  },

  'voice-automated-wheelchair': {
    slug: 'voice-automated-wheelchair',
    role: 'Developer',
    timeframe: '2018',
    techStack: ['Python', 'Arduino', 'Voice Recognition', 'Bluetooth (HC-05)'],
    links: [],
    overview:
      'Commercial voice- or sensor-controlled wheelchairs can be prohibitively expensive, and delayed command response can reduce usability and safety. This project explored a more affordable prototype that translates spoken commands into motion quickly and reliably.',
    problem:
      'Many assistive mobility systems are costly, complex to deploy, and not always responsive enough for everyday use. For users with limited hand function, even a small delay between a spoken command and chair movement can make the system frustrating or unsafe.',
    approach: [
      'Low latency: built a fast voice-command pipeline in Python so the chair could respond with minimal delay.',
      'Affordability: built the system from lower-cost components to reduce total cost without sacrificing basic reliability.',
      'Hands-free usability: simplified the control flow so a user could issue movement commands without touching a joystick or keypad.',
    ],
    commands: [
      { name: 'Forward', description: 'Move straight ahead' },
      { name: 'Backward', description: 'Move in reverse' },
      { name: 'Left', description: 'Turn left' },
      { name: 'Right', description: 'Turn right' },
      { name: 'Stop', description: 'Immediately stop all motion' },
      { name: 'Start / Enable', description: 'Arm the system before movement' },
    ],
    hardware: [
      'Arduino Uno',
      'Motor driver shield / motor controller board',
      'DC geared motors',
      'Wheels and chassis frame',
      'Ultrasonic sensor for obstacle awareness',
      'Servo motor for auxiliary movement / sensor positioning',
      'Bluetooth module (HC-05 / similar)',
      'Jumper wires, connectors, and mounting hardware',
      'Power supply / battery pack',
      'Lightweight prototype enclosure used during the early build stage',
    ],
    software: [
      'Python for voice input and command processing',
      'Arduino firmware for motor control',
      'Serial communication between the computer / voice layer and the microcontroller',
      'Simple rule-based command parsing for dependable real-time control',
    ],
    testing: [
      {
        title: 'Functional Testing',
        description:
          'Each command was spoken multiple times under normal indoor conditions to confirm that the system correctly mapped speech to motion.',
      },
      {
        title: 'Accuracy Testing',
        description:
          'A small command set was repeated across several rounds, with results tracked by command type and confidence level.',
      },
      {
        title: 'Latency Testing',
        description:
          'The time between a spoken command and wheelchair response was measured to verify that the system stayed responsive enough for practical use.',
      },
      {
        title: 'Safety Checks',
        description:
          'The stop command was tested repeatedly, and obstacle-sensing logic was verified before any movement tests were expanded.',
      },
      {
        title: 'Reliability Checks',
        description:
          'The prototype was run through repeated start-stop and direction-change cycles to identify wiring, motor, or parsing issues.',
      },
    ],
    testers: [
      { name: 'Iftesham Ul Islam', role: 'Volunteer Tester, Science Fair team' },
      { name: 'Mehrab Hasan Alfee', role: 'Classmate, Lab Partner' },
      { name: 'Mahdi Hossain', role: 'Project Reviewer / Instructor' },
    ],
    outcome:
      'The prototype demonstrated the feasibility of a lower-cost, voice-driven mobility interface, reaching 98% command accuracy in controlled testing.',
    results: [
      'Command accuracy reached 98% in controlled testing.',
      'The prototype reduced estimated production cost by about 60% compared with market-leading assistive technology.',
      'Estimated savings were approximately $1,200 per unit.',
    ],
    futureImprovements: [
      'Replace the early prototype enclosure with a more durable wheelchair frame.',
      'Add emergency-stop hardware that works even if software fails.',
      'Improve noise filtering for speech recognition in crowded spaces.',
      'Expand the command vocabulary for more natural conversation-based control.',
      'Add battery monitoring and low-power alerts.',
      'Improve obstacle avoidance and path safety logic.',
    ],
    summary:
      'This project shows how a low-cost, low-latency voice interface can make wheelchair control more accessible for users with motor impairments. It is a practical example of combining embedded systems, Python, and assistive design to build a hands-free mobility prototype.',
    certifications: [
      {
        image: '/wheelchair-cert.png',
        caption:
          'Certificate of Achievement — Manarat Dhaka International School & College, Science Fair 2018, Voice-Automated Wheelchair project.',
      },
    ],
    diagrams: [
      {
        image: '/wheelchair-wiring.jpg',
        caption:
          'Circuit wiring diagram — Arduino with motor shield driving the drive motors and servo, with the HC-05 Bluetooth module handling the voice-command link.',
      },
    ],
  },

  'ai-jobtrackr': {
    slug: 'ai-jobtrackr',
    role: 'Full-Stack Developer',
    timeframe: '2026',
    techStack: [
      'React (Vite)',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma ORM',
      'OpenAI GPT-4o',
      'AWS (Elastic Beanstalk, RDS, S3, CloudFront)',
      'JWT Authentication',
      'REST API',
    ],
    links: [
      { label: 'Code', url: 'https://github.com/arid871/AI-JobTrackr' },
      { label: 'Live Demo', url: 'https://d330cidwjptsvl.cloudfront.net' },
    ],
    overview:
      'AI-JobTrackr is a production-ready full-stack web application that modernizes the job search process by combining traditional application tracking with AI-powered career tools. Instead of relying on spreadsheets, users can organize applications, evaluate resume compatibility with job descriptions, generate personalized follow-up emails, prepare for interviews, and gain AI-driven insights throughout their job search. The application is deployed end-to-end on AWS using a React frontend, Node.js/Express backend, PostgreSQL database, and OpenAI GPT-4o, with secure authentication, scalable cloud infrastructure, and production-grade deployment practices.',
    problem:
      'Managing dozens of job applications quickly becomes difficult. Candidates often spend hours customizing resumes, writing repetitive follow-up emails, preparing for interviews, and manually tracking application status across multiple companies. Traditional spreadsheets can organize information, but they cannot answer questions such as how well a resume matches a role, what to say in a follow-up email, what interview questions to expect, or which applications deserve the most attention. AI-JobTrackr was designed to automate these repetitive tasks while providing a centralized dashboard for managing the entire application pipeline.',
    approach: [
      'Developed a full-stack application using React (Vite) for the frontend and Node.js/Express for the backend, exposing a RESTful API backed by PostgreSQL through Prisma ORM.',
      'Designed a secure authentication system using JWT access and refresh tokens, enabling authenticated users to manage applications, resumes, and profile information.',
      'Integrated OpenAI GPT-4o to power four AI-driven capabilities: resume-to-job match analysis, personalized follow-up email generation, interview question generation, and AI-powered application insights.',
      'Built all AI functionality as protected backend endpoints so API credentials remain server-side and never reach the client.',
      'Implemented request validation and rate limiting to protect AI endpoints from abuse while controlling API costs.',
      'Deployed the backend to AWS Elastic Beanstalk with Amazon RDS PostgreSQL, managing schema changes through Prisma migrations.',
      'Hosted the React application in a private Amazon S3 bucket served through CloudFront, enabling HTTPS delivery, global edge caching, and secure bucket access using Origin Access Control.',
      'Solved a production HTTPS limitation by placing a second CloudFront distribution in front of the Elastic Beanstalk API, providing HTTPS termination and avoiding browser mixed-content restrictions without needing a load balancer or custom domain.',
      'Fixed SPA routing issues by configuring CloudFront custom error responses to redirect unknown routes back to index.html, allowing React Router to handle client-side navigation.',
      'Diagnosed multiple deployment issues encountered during production rollout, including Windows archive incompatibilities with Elastic Beanstalk, database connectivity configuration errors, and AWS infrastructure troubleshooting.',
    ],
    featureGroups: [
      {
        category: 'AI Features',
        items: [
          'Resume Match Scoring',
          'AI Resume Analysis',
          'Follow-up Email Generator',
          'Interview Preparation Generator',
          'AI Application Insights',
        ],
      },
      {
        category: 'Job Management',
        items: [
          'Application Dashboard',
          'Full CRUD Operations',
          'Company Tracking',
          'Status Management',
          'Notes & Application History',
        ],
      },
      {
        category: 'Security',
        items: [
          'JWT Authentication',
          'Refresh Token Authentication',
          'Protected API Routes',
          'Server-side OpenAI Integration',
          'Environment Variable Management',
        ],
      },
      {
        category: 'Cloud Infrastructure',
        items: [
          'AWS Elastic Beanstalk',
          'Amazon RDS PostgreSQL',
          'Amazon S3',
          'CloudFront CDN',
          'HTTPS Everywhere',
          'Edge Delivery',
        ],
      },
    ],
    architecture: [
      'User Browser',
      'CloudFront (HTTPS)',
      'React Frontend — Amazon S3 (Private)',
      'CloudFront Reverse Proxy (API, caching disabled)',
      'AWS Elastic Beanstalk — Node.js / Express REST API',
      'Prisma ORM Layer',
      'Amazon RDS PostgreSQL',
      'OpenAI GPT-4o API',
    ],
    testing: [
      {
        title: 'Functional Testing',
        description:
          'Verified complete user registration and authentication workflow, tested login, logout, token refresh, and protected routes, validated full CRUD functionality for job applications, and confirmed AI-generated responses were returned correctly for every supported feature.',
      },
      {
        title: 'Integration Testing',
        description:
          'Verified communication between the React frontend and Express backend, confirmed Prisma correctly synchronized data between the application and PostgreSQL, and tested OpenAI API integration under various prompt sizes and job descriptions.',
      },
      {
        title: 'Production Deployment Testing',
        description:
          'Rather than testing only in development, the application was validated directly against the live AWS deployment — diagnosing and resolving HTTPS mixed-content browser restrictions, SPA routing failures, CloudFront configuration issues, Elastic Beanstalk deployment failures, production database connectivity, and static asset caching behavior.',
      },
      {
        title: 'Database Testing',
        description:
          'Executed Prisma migrations locally and against Amazon RDS, verified schema consistency after migrations, and confirmed CRUD operations remained stable after deployment.',
      },
      {
        title: 'Security Review',
        description:
          'Verified all API keys remain server-side, protected secrets using AWS environment variables, confirmed JWT secrets never reach the frontend, rotated AWS IAM credentials after an accidental exposure during development, and excluded environment configuration from version control.',
      },
      {
        title: 'Performance Testing',
        description:
          'Measured API response times for AI endpoints, verified CloudFront cache delivery for frontend assets, confirmed the backend proxy disabled caching for dynamic API requests, and tested application behavior under repeated authenticated requests.',
      },
    ],
    challenges: [
      'Browser HTTPS mixed-content restrictions',
      'CloudFront reverse proxy configuration',
      'React SPA routing with static hosting',
      'Elastic Beanstalk deployment packaging',
      'Prisma migration management',
      'RDS endpoint configuration',
      'Secure OpenAI API integration',
      'AWS IAM credential management',
    ],
    outcome:
      'The project successfully evolved from a local development application into a fully deployed cloud-native web platform.',
    results: [
      'Production-ready deployment on AWS',
      'Secure JWT authentication',
      'Fully operational PostgreSQL backend',
      'Four AI-powered productivity tools',
      'Complete CRUD application management',
      'End-to-end HTTPS architecture',
      'Protected server-side OpenAI integration',
      'Independent frontend and backend deployments',
      'Production infrastructure using AWS best practices',
    ],
    futureImprovements: [
      'Add a custom domain with Route 53 and ACM-managed certificates.',
      'Implement CI/CD using GitHub Actions and AWS deployment automation.',
      'Add resume upload with automatic parsing and keyword extraction.',
      'Introduce analytics dashboards showing application success trends.',
      'Implement WebSocket notifications for reminders and interview scheduling.',
      'Add OAuth login (Google, GitHub, LinkedIn).',
      'Optimize frontend performance with lazy loading and code splitting.',
      'Add automated testing with Jest, Supertest, and Playwright.',
      'Add Docker support for local development and deployment consistency.',
      'Introduce role-based permissions for collaborative career coaching.',
    ],
  },

  'nas-server': {
    slug: 'nas-server',
    role: 'Systems Engineer',
    timeframe: '2024',
    techStack: ['Linux', 'SMB', 'Docker', 'Bash', 'Network Storage'],
    links: [],
    overview:
      'The NAS Server project involved designing and deploying a self-hosted storage infrastructure to replace scattered cloud storage subscriptions and disconnected local drives with a centralized, reliable solution. Built on Linux with SMB file sharing and Docker, the system provides centralized storage, automated backups, containerized services, and full ownership of over 10TB of data while removing dependency on third-party cloud providers.',
    problem:
      'Important files were distributed across multiple cloud services, external drives, and personal devices. This created duplicate files, difficult backups, inconsistent organization, annual cloud subscription costs, slow file synchronization, and limited storage visibility. A centralized storage platform was needed to simplify management while improving reliability and long-term scalability.',
    approach: [
      'Designed and deployed a Linux-based NAS to centralize storage for multiple devices across the local network.',
      'Configured SMB file sharing to provide seamless access from Windows, Linux, and other compatible devices.',
      'Used Docker containers to isolate supporting services, simplifying maintenance and future upgrades.',
      'Consolidated more than 10TB of existing data from multiple storage locations into a unified file system.',
      'Implemented automated backup routines and redundancy to improve data protection while maintaining complete ownership of stored files.',
    ],
    featureGroups: [
      {
        category: 'Storage',
        items: [
          'Centralized File Storage',
          'SMB Network Shares',
          'Cross-Platform Access',
          'Large Capacity Storage',
          'Shared Network Folders',
        ],
      },
      {
        category: 'Infrastructure',
        items: [
          'Linux Server',
          'Docker Containers',
          'Automated Backups',
          'Local Network Access',
          'Self-Hosted Services',
        ],
      },
      {
        category: 'Reliability',
        items: [
          'Data Consolidation',
          'Backup Automation',
          'Simplified Maintenance',
          'Reduced Cloud Dependency',
        ],
      },
    ],
    architecture: [
      'Windows / Linux Devices',
      'SMB Network Shares',
      'Linux NAS Server',
      'Docker Services',
      '10TB+ Storage Pool',
      'Automated Backup System',
    ],
    buildProcess: [
      'Planned storage layout, folder hierarchy, and backup strategy before migration.',
      'Installed and configured Linux, networking, and SMB file sharing.',
      'Created shared folders with appropriate permissions.',
      'Deployed supporting services inside Docker containers.',
      'Migrated existing data incrementally while validating integrity.',
      'Configured automated backup routines and recovery testing.',
      'Verified network accessibility from all client devices.',
    ],
    testing: [
      {
        title: 'Network Testing',
        description: 'Verified reliable file access across multiple client devices using SMB.',
      },
      {
        title: 'Migration Testing',
        description:
          'Compared source and destination data after migration to ensure no corruption or missing files.',
      },
      {
        title: 'Backup Testing',
        description:
          'Executed backup and restore procedures to verify successful recovery in the event of accidental deletion.',
      },
      {
        title: 'Performance Testing',
        description: 'Measured transfer speeds for large file copies and concurrent access from multiple devices.',
      },
      {
        title: 'Reliability Testing',
        description:
          'Ran the NAS continuously under normal workloads while monitoring storage health, service availability, and backup execution.',
      },
    ],
    challenges: [
      'Migrating over 10TB of data with minimal downtime.',
      'Maintaining consistent permissions across network shares.',
      'Containerizing supporting services using Docker.',
      'Designing a backup strategy without relying on public cloud storage.',
      'Organizing a scalable folder structure for long-term growth.',
    ],
    outcome:
      'The completed NAS infrastructure successfully centralized over 10TB of previously fragmented data while eliminating recurring cloud storage subscriptions.',
    results: [
      '10TB+ consolidated storage',
      'Eliminated approximately $500/year in cloud storage costs',
      'Centralized file management',
      'Automated backup workflows',
      'Improved data ownership',
      'Easier cross-device access',
      'Reduced dependence on third-party storage providers',
    ],
    futureImprovements: [
      'Implement snapshot-based backups',
      'Add remote VPN access',
      'Configure monitoring dashboards',
      'Add SMART disk health alerts',
      'Expand storage capacity with additional drives',
      'Introduce role-based access control',
      'Deploy Nextcloud for secure remote file access',
    ],
    summary:
      'The NAS Server project replaces recurring cloud storage costs with a self-managed, secure, and cost-free alternative — consolidating over 10TB of data while keeping full ownership and control over backups and access.',
  },
};
