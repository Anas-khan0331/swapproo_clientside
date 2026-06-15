"use client";

import { Button } from "@/components/ui/button";
import PersonalInformationForm from "./PersonalInformationForm";
import AddressForm from "./AddressForm";
import PostageSelection from "./PostageSelection";
import PaymentSelection from "./PaymentSelection";

interface CheckoutFormSectionProps {
  onSubmit: () => void;
}

export function CheckoutFormSection({ onSubmit }: CheckoutFormSectionProps) {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-5">
        <PersonalInformationForm />
        <AddressForm />
        <PostageSelection />
        <PaymentSelection />
      </div>
      <div className="hidden lg:block">
        <Button
          className="bg-foreground hover:bg-foreground/80 h-12 w-full text-sm font-semibold"
          onClick={onSubmit}
        >
          Place Trade-in
        </Button>
      </div>
    </div>
  );
}
