import { techStackData } from '../../../config/data';

export const TechStack = () => {
    return (
        <section className="space-y-6 scroll-reveal-card" id="tech-stack" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-pink-500 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>
                    Tech Stack
                </h2>
            </div>

            <div className="glass-panel p-8 rounded-xl h-[calc(100%-4rem)] flex flex-col justify-center border border-black/5 dark:border-white/5 bg-gradient-to-br from-white/50 dark:from-white/5 to-transparent">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 place-items-center">
                    {techStackData.map((tech) => (
                        <div key={tech.label} className="group relative z-10 hover:z-50 flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1 duration-300">
                            <div className={`w-16 h-16 rounded-2xl bg-white/10 dark:bg-[#1a1a1a] flex items-center justify-center ${tech.bgHoverColorClass} transition-colors shadow-lg border-2 border-slate-300 dark:border-slate-800 ${tech.borderColorClass}`}>
                                <tech.Icon className={`text-xl ${tech.colorClass} group-hover:text-white font-bold`} />
                            </div>
                            <span className={`font-bold text-xs ${tech.colorClass} group-hover:text-primary dark:group-hover:text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity absolute top-full whitespace-nowrap bg-black/80 px-2 py-1 rounded backdrop-blur-sm pointer-events-none`}>{tech.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
