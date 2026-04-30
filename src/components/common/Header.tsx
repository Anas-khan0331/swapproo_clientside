import logo from "@/assets/images/logo.png";
import { Routing2, SearchNormal1 } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "../shared/SearchInput";
import { Separator } from "../ui/separator";
import { MegaMenu } from "./MegaMenu";
import { Field } from "../ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import UserDropdown from "./UserDropdown";

interface HeaderProps {
  className?: string;
}

const Property1Default = ({ className }: HeaderProps) => {
  const primaryLinks = [
    { label: "for Business", href: "/business" },
    { label: "Help", href: "/help" },
  ];

  const actionLinks = [{ label: "Track", href: "/track-trade-in", icon: <Routing2 size="24" /> }];

  return (
    <div className={className || ""}>
      <header className="wrapper bg-primary-600 border-b border-white/10 py-4">
        <div className="grid grid-cols-12 items-center gap-12">
          <div className="col-span-7 flex items-center gap-8">
            <Link href="/" className="shrink-0">
              <Image src={logo} alt="Swapproo Logo" width={201} height={36} priority />
            </Link>
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

                <UserDropdown />
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
