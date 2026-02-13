export const portfolioData = {
    navbar: {
        initials: "HK",
        name: "HIMESH KUMAR",
        links: [
            { name: "About", href: "#about" },
            { name: "Experience", href: "#experience" },
            { name: "Skills", href: "#skills" },
            { name: "Contact", href: "#contact" },
        ],
    },
    hero: {
        name: "HIMESH",
        surname: "KUMAR",
        title: "Senior Frontend Engineer",
        status: {
            text: "AVAILABLE FOR SENIOR ROLES",
            color: "purple", // Used for logic if needed
        },
        description: "Specializing in Design Systems & Developer Experience (DX). With 7.5+ years of experience building scalable applications at TikTok and PayPal. I bridge the gap between complex engineering and intuitive user interfaces.",
        image: "/himesh.png",
        socials: [
            { name: "Email Me", icon: "mail", action: "mailto:himesh@example.com" }, // Update with real email
            { name: "Call", icon: "call", action: "tel:+1234567890" }, // Update with real phone
            { name: "LinkedIn", icon: "linkedin", action: "https://linkedin.com/in/himesh" }, // Update with real link
        ],
        stats: [
            { icon: 'verified', label: 'Design Systems' },
            { icon: 'speed', label: 'Performance' },
            { icon: 'code', label: 'Architecture' }
        ]
    },
    experience: [
        {
            role: 'Senior Engineer',
            company: 'Tech Corp Inc.',
            period: '2020 - Present',
            description: [
                'Led a team of 5 frontend devs.',
                'Improved site performance by 40%.'
            ],
            color: 'bg-blue-500',
            borderColor: 'border-l-blue-500',
            icon: 'apartment',
            iconColor: 'text-blue-500',
            iconBg: 'bg-blue-500/10'
        },
        {
            role: 'Frontend Developer',
            company: 'Startup Flow',
            period: '2018 - 2020',
            description: [
                'Built main product dashboard from scratch.',
                'Implemented complex data visualizations.'
            ],
            color: 'bg-purple-500',
            borderColor: 'border-l-purple-500',
            icon: 'rocket_launch',
            iconColor: 'text-purple-500',
            iconBg: 'bg-purple-500/10'
        },
        {
            role: 'Jr. Web Developer',
            company: 'Creative Agency',
            period: '2016 - 2018',
            description: [
                'Maintained 20+ client websites.',
                'Converted PSDs to responsive HTML/CSS.'
            ],
            color: 'bg-teal-500',
            borderColor: 'border-l-teal-500',
            icon: 'code',
            iconColor: 'text-teal-500',
            iconBg: 'bg-teal-500/10'
        }
    ],
    education: [
        {
            degree: "BS Computer Science",
            institution: "University of Technology",
            period: "2012 - 2016",
            icon: "school",
            colorStart: "from-purple-900",
            colorEnd: "to-indigo-900",
            iconColor: "text-purple-300",
            badgeColor: "text-blue-500",
            badgeBg: "bg-blue-500/10",
            badgeBorder: "border-blue-500/20"
        },
        {
            degree: "UI/UX Certification",
            institution: "Design Academy Online",
            period: "2017",
            icon: "verified",
            colorStart: "from-pink-900",
            colorEnd: "to-rose-900",
            iconColor: "text-pink-300",
            badgeColor: "text-blue-500",
            badgeBg: "bg-blue-500/10",
            badgeBorder: "border-blue-500/20"
        }
    ],
    techStack: [
        { label: "React", colorClass: "text-blue-400", hoverColorClass: "group-hover:text-blue-400", bgHoverColorClass: "group-hover:bg-blue-600", borderColorClass: "group-hover:border-blue-400" },
        { label: "Vue", colorClass: "text-teal-400", hoverColorClass: "group-hover:text-teal-400", bgHoverColorClass: "group-hover:bg-teal-600", borderColorClass: "group-hover:border-teal-400" },
        { label: "JS", colorClass: "text-yellow-400", hoverColorClass: "group-hover:text-yellow-400", bgHoverColorClass: "group-hover:bg-yellow-600", borderColorClass: "group-hover:border-yellow-400" },
        { label: "TS", colorClass: "text-blue-300", hoverColorClass: "group-hover:text-blue-300", bgHoverColorClass: "group-hover:bg-blue-500", borderColorClass: "group-hover:border-blue-300" },
        { label: "HTML", colorClass: "text-orange-400", hoverColorClass: "group-hover:text-orange-400", bgHoverColorClass: "group-hover:bg-orange-600", borderColorClass: "group-hover:border-orange-400" },
        { label: "CSS", colorClass: "text-sky-400", hoverColorClass: "group-hover:text-sky-400", bgHoverColorClass: "group-hover:bg-sky-600", borderColorClass: "group-hover:border-sky-400" },
        { label: "Node", colorClass: "text-green-400", hoverColorClass: "group-hover:text-green-400", bgHoverColorClass: "group-hover:bg-green-600", borderColorClass: "group-hover:border-green-400" },
        { label: "Tail", colorClass: "text-cyan-400", hoverColorClass: "group-hover:text-cyan-400", bgHoverColorClass: "group-hover:bg-cyan-600", borderColorClass: "group-hover:border-cyan-400" },
        { label: "Sass", colorClass: "text-pink-400", hoverColorClass: "group-hover:text-pink-400", bgHoverColorClass: "group-hover:bg-pink-600", borderColorClass: "group-hover:border-pink-400" },
    ],
    latestProject: {
        title: "Crypto Analytics Dashboard",
        description: "Real-time cryptocurrency tracking dashboard with interactive charts and portfolio management tools.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9KGcoHEnLBuUc1Zv01qMsQfbGg9I-DiWQV2VVvYWj-zEM8pMI_myQ3mtIRGSzXsgoECbTl5ObVT0TTzqX98K0KGbXFTxyL-H6bC0DyAl1HPs1iVoMWU2hbYzKQp0BYjXyGb-bIn3SKiVSL01IyasVwylqXaPJ9l0FZwdvg_opuCyelS-_lYnGVlQhdRvDvJ50UeTYK4jrVHprIflZ9MyQCggUbpVF36O5fzeJfuxO9lit2yMqn_1LpWEUyXDOEEko4matOjT-Q8",
        tags: [
            { name: "REACT", color: "blue" },
            { name: "D3.JS", color: "purple" }
        ],
        links: [
            { name: "View Live", icon: "visibility", url: "#" },
            { name: "Source", icon: "code", url: "#" }
        ]
    }
};
