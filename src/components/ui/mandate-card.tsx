"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface MandateCardProps {
  title: string;
  image: string;
  description: string;
  items: string[];
  index: number;
}

export const MandateCard = ({
  title,
  image,
  description,
  items,
  index,
}: MandateCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
      </div>

      {/* CONTENT */}
      <div className="p-6 md:p-8 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="text-gray-600">{description}</p>

        {/* LIST */}
        <ul className="space-y-2">
          {items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-2 text-gray-600"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
