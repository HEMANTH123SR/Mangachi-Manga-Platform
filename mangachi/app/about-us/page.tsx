import Logo from "@/public/Manga-Wallpaper-Free-Download.jpg";
const AboutUs = () => {
  return (
    <div className="w-full pt-6 space-y-3 md:pt-12 lg:space-y-5">
      <div className="container flex flex-col gap-3 px-4 md:gap-5 lg:gap-8 xl:gap-10">
        <div className="space-y-2 flex justify-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl underline">
            About Us
          </h1>
        </div>
        <div className="min-h-screen py-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">
              Welcome to Mangachi - Your Creative Manga Platform
            </h1>
            <p className="text-lg text-gray-700 mb-12 text-center">
              Unleash your creativity and connect with a global community
              passionate about manga!
            </p>
            <div>
              <p className="text-gray-700 mb-6">
                Mangachi, situated in India, goes beyond
                being just a manga platform. It is a space driven by a passion
                for storytelling and a commitment to copyright ethics. Our
                platform envisions empowering creators to showcase their
                original works with&nbsp;&nbsp;&nbsp;utmost respect for
                intellectual property rights.
              </p>
              <p className="text-gray-700">
                In an industry where copyright laws are often overlooked,
                Mangachi stands out as a paragon of integrity and respect for
                creators rights. We prioritize maintaining a fair and legal
                environment for both creators and readers. Every story shared on
                our platform adheres to&nbsp;&nbsp;&nbsp;ethical practices
                because we believe your creativity deserves the utmost respect.
                Join Mangachi today and become part of a community that values
                originality, upholds copyright laws, and revels in the diverse
                universe of manga. Immerse yourself in the art of storytelling,
                embark on a creative journey, and experience manga like never
                before—only on Mangachi!
              </p>
            </div>
          </div>
          <img src={Logo.src} className="w-11/12 h-[500] mx-auto my-16" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
