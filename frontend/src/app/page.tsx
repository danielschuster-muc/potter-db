import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import OverviewSection from "@/components/OverviewSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mb-2">
      <HeroSection />
      <InfoSection />
      <OverviewSection />
    </main>
  );
}
