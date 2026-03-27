"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const schools = [
  {
    name: "Ahmadu Bello University",
    logo: "/images/schools/abu.png",
  },
  {
    name: "University of Cape Town",
    logo: "/images/schools/uct.jpg",
  },
  {
    name: "University of Nairobi",
    logo: "/images/schools/uon.jpeg",
  },
  {
    name: "Makerere University",
    logo: "/images/schools/makerere.jpg",
  },
];

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

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-28 md:pb-32 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-6 max-w-xl"
          >
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Empowering Africa&apos;s Digital Future
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Transforming Education Across{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Africa
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg text-gray-600 max-w-lg"
            >
              The African Digital Education Network connects institutions,
              shares resources, and builds capacity for digital transformation
              across the continent.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-6 py-6 rounded-xl">
                  Explore Resources
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-6 rounded-xl"
                >
                  Join Our Network
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {schools.map((school, index) => (
                  <motion.div
                    key={school.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <Image
                      src={school.logo}
                      alt={school.name}
                      width={32}
                      height={32}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-gray-600">
                <span className="font-semibold">150+ institutions</span> already
                joined
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply blur-2xl opacity-30 animate-blob animation-delay-2000" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/hero.png"
                alt="African students using digital education tools"
                width={600}
                height={600}
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
