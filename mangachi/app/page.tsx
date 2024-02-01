import { CarouselDemo } from "@/components/Carsoul";
import { HomePageShonenContent } from "@/components/HomePageShonenContent";
import { ScrollAreaHorizontalDemo } from "@/components/HorizontalScrool";
export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <CarouselDemo />
      </div>
      <HomePageShonenContent />
      <div className="my-20"></div>
      <ScrollAreaHorizontalDemo
        title="Recently Added"
        routeSegment="recently-added"
      />
      <ScrollAreaHorizontalDemo
        title="Most Readed"
        routeSegment="most-readed"
      />
      <ScrollAreaHorizontalDemo
        title="Staff Picks"
        routeSegment="staff-picks"
      />
    </main>
  );
}
