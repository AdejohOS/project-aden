"use client";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

export const SubscriptionForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscribe to our newsletter</CardTitle>
        <CardDescription>provide your email to get updates</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <Input placeholder="email@domain.com" />
          <div className="flex justify-end">
            <Button className=" bg-gradient-to-r cursor-pointer from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white">
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
