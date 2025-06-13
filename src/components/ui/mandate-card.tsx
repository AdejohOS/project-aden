import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface MandateCardProps {
  title: string;
  image: string;
  description: string;
  items: string[];
}

export const MandateCard = ({
  title,
  image,
  description,
  items,
}: MandateCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-64">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <h3 className="text-2xl font-bold text-white p-6">{title}</h3>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <p className="text-gray-600">{description}</p>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <ChevronRight className="h-4 w-4 text-emerald-600" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button
          variant="outline"
          className="mt-4 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};
