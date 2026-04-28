"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { AuthCard, AuthLayout, AuthLogo } from "@/features/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/otp");
  };

  return (
    <AuthLayout>
      <AuthCard className="min-w-[520px]">
        <AuthLogo />
        <h6 className="my-6 text-2xl leading-8 font-semibold tracking-normal">Login / Register</h6>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <Label htmlFor="userEmail" className="leading-5">
              Email address*
            </Label>
            <Input
              type="email"
              id="userEmail"
              className="p-5"
              placeholder="Enter your email address"
            />
          </div>

          <Button
            className="bg-foreground text-background w-full p-5"
            onClick={handleClick}
            type="submit"
          >
            Continue
          </Button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
