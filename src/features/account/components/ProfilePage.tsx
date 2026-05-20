"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchNormal1 } from "iconsax-reactjs";
import { CloudUpload, ArrowRightLeft } from "lucide-react";
import { Profile } from "iconsax-reactjs";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { MobileTabNav, type MobileTabNavItem } from "@/components/common/MobileTabNav";
import { TRADE_INS } from "@/features/trade-ins/constants/data";
import { TradeInCard } from "@/features/trade-ins/components/TradeInCard";

const accountTabs: MobileTabNavItem[] = [
  { value: "profile", label: "Profile", icon: Profile, iconSize: 32, iconColor: "#0a0a0a" },
  { value: "tradeins", label: "Trade-in's", icon: ArrowRightLeft },
];

const ProfilePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(selectedFile);
  };

  const profileContent = (
    <>
      <Card className="border-neutral-150 mb-6 rounded-xl border ring-0">
        <CardHeader className="px-4 pt-0 pb-4">
          <CardTitle className="text-foreground text-base font-bold">
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FieldGroup className="gap-4 lg:gap-5">
            <div className="flex flex-col gap-4 lg:flex-row">
              <Input type="text" placeholder="First Name*" className="h-11" />
              <Input type="text" placeholder="Last Name*" className="h-11" />
            </div>
            <Field>
              <Input type="email" placeholder="Email*" className="h-11" />
            </Field>
            <Field>
              <Input type="tel" placeholder="Phone Number (optional)" className="h-11" />
            </Field>

            <h2 className="text-foreground text-base font-bold">Address</h2>

            <Field>
              <InputGroup className="h-11">
                <InputGroupInput placeholder="Postcode or Address*" />
                <InputGroupAddon align="inline-end">
                  <SearchNormal1 size={18} className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <div className="flex flex-row gap-4">
              <Input type="text" placeholder="City*" className="h-11" />
              <Input type="text" placeholder="Country*" className="h-11" />
            </div>
            <div className="">
              <Button
                variant="default"
                size="default"
                className="bg-foreground hover:bg-foreground/80 px-3 py-5"
              >
                Update
              </Button>
            </div>
          </FieldGroup>
        </CardContent>
      </Card>
      <Card className="border-neutral-150 rounded-xl border ring-0">
        <CardHeader className="mb-4 py-0">
          <CardTitle className="text-foreground text-base font-bold">Proof of identity</CardTitle>
          <CardDescription className="text-muted-foreground text-sm">
            Manage your identity to ensure smooth trade-in&apos;s.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label
            htmlFor="identity-upload"
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            className={`border-border flex cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed py-10 transition-colors ${
              isDragging ? "bg-muted" : "bg-background"
            }`}
          >
            <CloudUpload className="text-foreground mb-3 size-6" />
            <p className="text-foreground text-sm">
              <span className="font-semibold">Click to upload</span>{" "}
              <span className="text-muted-foreground">or drag and drop</span>
            </p>
            <p className="text-muted-foreground mt-1 text-xs">PNG or JPG (MAX. 800x400px)</p>
            {file && <p className="text-foreground mt-2 text-sm font-medium">{file.name}</p>}
            <Input
              id="identity-upload"
              type="file"
              accept="image/png,image/jpeg"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </CardContent>
      </Card>
    </>
  );

  const tradeInsContent = (
    <div className="flex flex-col">
      {TRADE_INS.length === 0 ? (
        <Card className="border-neutral-150 rounded-xl border ring-0">
          <CardContent>
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <ArrowRightLeft className="text-muted-foreground mb-3 size-12" />
              <p className="text-muted-foreground text-sm">No trade-ins yet</p>
              <p className="text-muted-foreground mt-1 text-xs">Start a trade-in to see it here</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        TRADE_INS.map((tradeIn) => (
          <div key={tradeIn.id}>
            <TradeInCard tradeIn={tradeIn} />
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="mx-auto px-4 pt-8 pb-18 lg:mb-20 lg:max-w-3xl lg:pb-20">
      <h1 className="text-foreground mb-6 hidden text-3xl leading-9 font-bold lg:block">Profile</h1>
      <div className="hidden lg:block">{profileContent}</div>
      <div className="lg:hidden">
        <Tabs defaultValue="profile">
          <MobileTabNav tabs={accountTabs} className="mb-4" />
          <TabsContent value="profile">{profileContent}</TabsContent>
          <TabsContent value="tradeins">{tradeInsContent}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
