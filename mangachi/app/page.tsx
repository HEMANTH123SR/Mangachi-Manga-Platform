import { CarouselDemo } from "@/components/Carsoul";
import { ScrollAreaHorizontalDemo } from "@/components/HorizontalScrool";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center mb-60">
        <CarouselDemo />
        <ScrollAreaHorizontalDemo/>
      </div>
      

    
    </main>
  );
}
