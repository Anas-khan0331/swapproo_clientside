import { SearchInput } from "@/components/shared/SearchInput";

const HeroSearch = () => {
  return (
    <div className="mx-auto mt-6 max-w-lg">
      <SearchInput
        id="hero-search"
        placeholder="Search your item"
        className="bg-background rounded-lg"
      />
    </div>
  );
};

export { HeroSearch };
