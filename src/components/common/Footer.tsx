import { Separator } from "@/components/ui/separator";
import { FooterImage } from "./footer/FooterImage";
import { FooterLinkGroup } from "./footer/FooterLinkGroup";
import { FooterCTA } from "./footer/FooterCTA";
import { CONTACT, COMPANY_LINKS, INFORMATION_LINKS, LEGAL_LINKS } from "./footer/constants";

const Footer = () => {
  return (
    <>
      <div className="border-neutral-150 w-full border-y py-8">
        <FooterImage />
      </div>

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
          <FooterLinkGroup title="Company" links={COMPANY_LINKS} />
          <FooterLinkGroup title="Information" links={INFORMATION_LINKS} />
          <FooterLinkGroup title="Legal" links={LEGAL_LINKS} />
          <FooterCTA />
        </div>
        <Separator className="mt-10 mb-6" />
        <p className="font-regular text-center text-base leading-6 text-neutral-950">
          © 2026 SWAPPROO. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
