"use client";

import { useSubscribeModal } from "@/hooks/use-subscribe";
import { ResponsiveModal } from "./responsive-modal";
import { SubscriptionForm } from "../subscription-form";

export const SubscribeUserModal = () => {
  const { isOpen, setIsOpen } = useSubscribeModal();
  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <SubscriptionForm />
    </ResponsiveModal>
  );
};
