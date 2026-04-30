interface InfoRowProps {
  label: string;
  value: string;
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="text-foreground text-sm font-semibold">{label}</p>
      <p className="text-muted-foreground text-sm">{value}</p>
    </div>
  );
}
