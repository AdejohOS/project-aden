"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ResourceTabProps {
  title: string;
  image: string;
  description: string;
  features: string[];
  buttonText: string;
}

const contentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export const ResourceTab = ({
  title,
  image,
  description,
  features,
  buttonText,
}: ResourceTabProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100"
      >
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </motion.div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="show"
        className="space-y-6 flex flex-col justify-center"
      >
        <motion.h3
          variants={fadeUpVariants}
          className="text-2xl md:text-3xl font-bold"
        >
          {title}
        </motion.h3>

        <motion.p variants={fadeUpVariants} className="text-gray-600 leading-7">
          {description}
        </motion.p>

        <motion.ul variants={contentVariants} className="space-y-3">
          {features.map((feature) => (
            <motion.li
              key={feature}
              variants={fadeUpVariants}
              className="flex items-start gap-3"
            >
              <div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <ChevronRight className="h-4 w-4 text-emerald-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeUpVariants}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white w-fit rounded-xl">
            {buttonText}
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};
