import { SearchInput } from "@/components/shared/SearchInput";

const HeroSearch = () => {
  return (
    <div className="mx-auto mt-5 h-10 max-w-lg md:mt-6">
      <SearchInput
        id="hero-search"
        placeholder="Search your Device "
        className="bg-background rounded-lg"
      />
    </div>
  );
};

export { HeroSearch };
