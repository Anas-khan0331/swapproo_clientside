import type { AuthUser } from "../types";

export const setCredentials = (_payload: { user: AuthUser; accessToken: string }) => ({
  type: "auth/setCredentials" as const,
  payload: _payload,
});

export const setLoading = (_payload: boolean) => ({
  type: "auth/setLoading" as const,
  payload: _payload,
});

export const setError = (_payload: string) => ({
  type: "auth/setError" as const,
  payload: _payload,
});

export const logout = () => ({
  type: "auth/logout" as const,
});
