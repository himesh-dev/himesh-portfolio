
import { servicesData } from '../../../config/data';

export const Services = () => {
    return (
        <section className="scroll-reveal-card mb-24" id="services">
            <div className="flex items-center justify-between px-2 mb-10">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <span className="w-2 h-8 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                    Services
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {servicesData.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div
                            key={index}
                            className="group relative p-[1px] rounded-[24px] overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.border} opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="relative h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-[23px] p-8 overflow-hidden">
                                <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} rounded-full blur-[40px] opacity-50 group-hover:opacity-80 transition-opacity duration-300`}></div>

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-6 text-2xl`}>
                                        <Icon className={service.color} />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-400 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
