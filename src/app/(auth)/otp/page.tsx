"use client";

import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { AuthCard, AuthLayout, AuthLogo } from "@/features/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function OTPPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/signup");
  };
  return (
    <AuthLayout>
      <AuthCard className="min-w-[430px]">
        <AuthLogo />
        <div>
          <h6 className="mb-2 text-2xl leading-8 font-semibold tracking-normal">OTP</h6>
          <div className="mb-6">
            <p className="text-muted-foreground text-base leading-6 tracking-normal">
              Please confirm access to your account by entering the OTP we’ve sent on your email
              <span className="text-foreground font-regular"> arbab@gmail.com</span>
            </p>
            <span>
              <Link
                href={"#"}
                className="hover:text-primary text-base leading-6 tracking-normal underline transition-colors"
              >
                Resend OTP
              </Link>
            </span>
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
