"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceTab } from "./ui/resource-tab";

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

export const ResourcesSection = () => {
  const resources = [
    {
      id: "curriculum",
      title: "Digital Curriculum",
      image: "/images/resources/curriculum.jpg",
      href: "/resources/curriculum",
      description:
        "Access curriculum frameworks, lesson plans, and assessment tools designed specifically for African educational contexts.",
      features: [
        "Contextually relevant learning materials",
        "Adaptable to various infrastructure settings",
        "Available in multiple languages",
        "Regularly updated with latest research",
      ],
      buttonText: "Explore Curriculum",
    },
    {
      id: "training",
      title: "Training Programs",
      image: "/images/resources/training.jpg",
      href: "/resources/training",
      description:
        "Professional development programs to build capacity in digital teaching methods and educational technology.",
      features: [
        "Online and in-person workshops",
        "Certification programs for educators",
        "Peer learning communities",
        "Customized institutional training",
      ],
      buttonText: "View Programs",
    },
    {
      id: "technology",
      title: "Technology Solutions",
      image: "/images/resources/technology.jpg",
      href: "/resources/technology",
      description:
        "Guidance on implementing cost-effective technology solutions suitable for various infrastructure contexts.",
      features: [
        "Low-bandwidth learning platforms",
        "Offline content delivery systems",
        "Open source educational software",
        "Mobile learning applications",
      ],
      buttonText: "Discover Solutions",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-white">
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
            What We Offer
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Resources
          </motion.h2>

          <motion.p variants={fadeUpVariants} className="text-lg text-gray-600">
            ADEN provides a wide range of resources to support digital education
            initiatives across Africa.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="curriculum" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-12 h-auto rounded-2xl bg-emerald-50 p-1">
              {resources.map((resource) => (
                <TabsTrigger
                  key={resource.id}
                  value={resource.id}
                  className="rounded-xl px-4 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-emerald-700 data-[state=active]:shadow-sm"
                >
                  {resource.id.charAt(0).toUpperCase() + resource.id.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {resources.map((resource) => (
            <TabsContent key={resource.id} value={resource.id} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35 }}
                >
                  <ResourceTab
                    title={resource.title}
                    image={resource.image}
                    href={resource.href}
                    description={resource.description}
                    features={resource.features}
                    buttonText={resource.buttonText}
                  />
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
