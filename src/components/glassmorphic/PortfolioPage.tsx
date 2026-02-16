import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { TechStack } from './sections/TechStack';
import { Skills } from './sections/Skills';
import { Services } from './sections/Services';

import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import '../../styles/global.css';

export const PortfolioPage = () => {
    return (
        <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 font-sans selection:bg-purple-500/30">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <Navbar />

            <main className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
                <Hero />

                <div className="mb-8">
                    <Experience />
                </div>

                <div className="mb-8">
                    <TechStack />
                </div>

                <div className="mb-8">
                    <Education />
                </div>

                <div className="mb-8">
                    <Skills />
                </div>



                <div className="mb-24">
                    <Services />
                </div>

                <Contact />
            </main>

            <Footer />
        </div>
    );
};
