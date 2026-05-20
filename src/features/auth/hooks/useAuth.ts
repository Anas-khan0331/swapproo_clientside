import { useState, useCallback } from "react";
import type { AuthUser } from "../types";

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(() => {
    if (typeof window === "undefined") return null;
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("accessToken");
    if (storedUser && storedToken) {
      try {
        return JSON.parse(storedUser) as AuthUser;
      } catch (error) {
        console.error("Failed to parse stored user:", error);
      }
    }
    return null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(
    () =>
      typeof window !== "undefined" &&
      !!(localStorage.getItem("user") && localStorage.getItem("accessToken")),
  );

  const logout = useCallback(() => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
    }
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  return {
    user,
    isAuthenticated,
    logout,
  };
}
