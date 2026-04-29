"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthCard, AuthLayout, AuthLogo } from "@/features/auth";
import { SearchNormal1 } from "iconsax-reactjs";

const SignupPage = () => {
  return (
    <AuthLayout>
      <AuthCard className="min-w-full sm:min-w-[430px]">
        <AuthLogo />
        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-foreground text-xl leading-7 font-semibold">Personal Information</h2>
          <div className="flex flex-col gap-4">
            <Input placeholder="First Name*" className="h-10" />
            <Input placeholder="Last Name*" className="h-10" />
            <Input placeholder="Phone Number (optional)" className="h-10" />
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <h2 className="text-foreground text-xl leading-7 font-semibold">Address</h2>
          <div className="flex flex-col gap-4">
            <div className="relative">
              <Input placeholder="Postcode or Address" className="h-10 pr-10" />
              <SearchNormal1 className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2" />
            </div>
            <div className="flex gap-4">
              <Input placeholder="City" className="h-10 flex-1" />
              <Input placeholder="Country" className="h-10 flex-1" />
            </div>
          </div>
        </div>
        <Button className="bg-foreground text-background mt-6 w-full p-5" type="submit">
          Submit
        </Button>
      </AuthCard>
    </AuthLayout>
  );
};

export default SignupPage;
