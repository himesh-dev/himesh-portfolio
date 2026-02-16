import React, { useState, useEffect } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';

export const PWAInstallPrompt = () => {
    const { isInstallable, installApp, dismiss } = usePWAInstall();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isInstallable) {
            // Delay the prompt slightly to not be intrusive immediately on load
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isInstallable]);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50 animate-fade-in-up">
            <div className="glass-card p-4 rounded-xl shadow-2xl border border-white/10 flex items-center gap-4 max-w-sm ml-auto bg-bg-secondary/90 backdrop-blur-md">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
                    HK
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-sm">Install App</h3>
                    <p className="text-slate-400 text-xs truncate">Add to home screen for better experience</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={dismiss}
                        className="text-slate-400 hover:text-white px-2 py-1 text-xs font-medium transition-colors"
                    >
                        Later
                    </button>
                    <button
                        onClick={installApp}
                        className="bg-primary hover:bg-primary/90 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors shadow-lg shadow-primary/20"
                    >
                        Install
                    </button>
                </div>
            </div>
        </div>
    );
};
