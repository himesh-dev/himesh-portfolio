
import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { Hexagon } from '../ui/Hexagon';

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
                    <Hexagon
                        label="React"
                        colorClass="text-blue-400"
                        hoverColorClass="group-hover:text-blue-400"
                        bgHoverColorClass="group-hover:bg-blue-600"
                        borderColorClass="group-hover:border-blue-400"
                    />
                    <Hexagon
                        label="Vue"
                        colorClass="text-teal-400"
                        hoverColorClass="group-hover:text-teal-400"
                        bgHoverColorClass="group-hover:bg-teal-600"
                        borderColorClass="group-hover:border-teal-400"
                    />
                    <Hexagon
                        label="JS"
                        colorClass="text-yellow-400"
                        hoverColorClass="group-hover:text-yellow-400"
                        bgHoverColorClass="group-hover:bg-yellow-600"
                        borderColorClass="group-hover:border-yellow-400"
                    />
                    <Hexagon
                        label="TS"
                        colorClass="text-blue-300"
                        hoverColorClass="group-hover:text-blue-300"
                        bgHoverColorClass="group-hover:bg-blue-500"
                        borderColorClass="group-hover:border-blue-300"
                    />
                    <Hexagon
                        label="HTML"
                        colorClass="text-orange-400"
                        hoverColorClass="group-hover:text-orange-400"
                        bgHoverColorClass="group-hover:bg-orange-600"
                        borderColorClass="group-hover:border-orange-400"
                    />
                    <Hexagon
                        label="CSS"
                        colorClass="text-sky-400"
                        hoverColorClass="group-hover:text-sky-400"
                        bgHoverColorClass="group-hover:bg-sky-600"
                        borderColorClass="group-hover:border-sky-400"
                    />
                    <Hexagon
                        label="Node"
                        colorClass="text-green-400"
                        hoverColorClass="group-hover:text-green-400"
                        bgHoverColorClass="group-hover:bg-green-600"
                        borderColorClass="group-hover:border-green-400"
                    />
                    <Hexagon
                        label="Tail"
                        colorClass="text-cyan-400"
                        hoverColorClass="group-hover:text-cyan-400"
                        bgHoverColorClass="group-hover:bg-cyan-600"
                        borderColorClass="group-hover:border-cyan-400"
                    />
                    <Hexagon
                        label="Sass"
                        colorClass="text-pink-400"
                        hoverColorClass="group-hover:text-pink-400"
                        bgHoverColorClass="group-hover:bg-pink-600"
                        borderColorClass="group-hover:border-pink-400"
                    />
                </div>
            </GlassPanel>
        </section>
    );
};
