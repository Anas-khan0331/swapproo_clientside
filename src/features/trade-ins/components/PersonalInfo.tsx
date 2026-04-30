import { type TradeIn } from "@/features/trade-ins/constants/data";

interface PersonalInfoProps {
  personalInfo: TradeIn["personalInfo"];
  bankDetails: TradeIn["bankDetails"];
}

export function PersonalInfo({ personalInfo, bankDetails }: PersonalInfoProps) {
  return (
    <div className="p-6">
      <p className="text-foreground mb-4 text-base font-bold">Personal</p>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-0.5">
          <p className="text-foreground text-sm font-semibold">Contact:</p>
          <p className="text-muted-foreground text-sm">{personalInfo.email}</p>
          <p className="text-muted-foreground text-sm">{personalInfo.phone}</p>
        </div>
        <div className="flex flex-col gap-0.5">
          <p className="text-foreground text-sm font-semibold">Bank:</p>
          <p className="text-muted-foreground text-sm">{bankDetails.accountName}</p>
          <p className="text-muted-foreground text-sm">{bankDetails.accountNumber}</p>
          <p className="text-muted-foreground text-sm">{bankDetails.sortCode}</p>
        </div>
      </div>
    </div>
  );
}
