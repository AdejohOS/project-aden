"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "./ui/testimonial-card";

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

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "ADEN's resources have transformed how we approach digital education. Our students now have access to world-class learning materials that are contextually relevant.",
      name: "Prof. Uche Kalu",
      institution: "University of Lagos, Nigeria",
      initials: "UK",
    },
    {
      quote:
        "The training our faculty received through ADEN has significantly improved our capacity to deliver quality digital education, even in areas with limited connectivity.",
      name: "Dr. Amina Mwangi",
      institution: "Kenyatta University, Kenya",
      initials: "AM",
    },
    {
      quote:
        "ADEN's support has been instrumental in helping us develop a digital strategy that works for our unique context and constraints. The impact on student engagement has been remarkable.",
      name: "Jean Diop",
      institution: "Université Cheikh Anta Diop, Senegal",
      initials: "JD",
    },
  ];

  return (
    <section className="py-20 bg-white">
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
            Testimonials
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            What Our Partners Say
          </motion.h2>

          <motion.p variants={fadeUpVariants} className="text-lg text-gray-600">
            Hear from institutions that have benefited from ADEN&apos;s
            resources and support.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              quote={testimonial.quote}
              name={testimonial.name}
              institution={testimonial.institution}
              initials={testimonial.initials}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
