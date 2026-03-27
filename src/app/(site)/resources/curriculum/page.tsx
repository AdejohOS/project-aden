"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  Globe,
  GraduationCap,
  Layers3,
  Library,
  MonitorSmartphone,
  School,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

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

const curriculumAreas = [
  {
    title: "Digital Pedagogy",
    description:
      "Frameworks and practical guides for teaching effectively in digital and blended learning environments.",
    icon: <MonitorSmartphone className="h-6 w-6" />,
  },
  {
    title: "STEM Course Design",
    description:
      "Curriculum structures, assessment tools, and instructional models tailored for STEM education in African institutions.",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    title: "Open Educational Resources",
    description:
      "Curated OER materials that institutions can adapt, localize, and deploy across multiple learning contexts.",
    icon: <Library className="h-6 w-6" />,
  },
  {
    title: "Assessment and Evaluation",
    description:
      "Rubrics, digital assessment templates, and learner progress tools designed for scalable implementation.",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    title: "Faculty Development Support",
    description:
      "Instructional resources that help lecturers and facilitators redesign content for stronger learner outcomes.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Localized Learning Models",
    description:
      "Curriculum guidance adapted to infrastructure realities, language needs, and institutional differences across Africa.",
    icon: <Globe className="h-6 w-6" />,
  },
];

const benefits = [
  "Contextually relevant academic content",
  "Adaptable for online, hybrid, and offline learning",
  "Institution-ready frameworks and templates",
  "Supports multilingual and diverse classroom environments",
  "Built for varying bandwidth and infrastructure realities",
  "Easy for departments and institutions to customize",
];

const deliveryFormats = [
  {
    title: "Curriculum Frameworks",
    text: "Structured guides for course planning, sequencing, and implementation across departments and programmes.",
  },
  {
    title: "Lesson Plans and Modules",
    text: "Ready-to-adapt content blocks, weekly outlines, and teaching resources for faster deployment.",
  },
  {
    title: "Assessment Packs",
    text: "Assignments, rubrics, quizzes, and evaluation structures aligned with learning outcomes.",
  },
  {
    title: "Faculty Guides",
    text: "Practical playbooks for lecturers, trainers, and instructional teams implementing digital teaching.",
  },
];

const supportItems = [
  {
    title: "Institutional Adoption Support",
    description:
      "We help institutions align curriculum materials with their academic goals, delivery models, and student needs.",
    icon: <School className="h-5 w-5" />,
  },
  {
    title: "Curriculum Review Guidance",
    description:
      "Departments can access support for reviewing and improving existing curriculum structures for digital readiness.",
    icon: <Layers3 className="h-5 w-5" />,
  },
  {
    title: "Capacity Building",
    description:
      "We support educators and academic teams with practical guidance on how to use curriculum tools effectively.",
    icon: <BookOpen className="h-5 w-5" />,
  },
];

export default function ExploreCurriculumPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />

        <div className="container relative mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-5 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Digital Curriculum
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Explore Curriculum Resources for Digital Education Across Africa
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              Access curriculum frameworks, adaptable lesson structures,
              assessment tools, and implementation guides designed to support
              institutions advancing digital learning in African contexts.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-700 hover:to-teal-600"
              >
                <Link href="#curriculum-areas">Browse Curriculum Areas</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-xl border-emerald-600 text-emerald-700 hover:bg-emerald-50"
              >
                <Link href="#contact-curriculum">
                  Request Institutional Access
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
            >
              {[
                ["Frameworks", "Curriculum models"],
                ["Modules", "Ready-to-adapt content"],
                ["Assessments", "Rubrics and tools"],
                ["Support", "Institutional guidance"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm backdrop-blur-sm"
                >
                  <p className="font-semibold text-slate-900">{title}</p>
                  <p className="mt-1 text-sm text-slate-600">{text}</p>
                </div>
              ))}
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
            className="grid items-start gap-12 lg:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                <Clock3 className="h-4 w-4" />
                Why this matters
              </div>

              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Curriculum that fits real institutional needs
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Many institutions face the challenge of modernizing teaching and
                learning without abandoning local relevance. ADEN’s curriculum
                resources are built to help academic teams adapt confidently to
                digital teaching, blended learning, and scalable course
                delivery.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Instead of one-size-fits-all materials, the curriculum support
                here is designed to reflect African educational realities:
                different infrastructure levels, diverse classroom conditions,
                multilingual needs, and institutional priorities.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                What institutions gain
              </h3>

              <div className="mt-6 space-y-4">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="curriculum-areas"
        className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800"
            >
              <BookOpen className="h-4 w-4" />
              Curriculum Areas
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              Explore key curriculum categories
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-600">
              These curriculum areas help institutions improve course design,
              teaching quality, and learner outcomes in digitally enabled
              environments.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {curriculumAreas.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
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
            className="grid gap-12 lg:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                <Layers3 className="h-4 w-4" />
                Delivery Formats
              </div>

              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Multiple formats for practical implementation
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Institutions work differently, so curriculum resources must be
                flexible. ADEN’s curriculum support can be explored, adapted,
                and implemented in several practical forms depending on context,
                delivery goals, and learner needs.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {deliveryFormats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <motion.div
              variants={fadeUp}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800"
            >
              <Users className="h-4 w-4" />
              Institutional Support
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              More than content — support for adoption and use
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-600">
              Curriculum works best when institutions have the structure and
              confidence to implement it. That is why ADEN also supports
              adoption, review, and educator readiness.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-8 md:grid-cols-3"
          >
            {supportItems.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact-curriculum" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-600 p-8 text-white shadow-2xl md:p-12"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  <School className="h-4 w-4" />
                  Ready to get started?
                </div>

                <h2 className="text-3xl font-bold md:text-4xl">
                  Request curriculum access for your institution
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                  Whether you want to strengthen course design, support faculty
                  development, or improve digital learning delivery, ADEN can
                  help your institution explore relevant curriculum resources.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />
                    <p className="text-white/90">
                      Explore curriculum materials relevant to your context
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />
                    <p className="text-white/90">
                      Discuss institutional implementation needs
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />
                    <p className="text-white/90">
                      Connect with ADEN for support and partnership
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="rounded-xl bg-white text-emerald-700 hover:bg-gray-100"
                  >
                    <Link href="/#contact">
                      Contact ADEN
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
    </main>
  );
}
