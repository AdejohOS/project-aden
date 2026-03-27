"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

export const WelcomeNote = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="md:col-span-2"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                >
                  <Image
                    src="/images/cordinator.png"
                    alt="Professor Raymond, ADEN Coordinator"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="md:col-span-3 space-y-6"
              >
                <motion.div
                  variants={fadeUpVariants}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  A Message from Our Coordinator
                </motion.div>

                <motion.h2
                  variants={fadeUpVariants}
                  className="text-3xl font-bold"
                >
                  Prof. Raymond B. Bako
                </motion.h2>

                <motion.blockquote
                  variants={fadeUpVariants}
                  className="text-lg md:text-xl leading-relaxed italic text-gray-700 border-l-4 border-emerald-500 pl-4"
                >
                  &apos;Education is the most powerful tool we can use to change
                  Africa. Through digital transformation, we&apos;re creating
                  opportunities for millions of students across our continent to
                  access quality education regardless of their location or
                  circumstances.&apos;
                </motion.blockquote>

                <motion.p variants={fadeUpVariants} className="text-gray-600">
                  I welcome you to the homepage of the African Digital Education
                  Network (ADEN). The program helps graduate students, faculty
                  members, and industry professionals in engineering and allied
                  STEM fields improve their teaching and course design skills.
                </motion.p>

                <motion.div
                  variants={fadeUpVariants}
                  className="flex items-center gap-4"
                >
                  <div className="h-px flex-1 bg-gray-200" />
                  <Image
                    src="/images/signature.png"
                    alt="Signature"
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
