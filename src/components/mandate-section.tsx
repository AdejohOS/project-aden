"use client";

import { motion } from "framer-motion";
import { MandateCard } from "./ui/mandate-card";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export const MandatesSection = () => {
  const mandates = [
    {
      title: "Raising Awareness",
      image: "/images/outreach.jpg",
      description:
        "We actively promote the benefits of digital education across Africa through various initiatives and programs.",
      items: [
        "Educational conferences and workshops",
        "Digital literacy campaigns",
        "Policy advocacy with governments",
        "Success stories and case studies",
      ],
    },
    {
      title: "Sharing Resources",
      image: "/images/sharing.jpg",
      description:
        "We facilitate resource sharing with African institutions of higher education through our extensive network.",
      items: [
        "Open educational resources (OER) repositories",
        "Digital learning platforms and tools",
        "Curriculum development assistance",
        "Technology infrastructure guidance",
      ],
    },
  ];

  return (
    <section
      id="mandates"
      className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* HEADER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Our Core Focus
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Core Mandates
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-gray-600">
            ADEN&apos;s mission is centered around two key mandates that drive
            our work across the continent.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {mandates.map((mandate, index) => (
            <MandateCard key={mandate.title} {...mandate} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
