"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceTab } from "./ui/resource-tab";

export const ResourcesSection = () => {
  const resources = [
    {
      id: "curriculum",
      title: "Digital Curriculum",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Access curriculum frameworks, lesson plans, and assessment tools designed specifically for African educational contexts.",
      features: [
        "Contextually relevant learning materials",
        "Adaptable to various infrastructure settings",
        "Available in multiple languages",
        "Regularly updated with latest research",
      ],
      buttonText: "Explore Curriculum",
    },
    {
      id: "training",
      title: "Training Programs",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Professional development programs to build capacity in digital teaching methods and educational technology.",
      features: [
        "Online and in-person workshops",
        "Certification programs for educators",
        "Peer learning communities",
        "Customized institutional training",
      ],
      buttonText: "View Programs",
    },
    {
      id: "technology",
      title: "Technology Solutions",
      image: "/images/resources/technology.png?height=400&width=600",
      description:
        "Guidance on implementing cost-effective technology solutions suitable for various infrastructure contexts.",
      features: [
        "Low-bandwidth learning platforms",
        "Offline content delivery systems",
        "Open source educational software",
        "Mobile learning applications",
      ],
      buttonText: "Discover Solutions",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>{" "}
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Resources</h2>
          <p className="text-lg text-gray-600">
            ADEN provides a wide range of resources to support digital education
            initiatives across Africa.
          </p>
        </div>

        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-12">
            {resources.map((resource) => (
              <TabsTrigger key={resource.id} value={resource.id}>
                {resource.id.charAt(0).toUpperCase() + resource.id.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          {resources.map((resource) => (
            <TabsContent key={resource.id} value={resource.id} className="mt-0">
              <ResourceTab
                title={resource.title}
                image={resource.image}
                description={resource.description}
                features={resource.features}
                buttonText={resource.buttonText}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
