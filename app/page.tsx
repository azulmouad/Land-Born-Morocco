import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToursSection from "@/components/ToursSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection />
      <ToursSection />
      <DestinationsSection />
      <AboutSection />
      <ReviewsSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
