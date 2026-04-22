import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingFunnel from "@/components/BookingFunnel";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Menu />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <BookingFunnel />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
