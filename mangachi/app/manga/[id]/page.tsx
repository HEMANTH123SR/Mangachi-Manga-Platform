import { MangaHeaderSection } from "@/components/component/manga-header-section";
const Page = ({params}:{params:{}}) => {
  console.log("params", params, )
  return (
    <div>
      <MangaHeaderSection />
    </div>
  );
};

export default Page;
