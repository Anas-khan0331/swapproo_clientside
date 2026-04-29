"use client";

import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { AuthCard, AuthLayout, AuthLogo } from "@/features/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function OTPPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isResending, setIsResending] = useState(false);
  const [resendMessage, setResendMessage] = useState<string | null>(null);

  const email = searchParams.get("email") || "your email";

  const handleClick = () => {
    router.push("/signup");
  };

  const handleResendOtp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsResending(true);
    setResendMessage(null);

    try {
      // TODO: Replace with actual API call
      // await resendOtpApi(email);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setResendMessage("OTP resent successfully!");
    } catch {
      setResendMessage("Failed to resend OTP. Please try again.");
    } finally {
      setIsResending(false);
    }
  };
  return (
    <AuthLayout>
      <AuthCard className="min-w-full sm:min-w-[430px]">
        <AuthLogo />
        <div>
          <h6 className="mb-2 text-2xl leading-8 font-semibold tracking-normal">OTP</h6>
          <div className="mb-6">
            <p className="text-muted-foreground text-base leading-6 tracking-normal">
              Please confirm access to your account by entering the OTP we&​apos;ve sent on your
              email
              <span className="text-foreground font-regular"> {email}</span>
            </p>
            <span>
              <button
                onClick={handleResendOtp}
                disabled={isResending}
                className="hover:text-primary text-base leading-6 tracking-normal underline transition-colors disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isResending ? "Resending..." : "Resend OTP"}
              </button>
            </span>
            {resendMessage && (
              <p
                className={`text-sm ${resendMessage.includes("success") ? "text-green-600" : "text-red-600"}`}
              >
                {resendMessage}
              </p>
            )}
          </div>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="">
            <Label htmlFor="recoveryCode" className="text-base">
              Code*
            </Label>
          </div>
          <InputOTP id="recoveryCode" maxLength={6}>
            <InputOTPGroup className="w-full justify-center gap-4 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <Button
            className="bg-foreground text-background w-full p-5"
            onClick={handleClick}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
