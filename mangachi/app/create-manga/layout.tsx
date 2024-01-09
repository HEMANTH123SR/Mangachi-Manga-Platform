const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white pt-6 pb-12 px-4 sm:px-6 lg:px-8">
      <div className=" w-full">
        <h2 className="text-3xl font-extrabold text-gray-900">Upload Manga</h2>
        <p className="mt-2 text-sm text-gray-600">
          Share your manga with the world! Upload and manage your manga
          collection easily.
        </p>
        <hr className="bg-primary h-[2px] my-6" />
        <div className="mt-12 flex flex-col lg:flex-row ">
          <div className="flex-1 bg-white px-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
