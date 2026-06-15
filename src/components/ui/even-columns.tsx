export default function EvenColumns({
  children,
  minColumnSize = 200,
  direction = "horizontal",
  gap,
}: {
  children: React.ReactNode;
  minColumnSize?: number;
  direction?: "horizontal" | "vertical";
  gap?: number;
}) {
  const style = {
    "--min-col-size": `${minColumnSize}px`,
    "--grid-gap": gap ? `${gap}px` : undefined,
    gridTemplateColumns:
      direction === "horizontal"
        ? `repeat(auto-fill, minmax(min(100%, var(--min-col-size)), 1fr))`
        : "1fr",
  } as React.CSSProperties & {
    "--min-col-size"?: string;
    "--grid-gap"?: string;
  };

  return (
    <div className="grid md:grid-cols-1" style={style}>
      {children}
    </div>
  );
}
