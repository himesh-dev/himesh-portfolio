import React, { useState } from 'react';
import { ScrollProgress } from '../ui/ScrollProgress';
import { portfolioData } from '../../../config/data';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-header px-6 py-4 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-purple-dark flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent-purple-dark/20">
                        {portfolioData.navbar.initials}
                    </div>
                    <span className="text-white font-bold tracking-tight text-lg hidden sm:block">{portfolioData.navbar.name}</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {portfolioData.navbar.links.map((item) => (
                        <a key={item.name} className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group" href={item.href}>
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple-dark transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="w-9 h-9 rounded-full bg-slate-900/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-white/5">
                        <span className="material-icons text-sm">light_mode</span>
                    </button>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                        >
                            <span className="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown - basic implementation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-header p-4 flex flex-col gap-4 border-t border-white/5">
                    {portfolioData.navbar.links.map((item) => (
                        <a key={item.name} className="text-sm font-medium text-slate-300 hover:text-white" href={item.href}>
                            {item.name}
                        </a>
                    ))}
                </div>
            )}

            <ScrollProgress />
        </nav>
    );
};
