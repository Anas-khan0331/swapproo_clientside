"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchNormal1 } from "iconsax-reactjs";
import { CloudUpload } from "lucide-react";

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

  return (
    <div className="mx-auto mb-20 max-w-3xl pt-8 pb-20">
      <h1 className="text-foreground mb-6 text-3xl leading-9 font-bold">Profile</h1>
      <Card className="border-neutral-150 mb-6 rounded-xl border ring-0">
        <CardHeader>
          <CardTitle className="text-foreground text-base font-bold">
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field orientation="horizontal">
              <Input type="text" placeholder="First Name*" className="h-11" />
              <Input type="text" placeholder="Last Name*" className="h-11" />
            </Field>

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

            <Field orientation="horizontal">
              <Input type="text" placeholder="City*" className="h-11" />
              <Input type="text" placeholder="Country*" className="h-11" />
            </Field>
            <div className="">
              <Button variant="default" size="default" className="bg-foreground px-3 py-5">
                Update
              </Button>
            </div>
          </FieldGroup>
        </CardContent>
      </Card>

      {/* Proof of Identity Card */}
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
    </div>
  );
};

export default ProfilePage;
