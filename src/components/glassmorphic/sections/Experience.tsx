
import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';

const experiences = [
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
];

export const Experience = () => {
    return (
        <section id="experience" className="lg:col-span-2 space-y-6 scroll-reveal-card">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                    Experience
                </h2>
                <div className="flex gap-2">
                    <button className="w-9 h-9 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white cursor-pointer">
                        <span className="material-icons text-sm">chevron_left</span>
                    </button>
                    <button className="w-9 h-9 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors text-slate-400 hover:text-white cursor-pointer">
                        <span className="material-icons text-sm">chevron_right</span>
                    </button>
                </div>
            </div>

            <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide snap-x snap-mandatory">
                {experiences.map((exp, index) => (
                    <GlassPanel
                        key={index}
                        className={`min-w-[340px] p-8 snap-start border-l-4 ${exp.borderColor} hover:bg-white/5 transition-colors cursor-pointer group`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2.5 ${exp.iconBg} rounded-lg`}>
                                <span className={`material-icons ${exp.iconColor}`}>{exp.icon}</span>
                            </div>
                            <span className="text-xs text-slate-400 font-mono bg-black/40 px-3 py-1.5 rounded border border-white/5">{exp.period}</span>
                        </div>

                        <h3 className={`text-xl font-bold text-white group-hover:${exp.iconColor} transition-colors mb-1`}>{exp.role}</h3>
                        <p className="text-sm text-slate-400 mb-6">{exp.company}</p>

                        <ul className="space-y-3">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                    <span className={`w-1.5 h-1.5 rounded-full ${exp.color} mt-2 shadow-[0_0_5px_rgba(59,130,246,0.8)]`}></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </GlassPanel>
                ))}
            </div>
        </section>
    );
};
