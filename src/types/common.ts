export type Role = "customer" | "recycler" | "support" | "admin";

export type ProductCondition = "excellent" | "good" | "fair" | "poor";
export type ProductStatus =
  | "pending"
  | "active"
  | "bidding"
  | "accepted"
  | "completed"
  | "cancelled";
export type BidStatus = "pending" | "accepted" | "rejected" | "expired";
export type InspectionStatus = "assigned" | "in_progress" | "completed" | "failed";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
  region: string;
  locale: string;
};

export type Product = {
  id: string;
  title: string;
  condition: ProductCondition;
  status: ProductStatus;
  images: string[];
  customerId: string;
  region: string;
  createdAt: Date;
};

export type Bid = {
  id: string;
  productId: string;
  recyclerId: string;
  amount: number;
  currency: string;
  status: BidStatus;
  expiresAt: Date;
  createdAt: Date;
};

export type Inspection = {
  id: string;
  productId: string;
  bidId: string;
  recyclerId: string;
  status: InspectionStatus;
  notes: string;
  photos: string[];
  createdAt: Date;
};
