"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  index,
}: FeatureCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ delay: index * 0.08, type: "spring", stiffness: 120 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white transition-all duration-300"
    >
      <motion.div
        whileHover={{ rotate: 5, scale: 1.08 }}
        className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6"
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
