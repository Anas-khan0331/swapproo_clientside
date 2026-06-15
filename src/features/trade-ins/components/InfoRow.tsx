interface InfoRowProps {
  label: string;
  value: string;
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-foreground text-sm font-medium">{label}</p>
      <p className="text-muted-foreground font-regular text-sm leading-5">{value}</p>
    </div>
  );
}
