import { CarouselDemo } from "@/components/Carsoul";
import { ScrollAreaHorizontalDemo } from "@/components/HorizontalScrool";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center mb-60">
        <CarouselDemo />

        <ScrollAreaHorizontalDemo title="Staff Picks"/>
        <ScrollAreaHorizontalDemo title="Recently Added"/>
        <ScrollAreaHorizontalDemo title="Most Readed"/>
        <ScrollAreaHorizontalDemo title="Latest "/>
      </div>
    </main>
  );
}
