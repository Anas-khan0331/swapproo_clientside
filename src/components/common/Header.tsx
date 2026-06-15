"use client";

import logo from "@/assets/images/logo.png";
import { HamburgerMenu, Routing2, User, SearchNormal } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SearchInput } from "../shared/SearchInput";
import { MegaMenu } from "./MegaMenu";
import { MobileMenuDrawer } from "./MobileMenuDrawer";
import CloseIcon from "../icons/CloseIcon";
import UserDropdown from "./UserDropdown";

interface HeaderProps {
  className?: string;
  showSearch?: boolean;
}

const Property1Default = ({ className, showSearch = false }: HeaderProps) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setDrawerOpen(false);
    setSearchOpen(false);
  }

  const links = [
    { label: "Blogs", href: "/blogs" },
    { label: "for Business", href: "/business" },
    { label: "Help", href: "/help" },
    { label: "Track", href: "/track-trade-in", icon: <Routing2 variant="Broken" size="24" /> },
  ];

  return (
    <div className={className || ""}>
      <header className="wrapper bg-primary-600 h-20 border-b border-white/10 py-5 md:h-16 md:py-3">
        <div className="flex items-center justify-between gap-4 lg:hidden">
          {searchOpen ? (
            <div className="flex flex-1 items-center gap-3">
              <SearchInput
                className="flex-1"
                id="mobile-header-search"
                placeholder="Search"
                autoFocus
                isMobile
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="shrink-0 text-sm font-medium text-white"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <Link href="/" className="shrink-0">
                <Image
                  src={logo}
                  alt="Swapproo Logo"
                  width={201}
                  height={36}
                  priority
                  className="w-[180px]! md:w-[300px]"
                />
              </Link>
              <div className="flex items-center gap-3">
                {showSearch && (
                  <button
                    onClick={() => setSearchOpen(true)}
                    aria-label="Search"
                    className="hover:cursor-pointer"
                  >
                    <SearchNormal size={24} color="#fff" />
                  </button>
                )}
                <Link href="/track-trade-in">
                  <Routing2 variant="Broken" size={24} color="#fff" />
                </Link>
                <Link href="/account">
                  <User size={24} color="#fff" />
                </Link>
                <button
                  onClick={() => setDrawerOpen((prev) => !prev)}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white hover:cursor-pointer"
                  aria-label={drawerOpen ? "Close menu" : "Open menu"}
                >
                  {drawerOpen ? <CloseIcon /> : <HamburgerMenu size={16} color="#171717" />}
                </button>
              </div>
            </>
          )}
        </div>
        <div className="hidden gap-0 md:gap-3 lg:grid lg:grid-cols-12 lg:items-center xl:gap-8">
          <div className="flex items-center gap-8 md:col-span-6! lg:col-span-7!">
            <Link href="/" className="shrink-0">
              <Image
                src={logo}
                alt="Swapproo Logo"
                width={201}
                height={36}
                priority
                className="w-[180px] lg:w-[201px]"
              />
            </Link>
            {showSearch && (
              <SearchInput
                className="md:w-[250px] lg:w-[464px]!"
                id="header-search"
                placeholder="Search"
              />
            )}
          </div>
          <div className="flex items-center justify-end md:col-span-6! lg:col-span-5!">
            <div className="flex items-center gap-12 md:gap-4 xl:gap-12">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 leading-6 font-light tracking-normal text-white capitalize transition-opacity hover:opacity-80 md:text-sm lg:text-base"
                >
                  {link.icon && <span className="shrink-0">{link.icon}</span>}
                  <span className="text-nowrap">{link.label}</span>
                </Link>
              ))}
            </div>
            <div className="ml-4 flex items-center gap-4 md:gap-2 xl:gap-4">
              <span className="h-5 w-px bg-white" aria-hidden="true" />
              <UserDropdown />
            </div>
          </div>
        </div>
      </header>
      <MegaMenu />
      <MobileMenuDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default Property1Default;
