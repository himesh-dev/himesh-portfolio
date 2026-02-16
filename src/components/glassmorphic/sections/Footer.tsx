import { SiGithub, SiLinkedin } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 glass-header border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/5 pb-12">
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                                HK
                            </div>
                            <span className="text-white font-bold tracking-tight text-lg">HIMESH KUMAR</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Building digital products, brands, and experiences with a focus on motion and usability.
                        </p>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h3>
                        <ul className="space-y-3">
                            <li><a href="#about" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">About Me</a></li>
                            <li><a href="#experience" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">Experience</a></li>
                            <li><a href="#tech-stack" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">Tech Stack</a></li>
                            <li><a href="#contact" className="text-slate-400 hover:text-white hover:translate-x-1 transition-all inline-block text-sm">Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Socials</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/himesh-dev" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#333] transition-all duration-300">
                                <SiGithub className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/himesh-kumar" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077b5] transition-all duration-300">
                                <SiLinkedin className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/6581591831" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#25D366] transition-all duration-300">
                                <FaWhatsapp className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm">
                        &copy; 2018 All rights reserved. Made with ❤️ by Himesh
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group cursor-pointer"
                    >
                        Back to Top
                        <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-icons text-sm transform -rotate-90">arrow_forward</span>
                        </span>
                    </button>
                </div>
            </div>
        </footer>
    );
};
