import { MandateCard } from "./ui/mandate-card";

export const MandatesSection = () => {
  const mandates = [
    {
      title: "Raising Awareness",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "We actively promote the benefits of digital education across Africa through various initiatives and programs.",
      items: [
        "Educational conferences and workshops",
        "Digital literacy campaigns",
        "Policy advocacy with governments",
        "Success stories and case studies",
      ],
    },
    {
      title: "Sharing Resources",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "We facilitate resource sharing with African institutions of higher education through our extensive network.",
      items: [
        "Open educational resources (OER) repositories",
        "Digital learning platforms and tools",
        "Curriculum development assistance",
        "Technology infrastructure guidance",
      ],
    },
  ];

  return (
    <section
      id="mandates"
      className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>{" "}
            Our Core Focus
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Mandates</h2>
          <p className="text-lg text-gray-600">
            ADEN's mission is centered around two key mandates that drive our
            work across the continent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {mandates.map((mandate, index) => (
            <MandateCard
              key={index}
              title={mandate.title}
              image={mandate.image}
              description={mandate.description}
              items={mandate.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
