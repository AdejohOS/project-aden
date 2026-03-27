"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Separator } from "./ui/separator";
import { useSubscribeModal } from "@/hooks/use-subscribe";
import Image from "next/image";

import { FaLinkedinIn, FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { MapPin, PhoneCall, Mail, ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export const Footer = () => {
  const resourceLinks = [
    "Digital Curriculum",
    "Training Programs",
    "Technology Solutions",
    "Research Publications",
  ];

  const aboutLinks = ["Our Mission", "Team", "Partners", "Success Stories"];
  const socialPlatforms = [
    { name: "X", icon: <BsTwitterX className="shrink-0 size-4" /> },
    { name: "LinkedIn", icon: <FaLinkedinIn className="shrink-0 size-4" /> },
    { name: "Facebook", icon: <FaFacebook className="shrink-0 size-4" /> },
  ];

  const { open } = useSubscribeModal();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-600/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-teal-600/20 blur-3xl rounded-full" />

      <div className="container relative mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* BRAND */}
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Link href="/">
                  <Image
                    alt="Logo"
                    src="/images/aden.png"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </Link>
              </div>
              <h2 className="text-lg font-bold text-gray-300">ADEN</h2>
            </div>
            <p className="text-gray-400 leading-7">
              Empowering Africa&apos;s educational institutions through digital
              transformation.
            </p>

            <div className="flex gap-3">
              {socialPlatforms.map((platform) => (
                <SocialIcon key={platform.name} platform={platform} />
              ))}
            </div>
          </motion.div>

          {/* RESOURCES */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((item) => (
                <FooterLink key={item} text={item} />
              ))}
            </ul>
          </motion.div>

          {/* ABOUT */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-3">
              {aboutLinks.map((item) => (
                <FooterLink key={item} text={item} />
              ))}
            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <MapPin className="text-emerald-400 size-4 mt-1" />
                <span>ACENPEE Building, Ahmadu Bello University, Zaria.</span>
              </li>

              <li className="flex gap-3">
                <PhoneCall className="text-emerald-400 size-4 mt-1" />
                <span>+234 123 456 789</span>
              </li>

              <li className="flex gap-3">
                <Mail className="text-emerald-400 size-4 mt-1" />
                <span>contact@aden.org</span>
              </li>
            </ul>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={open}
                className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white w-full rounded-xl"
              >
                Subscribe to Newsletter
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <Separator className="my-12 bg-white/10" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ADEN. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  {item}
                </Link>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <Link
        href="#"
        className="group flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
      >
        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition" />
        {text}
      </Link>
    </li>
  );
}

function SocialIcon({
  platform,
}: {
  platform: { name: string; icon: React.ReactNode };
}) {
  return (
    <Link
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
      aria-label={platform.name}
    >
      <span className="sr-only">{platform.name}</span>
      {platform.icon}
    </Link>
  );
}
