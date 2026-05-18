import { Separator } from "@/components/ui/separator";
import { FooterImage } from "./footer/FooterImage";
import FooterInfo from "./MobileFooter";
import { FooterCTA } from "./footer/FooterCTA";
import { CONTACT, COMPANY_LINKS, INFORMATION_LINKS, LEGAL_LINKS } from "./footer/constants";

const Footer = () => {
  return (
    <>
      <div className="border-neutral-150 w-full border-y py-8">
        <FooterImage />
      </div>
      <div className="">
        <footer className="wrapper bg-white py-6 lg:py-14">
          <div className="grid grid-cols-12 gap-4 md:gap-8">
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <FooterInfo title="Contact">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-0.5">
                    {CONTACT.address.map((line) => (
                      <p key={line} className="text-base leading-6 font-normal text-neutral-950">
                        {line}
                      </p>
                    ))}
                  </div>
                  <p className="text-base leading-6 font-normal text-neutral-950">
                    {CONTACT.phone}
                  </p>
                  <p className="text-base leading-6 font-normal text-neutral-950">
                    {CONTACT.email}
                  </p>
                </div>
              </FooterInfo>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <FooterInfo title="Company" items={COMPANY_LINKS} />
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <FooterInfo title="Information" items={INFORMATION_LINKS} />
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-2">
              <FooterInfo title="Legal" items={LEGAL_LINKS} />
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="">
                <FooterCTA />
              </div>
            </div>
          </div>
        </footer>
        <Separator className="mt-10 lg:mt-0" />
        <div className="p-6">
          <p className="font-regular text-center text-base leading-6 text-neutral-950">
            © 2026 SWAPPROO. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
