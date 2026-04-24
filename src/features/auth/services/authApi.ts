import { api } from "@/store/api";
import type { AuthUser } from "../types";

type LoginPayload = { email: string; password: string };
type SignupPayload = { name: string; email: string; password: string; region: string };
type OtpPayload = { email: string; code: string };
type AuthResponse = { accessToken: string; refreshToken: string; user: AuthUser };

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthResponse, LoginPayload>({
      query: (body) => ({ url: "/auth/login", method: "POST", body }),
    }),
    signup: build.mutation<AuthResponse, SignupPayload>({
      query: (body) => ({ url: "/auth/signup", method: "POST", body }),
    }),
    verifyOtp: build.mutation<AuthResponse, OtpPayload>({
      query: (body) => ({ url: "/auth/otp/verify", method: "POST", body }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({ url: "/auth/logout", method: "POST" }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useVerifyOtpMutation, useLogoutMutation } =
  authApi;
