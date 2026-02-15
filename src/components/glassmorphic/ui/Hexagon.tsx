import React from 'react';
import type { IconType } from 'react-icons';

interface HexagonProps {
    label: string;
    Icon?: IconType;
    colorClass: string; // e.g. "text-blue-400"
    hoverColorClass: string; // e.g. "group-hover:text-blue-400"
    borderColorClass: string; // e.g. "group-hover:border-blue-400"
    bgHoverColorClass: string; // e.g. "group-hover:bg-blue-600"
}

export const Hexagon: React.FC<HexagonProps> = ({
    label,
    Icon,
    colorClass,
    hoverColorClass,
    borderColorClass,
    bgHoverColorClass
}) => {
    return (
        <div className="group relative flex flex-col items-center justify-center gap-2 transition-transform hover:-translate-y-1 duration-300">
            <div className={`
        w-20 h-20 hexagon bg-white dark:bg-[#1a1a1a] flex flex-col items-center justify-center gap-1
        transition-colors shadow-lg border-2 border-slate-200 dark:border-slate-800 
        ${bgHoverColorClass} ${borderColorClass}
      `}>
                {Icon && <Icon className={`text-2xl ${colorClass} group-hover:text-white transition-colors`} />}
                <span className={`font-bold text-[10px] ${colorClass} group-hover:text-white transition-colors`}>
                    {label}
                </span>
            </div>
        </div>
    );
};
