import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function HelpCenterHeader() {
  return (
    <header className="bg-primary-600 wrapper w-full">
      <div className="flex h-16 w-full items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="Swapproo Logo" width={150} height={27} priority />
        </Link>
        <Link
          href="/contact"
          className="text-sm font-normal text-white transition-all hover:underline"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}
