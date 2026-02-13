import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { Hexagon } from '../ui/Hexagon';
import { portfolioData } from '../../../config/data';

export const TechStack = () => {
    return (
        <section id="skills" className="space-y-6 scroll-reveal-card" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                    Tech Stack
                </h2>
            </div>

            <GlassPanel className="p-8 h-[calc(100%-4rem)] flex flex-col justify-center border border-white/5 bg-gradient-to-br from-white/5 to-transparent">
                <div className="grid grid-cols-3 gap-6 place-items-center">
                    {portfolioData.techStack.map((tech) => (
                        <Hexagon
                            key={tech.label}
                            label={tech.label}
                            colorClass={tech.colorClass}
                            hoverColorClass={tech.hoverColorClass}
                            bgHoverColorClass={tech.bgHoverColorClass}
                            borderColorClass={tech.borderColorClass}
                        />
                    ))}
                </div>
            </GlassPanel>
        </section>
    );
};
