"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="w-full space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          className="input-lg h-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          placeholder="Enter your name here..."
        />
      </div>

      <div className="w-full space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          className="input-lg h-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          placeholder="Enter your Email here..."
        />
      </div>
      <div className="w-full space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          className="min-h-[141px] bg-white! px-3 shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
          placeholder="Type here"
        />
      </div>
      <Button
        type="submit"
        variant={"default"}
        className="bg-foreground text-background hover:bg-foreground/90 h-10 w-full"
        size="lg"
      >
        Send Message
      </Button>
    </form>
  );
};

export { ContactForm };
