import { api } from "@/store/api";
import type { Product, Bid } from "@/types";

export const tradeInApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Product"],
    }),
    getProductById: build.query<Product, string>({
      query: (id) => `/products/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),
    getBidsForProduct: build.query<Bid[], string>({
      query: (productId) => `/products/${productId}/bids`,
      providesTags: ["Bid"],
    }),
    createProduct: build.mutation<Product, Partial<Product>>({
      query: (body) => ({ url: "/products", method: "POST", body }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useGetBidsForProductQuery,
  useCreateProductMutation,
} = tradeInApi;
