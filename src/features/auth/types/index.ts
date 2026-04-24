export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: "customer" | "recycler" | "support" | "admin";
  region: string;
};

export type AuthState = {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};
