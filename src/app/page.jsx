import { HeroSection } from "@/components/HeroSection";
import { HeroTransition } from "@/components/HeroTransition";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { ExpertiseTransition } from "@/components/ExpertiseTransition";
import { PhilosophySection } from "@/components/PhilosophySection";
import { Footer } from "@/components/Footer";
import { ValidationSection } from "@/components/ValidationSection";
import { BlogPreview } from "@/components/BlogPreview";
import { GeometricBackground } from "@/components/GeometricBackground";
import { getPosts } from "@/lib/wordpress";

export default async function Home() {
  const posts = await getPosts(1, 3).catch(() => []);

  return (
    <div className="bg-background min-h-screen flex flex-col relative" suppressHydrationWarning>
      {/* Global background with gradient glow and grid - reactive to cursor */}
      <GeometricBackground fixed />

      <main className="grow" suppressHydrationWarning>

        {/* HERO: Black Background with blob reveal cursor */}
        <HeroSection />

        {/* TRANSITION: Wipe from hero to geometric background */}
        <HeroTransition />

        {/* EXPERTISE: White Background (Scrolls over geometric bg) */}
        <div id="main-content">
          <ExpertiseSection />
        </div>

        {/* TRANSITION: Wipe from expertise (white) to validation (black) */}
        <ExpertiseTransition />

        {/* VALIDATION: Black Background (Horizontal Scroll) */}
        <ValidationSection />

        {/* PHILOSOPHY: Black Background (Parallax Quotes) */}
        <PhilosophySection />

        {/* BLOG: 3-tile preview of most recent posts */}
        <BlogPreview posts={posts} />

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
