import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, GraduationCap, Users } from "lucide-react";

export default function PartnerPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Partner with ADEN to Transform Digital Education in Africa
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Join a growing network of institutions working to improve access,
            quality, and delivery of digital education across the continent.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Button asChild className="bg-emerald-600 text-white rounded-xl">
              <Link href="#form">Apply to Partner</Link>
            </Button>

            <Button asChild variant="outline" className="rounded-xl">
              <Link href="/#resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Access Resources",
              text: "Gain access to curriculum, training, and technology support.",
              icon: <GraduationCap />,
            },
            {
              title: "Institutional Growth",
              text: "Improve teaching quality and digital delivery systems.",
              icon: <Globe />,
            },
            {
              title: "Network Benefits",
              text: "Collaborate with leading institutions across Africa.",
              icon: <Users />,
            },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-white shadow rounded-2xl">
              <div className="text-emerald-600 mb-3">{item.icon}</div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">
            What You Gain as a Partner
          </h2>

          <div className="space-y-4">
            {[
              "Curriculum frameworks and learning materials",
              "Training programs for faculty",
              "Technology implementation support",
              "Access to ADEN network",
              "Improved teaching and learning outcomes",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="text-emerald-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Apply for partnership",
              "We review your institution",
              "Start collaboration",
            ].map((step, i) => (
              <div key={i} className="p-6 bg-white shadow rounded-2xl">
                <p className="text-emerald-600 font-bold">Step {i + 1}</p>
                <p className="mt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="form" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Apply to Partner</h2>

            <form className="space-y-4">
              <input
                placeholder="Institution Name"
                className="w-full border rounded-lg p-3"
              />
              <input
                placeholder="Email"
                className="w-full border rounded-lg p-3"
              />
              <input
                placeholder="Country"
                className="w-full border rounded-lg p-3"
              />
              <textarea
                placeholder="Tell us about your institution"
                className="w-full border rounded-lg p-3"
              />

              <Button className="w-full bg-emerald-600 text-white">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white text-center">
        <h2 className="text-3xl font-bold">
          Let&apos;s Build the Future of Education Together
        </h2>

        <Button asChild className="mt-6 bg-white text-emerald-700">
          <Link href="#form">Get Started</Link>
        </Button>
      </section>
    </main>
  );
}
