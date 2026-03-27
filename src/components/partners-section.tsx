"use client";

import { motion } from "framer-motion";
import { PartnersMarquee } from "./ui/partners-marque";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function PartnersSection() {
  const partnerLogos = [
    {
      src: "/images/partners/aceit.png",
      alt: "ACEITSE",
      href: "https://lasu-aceitse.org.ng/",
      content:
        "Africa Centre of Excellence for Innovative and Transformative STEM Education (ACEITSE), Lagos State University, Lagos, Nigeria.",
      width: 120,
      height: 60,
    },
    {
      src: "/images/partners/acenpee.jpg",
      alt: "ACENPEE",
      href: "https://acenpee.abu.edu.ng",
      content:
        "Africa Centre of Excellence on New Pedagogies in Engineering Education (ACENPEE), Ahmadu Bello University, Zaria, Nigeria.",
      width: 120,
      height: 60,
    },
    {
      src: "/images/partners/acetel.jpg",
      alt: "ACETEL",
      href: "https://acetel.nou.edu.ng",
      content:
        "Africa Centre of Excellence on Technology Enhanced Learning (ACETEL), National Open University of Nigeria, Abuja.",
      width: 120,
      height: 60,
    },
    {
      src: "/images/partners/ceai.jpg",
      alt: "CEA MS4SSA",
      href: "https://www.cea-ms4ssa.org/",
      content:
        "Africa Centre of Excellence for Teaching and Learning Mathematics and Science for Sub-Saharan Africa (CEA MS4SSA), Abdou Moumouni University of Niamey, Republic of Niger.",
      width: 120,
      height: 60,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-10"
        >
          <motion.div
            variants={fadeUpVariants}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Our Partners
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-2xl md:text-3xl font-bold mb-3"
          >
            Trusted by Leading Institutions Across Africa
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            className="mx-auto max-w-2xl text-gray-600"
          >
            We collaborate with institutions and centres of excellence advancing
            digital education, pedagogy, and innovation across the continent.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-full"
        >
          <PartnersMarquee logos={partnerLogos} speed={40} />
        </motion.div>
      </div>
    </section>
  );
}
