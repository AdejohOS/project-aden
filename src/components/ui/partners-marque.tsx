"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

      <div
        className="flex items-center whitespace-nowrap"
        style={{
          animationName: "marquee",
          animationDuration: `${speed}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <TooltipProvider>
          {duplicatedLogos.map((logo, i) => (
            <Tooltip key={`${logo.alt}-${i}`}>
              <TooltipTrigger asChild>
                <Link
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-6 flex-shrink-0 rounded-2xl border border-transparent bg-white/80 p-4 transition-all duration-300 hover:border-emerald-100 hover:bg-emerald-50/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <div className="flex items-center justify-center grayscale transition-all duration-300 hover:grayscale-0">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-16 w-auto object-contain md:h-20"
                    />
                  </div>
                </Link>
              </TooltipTrigger>

              <TooltipContent className="max-w-[300px] bg-slate-50 text-gray-600">
                <p className="text-sm leading-6">{logo.content}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};
