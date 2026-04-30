"use client";

import Link from "next/link";
import { useState } from "react";
import { Blog } from "../home/components/blog";
import { FAQSection } from "../home/components/faq";
import { TradeInSteps } from "../home/components/trade-in-steps";
import { PRODUCTS_PER_CATEGORY } from "@/features/home/constants";
import Show from "@/components/common/show";
import { CATEGORY_MAP, ALL_PRODUCTS } from "./constants";
import { ProductCard } from "./components/ProductCard";
import { DynamicPagination } from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 8;

const CategoryDetailPage = ({ name, query }: { name?: string; query?: string }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const isSearch = !!query;
  const q = query?.trim().toLowerCase() ?? "";

  const category = name ? CATEGORY_MAP[name] : null;
  const allProducts = isSearch
    ? ALL_PRODUCTS.filter((p) => p.name.toLowerCase().includes(q))
    : name
      ? (PRODUCTS_PER_CATEGORY[name] ?? []).map((p) => ({ ...p, img: category?.img ?? "" }))
      : [];

  const totalPages = Math.ceil(allProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const products = allProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isSearch && !category) {
    return (
      <div className="wrapper py-20 text-center">
        <h1 className="text-2xl font-semibold">Category not found</h1>
        <Link href="/category" className="text-primary mt-4 inline-block underline">
          Browse all categories
        </Link>
      </div>
    );
  }

  const heading = isSearch ? `You search "${query}"` : (category?.title ?? "");

  return (
    <>
<<<<<<< HEAD
      <section className="wrapper pt-8 pb-14">
=======
      <section className="wrapper py-14">
>>>>>>> b8437c4 (All Swapproo Screen Implemented)
        <h1 className="text-foreground mb-8 text-3xl leading-9 font-bold tracking-normal">
          {heading || "Category Name"}
        </h1>
        <Show when={isSearch}>
          <p className="text-muted-foreground py-10 text-center">
            No results found for &ldquo;{query}&rdquo;
          </p>
        </Show>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              img={product.img}
            />
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center">
            <DynamicPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </section>
      <TradeInSteps />
      <FAQSection />
      <Blog />
    </>
  );
};

export default CategoryDetailPage;
