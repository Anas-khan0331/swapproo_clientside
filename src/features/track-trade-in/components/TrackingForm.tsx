import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TrackingFormProps {
  onSubmit: (orderNumber: string, zipCode: string) => void;
}

export function TrackingForm({ onSubmit }: TrackingFormProps) {
  const [orderNumber, setOrderNumber] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(orderNumber, zipCode);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-foreground text-[30px] leading-9 font-semibold">
            Track your Trade-in
          </h1>
          <p className="text-muted-foreground text-base leading-6">
            Enter your Order and Zip Code to check the status of your trade-in.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Order Number*"
            className="h-10"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
          <Input
            placeholder="Zip Code*"
            className="h-10"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <Button
          type="submit"
          className="bg-foreground hover:bg-foreground/80 h-12 w-full font-semibold"
        >
          Track Trade-in
        </Button>
      </div>
    </form>
  );
}
