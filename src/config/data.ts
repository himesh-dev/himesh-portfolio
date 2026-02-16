import himesh from '../assets/himesh.png';
import { SiTiktok, SiPaypal, SiReact, SiTypescript, SiJavascript, SiNextdotjs, SiNodedotjs, SiGithubactions, SiVite, SiStorybook } from 'react-icons/si';
import { FaMoneyBillWave, FaShoppingCart, FaCode, FaProjectDiagram } from 'react-icons/fa';
import { MdMovie, MdPalette, MdSpeed, MdViewQuilt, MdGroups, MdAutorenew } from 'react-icons/md';
import { SiScrumalliance, SiJira } from 'react-icons/si';

export const navbarData = {
    initials: "HK",
    name: "HIMESH KUMAR",
    links: [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ],
};

export const heroData = {
    name: "HIMESH",
    surname: "KUMAR",
    title: "Senior Frontend Engineer",
    status: {
        text: "AVAILABLE FOR SENIOR ROLES",
        color: "purple", // Used for logic if needed
    },
    // Summarized from your Professional Summary [cite: 6, 7, 8]
    description: "Senior Frontend Engineer with 7.5+ years of experience scaling high-impact frontend systems. Specializing in Design System Architecture and Developer Experience (DX) at TikTok and PayPal. Proven track record of automating 99% of design workflows.",
    image: himesh.src,
    socials: [
        { name: "Email Me", icon: "mail", action: "mailto:askhimesh1@gmail.com" }, // [cite: 4]
        { name: "Call", icon: "call", action: "tel:+6581591831" }, // [cite: 3]
        { name: "LinkedIn", icon: "linkedin", action: "https://linkedin.com/in/himesh-kumar" }, // [cite: 4]
    ],
    stats: [
        { icon: 'verified', label: '7.5+ Years Exp.' }, // [cite: 6]
        { icon: 'speed', label: 'Performance' }, // [cite: 13]
        { icon: 'code', label: 'Architecture' } // [cite: 7]
    ]
};

export const experienceData = [
    {
        role: 'Senior Frontend Engineer, E-commerce',
        company: 'TikTok Pte Ltd',
        period: 'May 2023 - Present', // [cite: 20]
        description: [
            'Architected the SEA platform, implementing an isolated region-specific design strategy that boosted deployment velocity by 50%.', // [cite: 25]
            'Engineered a custom Figma-to-Canvas plugin slashing design-to-code translation time, achieving 99% automation.', // [cite: 23]
            'Led technical collaboration and onboarding for the Tokopedia engineering team during a major acquisition.' // [cite: 21]
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
        period: 'May 2021 - Apr 2023', // [cite: 29]
        description: [
            'Led the regional frontend launch of PayPal Working Capital in France and Netherlands.', // [cite: 30]
            'Spearheaded the migration of "Osprey" tool from Angular to React.js, boosting developer productivity by 30%.', // [cite: 32, 33]
            'Collaborated to integrate dynamic marketing tiles, driving increased user engagement for credit products.' // [cite: 34]
        ],
        color: 'bg-blue-600',
        borderColor: 'border-l-blue-600',
        icon: SiPaypal,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-600/10'
    },
    {
        role: 'Software Engineer, Frontend',
        company: 'Psi Phi Global Solutions (OkCredit)',
        period: 'Feb 2021 - Apr 2021', // [cite: 38]
        description: [
            'Architected a secure merchant payment platform, owning the frontend from initial design concepts to production launch.' // [cite: 39]
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
        period: 'May 2020 - Jan 2021', // [cite: 43]
        description: [
            'Owned the complete architectural overhaul of the main streamer dashboard using Redux, improving stability.', // [cite: 44]
            'Built the "GetLocoNow" event platform with integrated conversion analytics to track user acquisition.' // [cite: 45]
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
        period: 'Jan 2020 - Apr 2020', // [cite: 137]
        description: [
            'Developed the vendor onboarding flow for the AWOK marketplace web app.', // [cite: 141, 142]
            'Collaborated with multiple teams and stakeholders to streamline seller registration.' // [cite: 143]
        ],
        color: 'bg-red-500',
        borderColor: 'border-l-red-500',
        icon: FaShoppingCart,
        iconColor: 'text-red-500',
        iconBg: 'bg-red-500/10'
    },
    {
        role: 'Software Engineer (Full Stack & Mobile)',
        company: 'Codeyug Web Services',
        period: 'Oct 2018 - Jan 2020', // [cite: 49]
        description: [
            'Owned end-to-end creation of the "PedNeuroAiims" diagnostic mobile app (React Native) and deployed to App Stores.', // [cite: 50]
            'Developed the "Assess Prep" invigilation app implementing real-time data synchronization.' // [cite: 51]
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
        degree: "B.Tech in Electronics & Communication", // [cite: 53]
        institution: "Techno India", // [cite: 53]
        period: "2014 - 2018", // [cite: 54]
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
    // Mapped from Technical Skills section [cite: 11, 12, 13, 14, 15]
    { label: "React", Icon: SiReact, colorClass: "text-blue-400", hoverColorClass: "group-hover:text-blue-400", bgHoverColorClass: "group-hover:bg-blue-600", borderColorClass: "group-hover:border-blue-400" },
    { label: "TypeScript", Icon: SiTypescript, colorClass: "text-blue-300", hoverColorClass: "group-hover:text-blue-300", bgHoverColorClass: "group-hover:bg-blue-500", borderColorClass: "group-hover:border-blue-300" },
    { label: "Next.js", Icon: SiNextdotjs, colorClass: "text-white", hoverColorClass: "group-hover:text-white", bgHoverColorClass: "group-hover:bg-gray-800", borderColorClass: "group-hover:border-white" },
    { label: "React Native", Icon: SiReact, colorClass: "text-cyan-400", hoverColorClass: "group-hover:text-cyan-400", bgHoverColorClass: "group-hover:bg-cyan-600", borderColorClass: "group-hover:border-cyan-400" },
    { label: "Node.js", Icon: SiNodedotjs, colorClass: "text-green-400", hoverColorClass: "group-hover:text-green-400", bgHoverColorClass: "group-hover:bg-green-600", borderColorClass: "group-hover:border-green-400" },
    { label: "Design Systems", Icon: MdPalette, colorClass: "text-pink-400", hoverColorClass: "group-hover:text-pink-400", bgHoverColorClass: "group-hover:bg-pink-600", borderColorClass: "group-hover:border-pink-400" },
    { label: "Performance", Icon: MdSpeed, colorClass: "text-yellow-400", hoverColorClass: "group-hover:text-yellow-400", bgHoverColorClass: "group-hover:bg-yellow-600", borderColorClass: "group-hover:border-yellow-400" },
    { label: "CI/CD", Icon: SiGithubactions, colorClass: "text-orange-400", hoverColorClass: "group-hover:text-orange-400", bgHoverColorClass: "group-hover:bg-orange-600", borderColorClass: "group-hover:border-orange-400" },
    { label: "Webpack/Vite", Icon: SiVite, colorClass: "text-yellow-500", hoverColorClass: "group-hover:text-yellow-500", bgHoverColorClass: "group-hover:bg-yellow-700", borderColorClass: "group-hover:border-yellow-500" },
    { label: "JavaScript", Icon: SiJavascript, colorClass: "text-yellow-400", hoverColorClass: "group-hover:text-yellow-400", bgHoverColorClass: "group-hover:bg-yellow-600", borderColorClass: "group-hover:border-yellow-400" },
    { label: "Storybook", Icon: SiStorybook, colorClass: "text-pink-500", hoverColorClass: "group-hover:text-pink-500", bgHoverColorClass: "group-hover:bg-pink-700", borderColorClass: "group-hover:border-pink-500" },
    { label: "Component Libs", Icon: MdViewQuilt, colorClass: "text-indigo-400", hoverColorClass: "group-hover:text-indigo-400", bgHoverColorClass: "group-hover:bg-indigo-600", borderColorClass: "group-hover:border-indigo-400" },
];



export const skillsData = [
    { label: "Team Management", Icon: MdGroups, colorClass: "text-purple-400", hoverColorClass: "group-hover:text-purple-400", bgHoverColorClass: "group-hover:bg-purple-600", borderColorClass: "group-hover:border-purple-400" },
    { label: "End-to-End SDLC", Icon: MdAutorenew, colorClass: "text-blue-400", hoverColorClass: "group-hover:text-blue-400", bgHoverColorClass: "group-hover:bg-blue-600", borderColorClass: "group-hover:border-blue-400" },
    { label: "Software Architecture", Icon: FaProjectDiagram, colorClass: "text-orange-400", hoverColorClass: "group-hover:text-orange-400", bgHoverColorClass: "group-hover:bg-orange-600", borderColorClass: "group-hover:border-orange-400" },
    { label: "Agile", Icon: SiJira, colorClass: "text-blue-500", hoverColorClass: "group-hover:text-blue-500", bgHoverColorClass: "group-hover:bg-blue-700", borderColorClass: "group-hover:border-blue-500" },
    { label: "Scrum", Icon: SiScrumalliance, colorClass: "text-green-500", hoverColorClass: "group-hover:text-green-500", bgHoverColorClass: "group-hover:bg-green-700", borderColorClass: "group-hover:border-green-500" },
];

export const latestProjectData = {
    // Highlighted your "Figma-to-Canvas" plugin work [cite: 23]
    title: "Figma-to-Canvas Automation Plugin",
    description: "Engineered a custom plugin that slashed design-to-code translation time from hours to minutes, achieving 99% process automation for the TikTok team.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9KGcoHEnLBuUc1Zv01qMsQfbGg9I-DiWQV2VVvYWj-zEM8pMI_myQ3mtIRGSzXsgoECbTl5ObVT0TTzqX98K0KGbXFTxyL-H6bC0DyAl1HPs1iVoMWU2hbYzKQp0BYjXyGb-bIn3SKiVSL01IyasVwylqXaPJ9l0FZwdvg_opuCyelS-_lYnGVlQhdRvDvJ50UeTYK4jrVHprIflZ9MyQCggUbpVF36O5fzeJfuxO9lit2yMqn_1LpWEUyXDOEEko4matOjT-Q8", // Placeholder
    tags: [
        { name: "PLUGIN DEV", color: "blue" },
        { name: "DX", color: "purple" },
        { name: "AUTOMATION", color: "green" }
    ],
    links: [
        { name: "Demo", icon: "visibility", url: "#" },
        { name: "Case Study", icon: "article", url: "#" }
    ]
};

export const portfolioData = {
    navbar: navbarData,
    hero: heroData,
    experience: experienceData,
    education: educationData,
    techStack: techStackData,
    skills: skillsData,
    latestProject: latestProjectData
};