"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4">
      <div className="relative flex flex-col items-center text-center">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-teal-300/30 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 rounded-3xl border border-emerald-100 bg-white/80 px-10 py-12 shadow-xl backdrop-blur-md"
        >
          <div className="mx-auto mb-6 flex items-center justify-center">
            <div className="relative h-16 w-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border-4 border-emerald-200 border-t-emerald-600"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-2 rounded-full border-4 border-teal-100 border-b-teal-500"
              />
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-bold text-slate-900"
          >
            Loading ADEN
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-2 max-w-sm text-sm leading-6 text-slate-600"
          >
            Preparing digital education resources and experiences for you.
          </motion.p>

          <div className="mt-6 w-64 overflow-hidden rounded-full bg-emerald-100">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
