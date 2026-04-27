import logo from "@/assets/images/logo.png";
<<<<<<< HEAD
import { Routing2 } from "iconsax-reactjs";
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
      <header className="wrapper bg-primary-600 h-16 border-b border-white/10 py-4">
        <div className="grid grid-cols-12 items-center gap-12">
=======
import Image from "next/image";
import { Field } from "../ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { Routing2, SearchNormal1, User } from "iconsax-reactjs";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { MegaMenu } from "./MegaMenu";
const Property1Default = () => {
  const primaryLinks = [
    { label: "for Business", href: "/business" },
    { label: "Help", href: "/help" },
  ];

  const actionLinks = [
    { label: "Track", href: "/track", icon: <Routing2 size="24" /> },
    { label: "Login", href: "/login", icon: <User size="24" /> },
  ];

  return (
    <>
      <header className="bg-primary-600 flex w-full justify-center border-b border-white/10">
        <div className="grid w-full grid-cols-12 items-center gap-12 px-6 py-4 lg:px-24">
>>>>>>> afa9168 (Homepage sections implementation)
          <div className="col-span-7 flex items-center gap-8">
            <Link href="/" className="shrink-0">
              <Image src={logo} alt="Swapproo Logo" width={201} height={36} priority />
            </Link>
<<<<<<< HEAD
            <Show when={!!showSearch}>
              <SearchInput className="w-full" id="header-search" placeholder="Search" />
            </Show>
          </div>
          <div className="col-span-5">
            <div className="flex items-center justify-end gap-12">
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
              <UserDropdown />
=======
            <Field className="w-full">
              <InputGroup className="py-5">
                <InputGroupInput className="w-full" id="header-search" placeholder="Search" />
                <InputGroupAddon align="inline-start">
                  <SearchNormal1 size="16" className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>
          <div className="col-span-5">
            <div className="flex items-center justify-between">
              <nav className="flex gap-12">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-base leading-6 font-light tracking-normal text-white capitalize transition-opacity hover:opacity-80"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-8 text-white">
                {actionLinks.map((item, index) => (
                  <div key={item.label} className="flex items-center gap-6">
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 transition-opacity hover:opacity-80"
                    >
                      <span className="shrink-0">{item.icon}</span>
                      <span className="text-base leading-6 font-light tracking-normal">
                        {item.label}
                      </span>
                    </Link>
                    {index < actionLinks.length - 1 && (
                      <Separator orientation="vertical" className="h-6 bg-white" />
                    )}
                  </div>
                ))}
              </div>
>>>>>>> afa9168 (Homepage sections implementation)
            </div>
          </div>
        </div>
      </header>
      <MegaMenu />
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> afa9168 (Homepage sections implementation)
  );
};

export default Property1Default;
