"use client";

import { BookOpen, Globe, Share2 } from "lucide-react";
import { motion } from "framer-motion";

import { FeatureCard } from "./ui/feature-card";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

export const AboutSection = () => {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
      title: "Pan-African Network",
      description:
        "Connecting educational institutions across all regions of Africa to share knowledge and best practices.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-emerald-600" />,
      title: "Digital Literacy",
      description:
        "Promoting digital literacy and skills development for students, educators, and administrators.",
    },
    {
      icon: <Share2 className="h-6 w-6 text-emerald-600" />,
      title: "Resource Sharing",
      description:
        "Facilitating the sharing of educational resources, tools, and technologies among African institutions.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            About ADEN
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Bridging the Digital Education Gap
          </motion.h2>

          <motion.p variants={fadeUpVariants} className="text-lg text-gray-600">
            The African Digital Education Network (ADEN) is dedicated to
            bridging the digital divide in education across Africa. We connect
            institutions, educators, and students with the resources and
            knowledge needed to thrive in the digital age.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
