"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
  icon: ReactNode;
  index: number;
}

export const StatCard = ({
  number,
  suffix,
  label,
  icon,
  index,
}: StatCardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(20, Math.floor(duration / number));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= number) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, number]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
        <CardContent className="p-6 text-center">
          <motion.div
            whileHover={{ rotate: 6, scale: 1.08 }}
            className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600"
          >
            {icon}
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">
            {count}
            {suffix}
          </h3>

          <p className="text-gray-600">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
