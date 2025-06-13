import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Join the African Digital Education Network
            </h2>
            <p className="text-lg opacity-90">
              Partner with us to transform digital education at your institution
              and contribute to Africa&apos;s digital future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-emerald-600 hover:bg-gray-100"
              >
                Become a Partner
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border text-white hover:bg-white/10  hover:text-white"
              >
                Request Resources
              </Button>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="institution" className="text-sm font-medium">
                  Institution
                </label>
                <input
                  id="institution"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50"
                  placeholder="Your institution"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-white/50 min-h-[100px]"
                  placeholder="How can we help?"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-emerald-600 hover:bg-gray-100"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
