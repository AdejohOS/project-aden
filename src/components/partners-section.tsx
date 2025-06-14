import { PartnersMarquee } from "./ui/partners-marque";

export default function PartnersSection() {
  // Sample partner logos
  const partnerLogos = [
    {
      src: "/images/partners/aceit.png?height=60&width=120&text=Partner1",
      alt: "Partner 1",
      href: "https://lasu-aceitse.org.ng/",
      content:
        "Africa Centre of Excellence for Innovative and Transformative STEM Education (ACEITSE), Lagos State University (LASU), Lagos, Nigeria.",
      width: 120,
      height: 60,
    },
    {
      src: "/images/partners/acenpee.jpg?height=60&width=120&text=Partner2",
      alt: "Partner 2",
      href: "https://acenpee.abu.edu.ng",
      content:
        "Africa Centre of Excellence on New Pedagogies in Engineering Education (ACENPEE), Ahmadu Bello University (ABU), Zaria, Nigeria.",
      width: 120,
      height: 60,
    },
    {
      src: "/images/partners/acetel.jpg?height=60&width=120&text=Partner3",
      alt: "Partner 3",
      href: "https://acetel.nou.edu.ng",
      content:
        "Africa Centre of Excellence on Technology Enhanced Learning (ACETEL), National Open University of Nigeria (NOUN), Abuja",
      width: 120,
      height: 60,
    },
    {
      src: "/images/partners/ceai.jpg?height=60&width=120&text=Partner4",
      alt: "Partner 4",
      href: "https://www.cea-ms4ssa.org/",

      content:
        "Africa Centre of Excellence for Teaching/Learning Mathematics and Science for Sub-Saharan Africa (CEA MS4SSA), Abdou Moumouni University of Niamey, Republic of Niger.",
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
