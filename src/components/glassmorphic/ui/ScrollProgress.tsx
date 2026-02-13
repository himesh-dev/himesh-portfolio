import React, { useEffect, useRef } from 'react';

export const ScrollProgress = () => {
    const progressBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            const scrollPercentage = totalHeight > 0 ? scrollPosition / totalHeight : 0;

            if (progressBarRef.current) {
                progressBarRef.current.style.transform = `scaleX(${scrollPercentage})`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="scroll-progress-container" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-white/5 z-50">
            <div
                ref={progressBarRef}
                id="scroll-progress-bar"
                className="h-full w-full bg-accent-purple-dark shadow-[0_0_8px_var(--color-accent-purple-dark),0_0_4px_var(--color-accent-purple)] origin-left transform transition-transform duration-100 ease-out will-change-transform"
                style={{ transform: 'scaleX(0)' }}
            />
        </div>
    );
};
