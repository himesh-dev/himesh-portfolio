
import { heroData } from '../../../config/data';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import resume from '../../../assets/Himesh_8YOE.pdf';

export const Hero = () => {
    return (
        <section className="glass-panel rounded-xl p-8 md:p-16 relative overflow-hidden group scroll-shrink-hero mb-8 transition-all duration-300 mt-4">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10 justify-center">
                <div className="relative flex-shrink-0 animate-float order-first">
                    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full p-[2px] bg-gradient-to-br from-primary via-blue-500 to-transparent shadow-blue-glow">
                        <div className="w-full h-full rounded-full overflow-hidden bg-bg-primary relative">
                            <img
                                alt={`Professional headshot of ${heroData.name} ${heroData.surname}`}
                                className="w-full h-full object-cover"
                                src={heroData.image}
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-6 right-4 w-6 h-6 bg-status-online border-4 border-bg-card rounded-full animate-pulse"></div>
                </div>

                <div className="text-center md:text-left flex-1 min-w-0 max-w-2xl">
                    <div className="scroll-fade-content flex flex-col items-center md:items-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            OPEN FOR OPPORTUNITIES
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-text-primary mb-2 tracking-tighter leading-[0.9]">
                        {heroData.name}<br />
                        <span className="bg-gradient-to-r from-accent-purple to-accent-purple-dark bg-clip-text text-transparent">{heroData.surname}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-400 font-medium mb-6 h-8 transition-opacity duration-500" id="dynamic-text">
                        {heroData.title}
                    </p>

                    <div className="scroll-fade-content">
                        <p className="text-text-secondary text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
                            {heroData.description}
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <a href={resume} download="Himesh_CV.pdf" className="px-8 py-3.5 rounded-lg bg-primary hover:bg-blue-600 text-white font-medium transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 flex items-center gap-2 group/btn">
                                <span className="material-icons text-sm group-hover/btn:animate-bounce">download</span>
                                Download CV
                            </a>

                            <a className="px-8 py-3.5 rounded-lg glass-panel hover:bg-bg-hover text-text-primary font-medium transition-all flex items-center gap-2 border border-white/5 hover:border-white/20" href="#contact">
                                <span className="material-icons text-sm">mail</span>
                                Contact Me
                            </a>

                            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-white/10">
                                <a
                                    href="https://linkedin.com/in/himesh-kumar"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-text-secondary hover:text-linkedin hover:bg-bg-hover transition-all"
                                >
                                    <SiLinkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/himesh-dev"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-text-secondary hover:text-white hover:bg-bg-hover transition-all"
                                >
                                    <SiGithub className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://wa.me/6581591831"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center text-text-secondary hover:text-whatsapp hover:bg-bg-hover transition-all"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

