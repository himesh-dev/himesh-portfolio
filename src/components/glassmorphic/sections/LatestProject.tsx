import { latestProjectData } from '../../../config/data';

export const LatestProject = () => {
    return (
        <section className="space-y-6">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                    Latest Project
                </h2>
            </div>

            <div className="glass-panel rounded-xl h-full p-8 relative overflow-hidden group cursor-pointer border border-black/5 dark:border-white/5 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/10 flex flex-col justify-end min-h-[240px]">
                <div className="absolute inset-0 z-0">
                    <img
                        alt={latestProjectData.title}
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity scale-100 group-hover:scale-105 duration-700"
                        src={latestProjectData.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 dark:from-[#050505] dark:via-[#050505]/90 to-transparent"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end">
                    <div className="flex gap-2 mb-3 translate-y-2 group-hover:translate-y-0 transition-transform">
                        {latestProjectData.tags.map((tag) => (
                            <span key={tag.name} className={`px-2 py-0.5 rounded text-[10px] font-bold bg-${tag.color}-500/20 text-${tag.color}-600 dark:text-${tag.color}-400 border border-${tag.color}-500/20`}>
                                {tag.name}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                        {latestProjectData.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-6 line-clamp-2">
                        {latestProjectData.description}
                    </p>

                    <div className="flex items-center gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
                        {latestProjectData.links.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 hover:text-primary dark:hover:text-white transition-colors cursor-pointer"
                            >
                                <span className="material-icons text-sm">{link.icon}</span> {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
