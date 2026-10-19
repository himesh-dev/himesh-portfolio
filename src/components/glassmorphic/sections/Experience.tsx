import { experienceData } from '../../../config/data';

export const Experience = () => {
    return (
        <section className="space-y-8 scroll-reveal-card" id="experience">
            <div className="px-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    Experience
                </h2>
            </div>

            <ol className="relative ml-5 md:ml-6 border-l-2 border-black/10 dark:border-white/10 space-y-10">
                {experienceData.map((exp, index) => (
                    <li key={`${exp.company}-${index}`} className="relative pl-8 md:pl-10 group">
                        <span
                            className={`absolute -left-[22px] top-0 w-11 h-11 rounded-full flex items-center justify-center ring-4 ring-bg-primary glass-panel ${exp.iconBg}`}
                        >
                            <exp.icon className={`text-xl ${exp.iconColor}`} />
                        </span>

                        <div className="glass-panel rounded-xl p-5 md:p-6 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                        {exp.role}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{exp.company}</p>
                                </div>
                                <span className="self-start shrink-0 text-xs text-slate-500 dark:text-slate-400 font-mono bg-white/50 dark:bg-black/40 px-3 py-1.5 rounded border border-black/5 dark:border-white/5">
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="space-y-2.5">
                                {exp.description.map((desc, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                                        <span className={`shrink-0 w-1.5 h-1.5 rounded-full ${exp.iconBg.includes('white') ? 'bg-slate-400' : exp.color} mt-2`}></span>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
};
