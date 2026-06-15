"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { BlogPost } from "../types";
import { BlogGrid } from "./BlogGrid";
import { BlogPagination } from "./BlogPagination";

const CATEGORIES = ["All", "Mobile Phone", "iPad", "Tablets"];

type BlogTabsProps = {
  blogPosts: BlogPost[];
};

const BlogTabs = ({ blogPosts }: BlogTabsProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <section className="py-8">
      <div className="wrapper px-4 sm:px-6 lg:px-8">
        <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="gap-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="w-full overflow-x-auto sm:w-auto">
              <TabsList className="gap-1">
                {CATEGORIES.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="hover:bg-primary/10 cursor-pointer px-3 text-base"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="relative max-md:w-full">
              <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3">
                <SearchIcon className="size-4" />
                <span className="sr-only">Search</span>
              </div>
              <Input
                type="search"
                placeholder="Search"
                className="peer h-10 w-[328px] px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
              />
            </div>
          </div>

          {CATEGORIES.map((category) => (
            <TabsContent key={category} value={category}>
              <BlogGrid posts={filteredPosts} currentPage={currentPage} />
              <BlogPagination
                totalPosts={filteredPosts.length}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { BlogTabs };
