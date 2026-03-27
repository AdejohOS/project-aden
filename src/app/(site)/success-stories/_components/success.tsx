"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe,
  GraduationCap,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const stories = [
  {
    title: "Improving Digital Teaching Capacity in Nigeria",
    institution: "Ahmadu Bello University, Nigeria",
    description:
      "ADEN supported academic teams with digital teaching resources and faculty development guidance, helping educators strengthen blended learning delivery.",
    outcomes: [
      "Improved educator readiness",
      "Better course delivery structure",
      "Stronger institutional collaboration",
    ],
  },
  {
    title: "Expanding Access Through Training and Resource Sharing",
    institution: "University of Nairobi, Kenya",
    description:
      "Through curated digital resources and training opportunities, the institution improved access to practical teaching tools for educators and students.",
    outcomes: [
      "More accessible digital learning materials",
      "Enhanced teaching support",
      "Wider student reach",
    ],
  },
  {
    title: "Supporting Scalable Digital Learning Systems",
    institution: "Makerere University, Uganda",
    description:
      "ADEN contributed guidance on digital education planning and resource use, helping strengthen institutional efforts toward scalable implementation.",
    outcomes: [
      "Better institutional planning",
      "Increased digital learning confidence",
      "Improved long-term readiness",
    ],
  },
];

export default function Success() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-32 pb-20">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Impact in Action
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
            >
              Success Stories from Institutions Across Africa
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              See how ADEN is supporting institutions, educators, and learners
              through curriculum resources, training programs, and digital
              education support.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
              >
                <Link href="#stories">Explore Stories</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-xl border-emerald-600 text-emerald-700 hover:bg-emerald-50"
              >
                <Link href="/partner">Partner With Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Pan-African Reach",
                text: "ADEN supports institutions across multiple African countries through collaboration and shared digital education goals.",
              },
              {
                icon: <GraduationCap className="h-6 w-6" />,
                title: "Teaching Improvement",
                text: "Institutions benefit from stronger teaching capacity, improved course delivery, and better digital learning practices.",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Institutional Growth",
                text: "Partnerships help institutions build stronger systems, improve readiness, and expand student access.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="stories" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="max-w-3xl mb-14"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              Featured Success Stories
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-slate-600">
              These examples highlight how institutions are benefiting from
              ADEN’s support and expanding digital education impact.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-8 lg:grid-cols-3"
          >
            {stories.map((story) => (
              <motion.div
                key={story.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-4 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                  {story.institution}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {story.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {story.description}
                </p>

                <div className="mt-6 space-y-3">
                  {story.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                      <p className="text-slate-700">{outcome}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  <BookOpen className="h-4 w-4" />
                  More impact ahead
                </div>

                <h2 className="text-3xl md:text-4xl font-bold">
                  Let your institution become the next success story
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                  Partner with ADEN to strengthen teaching, improve digital
                  learning systems, and expand access to quality education.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />
                    <p className="text-white/90">
                      Access curriculum, training, and technology support
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />
                    <p className="text-white/90">
                      Join a growing network of African institutions
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />
                    <p className="text-white/90">
                      Build stronger digital education systems
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="rounded-xl bg-white text-emerald-700 hover:bg-gray-100"
                  >
                    <Link href="/partner">
                      Partner With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="ghost"
                    className="rounded-xl border border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
