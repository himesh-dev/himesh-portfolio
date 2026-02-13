
import React from 'react';
import { GlassPanel } from '../ui/GlassPanel';

export const Education = () => {
    return (
        <section id="education" className="space-y-6">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-purple-600 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"></span>
                    Education
                </h2>
            </div>

            <GlassPanel className="p-8 flex items-center gap-6 hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10 group">
                <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                    <span className="material-icons text-purple-300 text-3xl">school</span>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">BS Computer Science</h3>
                    <p className="text-slate-400 text-sm">University of Technology</p>
                    <span className="text-xs text-blue-500 mt-2 inline-block font-mono bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">2012 - 2016</span>
                </div>
            </GlassPanel>

            <GlassPanel className="p-8 flex items-center gap-6 hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10 group">
                <div className="w-16 h-16 flex-shrink-0 rounded-lg bg-gradient-to-br from-pink-900 to-rose-900 flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 transition-transform">
                    <span className="material-icons text-pink-300 text-3xl">verified</span>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">UI/UX Certification</h3>
                    <p className="text-slate-400 text-sm">Design Academy Online</p>
                    <span className="text-xs text-blue-500 mt-2 inline-block font-mono bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">2017</span>
                </div>
            </GlassPanel>
        </section>
    );
};
