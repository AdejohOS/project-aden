"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
  onClose: () => void;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0 },
};

export const MobileMenu = ({ navLinks, onClose }: MobileMenuProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden"
    >
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4"
      >
        {navLinks.map((link) => (
          <motion.div key={link.href} variants={itemVariants}>
            <Link
              href={link.href}
              className="block text-lg font-medium p-3 border-b border-gray-100 hover:bg-gray-50 rounded-lg transition-colors"
              onClick={onClose}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        <motion.div
          variants={itemVariants}
          className="mt-4 flex flex-col gap-3"
        >
          <Button
            variant="outline"
            className="w-full border-emerald-600 text-emerald-600"
          >
            Partner With Us
          </Button>
          <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
            Get Resources
          </Button>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};
