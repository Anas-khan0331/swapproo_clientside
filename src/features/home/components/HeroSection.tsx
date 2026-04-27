import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchNormal1 } from "iconsax-reactjs";

export function HeroSection() {
  return (
    <div className="bg-primary-50 relative flex min-h-[372px] items-center overflow-hidden">
      <HeroCircles />
      <div className="mx-auto max-w-2xl py-20 text-center">
        <h1 className="text-4xl leading-10 font-bold tracking-normal">
          Swap Your Tech With Cash or Voucher
        </h1>
        <p className="text-muted-foreground font-regular mt-2 text-lg leading-7 tracking-normal">
          Turn your items into value with fast cash or bonus vouchers.
        </p>
        <HeroSearch />
      </div>
    </div>
  );
}

export const HeroSearch = () => {
  return (
    <>
      <div className="mx-auto mt-6 max-w-lg">
        <Field className="w-full">
          <InputGroup className="border-primary-600 py-5 [--ring:var(--color-primary-600)]">
            <InputGroupInput id="hero-search" placeholder="Search your item" />
            <InputGroupAddon align="inline-end">
              <SearchNormal1 size="16" className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </div>
    </>
  );
};

export const HeroCircles = () => {
  return (
    <>
      <div className="bg-primary-100 absolute -top-14 left-15 h-[205px] w-[205px] rounded-full" />
      <div className="bg-primary-100 absolute -bottom-1 -left-17 h-[147px] w-[147px] rounded-full" />
      <div className="bg-primary-100 absolute right-[90px] -bottom-3 h-[193px] w-[193px] rounded-full" />
      <div className="bg-primary-100 absolute -top-10 -right-12 h-[147px] w-[147px] rounded-full" />
    </>
  );
};
