import { SpotLightCarsoul } from "@/components/component/SpotLightCarsoul";
import { HomePageShonenContent } from "@/components/component/HomePageShonenContent";

import { ScrollAreaHorizontalDemo } from "@/components/component/HorizontalScrool"
export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <SpotLightCarsoul />
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
