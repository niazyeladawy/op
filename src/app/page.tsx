import { HeroCarousel } from "@/components/HeroCarousel";
import LatestProp from "@/components/LatestProp";
import OffPlan from "@/components/OffPlan";

export default function Home() {
  return (
    <main className=" font-[family-name:var(--font-montserrat)]">
        <HeroCarousel/>
        <LatestProp/>
        <OffPlan/>
    </main>
  );
}
