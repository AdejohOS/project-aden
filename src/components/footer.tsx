import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, PhoneCall } from "lucide-react";
import { Logo } from "./logo";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const resourceLinks = [
    "Digital Curriculum",
    "Training Programs",
    "Technology Solutions",
    "Research Publications",
  ];
  const aboutLinks = ["Our Mission", "Team", "Partners", "Success Stories"];
  const socialPlatforms = ["Twitter", "LinkedIn", "Facebook"];

  return (
    <footer className="bg-slate-300/20 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-500">
              Empowering Africa&apos;s educational institutions through digital
              transformation.
            </p>
            <div className="flex gap-4">
              {socialPlatforms.map((platform) => (
                <SocialIcon key={platform} platform={platform} />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-500">Resources</h3>
            <ul className="space-y-2 ">
              {resourceLinks.map((item) => (
                <FooterLink key={item} text={item} />
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-500">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((item) => (
                <FooterLink key={item} text={item} />
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-500">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-400 shrink-0 size-4" />
                <span className="text-gray-500">
                  ACENPEE BUILDING, Adj. Drama Village, Ahmadu Bello University,
                  Zaria.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="text-emerald-400 shrink-0 size-4" />
                <span className="text-gray-500">+234 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-emerald-400 shrink-0 size-4" />
                <span className="text-gray-500">contact@aden.org</span>
              </li>
            </ul>
            <div className="pt-4">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="  flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} African Digital Education Network.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <Link
        href="#"
        className="text-gray-500 hover:text-emerald-400 transition-colors flex items-center gap-2"
      >
        <ArrowRight className="h-3 w-3" />
        {text}
      </Link>
    </li>
  );
}

function SocialIcon({ platform }: { platform: string }) {
  return (
    <a
      href="#"
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"
      aria-label={platform}
    >
      <span className="sr-only">{platform}</span>
      {platform === "Twitter" && (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
      )}
      {platform === "LinkedIn" && (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"></path>
        </svg>
      )}
      {platform === "Facebook" && (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      )}
    </a>
  );
}
