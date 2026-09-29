import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/landing/HeroSection";
import BrandLogosSection from "@/components/sections/landing/BrandLogosSection";
import CoursesSection from "@/components/sections/landing/CoursesSection";
import FeaturedCategoriesSection from "@/components/sections/landing/FeaturedCategoriesSection";
import LearningPathsSection from "@/components/sections/landing/LearningPathsSection";
import ProfessionalGrowthSection from "@/components/sections/landing/ProfessionalGrowthSection";
import CreatorFeaturesSection from "@/components/sections/landing/CreatorFeaturesSection";
import CreatorCTASection from "@/components/sections/landing/CreatorCTASection";
import TestimonialsSection from "@/components/sections/landing/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <BrandLogosSection />
        <CoursesSection />
        <FeaturedCategoriesSection />
        <LearningPathsSection />
        <ProfessionalGrowthSection />
        <CreatorFeaturesSection />
        <CreatorCTASection />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
}
