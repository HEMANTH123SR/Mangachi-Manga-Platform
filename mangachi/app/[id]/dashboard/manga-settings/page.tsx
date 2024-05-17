"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname?.split("/")[1];
  const handleMangaDelete = async () => {
    try {
      if (!id) {
        toast("Failed to delete Manga", {
          description: "something went wrong with manga id",
          action: {
            label: "Cancel",
            onClick: () => {},
          },
        });
        return;
      }

      const res = await fetch(`/api/delete-manga?q=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data?.message) {
        const message = data.message;
        if (
          message === "Manga not found" ||
          message === "Error deleting manga"
        ) {
          toast("Failed to delete Manga", {
            description: "could not find manga",
            action: {
              label: "Cancel",
              onClick: () => {},
            },
          });
          return;
        }

        if (message === "Manga deleted successfully") {
          console.log("manga deleted successfully");
          router.push(`/`);
        }
      }
    } catch (err: any) {
      console.log(`Error while deleting the manga: ${err.message}`);
      console.error(err); // Log the full error object
      toast("Failed to delete Manga", {
        description: err.message || "An unexpected error occurred", // Use the error message, or a generic message if none is provided
        action: {
          label: "Cancel",
          onClick: () => {},
        },
      });
    }
  };
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">Setings</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        changes that your make here are permanent{" "}
      </p>
      <Button
        className={`mb-4 block  py-2 px-4 text-left text-sm font-medium text-white my-8`}
        onClick={() => handleMangaDelete()}
      >
        DELETE THE MANGA
      </Button>
    </div>
  );
};

export default Page;
