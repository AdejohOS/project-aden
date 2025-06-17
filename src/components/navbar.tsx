"use client";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MobileMenu } from "./mobile-menu";
import { Logo } from "./logo";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#mandates", label: "Our Mandates" },
  { href: "#resources", label: "Resources" },
  { href: "#impact", label: "Impact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Logo />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 cursor-pointer"
              >
                Partner With Us
              </Button>
              <Button className="bg-gradient-to-r from-emerald-600 cursor-pointer to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white">
                Get Resources
              </Button>
            </nav>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <MobileMenu navLinks={navLinks} onClose={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};
