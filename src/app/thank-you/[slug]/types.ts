export interface ThankYouPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ storage?: string; network?: string; condition?: string }>;
}
