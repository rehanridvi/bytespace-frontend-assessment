import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import CategoryFilter from "@/components/home/CategoryFilter";
import CourseGrid from "@/components/home/CourseGrid";
import LearningPaths from "@/components/home/LearningPaths";
import GrowthSection from "@/components/home/GrowthSection";
import CourseCreationSection from "@/components/home/CourseCreationSection";
import CreatorCTA from "@/components/home/CreatorCTA";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navbar */}
      <div className="bg-[#003BE2]">
        <Navbar variant="transparent" />
      </div>

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Social Proof / Partner Logos */}
        <PartnersSection />

        {/* 3. Discover Your Passion & Course Grid */}
        <section className="w-full pt-20 bg-white">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <CategoryFilter />
          </div>
          <CourseGrid />
        </section>

        {/* 4. Explore Diverse Learning Paths (Category Cards) */}
        <LearningPaths />

        {/* 5. Your Path to Professional Growth */}
        <GrowthSection />

        {/* 6. Create & Manage Courses Easily */}
        <CourseCreationSection />

        {/* 7. Creator Call to Action Banner */}
        <CreatorCTA />

        {/* 8. Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
