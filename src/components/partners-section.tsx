import { PartnersMarquee } from "./ui/partners-marque";

export default function PartnersSection() {
  // Sample partner logos
  const partnerLogos = [
    {
      src: "/images/partners/aceit.png?height=60&width=120&text=Partner1",
      alt: "Partner 1",
      width: 120,
      height: 60,
    },
    {
      src: "/images/partners/acenpee.jpg?height=60&width=120&text=Partner2",
      alt: "Partner 2",
      width: 120,
      height: 60,
    },
    {
      src: "/images/partners/acetel.jpg?height=60&width=120&text=Partner3",
      alt: "Partner 3",
      width: 120,
      height: 60,
    },
    {
      src: "/images/partners/ceai.jpg?height=60&width=120&text=Partner4",
      alt: "Partner 4",
      width: 120,
      height: 60,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-lg font-medium text-gray-600">
            Trusted by leading institutions across Africa
          </p>
        </div>
        <div className="max-w-full">
          <PartnersMarquee logos={partnerLogos} speed={40} />
        </div>
      </div>
    </section>
  );
}
