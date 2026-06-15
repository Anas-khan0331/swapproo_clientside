import { API_ENDPOINTS } from "@/constants/api";

export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = {
  name: string;
  email: string;
  password: string;
  region: string;
};

export type OtpPayload = {
  email: string;
  code: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "/api";

export const authService = {
  async login(payload: LoginPayload): Promise<AuthResponse> {
    const res = await fetch(`${BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Login failed");
    return res.json();
  },

  async signup(payload: SignupPayload): Promise<AuthResponse> {
    const res = await fetch(`${BASE_URL}${API_ENDPOINTS.AUTH.SIGNUP}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("Signup failed");
    return res.json();
  },

  async verifyOtp(payload: OtpPayload): Promise<AuthResponse> {
    const res = await fetch(`${BASE_URL}${API_ENDPOINTS.AUTH.OTP_VERIFY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error("OTP verification failed");
    return res.json();
  },

  async logout(): Promise<void> {
    await fetch(`${BASE_URL}${API_ENDPOINTS.AUTH.LOGOUT}`, { method: "POST" });
  },
};
