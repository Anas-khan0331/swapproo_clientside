import Image from "next/image";
import swapprooBanner from "@/assets/images/swapproo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram } from "iconsax-reactjs";

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
  //   { icon: Linkedin, href: "#", label: "LinkedIn" },
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
      <footer className="w-full bg-white px-24 py-12">
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
    <div className="w-full px-24">
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
