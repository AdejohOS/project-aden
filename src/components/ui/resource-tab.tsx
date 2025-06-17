import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ResourceTabProps {
  title: string;
  image: string;
  description: string;
  features: string[];
  buttonText: string;
}

export const ResourceTab = ({
  title,
  image,
  description,
  features,
  buttonText,
}: ResourceTabProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className="space-y-6 flex flex-col justify-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <ChevronRight className="h-4 w-4 text-emerald-600" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white w-fit">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
