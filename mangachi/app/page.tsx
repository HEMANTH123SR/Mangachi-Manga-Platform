import { CarouselDemo } from "@/components/Carsoul";
import { ScrollAreaHorizontalDemo } from "@/components/HorizontalScrool";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center mb-60">
        <CarouselDemo />
        <ScrollAreaHorizontalDemo title="Staff Picks" routeSegment="staff-picks"/>
        <ScrollAreaHorizontalDemo title="Recently Added" routeSegment="recently-added"/>
        <ScrollAreaHorizontalDemo title="Most Readed" routeSegment="most-readed"/>
        <ScrollAreaHorizontalDemo title="Most Liked" routeSegment="most-liked"/>
      </div>
    </main>
  );
}
