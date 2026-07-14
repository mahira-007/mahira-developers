import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import InquiryModal from "@/components/InquiryModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
      <InquiryModal />
      <WhatsAppButton />
    </>
  );
}


