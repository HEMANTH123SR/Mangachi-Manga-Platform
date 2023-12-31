import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OnePiceCoverImage from "@/public/One-Piece.jpg";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
export function MangaHeaderSection() {
  return (
    <div className="border-t-2 border-primary">
      <div className="bg-white  overflow-hidden">
        <div className="relative">
          <img
            alt="One Piece background"
            className="w-full h-[300px] object-cover"
            height="300"
            src={OnePiceCoverImage.src}
            style={{
              aspectRatio: "1829/300",
              objectFit: "cover",
            }}
            width="1829"
          />
          <div className="absolute top-0 left-0 p-5 flex items-start space-x-4">
            <img
              alt="One Piece cover"
              className="w-[154px] h-[220px] object-cover"
              height="220"
              src={OnePiceCoverImage.src}
              style={{
                aspectRatio: "154/220",
                objectFit: "cover",
              }}
              width="154"
            />
            <div className="text-white">
              <h1 className="text-6xl font-bold">One Piece</h1>
              <p className="text-2xl">ウォンピース</p>
              <p className="text-xl mt-1">Oda Eiichiro</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-5">
            <Button
              className="bg-[#E11D48] hover:bg-[#ce193f] text-white"
              variant="secondary"
            >
              Add To Library
            </Button>
          </div>
        </div>
        <div className="p-5">
          <ScrollArea>
            <div className="flex space-x-2 mb-4">
              <Badge variant="secondary">SUGGESTIVE</Badge>
              <Badge variant="secondary">GORE</Badge>
              <Badge variant="secondary">AWARD WINNING</Badge>
              <Badge variant="secondary">MONSTERS</Badge>
              <Badge variant="secondary">ACTION</Badge>
              <Badge variant="secondary">PSYCHOLOGICAL</Badge>
              <Badge variant="secondary">ANIMALS</Badge>
              <Badge variant="secondary">COMEDY</Badge>
              <Badge variant="secondary">CRIME</Badge>
              <Badge variant="secondary">ADVENTURE</Badge>
              <Badge variant="secondary">MAGIC</Badge>
              <Badge variant="secondary">MILITARY</Badge>
              <Badge variant="secondary">FANTASY</Badge>
              <ScrollBar orientation="horizontal" />
            </div>
          </ScrollArea>

          <div className="flex items-center space-x-2 mb-4">
            <Badge variant="secondary">PUBLICATION: 1997, ONGOING</Badge>
            <div className="flex items-center space-x-1">
              <StarIcon className="text-[#E11D48] w-5 h-5" />
              <span className="text-lg font-semibold">9.25</span>
            </div>
            <div className="flex items-center space-x-1">
              <UsersIcon className="text-gray-600 w-5 h-5" />
              <span className="text-lg">88K</span>
            </div>
            <div className="flex items-center space-x-1">
              <HeartIcon className="text-[#E11D48] w-5 h-5" />
              <span className="text-lg">265</span>
            </div>
            <div className="flex items-center space-x-1">
              <GlobeIcon className="text-gray-600 w-5 h-5" />
              <span className="text-lg">N/A</span>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Gol D. Roger, a man referred to as the "Pirate King," is set to be
            executed by the World Government. But just before his demise, he
            confirms the existence of a great treasure, One Piece, located
            somewhere within the vast ocean known as the Grand Line. Announcing
            that One Piece can be claimed by anyone worthy enough to reach it,
            the Pirate King is executed and the Great Age of Pirates begins.
          </p>
          <p className="text-gray-700">
            Twenty-two years later, a young man by the name of Monkey D. Luffy
            is ready to embark on his own adventure, searching for One Piece and
            striving to become the new Pirate King. Armed with just a straw hat,
            a small boat, and an elastic body, he sets out on a fantastic
            journey to gather his own crew and a worthy ship that will take them
            to the ends of the earth to find the legendary treasure.
          </p>
        </div>
      </div>
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
