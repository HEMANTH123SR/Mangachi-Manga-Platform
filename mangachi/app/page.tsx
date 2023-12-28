import { CarouselDemo } from "@/components/Carsoul";
import { ScrollAreaHorizontalDemo } from "@/components/HorizontalScrool";
import { MobileCarousel } from "@/components/component/mobile-carousel";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center mb-60">
        <CarouselDemo />
        <ScrollAreaHorizontalDemo />
      </div>
    </main>
  );
}
