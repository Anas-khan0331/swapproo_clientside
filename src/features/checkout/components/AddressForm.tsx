import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const AddressForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-foreground text-xl leading-7 font-semibold">Address</h2>
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Input placeholder="Postcode or Address*" className="h-10 w-full pr-10" />
          <Search className="text-muted-foreground absolute top-1/2 right-3 size-4 -translate-y-1/2" />
        </div>
        <div className="flex flex-row gap-4">
          <Input placeholder="City*" className="h-10 flex-1" />
          <Input placeholder="Country*" className="h-10 flex-1" />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
