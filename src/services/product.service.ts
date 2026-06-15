import { API_ENDPOINTS } from "@/constants/api";
import type { Product } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api";

export const productService = {
  async getAll(): Promise<Product[]> {
    const res = await fetch(`${BASE_URL}${API_ENDPOINTS.PRODUCTS.LIST}`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  },

  async getById(id: string): Promise<Product> {
    const res = await fetch(`${BASE_URL}${API_ENDPOINTS.PRODUCTS.DETAIL(id)}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  },

  async create(payload: Omit<Product, "id" | "createdAt">): Promise<Product> {
    const res = await fetch(`${BASE_URL}${API_ENDPOINTS.PRODUCTS.CREATE}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Failed to create product");
    return res.json();
  },
};
