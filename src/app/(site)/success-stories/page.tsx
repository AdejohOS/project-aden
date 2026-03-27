import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Globe,
  GraduationCap,
  Users,
} from "lucide-react";
import Success from "./_components/success";

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

export const metadata = {
  title: "Success Stories | ADEN",
  description:
    "Explore how ADEN is helping institutions across Africa improve digital teaching, strengthen learning systems, and expand access to quality education.",
};

export default function SuccessStoriesPage() {
  return (
    <main className="bg-white">
      <Success />
    </main>
  );
}
