
import React, { type HTMLAttributes } from 'react';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    highlight?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
    children,
    className = '',
    highlight = false,
    ...props
}) => {
    return (
        <div
            className={`
        ${highlight ? 'glass-panel-highlight' : 'glass-panel'} 
        rounded-xl backdrop-blur-md border border-white/5 
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};
