
import React from 'react';

interface HexagonProps {
    label: string;
    colorClass: string; // e.g. "text-blue-400"
    hoverColorClass: string; // e.g. "group-hover:text-blue-400"
    borderColorClass: string; // e.g. "group-hover:border-blue-400"
    bgHoverColorClass: string; // e.g. "group-hover:bg-blue-600"
}

export const Hexagon: React.FC<HexagonProps> = ({
    label,
    colorClass,
    hoverColorClass,
    borderColorClass,
    bgHoverColorClass
}) => {
    return (
        <div className="group relative flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1 duration-300">
            <div className={`
        w-16 h-16 hexagon bg-[#1a1a1a] flex items-center justify-center 
        transition-colors shadow-lg border-2 border-slate-800 
        ${bgHoverColorClass} ${borderColorClass}
      `}>
                <span className={`font-bold text-xs ${colorClass} group-hover:text-white`}>
                    {label}
                </span>
            </div>
        </div>
    );
};
