"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MENU_CATEGORIES } from "@/constants/menu";

export function MegaMenu() {
  return (
    <div className="wrapper bg-neutral-025 border-neutral-150 hidden! border-b py-1 xl:grid!">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="gap-11">
          {MENU_CATEGORIES?.map((category) => (
            <NavigationMenuItem key={category.id ?? category.name}>
              <NavigationMenuTrigger className="flex flex-row gap-2 p-0 text-base leading-6 font-normal text-neutral-500 data-[state=open]:text-neutral-950">
                {category.name}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="mt-3!">
                <ul
                  className={`grid w-[400px] p-2 md:w-[500px] lg:w-[500px] ${
                    category.items.length > 20 ? "md:grid-cols-3" : "md:grid-cols-2"
                  }`}
                >
                  {category.items.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href} />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  href,
  ...props
}: {
  title: string;
  href: string;
  [key: string]: unknown;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="focus-visible:text-primary text-sm leading-5 font-normal tracking-normal text-neutral-500 transition-colors focus-visible:outline-none">
            {title}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
