import himeshJpg from '../assets/himesh.jpg';
import himeshWebp from '../assets/himesh.webp';
import { SiTiktok, SiPaypal, SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiNodedotjs, SiGithubactions, SiPython, SiPostgresql, SiGraphql, SiAmazonwebservices, SiGooglecloud, SiPnpm, SiAnthropic, SiFirebase } from 'react-icons/si';
import { FaMoneyBillWave, FaShoppingCart, FaCode, FaProjectDiagram } from 'react-icons/fa';
import { MdMovie, MdSpeed, MdGroups, MdAutorenew, MdViewQuilt, MdDevices } from 'react-icons/md';

export const navbarData = {
    initials: "HK",
    name: "HIMESH KUMAR",
    links: [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Tech Stack", href: "#tech-stack" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Services", href: "#services" },
        { name: "Contact", href: "#contact" },
    ],
};

export const heroData = {
    name: "HIMESH",
    surname: "KUMAR",
    title: "Lead Full Stack Engineer",
    status: {
        text: "AVAILABLE FOR LEAD ROLES",
        color: "purple", // Used for logic if needed
    },
    location: "Singapore",
    email: "askhimesh1@gmail.com",
    description: "Lead Full Stack Engineer with 8 years of experience building distributed systems, scalable architectures and metadata-driven UI platforms at TikTok and PayPal. Specializing in micro-frontends with Module Federation, Node.js/Python automation pipelines, Agentic AI workflows and CI/CD release governance for high-traffic, multi-regional applications.",
    images: {
        jpg: himeshJpg,
        webp: himeshWebp,
    },
    socials: [
        { name: "Email Me", icon: "mail", action: "mailto:askhimesh1@gmail.com" },
        { name: "LinkedIn", icon: "linkedin", action: "https://linkedin.com/in/himesh-kumar" },
    ],
    stats: [
        { icon: 'verified', label: '8 Years Exp.' },
        { icon: 'speed', label: 'Performance' },
        { icon: 'code', label: 'Architecture' }
    ]
};

export const experienceData = [
    {
        role: 'Senior Full Stack Engineer, E-commerce (Pearl SEA)',
        company: 'TikTok Pte Ltd',
        period: 'May 2023 - Present',
        description: [
            'Own the SEA Business Component Library: architected the full-stack, metadata-driven platform (including backend services) where business metrics dynamically determine component rendering, improving cross-team developer efficiency by 60-70%.',
            'Architected the SEA e-commerce platform from the ground up with micro-frontends and Module Federation, with isolated regional API layers and data fetching strategies that boosted regional deployment velocity by 50%.',
            'Built a Figma-to-Canvas web extension and custom backend pipeline generating Fabric.js code, cutting turnaround from 24+ hours to under a minute and scaling multi-lingual templates from 20 to 500+ for peak sales events.',
            'Maintain monorepo infrastructure (EdenX, Emo, Nx, pnpm) and automate GitLab CI/CD pipelines, catching regressions with Playwright and Jest.',
            'Standardized the technical architecture for the Tokopedia acquisition, mentoring engineers through code reviews to ensure a zero-downtime regional launch.'
        ],
        color: 'bg-black',
        borderColor: 'border-l-black',
        icon: SiTiktok,
        iconColor: 'text-black dark:text-white',
        iconBg: 'bg-black/10 dark:bg-white/10'
    },
    {
        role: 'Software Engineer 2',
        company: 'PayPal India Pvt Ltd',
        period: 'May 2021 - Apr 2023',
        description: [
            'Led the frontend architecture for the regional expansion of PayPal Working Capital, collaborating with backend teams on data contracts; earned a Spot Award for end-to-end delivery.',
            'Contributed to the Node.js Backend-for-Frontend (BFF) layer: identified a critical client-side rendering bottleneck and shifted A/B testing logic to the BFF, eliminating redundant client-server roundtrips and preventing UI flicker for localized content.',
            'Defined the roadmap for migrating the internal "Osprey" tool from Angular to React, increasing developer productivity by 30%.'
        ],
        color: 'bg-blue-600',
        borderColor: 'border-l-blue-600',
        icon: SiPaypal,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-600/10'
    },
    {
        role: 'Software Engineer, Frontend',
        company: 'OkCredit',
        period: 'Feb 2021 - Apr 2021',
        description: [
            'Drove the frontend production rollout of a secure merchant payment platform, integrating REST APIs to process 150,000+ daily transactions with 99.9% reliability.',
            'Optimized checkout for 2G/3G networks with Server-Side Rendering, reducing First Contentful Paint by 1.8 seconds and boosting checkout conversions by 12%.'
        ],
        color: 'bg-green-600',
        borderColor: 'border-l-green-600',
        icon: FaMoneyBillWave,
        iconColor: 'text-green-600',
        iconBg: 'bg-green-600/10'
    },
    {
        role: 'Software Development Engineer 1',
        company: 'Pocket Aces Pictures',
        period: 'May 2020 - Jan 2021',
        description: [
            'Engineered the viewer dashboard with Next.js (SSR) and the streamer dashboard with React (CSR); cut re-renders and improved TTI via lazy loading, bundle splitting and a Context-to-Redux migration.',
            'Integrated HLS/DASH video streaming and a real-time WebSockets chat; introduced design tokens and theming.',
            'Built a Gatsby link-sharing gateway generating dynamic Open Graph and Twitter meta tags for SEO.'
        ],
        color: 'bg-purple-500',
        borderColor: 'border-l-purple-500',
        icon: MdMovie,
        iconColor: 'text-purple-500',
        iconBg: 'bg-purple-500/10'
    },
    {
        role: 'Frontend Developer',
        company: 'AWOK Online Service',
        period: 'Jan 2020 - Apr 2020',
        description: [
            'Developed the vendor onboarding flow with React and TypeScript, adhering strictly to API contracts negotiated with backend teams.'
        ],
        color: 'bg-red-500',
        borderColor: 'border-l-red-500',
        icon: FaShoppingCart,
        iconColor: 'text-red-500',
        iconBg: 'bg-red-500/10'
    },
    {
        role: 'Software Engineer (Frontend & Mobile)',
        company: 'Codeyug Web Services',
        period: 'Oct 2018 - Jan 2020',
        description: [
            'Architected and deployed the "PedNeuroAiims" mobile app: React Native client plus secure REST APIs backed by PostgreSQL on GCP.',
            'Engineered the "AssessPrep" invigilation platform with Firebase real-time data synchronization to manage live assessment states.'
        ],
        color: 'bg-teal-500',
        borderColor: 'border-l-teal-500',
        icon: FaCode,
        iconColor: 'text-teal-500',
        iconBg: 'bg-teal-500/10'
    }
];

export const educationData = [
    {
        degree: "B.Tech in Electronics & Communication",
        institution: "Techno India",
        period: "2014 - 2018",
        icon: "school",
        colorStart: "from-purple-900",
        colorEnd: "to-indigo-900",
        iconColor: "text-purple-300",
        badgeColor: "text-blue-500",
        badgeBg: "bg-blue-500/10",
        badgeBorder: "border-blue-500/20"
    }
];

export const techStackData = [
    { label: "React", Icon: SiReact, colorClass: "text-blue-400", hoverColorClass: "group-hover:text-blue-400", bgHoverColorClass: "group-hover:bg-blue-600", borderColorClass: "group-hover:border-blue-400" },
    { label: "TypeScript", Icon: SiTypescript, colorClass: "text-blue-300", hoverColorClass: "group-hover:text-blue-300", bgHoverColorClass: "group-hover:bg-blue-500", borderColorClass: "group-hover:border-blue-300" },
    { label: "JavaScript", Icon: SiJavascript, colorClass: "text-yellow-400", hoverColorClass: "group-hover:text-yellow-400", bgHoverColorClass: "group-hover:bg-yellow-600", borderColorClass: "group-hover:border-yellow-400" },
    { label: "Next.js", Icon: SiNextdotjs, colorClass: "text-white", hoverColorClass: "group-hover:text-white", bgHoverColorClass: "group-hover:bg-gray-800", borderColorClass: "group-hover:border-white" },
    { label: "Node.js", Icon: SiNodedotjs, colorClass: "text-green-400", hoverColorClass: "group-hover:text-green-400", bgHoverColorClass: "group-hover:bg-green-600", borderColorClass: "group-hover:border-green-400" },
    { label: "CI/CD", Icon: SiGithubactions, colorClass: "text-orange-400", hoverColorClass: "group-hover:text-orange-400", bgHoverColorClass: "group-hover:bg-orange-600", borderColorClass: "group-hover:border-orange-400" },
    { label: "Python", Icon: SiPython, colorClass: "text-yellow-400", hoverColorClass: "group-hover:text-yellow-400", bgHoverColorClass: "group-hover:bg-yellow-600", borderColorClass: "group-hover:border-yellow-400" },
    { label: "PostgreSQL", Icon: SiPostgresql, colorClass: "text-blue-400", hoverColorClass: "group-hover:text-blue-400", bgHoverColorClass: "group-hover:bg-blue-600", borderColorClass: "group-hover:border-blue-400" },
    { label: "GraphQL", Icon: SiGraphql, colorClass: "text-pink-400", hoverColorClass: "group-hover:text-pink-400", bgHoverColorClass: "group-hover:bg-pink-600", borderColorClass: "group-hover:border-pink-400" },
    { label: "AWS", Icon: SiAmazonwebservices, colorClass: "text-orange-400", hoverColorClass: "group-hover:text-orange-400", bgHoverColorClass: "group-hover:bg-orange-600", borderColorClass: "group-hover:border-orange-400" },
    { label: "GCP", Icon: SiGooglecloud, colorClass: "text-cyan-400", hoverColorClass: "group-hover:text-cyan-400", bgHoverColorClass: "group-hover:bg-cyan-600", borderColorClass: "group-hover:border-cyan-400" },
    { label: "Firebase", Icon: SiFirebase, colorClass: "text-yellow-400", hoverColorClass: "group-hover:text-yellow-400", bgHoverColorClass: "group-hover:bg-yellow-600", borderColorClass: "group-hover:border-yellow-400" },
    { label: "Micro-Frontends", Icon: MdViewQuilt, colorClass: "text-indigo-400", hoverColorClass: "group-hover:text-indigo-400", bgHoverColorClass: "group-hover:bg-indigo-600", borderColorClass: "group-hover:border-indigo-400" },
    { label: "Playwright", Icon: MdSpeed, colorClass: "text-green-400", hoverColorClass: "group-hover:text-green-400", bgHoverColorClass: "group-hover:bg-green-600", borderColorClass: "group-hover:border-green-400" },
    { label: "pnpm / Nx", Icon: SiPnpm, colorClass: "text-orange-400", hoverColorClass: "group-hover:text-orange-400", bgHoverColorClass: "group-hover:bg-orange-600", borderColorClass: "group-hover:border-orange-400" },
    { label: "LLMs / Agentic AI", Icon: SiAnthropic, colorClass: "text-purple-400", hoverColorClass: "group-hover:text-purple-400", bgHoverColorClass: "group-hover:bg-purple-600", borderColorClass: "group-hover:border-purple-400" },
];

export const skillsData = [
    { label: "Distributed Systems", Icon: FaProjectDiagram, colorClass: "text-orange-400", hoverColorClass: "group-hover:text-orange-400", bgHoverColorClass: "group-hover:bg-orange-600", borderColorClass: "group-hover:border-orange-400" },
    { label: "Server-Driven UI", Icon: MdDevices, colorClass: "text-pink-400", hoverColorClass: "group-hover:text-pink-400", bgHoverColorClass: "group-hover:bg-pink-600", borderColorClass: "group-hover:border-pink-400" },
    { label: "BFF Architecture", Icon: MdSpeed, colorClass: "text-yellow-400", hoverColorClass: "group-hover:text-yellow-400", bgHoverColorClass: "group-hover:bg-yellow-600", borderColorClass: "group-hover:border-yellow-400" },
    { label: "RAG & AI Workflows", Icon: MdAutorenew, colorClass: "text-blue-400", hoverColorClass: "group-hover:text-blue-400", bgHoverColorClass: "group-hover:bg-blue-600", borderColorClass: "group-hover:border-blue-400" },
    { label: "Technical Leadership", Icon: MdGroups, colorClass: "text-purple-400", hoverColorClass: "group-hover:text-purple-400", bgHoverColorClass: "group-hover:bg-purple-600", borderColorClass: "group-hover:border-purple-400" },
    { label: "Mentorship", Icon: MdGroups, colorClass: "text-indigo-400", hoverColorClass: "group-hover:text-indigo-400", bgHoverColorClass: "group-hover:bg-indigo-600", borderColorClass: "group-hover:border-indigo-400" },
    { label: "CI/CD Governance", Icon: SiGithubactions, colorClass: "text-green-400", hoverColorClass: "group-hover:text-green-400", bgHoverColorClass: "group-hover:bg-green-600", borderColorClass: "group-hover:border-green-400" },
];

export const servicesData = [
    { title: "Full Stack Platforms", description: "Designing metadata-driven, server-driven UI platforms with Node.js/Python backends.", icon: FaCode, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { title: "Micro-Frontends & BFF", description: "Module Federation architectures and Backend-for-Frontend layers for multi-regional apps.", icon: FaProjectDiagram, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { title: "AI Workflow Automation", description: "Agentic AI and LLM-powered pipelines that turn day-long manual workflows into minutes.", icon: MdAutorenew, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { title: "Technical Leadership", description: "Architecture standards, code reviews, mentoring and CI/CD release governance.", icon: MdGroups, color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
];

export const portfolioData = {
    navbar: navbarData,
    hero: heroData,
    experience: experienceData,
    education: educationData,
    techStack: techStackData,
    skills: skillsData,
    services: servicesData,
};