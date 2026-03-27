import { Metadata } from "next";
import Success from "./_components/success";

export const metadata: Metadata = {
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
