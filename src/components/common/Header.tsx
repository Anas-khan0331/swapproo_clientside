import logo from "@/assets/images/logo.png";
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
              </div>
            </div>
          </div>
        </div>
      </header>
      <MegaMenu />
    </>
  );
};

export default Property1Default;
