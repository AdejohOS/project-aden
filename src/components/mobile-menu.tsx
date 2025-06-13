"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
  onClose: () => void;
}

export const MobileMenu = ({ navLinks, onClose }: MobileMenuProps) => {
  return (
    <div className="fixed inset-0 z-40 bg-white pt-20 px-4 md:hidden">
      <nav className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-lg font-medium p-3 border-b border-gray-100 hover:bg-gray-50"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        <div className="mt-4 flex flex-col gap-3">
          <Button
            variant="outline"
            className="w-full border-emerald-600 text-emerald-600"
          >
            Partner With Us
          </Button>
          <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
            Get Resources
          </Button>
        </div>
      </nav>
    </div>
  );
};
