export const ROUTES = {
  HOME: "/",
  HOW_IT_WORKS: "/how-it-works",
  TRADE_IN: "/trade-in",
  TRADE_IN_PRODUCT: (productId: string) => `/trade-in/${productId}`,
  LOGIN: "/login",
  SIGNUP: "/signup",
  OTP: "/otp",
} as const;
