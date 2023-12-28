import { Button } from "@/components/ui/button";
import OnePiece from "@/public/One-Piece.jpg";
export function MobileCarousel() {
  return (
    <div className="relative bg-black text-white w-9/12">
      <img
        alt="Bleach: Thousand-Year Blood War - The Separation"
        className="w-full h-auto"
        // height="336"
        src={OnePiece.src}
        style={{
          aspectRatio: "342/336",
          objectFit: "cover",
        }}
        // width="342"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4">
        <div className="bg-[#ffffff1a] px-2 py-1 inline-block rounded text-xs font-semibold">
          #2 Spotlight
        </div>
        <div>
          <h2 className="text-xl font-bold">
            Bleach: Thousand-Year Blood War - The Separation
          </h2>
          <div className="flex items-center mt-4 space-x-4">
            <Button className="bg-yellow-400 text-black" variant="default">
              Watch Now
            </Button>
            <Button
              className="bg-transparent border border-white"
              variant="outline"
            >
              Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
