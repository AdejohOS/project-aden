"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import { TooltipContent } from "./tooltip";

interface PartnersMarqueeProps {
  logos: {
    src: string;
    alt: string;
    href: string;
    content: string;
    width: number;
    height: number;
  }[];
  speed?: number;
}

export const PartnersMarquee = ({
  logos,
  speed = 40,
}: PartnersMarqueeProps) => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the logos array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="overflow-hidden relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex items-center whitespace-nowrap ${
          isPaused ? "animate-pause" : ""
        }`}
        style={{
          animationDuration: `${speed}s`,
          animationName: "marquee",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <TooltipProvider>
          {duplicatedLogos.map((logo, i) => (
            <Tooltip key={i}>
              <Link href={logo.href} target="_blank" rel="noopener noreferrer">
                <TooltipTrigger>
                  <div className="mx-8 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-30 w-auto object-contain"
                    />
                  </div>
                </TooltipTrigger>
              </Link>
              <TooltipContent className="max-w-[300px] bg-slate-50 text-gray-500">
                <p className="text-sm">{logo.content}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};
