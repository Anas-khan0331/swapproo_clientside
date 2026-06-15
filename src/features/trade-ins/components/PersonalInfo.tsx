import { type TradeIn } from "@/features/trade-ins/constants/data";

interface PersonalInfoProps {
  personalInfo: TradeIn["personalInfo"];
  bankDetails: TradeIn["bankDetails"];
}

export function PersonalInfo({ personalInfo, bankDetails }: PersonalInfoProps) {
  return (
    <div className="p-6">
      <p className="text-foreground mb-[14px] text-base font-bold lg:mb-4">Personal</p>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-0.5">
          <p className="text-muted-foreground font-regular text-sm leading-5">
            {personalInfo.name}:
          </p>
          <p className="text-muted-foreground font-regular text-sm leading-5">
            {personalInfo.address}
          </p>
          <div className="pt-[14px]">
            <p className="text-muted-foreground font-regular text-sm leading-5">
              {personalInfo.email}
            </p>
            <p className="text-muted-foreground font-regular text-sm leading-5">
              {personalInfo.phone}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-foreground text-sm font-semibold">Bank:</p>
          <p className="text-muted-foreground font-regular text-sm leading-5">
            {bankDetails.accountName}
          </p>
          <p className="text-muted-foreground font-regular text-sm leading-5">
            {bankDetails.sortCode} {bankDetails.accountNumber}
          </p>
        </div>
      </div>
    </div>
  );
}
