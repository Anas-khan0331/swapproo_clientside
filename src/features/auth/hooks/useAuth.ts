import { useState, useCallback } from "react";
import type { AuthUser } from "../types";

// Simple auth context hook - in production this would connect to Redux or a proper auth provider
export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      const storedToken = localStorage.getItem("accessToken");
      if (storedUser && storedToken) {
        try {
          return JSON.parse(storedUser) as AuthUser;
        } catch (error) {
          console.error("Failed to parse stored user:", error);
          return null;
        }
      }
    }
    return null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("accessToken");
      return !!storedToken;
    }
    return false;
  });

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
