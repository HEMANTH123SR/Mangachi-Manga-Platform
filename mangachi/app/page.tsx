import { CarouselDemo } from "@/components/Carsoul";
import { HomePageShonenContent } from "@/components/HomePageShonenContent"
export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <CarouselDemo />
      </div>
      <HomePageShonenContent />
      <div className="my-20"></div>
    </main>
  );
}
