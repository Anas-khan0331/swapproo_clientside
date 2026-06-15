export default function BlockStack({
  children,
  gap = 16,
}: {
  children: React.ReactNode;
  gap?: number;
}) {
  const style = {
    "--flow-gap": gap + "px",
  } as React.CSSProperties;

  return (
    <div className="flow" style={style}>
      {children}
    </div>
  );
}
