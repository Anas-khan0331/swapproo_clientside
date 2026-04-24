import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logout } from "../store/authSlice";

export function useAuth() {
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading, error } = useAppSelector((s) => s.auth);

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    logout: () => dispatch(logout()),
  };
}
