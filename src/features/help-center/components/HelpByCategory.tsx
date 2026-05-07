import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ShippingIcon from "@/assets/icons/ShippingIcon";
import AccountIcon from "@/assets/icons/AccountIcon";
import OrdersIcon from "@/assets/icons/OrdersIcon";
import PaymentsIcon from "@/assets/icons/PaymentsIcon";
import { HelpCenterCategory, Paginated } from "@/types";

type HelpByCategoryProps = {
  categories: Paginated<HelpCenterCategory>;
};

const HelpByCategory = async ({ categories }: HelpByCategoryProps) => {
  return (
    <div className="wrapper h-full py-24">
      <div className="text-center">
        <h1 className="text-foreground pb-8 text-3xl leading-9 font-bold">
          Your Support Hub Find What You Need
        </h1>

        <div className="grid h-full grid-cols-4 gap-4">
          {categories.data.map((item, index) => (
            <BrowserHelpCard key={item._id} {...item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpByCategory;

const ICONS = [ShippingIcon, AccountIcon, OrdersIcon, PaymentsIcon];

export const BrowserHelpCard = (props: HelpCenterCategory & { index: number }) => {
  const { slug, title, description, index } = props;
  const Icon = ICONS[index % ICONS.length];

  return (
    <Link className="h-full" href={`/help-center/${slug}`}>
      <Card className="flex h-full items-center justify-center text-center transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        <CardHeader className="flex w-full items-center justify-center px-0">
          <Icon />
        </CardHeader>
        <CardContent className="flex flex-col gap-2 pb-8">
          <CardTitle className="text-foreground text-xl leading-7 font-semibold">{title}</CardTitle>
          <CardDescription className="text-muted-foreground text-lg leading-7 font-normal">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};
