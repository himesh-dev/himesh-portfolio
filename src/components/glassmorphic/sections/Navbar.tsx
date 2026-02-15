import React, { useState } from 'react';
import { navbarData } from '../../../config/data';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-header px-6 py-4 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                        {navbarData.initials}
                    </div>
                    <span className="text-text-primary font-bold tracking-tight text-lg hidden sm:block">{navbarData.name}</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navbarData.links.map((item) => (
                        <a key={item.name} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors relative group" href={item.href}>
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-text-primary hover:bg-bg-hover transition-colors"
                        >
                            <span className="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-header p-4 flex flex-col gap-4 border-t border-border">
                    {navbarData.links.map((item) => (
                        <a key={item.name} className="text-sm font-medium text-text-secondary hover:text-primary" href={item.href}>
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

