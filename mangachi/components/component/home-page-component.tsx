import Link from "next/link";

export function HomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                  Welcome to the Mangachi
                </h1>
                <span className="max-w-[700px] text-black md:text-xl  ">
                  Enjoy the best manga experience.
                </span>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors
                  hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50  
                  "
                  href="/create-manga"
                >
                  Create Manga
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50  text-primary"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Recommended Manga
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Enjoy our curated selection of manga.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

{
  /* <div className="grid w-full grid-cols-2 items-start gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
<div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
  <img
    alt="Manga Cover"
    className="aspect-[2/3] overflow-hidden rounded-lg object-cover object-center"
    height="210"
    src="/placeholder.svg"
    width="140"
  />
</div>
<div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
  <img
    alt="Manga Cover"
    className="aspect-[2/3] overflow-hidden rounded-lg object-cover object-center"
    height="210"
    src="/placeholder.svg"
    width="140"
  />
</div>
<div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
  <img
    alt="Manga Cover"
    className="aspect-[2/3] overflow-hidden rounded-lg object-cover object-center"
    height="210"
    src="/placeholder.svg"
    width="140"
  />
</div>
<div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
  <img
    alt="Manga Cover"
    className="aspect-[2/3] overflow-hidden rounded-lg object-cover object-center"
    height="210"
    src="/placeholder.svg"
    width="140"
  />
</div>
<div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
  <img
    alt="Manga Cover"
    className="aspect-[2/3] overflow-hidden rounded-lg object-cover object-center"
    height="210"
    src="/placeholder.svg"
    width="140"
  />
</div>
</div> */
}

{
  /* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
<p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Manga App. All rights reserved.</p>
<nav className="sm:ml-auto flex gap-4 sm:gap-6">
  <Link className="text-xs hover:underline underline-offset-4" href="#">
    Terms of Service
  </Link>
  <Link className="text-xs hover:underline underline-offset-4" href="#">
    Privacy
  </Link>
</nav>
</footer> */
}
