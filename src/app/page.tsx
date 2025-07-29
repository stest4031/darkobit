import { HeroSection } from "@/components/templates/home/HeroSection";
import { LatestProducts } from "@/components/templates/home/LatestProducts";
import SubscriptionBanner from "@/components/templates/home/SubscriptionBanner";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LatestProducts />
      <SubscriptionBanner />
    </main>
  );
}
