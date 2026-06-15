"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Building2 } from "lucide-react";
import PayPalIcon from "@/assets/icons/PayPalIcon";

const PAYMENT_OPTIONS = [
  {
    value: "bank-transfer",
    label: "Bank Transfer",
    icon: <Building2 className="size-6" />,
  },
  {
    value: "paypal",
    label: "PayPal",
    icon: <PayPalIcon className="size-6" />,
  },
];

const PaymentSelection = () => {
  const [selectedPayment, setSelectedPayment] = useState("bank-transfer");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground text-xl leading-7 font-semibold">Payment</h2>
      <div className="overflow-hidden rounded-[10px]">
        {PAYMENT_OPTIONS.map((opt, index) => (
          <div key={opt.value}>
            <div
              onClick={() => setSelectedPayment(opt.value)}
              className={`flex cursor-pointer items-center justify-between border p-3 ${
                selectedPayment === opt.value
                  ? "border-neutral-975 bg-primary-50"
                  : "bg-background hover:bg-muted/40 border-border"
              } ${
                index === 0
                  ? "rounded-t-[10px]"
                  : index === PAYMENT_OPTIONS.length - 1 && selectedPayment !== opt.value
                    ? "rounded-b-[10px]"
                    : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex size-6 items-center justify-center">{opt.icon}</div>
                <span className="text-foreground text-sm font-medium">{opt.label}</span>
              </div>
              <div
                className={`flex size-4 shrink-0 items-center justify-center rounded-full border ${
                  selectedPayment === opt.value
                    ? "border-neutral-975"
                    : "border-muted-foreground/40"
                }`}
              >
                {selectedPayment === opt.value && (
                  <div className="bg-neutral-975 size-2 rounded-full" />
                )}
              </div>
            </div>
            {opt.value === "bank-transfer" && selectedPayment === "bank-transfer" && (
              <div className="border-neutral-975 flex flex-col gap-4 border-x border-b bg-neutral-50 p-3">
                <Input placeholder="Account Title*" className="h-10 w-full" />
                <Input placeholder="Account Number*" className="h-10 w-full" />
                <Input placeholder="Sort Code*" className="h-10 w-full" />
              </div>
            )}
            {opt.value === "paypal" && selectedPayment === "paypal" && (
              <div className="border-neutral-975 flex flex-col gap-4 overflow-hidden rounded-b-lg border-x border-b bg-neutral-50 p-3">
                <Input placeholder="PayPal Email*" type="email" className="h-10 w-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSelection;
