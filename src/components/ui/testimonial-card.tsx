interface TestimonialCardProps {
  quote: string;
  name: string;
  institution: string;
  initials: string;
}

export const TestimonialCard = ({
  quote,
  name,
  institution,
  initials,
}: TestimonialCardProps) => {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 shadow-lg">
      <div className="mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 inline-block"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <p className="italic text-gray-700 mb-6">&apos;{quote}&apos;</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <span className="font-bold text-emerald-600">{initials}</span>
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-600">{institution}</p>
        </div>
      </div>
    </div>
  );
};
