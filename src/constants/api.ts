export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    LOGOUT: "/auth/logout",
    OTP_SEND: "/auth/otp/send",
    OTP_VERIFY: "/auth/otp/verify",
    REFRESH: "/auth/refresh",
  },
  PRODUCTS: {
    LIST: "/products",
    DETAIL: (id: string) => `/products/${id}`,
    CREATE: "/products",
    UPDATE: (id: string) => `/products/${id}`,
  },
  BIDS: {
    LIST: (productId: string) => `/products/${productId}/bids`,
    CREATE: (productId: string) => `/products/${productId}/bids`,
    ACCEPT: (bidId: string) => `/bids/${bidId}/accept`,
    REJECT: (bidId: string) => `/bids/${bidId}/reject`,
  },
  INSPECTIONS: {
    LIST: "/inspections",
    DETAIL: (id: string) => `/inspections/${id}`,
    UPDATE: (id: string) => `/inspections/${id}`,
  },
  USERS: {
    ME: "/users/me",
    UPDATE: "/users/me",
  },
} as const;
