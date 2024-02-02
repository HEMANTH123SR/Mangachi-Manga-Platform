import Link from "next/link";

export function Fotter() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h5 className="text-xl font-bold mb-3">MangaChi</h5>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-300" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-3">Explore</h5>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Latest Releases
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Popular Manga
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Upcoming Releases
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Manga Genres
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-3">Community</h5>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Forums
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  User Guide
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="#">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-3">Follow Us</h5>
            <div className="flex space-x-4">
              <Link className="hover:text-gray-300" href="#">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-300" href="#">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-300" href="#">
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link className="hover:text-gray-300" href="#">
                <YoutubeIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-sm">
            © 2024 MangaChi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: any) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
