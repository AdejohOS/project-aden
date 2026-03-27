"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart, Globe, GraduationCap, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { StatCard } from "./ui/stats-card";

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

export const ImpactSection = () => {
  const stats = [
    {
      number: 27,
      suffix: "+",
      label: "African Countries",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      number: 150,
      suffix: "+",
      label: "Partner Institutions",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: 50,
      suffix: "K+",
      label: "Educators Trained",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      number: 1,
      suffix: "M+",
      label: "Students Reached",
      icon: <BarChart className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50"
    >
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
            Our Reach
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Impact Across Africa
          </motion.h2>

          <motion.p variants={fadeUpVariants} className="text-lg text-gray-600">
            ADEN has made significant strides in advancing digital education
            across the continent.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              index={index}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl shadow-xl border border-white/50"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <Image
              src="/images/impact.png"
              alt="Map of ADEN's impact across Africa"
              width={1200}
              height={500}
              className="w-full h-auto object-cover"
              priority={false}
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent flex items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-8 md:p-12 text-white max-w-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Growing Presence
              </h3>

              <p className="mb-6 text-white/90 leading-7">
                From North Africa to Southern Africa, ADEN is expanding its
                network to ensure digital education reaches every corner of the
                continent.
              </p>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  asChild
                  className="bg-white text-emerald-600 hover:bg-gray-100 rounded-xl"
                >
                  <Link href="/success-stories">View Success Stories</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
