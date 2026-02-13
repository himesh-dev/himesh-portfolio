
import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';

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
                        alt="Dashboard interface showing charts and graphs in dark mode"
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity scale-100 group-hover:scale-105 duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ9KGcoHEnLBuUc1Zv01qMsQfbGg9I-DiWQV2VVvYWj-zEM8pMI_myQ3mtIRGSzXsgoECbTl5ObVT0TTzqX98K0KGbXFTxyL-H6bC0DyAl1HPs1iVoMWU2hbYzKQp0BYjXyGb-bIn3SKiVSL01IyasVwylqXaPJ9l0FZwdvg_opuCyelS-_lYnGVlQhdRvDvJ50UeTYK4jrVHprIflZ9MyQCggUbpVF36O5fzeJfuxO9lit2yMqn_1LpWEUyXDOEEko4matOjT-Q8"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end">
                    <div className="flex gap-2 mb-3 translate-y-2 group-hover:translate-y-0 transition-transform">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/20 text-blue-500 border border-blue-500/20">REACT</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-600/20 text-purple-400 border border-purple-600/20">D3.JS</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">Crypto Analytics Dashboard</h3>
                    <p className="text-sm text-slate-300 mb-6 line-clamp-2">
                        Real-time cryptocurrency tracking dashboard with interactive charts and portfolio management tools.
                    </p>

                    <div className="flex items-center gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-xs text-slate-400 flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                            <span className="material-icons text-sm">visibility</span> View Live
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
                            <span className="material-icons text-sm">code</span> Source
                        </span>
                    </div>
                </div>
            </GlassPanel>
        </section>
    );
};
