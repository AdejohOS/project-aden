import type { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  number: string;
  label: string;
  icon: ReactNode;
}

export const StatCard = ({ number, label, icon }: StatCardProps) => {
  return (
    <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1">
          {number}
        </h3>
        <p className="text-gray-600">{label}</p>
      </CardContent>
    </Card>
  );
};
