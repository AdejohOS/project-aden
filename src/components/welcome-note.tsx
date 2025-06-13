import Image from "next/image";

export const WelcomeNote = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="/images/cordinator.jpg"
                    alt="Professor Raymond, ADEN Coordinator"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:col-span-3 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  A Message from Our Coordinator
                </div>
                <h2 className="text-3xl font-bold">Prof. Raymond B. Bako</h2>
                <blockquote className="text-lg italic text-gray-700 border-l-4 border-emerald-500 pl-4">
                  &apos;Education is the most powerful tool we can use to change
                  Africa. Through digital transformation, we&apos;re creating
                  opportunities for millions of students across our continent to
                  access quality education regardless of their location or
                  circumstances.&apos;
                </blockquote>
                <p className="text-gray-600">
                  I welcome you to the homepage of the African Digital Education
                  Network (ADEN). the program helps graduate students, faculty
                  members, and industry professionals in engineering and allied
                  STEM fields improve their teaching and course design skills.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gray-200"></div>
                  <Image
                    src="/images/signature.png"
                    alt="Signature"
                    width={120}
                    height={60}
                    className="h-12 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
