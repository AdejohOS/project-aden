"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  institution: string;
  initials: string;
  index: number;
}

export const TestimonialCard = ({
  quote,
  name,
  institution,
  initials,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative h-full rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute top-5 right-5 opacity-10">
        <Quote className="h-10 w-10 text-emerald-700" />
      </div>

      <div className="mb-6">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.2 }}
            className="inline-block w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </motion.svg>
        ))}
      </div>

      <p className="mb-6 text-gray-700 italic leading-7">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-auto flex items-center gap-4 pt-2">
        <motion.div
          whileHover={{ scale: 1.08, rotate: 4 }}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100"
        >
          <span className="font-bold text-emerald-600">{initials}</span>
        </motion.div>

        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{institution}</p>
        </div>
      </div>
    </motion.div>
  );
};
