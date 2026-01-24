import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToursSection from "@/components/ToursSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <ToursSection />
      <AboutSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
