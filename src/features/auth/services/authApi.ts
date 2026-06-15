import { api } from "@/store/makeRequest";
import type { AuthUser } from "../types";

type LoginPayload = { email: string; password: string };
type SignupPayload = { name: string; email: string; password: string; region: string };
type OtpPayload = { email: string; code: string };
type AuthResponse = { accessToken: string; refreshToken: string; user: AuthUser };

export const login = (body: LoginPayload) => api.post<AuthResponse>("/auth/login", body);
export const signup = (body: SignupPayload) => api.post<AuthResponse>("/auth/signup", body);
export const verifyOtp = (body: OtpPayload) => api.post<AuthResponse>("/auth/otp/verify", body);
export const logout = () => api.post("/auth/logout");
