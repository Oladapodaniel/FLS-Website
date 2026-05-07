import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ConsultationForm } from "@/components/sections/ConsultationForm";

export const metadata = {
  title: "Book a Consultation — FLS Systems Integrity",
  description:
    "Request a Fire & Life Safety consultation. A certified FLS specialist will respond within 4 business hours.",
};

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-surface min-h-screen pt-[100px] pb-20">
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 xl:px-16">
          <ConsultationForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
