import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BarChart, Globe, GraduationCap, Users } from "lucide-react";
import { StatCard } from "./ui/stats-card";

export const ImpactSection = () => {
  const stats = [
    {
      number: "27+",
      label: "African Countries",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      number: "150+",
      label: "Partner Institutions",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "50K+",
      label: "Educators Trained",
      icon: <GraduationCap className="h-6 w-6" />,
    },
    {
      number: "1M+",
      label: "Students Reached",
      icon: <BarChart className="h-6 w-6" />,
    },
  ];

  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Our Reach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Impact Across Africa
          </h2>
          <p className="text-lg text-gray-600">
            ADEN has made significant strides in advancing digital education
            across the continent.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <StatCard
              key={i}
              number={stat.number}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/impact.png?height=500&width=1200"
            alt="Map of ADEN's impact across Africa"
            width={1200}
            height={500}
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white max-w-2xl">
              <h3 className="text-2xl font-bold mb-4">Growing Presence</h3>
              <p className="mb-6">
                From North Africa to Southern Africa, ADEN is expanding its
                network to ensure digital education reaches every corner of the
                continent.
              </p>
              <Button className="bg-white text-emerald-600 hover:bg-gray-100">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
