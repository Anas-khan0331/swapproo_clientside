export interface TradeIn {
  id: string;
  deviceName: string;
  deviceSpecs: string;
  price: number;
  imageUrl: string;
  status: "processing" | "shipped" | "delivered" | "inspection" | "approved" | "paid";
  orderDate: string;
  shippingAddress: {
    from: string;
    to: string;
    via: string;
    parcelNumber: string;
  };
  personalInfo: {
    name: string;
    address: string;
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
      from: "1 Beehive Road, Bolton, BL32GD, United Kingdom",
      to: "Mobile Direct, 85 Bury New Road, United Kingdom",
      via: "Royal Mail",
      parcelNumber: "FC12345678900GB",
    },
    personalInfo: {
      name: "John Doe",
      address: "1 Beehive Road, Bolton, BL32GD, United Kingdom",
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
      from: "456 Oak Avenue, Manchester, M1 1AA, United Kingdom",
      to: "Mobile Direct, 85 Bury New Road, United Kingdom",
      via: "Royal Mail",
      parcelNumber: "FC98765432100GB",
    },
    personalInfo: {
      name: "Jane Smith",
      address: "456 Oak Avenue, Manchester, M1 1AA, United Kingdom",
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
