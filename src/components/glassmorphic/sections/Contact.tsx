import { ContactForm } from '../components/ContactForm';

export const Contact = () => {
    return (
        <section className="scroll-reveal-card mt-12 mb-8" id="contact" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-[26px] glass-panel p-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 opacity-50 blur-xl"></div>
                <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>

                <div className="relative z-10 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-[22px] p-8 lg:p-12 overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.15)] group">
                    <div className="absolute inset-0 border border-purple-500/20 rounded-[22px] pointer-events-none group-hover:border-purple-500/40 transition-colors duration-500"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                                GET IN TOUCH
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Have a project in mind? <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Let's build something amazing together.</span>
                            </h2>

                            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover/item:text-purple-400 group-hover/item:bg-purple-500/10 group-hover/item:border-purple-500/20 transition-all duration-300">
                                        <span className="material-icons">email</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-0.5">Mail me at</p>
                                        <a className="text-white hover:text-purple-400 transition-colors font-medium text-lg" href="mailto:hello@himeshkumar.dev">hello@himeshkumar.dev</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group/item">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10 group-hover/item:border-blue-500/20 transition-all duration-300">
                                        <span className="material-icons">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-0.5">Location</p>
                                        <p className="text-white font-medium text-lg">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
