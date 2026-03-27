"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

export const CtaSection = () => {
  return (
    <section className="relative overflow-hidden py-20 text-white bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-600">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeUpVariants}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Get Started With ADEN
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            >
              Join the African Digital Education Network
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="max-w-xl text-lg leading-8 text-white/85"
            >
              Partner with us to transform digital education at your institution
              and contribute to Africa&apos;s digital future.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-xl bg-white px-6 text-emerald-700 hover:bg-gray-100"
                >
                  Become a Partner
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  size="lg"
                  variant="ghost"
                  className="rounded-xl border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                >
                  Request Resources
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:p-8"
          >
            <h3 className="mb-6 text-xl font-bold md:text-2xl">Get in Touch</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="space-y-2"
                >
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white/90"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-white/20"
                    placeholder="Your name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="space-y-2"
                >
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white/90"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-white/20"
                    placeholder="Your email"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <label
                  htmlFor="institution"
                  className="text-sm font-medium text-white/90"
                >
                  Institution
                </label>
                <input
                  id="institution"
                  type="text"
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-white/20"
                  placeholder="Your institution"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="space-y-2"
              >
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-white/90"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="min-h-[120px] w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none transition focus:border-white/40 focus:bg-white/15 focus:ring-2 focus:ring-white/20"
                  placeholder="How can we help?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-white py-6 text-emerald-700 hover:bg-gray-100"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
