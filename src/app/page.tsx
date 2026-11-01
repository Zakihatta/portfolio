import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SelectedWorks } from "@/components/SelectedWorks";
import { ToolsSection } from "@/components/ToolsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-400" suppressHydrationWarning>
      {/* 1. Top Fixed Navbar (Rectangular Bordered Style) */}
      <Navbar />

      {/* 2. Hero Section (Sticky Curtain Stacking Context) */}
      <HeroSection />

      {/* 3. About Section (Curtain Reveal Stacking Context with Text Reveal on Scroll) */}
      <AboutSection />

      {/* 4. Selected Works (Project Split Card Layout) */}
      <SelectedWorks />

      {/* 5. Tools I Build With (Sibling Dimming Focus Grid) */}
      <ToolsSection />

      {/* 6. Call to Action ("BUILD something WORTH KEEPING") */}
      <CTASection />

      {/* 7. Footer (Atrium Hairline Rectangular Grid) */}
      <Footer />
    </main>
  );
}
