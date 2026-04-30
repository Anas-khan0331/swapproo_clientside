export interface TradeIn {
  id: string;
  deviceName: string;
  deviceSpecs: string;
  price: number;
  imageUrl: string;
  status: "processing" | "shipped" | "delivered" | "inspection" | "approved" | "paid";
  orderDate: string;
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  personalInfo: {
    email: string;
    phone: string;
  };
  bankDetails: {
    accountName: string;
    accountNumber: string;
    sortCode: string;
  };
}

export const TRADE_INS: TradeIn[] = [
  {
    id: "124313431",
    deviceName: "iPhone 17 Pro Max",
    deviceSpecs: "256GB | Unlocked | Excellent",
    price: 684,
    imageUrl: "https://picsum.photos/80/80",
    status: "inspection",
    orderDate: "2024-01-15",
    shippingAddress: {
      fullName: "John Doe",
      address: "123 Main Street",
      city: "London",
      postalCode: "SW1A 1AA",
      country: "United Kingdom",
    },
    personalInfo: {
      email: "john.doe@example.com",
      phone: "+44 20 1234 5678",
    },
    bankDetails: {
      accountName: "John Doe",
      accountNumber: "12345678",
      sortCode: "12-34-56",
    },
  },
  {
    id: "124313432",
    deviceName: "iPhone 17 Pro Max",
    deviceSpecs: "256GB | Unlocked | Excellent",
    price: 684,
    imageUrl: "https://picsum.photos/80/80",
    status: "delivered",
    orderDate: "2024-01-10",
    shippingAddress: {
      fullName: "Jane Smith",
      address: "456 Oak Avenue",
      city: "Manchester",
      postalCode: "M1 1AA",
      country: "United Kingdom",
    },
    personalInfo: {
      email: "jane.smith@example.com",
      phone: "+44 161 1234 5678",
    },
    bankDetails: {
      accountName: "Jane Smith",
      accountNumber: "87654321",
      sortCode: "65-43-21",
    },
  },
];
