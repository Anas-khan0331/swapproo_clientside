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
import { useAuth } from "@/features/auth/hooks/useAuth";
import Link from "next/link";

interface MenuItem {
  label: string;
  href?: string;
  onClick?: () => void;
  destructive?: boolean;
}

const UserDropdown = () => {
  const { user, isAuthenticated, logout } = useAuth();

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
        <Button className="flex items-center gap-2 border-transparent! bg-transparent! text-white! shadow-none! ring-0! outline-none! hover:bg-transparent! hover:opacity-80 focus-visible:border-transparent! focus-visible:ring-0! data-[state=open]:border-transparent! data-[state=open]:bg-transparent! data-[state=open]:text-white! data-[state=open]:shadow-none!">
          <span className="text-base leading-6 font-light tracking-normal">
            {user?.name || "User"}
          </span>
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
              className="text-popover-foreground flex items-center rounded-md text-base! font-normal hover:cursor-pointer hover:bg-[#F5F5F5]"
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
