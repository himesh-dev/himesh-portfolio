
import React from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { TechStack } from './sections/TechStack';
import { Education } from './sections/Education';
import { LatestProject } from './sections/LatestProject';

export const PortfolioPage = () => {
    return (
        <>
            <div className="fixed inset-0 z-0 pointer-events-none bg-[#050505]">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[150px]"></div>
                <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] rounded-full bg-purple-900/5 blur-[120px]"></div>
            </div>

            <Navbar />

            <div className="relative z-10 flex flex-col h-full pt-20">
                <main className="flex-1 p-4 md:p-8 h-full">
                    <div className="max-w-7xl mx-auto space-y-8 pb-20">
                        <Hero />

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-0">
                            <Experience />

                            <div className="space-y-8 lg:col-span-1">
                                <TechStack />
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 pb-6 scroll-reveal-card" style={{ animationDelay: '0.1s' }}>
                                    <Education />
                                    <LatestProject />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
