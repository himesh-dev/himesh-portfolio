import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';
import { portfolioData } from '../../../config/data';

export const LatestProject = () => {
    return (
        <section id="projects" className="space-y-6">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    Latest Project
                </h2>
            </div>

            <GlassPanel className="h-full p-8 relative overflow-hidden group cursor-pointer border border-white/5 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 flex flex-col justify-end min-h-[240px]">

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt={portfolioData.latestProject.title}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity scale-100 group-hover:scale-105 duration-700"
                        src={portfolioData.latestProject.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                    <div className="flex gap-2 mb-3 translate-y-2 group-hover:translate-y-0 transition-transform">
                        {portfolioData.latestProject.tags.map((tag) => (
                            <span
                                key={tag.name}
                                className={`px-2 py-0.5 rounded text-[10px] font-bold bg-${tag.color}-600/20 text-${tag.color}-400 border border-${tag.color}-600/20`}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">{portfolioData.latestProject.title}</h3>
                    <p className="text-sm text-slate-300 mb-6 line-clamp-2">
                        {portfolioData.latestProject.description}
                    </p>

                    <div className="flex items-center gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
                        {portfolioData.latestProject.links.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                className="text-xs text-slate-400 flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
                            >
                                <span className="material-icons text-sm">{link.icon}</span> {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </GlassPanel>
        </section>
    );
};
