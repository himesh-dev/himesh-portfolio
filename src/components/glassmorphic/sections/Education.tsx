import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { portfolioData } from '../../../config/data';

export const Education = () => {
    return (
        <section id="education" className="space-y-6">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-purple-600 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"></span>
                    Education
                </h2>
            </div>

            {portfolioData.education.map((edu, index) => (
                <GlassPanel key={index} className="p-8 flex items-center gap-6 hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10 group">
                    <div className={`w-16 h-16 flex-shrink-0 rounded-lg bg-gradient-to-br ${edu.colorStart} ${edu.colorEnd} flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 transition-transform`}>
                        <span className={`material-icons ${edu.iconColor} text-3xl`}>{edu.icon}</span>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                        <p className="text-slate-400 text-sm">{edu.institution}</p>
                        <span className={`text-xs ${edu.badgeColor} mt-2 inline-block font-mono ${edu.badgeBg} px-2 py-0.5 rounded ${edu.badgeBorder}`}>{edu.period}</span>
                    </div>
                </GlassPanel>
            ))}
        </section>
    );
};
