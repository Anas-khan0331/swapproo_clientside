import logo from "@/assets/images/logo.png";
import { HamburgerMenu, Routing2, User } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "../shared/SearchInput";
import { MegaMenu } from "./MegaMenu";
import UserDropdown from "./UserDropdown";
import Show from "./show";
interface HeaderProps {
  className?: string;
  showSearch?: boolean;
}

const Property1Default = ({ className, showSearch = false }: HeaderProps) => {
  const links = [
    { label: "for Business", href: "/business" },
    { label: "Help", href: "/help" },
    { label: "Track", href: "/track-trade-in", icon: <Routing2 size="24" /> },
  ];

  return (
    <div className={className || ""}>
      <header className="wrapper bg-primary-600 h-20 border-b border-white/10 py-5 md:h-16 md:py-3">
        <div className="grid grid-cols-12 items-center gap-4 md:gap-8 lg:gap-12">
          <div className="col-span-6 flex items-center gap-4 md:gap-8 lg:col-span-7 xl:col-span-7">
            <Link href="/" className="shrink-0">
              <Image
                src={logo}
                alt="Swapproo Logo"
                width={201}
                height={36}
                priority
                className="h-5 sm:w-[200px]"
              />
            </Link>
            <Show when={!!showSearch}>
              <SearchInput
                className="hidden w-full lg:flex"
                id="header-search"
                placeholder="Search"
              />
            </Show>
          </div>
          <div className="col-span-6 flex items-center justify-end gap-4 lg:col-span-5 xl:col-span-5">
            <div className="hidden items-center justify-end gap-4 lg:flex">
              <div className="flex items-center lg:gap-3 xl:gap-12">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center gap-2 text-base leading-6 font-light tracking-normal text-white capitalize transition-opacity hover:opacity-80"
                  >
                    {link.icon && <span className="shrink-0">{link.icon}</span>}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
              <span className="h-5 w-px bg-white" aria-hidden="true" />
              <UserDropdown />
            </div>
            <div className="flex items-center gap-6 lg:hidden">
              <div className="flex items-center gap-4">
                <Routing2 size={24} color="#fff" />
                <User size={24} color="#fff" />
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white">
                <HamburgerMenu size={16} color="#171717" onClick={() => alert("hello")} />
              </div>
            </div>
          </div>
        </div>
      </header>
      <MegaMenu />
    </div>
  );
};

export default Property1Default;
