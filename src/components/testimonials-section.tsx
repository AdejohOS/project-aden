import { TestimonialCard } from "./ui/testimonial-card";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "ADEN's resources have transformed how we approach digital education. Our students now have access to world-class learning materials that are contextually relevant.",
      name: "Prof. Uche Kalu",
      institution: "University of Lagos, Nigeria",
      initials: "UK",
    },
    {
      quote:
        "The training our faculty received through ADEN has significantly improved our capacity to deliver quality digital education, even in areas with limited connectivity.",
      name: "Dr. Amina Mwangi",
      institution: "Kenyatta University, Kenya",
      initials: "AM",
    },
    {
      quote:
        "ADEN's support has been instrumental in helping us develop a digital strategy that works for our unique context and constraints. The impact on student engagement has been remarkable.",
      name: "Jean Diop",
      institution: "Université Cheikh Anta Diop, Senegal",
      initials: "JD",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from institutions that have benefited from ADEN's resources and
            support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={i}
              quote={testimonial.quote}
              name={testimonial.name}
              institution={testimonial.institution}
              initials={testimonial.initials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
