"use client";

import { User, ArrowDown2 } from "iconsax-reactjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useAuth } from "@/features/auth/hooks/useAuth";
>>>>>>> b8437c4 (All Swapproo Screen Implemented)
=======
>>>>>>> 61d172b (Swappro Changes implementation with help-center and api integrations)
import Link from "next/link";

interface MenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  destructive?: boolean;
}

const UserDropdown = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const { user, isAuthenticated, logout } = { user: null, isAuthenticated: true, logout: () => {} };
=======
  const { user, isAuthenticated, logout } = useAuth();
>>>>>>> b8437c4 (All Swapproo Screen Implemented)
=======
  const { user, isAuthenticated, logout } = { user: null, isAuthenticated: true, logout: () => {} };
>>>>>>> 61d172b (Swappro Changes implementation with help-center and api integrations)

  const menuItems: MenuItem[] = [
    { label: "Trade-ins", href: "/trade-ins" },
    { label: "Account", href: "/account" },
  ];

  if (!isAuthenticated) {
    return (
      <Link
        href="/login"
        className="flex items-center gap-2 text-white transition-opacity hover:text-white/80"
      >
        <User size={24} />
        <span className="text-base leading-6 font-light tracking-normal">Login</span>
      </Link>
    );
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-transparent text-white hover:bg-none hover:text-white data-[state=open]:bg-transparent data-[state=open]:text-white"
        >
          <User size={24} />
          <span className="text-base leading-6 font-light tracking-normal">Account</span>
          <ArrowDown2 size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[282px] rounded-lg shadow-md">
        <DropdownMenuLabel className="text-foreground text-sm font-medium hover:cursor-pointer">
          {user?.email || "user@example.com"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <Link
              href={item.href!}
              className="text-popover-foreground flex items-center rounded-md text-base font-normal hover:cursor-pointer hover:bg-[#F5F5F5]"
            >
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          className="text-destructive cursor-pointer rounded-md text-base font-normal hover:bg-[#F5F5F5]"
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
