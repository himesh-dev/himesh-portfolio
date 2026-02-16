import { skillsData } from '../../../config/data';

export const Skills = () => {
    return (
        <section className="space-y-6 scroll-reveal-card" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                    Skills
                </h2>
            </div>

            <div className="glass-panel p-8 rounded-xl h-full border border-black/5 dark:border-white/5 bg-gradient-to-br from-white/50 dark:from-white/5 to-transparent">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skillsData.map((skill) => (
                        <div key={skill.label} className="group relative z-10 flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-black/5 dark:border-white/5 hover:bg-white/10 hover:border-black/10 dark:hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1">
                            <div className={`p-3 rounded-lg bg-white/5 flex items-center justify-center ${skill.bgHoverColorClass} transition-colors shadow-lg border border-slate-300 dark:border-slate-700 ${skill.borderColorClass}`}>
                                <skill.Icon className={`text-2xl ${skill.colorClass} group-hover:text-white transition-colors`} />
                            </div>
                            <span className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-white transition-colors">{skill.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
