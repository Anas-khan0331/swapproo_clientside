"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { AuthCard, AuthLayout, AuthLogo } from "@/features/auth";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/features/auth/store/authSlice";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    router.push("/otp");
  };

  const handleTestLogin = () => {
    const testUser = {
      id: "test-user-1",
      name: "Test User",
      email: "test@example.com",
      role: "customer" as const,
      region: "US",
    };

    dispatch(
      setCredentials({
        user: testUser,
        accessToken: "test-access-token",
      }),
    );

    router.push("/");
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

          <Button className="w-full p-5" variant="outline" onClick={handleTestLogin} type="button">
            Test Login (Demo)
          </Button>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
