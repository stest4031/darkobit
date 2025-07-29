import { HeroSection } from "@/components/templates/home/HeroSection";
import { LatestProducts } from "@/components/templates/home/LatestProducts";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <SubscriptionBanner /> */}
      <LatestProducts />
    </main>
  );
}
