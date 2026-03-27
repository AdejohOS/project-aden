"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Laptop,
  Layers3,
  MonitorSmartphone,
  School,
  Users,
  UserRoundCog,
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

const trainingAreas = [
  {
    title: "Digital Teaching Skills",
    description:
      "Practical training for educators on how to plan, deliver, and manage learning in digital and blended classrooms.",
    icon: <MonitorSmartphone className="h-6 w-6" />,
  },
  {
    title: "Instructional Design",
    description:
      "Support for creating stronger learning experiences through structured course design, module planning, and learner-centered methods.",
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    title: "Faculty Development",
    description:
      "Capacity-building opportunities for lecturers, trainers, and academic staff who need to strengthen digital education delivery.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Educational Technology Adoption",
    description:
      "Training on selecting and using the right tools for teaching, collaboration, assessment, and content delivery.",
    icon: <Laptop className="h-6 w-6" />,
  },
  {
    title: "Leadership and Implementation Support",
    description:
      "Guidance for coordinators, administrators, and academic leaders managing digital learning initiatives at scale.",
    icon: <UserRoundCog className="h-6 w-6" />,
  },
  {
    title: "Certification and Continuous Learning",
    description:
      "Structured programs that encourage ongoing development and recognize educator progress in digital teaching practice.",
    icon: <BadgeCheck className="h-6 w-6" />,
  },
];

const benefits = [
  "Improves educator confidence in digital teaching",
  "Strengthens institutional readiness for blended learning",
  "Builds internal capacity across departments and faculties",
  "Supports consistent teaching quality across delivery modes",
  "Encourages sustainable adoption of educational technology",
  "Helps institutions scale digital learning more effectively",
];

const formats = [
  {
    title: "Workshops",
    text: "Short, practical sessions focused on specific digital teaching tools, methods, or curriculum implementation challenges.",
  },
  {
    title: "Certification Programs",
    text: "Structured training pathways that help educators build confidence and gain recognition for digital teaching competencies.",
  },
  {
    title: "Peer Learning Communities",
    text: "Collaborative spaces where educators share practices, lessons, and solutions from real teaching experiences.",
  },
  {
    title: "Institution-Based Training",
    text: "Tailored training engagements designed around the priorities, needs, and realities of a specific institution.",
  },
];

const supportItems = [
  {
    title: "Training Needs Alignment",
    description:
      "Programs can be aligned with faculty needs, institutional priorities, and the realities of local teaching environments.",
    icon: <School className="h-5 w-5" />,
  },
  {
    title: "Hands-On Learning",
    description:
      "Training focuses on practical application so participants can immediately use what they learn in their own teaching contexts.",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Long-Term Capacity Growth",
    description:
      "Beyond one-off sessions, ADEN supports the development of stronger internal systems and educator communities over time.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
];

export default function Training() {
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
              Training Programs
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Explore Training Programs for Digital Education Leaders and
              Educators
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              Discover professional development opportunities that help
              educators, institutions, and academic leaders strengthen digital
              teaching practice, improve implementation capacity, and support
              learner success across Africa.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-700 hover:to-teal-600"
              >
                <Link href="#training-areas">Browse Training Areas</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-xl border-emerald-600 text-emerald-700 hover:bg-emerald-50"
              >
                <Link href="#contact-training">Request Training Support</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
            >
              {[
                ["Workshops", "Practical learning"],
                ["Certification", "Structured development"],
                ["Faculty Support", "Capacity building"],
                ["Institutional Training", "Tailored delivery"],
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
                Why training matters
              </div>

              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Build the human capacity behind digital transformation
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Technology alone does not transform education. Real progress
                happens when educators, administrators, and academic leaders
                know how to use tools well, design stronger learning
                experiences, and support teaching in practical ways.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                ADEN’s training programs are designed to help institutions build
                that capacity. They focus on practical teaching realities,
                helping participants move from awareness to confident
                implementation.
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
        id="training-areas"
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
              <Users className="h-4 w-4" />
              Training Areas
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              Explore key training categories
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-600">
              These training areas help educators and institutions strengthen
              digital teaching quality, delivery systems, and long-term
              implementation confidence.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {trainingAreas.map((item) => (
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
                Flexible training formats for different institutional needs
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Not every institution needs the same kind of support. ADEN’s
                training programs can be delivered in ways that fit available
                time, infrastructure, participant readiness, and strategic
                priorities.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-4">
              {formats.map((item) => (
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
              <GraduationCap className="h-4 w-4" />
              Support Approach
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-slate-900 md:text-4xl"
            >
              Training that supports adoption, practice, and growth
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 text-lg text-slate-600">
              Effective training is not just about exposure. It is about helping
              participants apply what they learn, improving confidence, and
              supporting institutions as they move toward stronger digital
              education systems.
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

      <section id="contact-training" className="py-20">
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
                  Request training support for your institution
                </h2>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                  Whether your institution needs faculty development,
                  instructional design support, digital teaching workshops, or a
                  longer-term capacity-building plan, ADEN can help you move
                  forward with practical training solutions.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />
                    <p className="text-white/90">
                      Explore relevant training programs for your institution
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />
                    <p className="text-white/90">
                      Discuss faculty and institutional capacity needs
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-white" />
                    <p className="text-white/90">
                      Connect with ADEN for implementation and partnership
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
