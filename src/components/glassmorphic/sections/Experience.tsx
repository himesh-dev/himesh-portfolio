import { useRef } from 'react';
import { experienceData } from '../../../config/data';

export const Experience = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 360; // Approximate card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="space-y-6 scroll-reveal-card">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                    Experience
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="w-9 h-9 rounded-full glass-panel flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white"
                        aria-label="Scroll left"
                    >
                        <span className="material-icons text-sm">chevron_left</span>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-9 h-9 rounded-full glass-panel flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white"
                        aria-label="Scroll right"
                    >
                        <span className="material-icons text-sm">chevron_right</span>
                    </button>
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide snap-x snap-mandatory"
            >
                {experienceData.map((exp, index) => (
                    <div
                        key={`${exp.company}-${index}`}
                        className={`min-w-[340px] glass-panel p-8 rounded-xl snap-start border-l-4 ${exp.borderColor} hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer group`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-2.5 ${exp.iconBg} rounded-lg`}>
                                <exp.icon className={`text-2xl ${exp.iconColor}`} />
                            </div>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono bg-white/50 dark:bg-black/40 px-3 py-1.5 rounded border border-black/5 dark:border-white/5">
                                {exp.period}
                            </span>
                        </div>
                        <h3 className={`text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors mb-1`}>
                            {exp.role}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{exp.company}</p>
                        <ul className="space-y-3">
                            {exp.description.map((desc, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                    <span className={`w-1.5 h-1.5 rounded-full ${exp.color.replace('bg-', 'bg-')} mt-2 shadow-[0_0_5px_currentColor]`}></span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
