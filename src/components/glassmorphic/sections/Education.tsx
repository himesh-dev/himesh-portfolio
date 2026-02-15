import { educationData } from '../../../config/data';

export const Education = () => {
    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-purple-600 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"></span>
                    Education
                </h2>
            </div>

            <div className="space-y-4">
                {educationData.map((edu, index) => (
                    <div
                        key={`${edu.degree}-${index}`}
                        className="glass-panel p-8 rounded-xl flex items-center gap-6 hover:bg-black/5 dark:hover:bg-white/5 transition-colors border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 group"
                    >
                        <div className={`w-16 h-16 flex-shrink-0 rounded-lg bg-gradient-to-br ${edu.colorStart} ${edu.colorEnd} flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 transition-transform`}>
                            <span className={`material-icons ${edu.iconColor} text-3xl`}>{edu.icon}</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">{edu.institution}</p>
                            <span className="text-xs text-primary mt-2 inline-block font-mono bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                                {edu.period}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
