import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="bg-primary-50/20 py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16 lg:mb-24">
          <h2 className="mb-4 text-4xl font-semibold">Stay Connected with Us</h2>
          <p className="text-muted-foreground text-xl">
            Reach out for inquiries, support, or collaboration-we&apos;d love to hear from you!
          </p>
        </div>
        <Card className="py-6 shadow-none">
          <CardContent className="grid gap-12 px-6 md:grid-cols-2">
            <ContactForm />
            <div>
              <iframe
                className="size-full min-h-100 rounded-md"
                src="https://maps.google.com/maps?hl=en&amp;q=%20new%20york+(New%20york)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Google Maps"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { ContactUs };
