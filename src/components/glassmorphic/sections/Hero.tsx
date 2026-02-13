
import himeshImg from '../../../assets/himesh.png';

export const Hero = () => {
    return (
        <section className="glass-panel rounded-xl p-8 md:p-12 lg:p-16 relative overflow-hidden group scroll-shrink-hero mb-8 transition-all duration-300 mt-4">
            {/* Background Blur Effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">

                {/* Profile Image */}
                <div className="relative flex-shrink-0 animate-float order-1 md:order-1">
                    <div className="w-48 h-48 md:w-72 md:h-72 rounded-full p-[2px] bg-gradient-to-br from-blue-500 via-blue-400 to-transparent shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-[#050505] relative">
                            <img
                                alt="Professional headshot of Himesh Kumar"
                                className="w-full h-full object-cover"
                                src={himeshImg.src}
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-6 w-6 h-6 bg-emerald-500 border-4 border-[#0a0a0a] rounded-full animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="text-left flex-1 min-w-0 order-2 md:order-2">
                    <div className="scroll-fade-content flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold tracking-wider mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                            AVAILABLE FOR SENIOR ROLES
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 tracking-tighter leading-[0.9]">
                            HIMESH<br />
                            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">KUMAR</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white font-medium mb-8 mt-4">Senior Frontend Engineer</p>

                        <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed max-w-2xl font-light">
                            Specializing in Design Systems & Developer Experience (DX). With 7.5+ years of experience building scalable applications at <strong className="text-slate-200">TikTok</strong> and <strong className="text-slate-200">PayPal</strong>. I bridge the gap between complex engineering and intuitive user interfaces.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <button className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium transition-all flex items-center gap-2 bg-transparent hover:bg-white/5 cursor-pointer">
                                <span className="material-icons text-purple-400 text-sm">mail</span>
                                Email Me
                            </button>
                            <button className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 text-white font-medium transition-all flex items-center gap-2 bg-transparent hover:bg-white/5 cursor-pointer">
                                <span className="material-icons text-purple-400 text-sm">call</span>
                                Call
                            </button>
                            <button className="px-6 py-3 rounded-lg bg-[#0077b5] hover:bg-[#006396] text-white font-medium transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20 cursor-pointer">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                LinkedIn
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-white/10 w-full">
                            {[
                                { icon: 'verified', label: 'Design Systems' },
                                { icon: 'speed', label: 'Performance' },
                                { icon: 'code', label: 'Architecture' }
                            ].map((item) => (
                                <div key={item.label} className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                    <span className="material-symbols-outlined text-purple-500 text-[20px]">{item.icon}</span>
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
