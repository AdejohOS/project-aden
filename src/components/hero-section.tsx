import Image from "next/image";
import { Button } from "@/components/ui/button";

const schools = [
  {
    name: "Ahmadu Bello University",
    logo: "/images/schools/abu.png",
  },
  {
    name: "University of Cape Town",
    logo: "/images/schools/uct.jpg",
  },
  {
    name: "University of Nairobi",
    logo: "/images/schools/uon.jpeg",
  },
  {
    name: "Makerere University",
    logo: "/images/schools/makerere.jpg",
  },
];

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-28 md:pb-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Empowering Africa&apos;s Digital Future
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Education Across{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Africa
              </span>
            </h1>
            <p className="text-lg text-gray-600">
              The African Digital Education Network connects institutions,
              shares resources, and builds capacity for digital transformation
              across the continent.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-6 py-6 rounded-xl">
                Explore Resources
              </Button>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-6 rounded-xl"
              >
                Join Our Network
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {schools.map((i) => (
                  <div
                    key={i.name}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <Image src={i.logo} alt={i.name} width={32} height={32} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">150+ institutions</span> already
                joined
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

            <Image
              src="/images/hero.png"
              alt="African students using digital education tools"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
