import Info from "./Info";

interface LegalPageProps {
  title: string;
  items?: { id: string | number; title: string; description: React.ReactNode }[];
}

export default function LegalPage({ title, items = [] }: LegalPageProps) {
  return (
    <section>
      {/* <h1 className="text-foreground mb-8 text-3xl font-bold">{title}</h1>
      {items.map((policy) => (
        <Info key={policy.id} {...policy} />
      ))} */}
    </section>
  );
}
