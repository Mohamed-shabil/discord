"use client";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
 } from "@radix-ui/react-tooltip";

 interface ActionTooltipProps{
    label:string;
    children:React.ReactNode;
    side?:'top'|"right"|'bottom'|'left';
    align?:'start'|'center'|'end';
 }

 export const ActionTooltip = ({
    label,
    children,
    side,
    align
 }:ActionTooltipProps)=>{
    return(
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild> 
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align} className="bg-black/30 px-2 rounded-sm mb-1">
                    <p className="font-semibold text-sm capitalize">
                        {label.toLowerCase()}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
 }