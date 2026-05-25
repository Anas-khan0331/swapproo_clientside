import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const BlogHero = () => {
  return (
    <div className="bg-primary-50 flex h-[320px] items-center justify-center text-center">
      <div className="wrapper">
        <h1 className="text-foreground text-4xl font-bold">Resources and insights</h1>
        <p className="text-muted-foreground mx-auto mt-2 max-w-xl text-lg leading-7 font-normal">
          Find the latest insights, trends, and best practices for maximizing <br /> the value of
          your used electronics.
        </p>
        <div className="relative mx-auto mt-6 w-full md:w-[516px]">
          <div className="text-muted-foreground pointer-events-none absolute inset-y-0 right-3 flex items-center pr-0">
            <SearchIcon size={16} />
          </div>
          <Input
            type="search"
            placeholder="Search Article"
            data-icon="inline-end"
            className="h-10 w-full pr-7 pl-3 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
          />
        </div>
      </div>
    </div>
  );
};

export { BlogHero };
