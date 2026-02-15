import React, { useState, useEffect } from 'react';
import { navbarData } from '../../../config/data';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Initialize theme state based on document class
        if (document.documentElement.classList.contains('dark')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('theme', newTheme);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-header px-6 py-4 transition-all duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20">
                        {navbarData.initials}
                    </div>
                    <span className="text-slate-900 dark:text-white font-bold tracking-tight text-lg hidden sm:block">{navbarData.name}</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navbarData.links.map((item) => (
                        <a key={item.name} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors relative group" href={item.href}>
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="w-9 h-9 rounded-full bg-slate-200/50 dark:bg-slate-900/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-300 dark:hover:bg-slate-800 transition-colors border border-black/5 dark:border-white/5 cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        <span className="material-icons text-sm">
                            {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                        </span>
                    </button>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            <span className="material-icons">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-header p-4 flex flex-col gap-4 border-t border-black/5 dark:border-white/5">
                    {navbarData.links.map((item) => (
                        <a key={item.name} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white" href={item.href}>
                            {item.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

