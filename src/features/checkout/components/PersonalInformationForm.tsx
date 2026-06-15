import { Input } from "@/components/ui/input";

const PersonalInformationForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground text-xl leading-7 font-semibold">Personal Information</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <Input placeholder="First Name*" className="h-10 flex-1" />
          <Input placeholder="Last Name*" className="h-10 flex-1" />
        </div>
        <Input placeholder="Email*" className="h-10 w-full" />
        <Input placeholder="Phone Number*" className="h-10 w-full" />
      </div>
    </div>
  );
};

export default PersonalInformationForm;
