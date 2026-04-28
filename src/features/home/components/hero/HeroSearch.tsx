import { Field } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchNormal1 } from "iconsax-reactjs";

const HeroSearch = () => {
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

export { HeroSearch };
