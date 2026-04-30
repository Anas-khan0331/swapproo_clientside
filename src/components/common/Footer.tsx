import Image from "next/image";
import swapprooBanner from "@/assets/images/swapproo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram } from "iconsax-reactjs";

const LinkedinIcon = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V22H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V22H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
      fill={color}
    />
    <path d="M6 9H2V22H6V9Z" fill={color} />
    <path
      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
      fill={color}
    />
  </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const CONTACT = {
  address: ["Shop 009A, Level 4, Block A", "Demo Park, Ottawa"],
  phone: "+1-613-598-6981",
  email: "support@swapproo.com",
};

const COMPANY_LINKS = [
  { label: "About Swapproo", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Knowledge Base", href: "#" },
  { label: "Blogs", href: "#" },
];

const INFORMATION_LINKS = [
  { label: "Tracking", href: "#" },
  { label: "Device Grading", href: "#" },
  { label: "Sustainability", href: "#" },
  { label: "Insurance", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Terms & conditions", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Return & Shipping", href: "#" },
  { label: "Order Processing", href: "#" },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

// ── Sub-components ────────────────────────────────────────────────────────────

const FooterLinkGroup = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div className="flex flex-col gap-4">
    <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-neutral-125 text-base leading-6 font-light transition-colors hover:text-neutral-900"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// ── Footer ────────────────────────────────────────────────────────────────────

const Footer = () => {
  return (
    <>
      {/* Banner */}
      <div className="border-neutral-150 w-full border-y py-8">
        <Footerimage />
      </div>

      {/* Main footer grid */}
      <footer className="wrapper bg-white py-12">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1.5fr] gap-8">
          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-neutral-950">Contact</h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                {CONTACT.address.map((line) => (
                  <p key={line} className="text-base leading-6 font-normal text-neutral-950">
                    {line}
                  </p>
                ))}
              </div>
              <p className="text-base leading-6 font-normal text-neutral-950">{CONTACT.phone}</p>
              <p className="text-base leading-6 font-normal text-neutral-950">{CONTACT.email}</p>
            </div>
          </div>

          {/* Company */}
          <FooterLinkGroup title="Company" links={COMPANY_LINKS} />

          {/* Information */}
          <FooterLinkGroup title="Information" links={INFORMATION_LINKS} />

          {/* Legal */}
          <FooterLinkGroup title="Legal" links={LEGAL_LINKS} />

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-neutral-950">
              Trade-in, Built For Your Store
            </h3>
            <div className="flex flex-col gap-3">
              <Input
                type="email"
                placeholder="Business email address"
                className="h-10 rounded-lg border-neutral-200 bg-white text-sm placeholder:text-neutral-400"
              />
              <Button
                variant="secondary"
                className="h-10 w-full text-sm text-neutral-400 hover:text-neutral-900"
              >
                Get started free
              </Button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-colors hover:border-neutral-400 hover:text-neutral-900"
                >
                  <Icon size={16} variant="Bold" color="currentColor" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <Separator className="mt-10 mb-6" />
        <p className="font-regular text-center text-base leading-6 text-neutral-950">
          © 2026 SWAPPROO. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;

// ── Banner ────────────────────────────────────────────────────────────────────

export const Footerimage = () => {
  return (
    <div className="wrapper">
      <Image
        src={swapprooBanner}
        height={120.38}
        width={1204.33}
        alt="Swapproo Banner"
        className="w-full"
      />
    </div>
  );
};
