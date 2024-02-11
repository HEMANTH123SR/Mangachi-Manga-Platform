"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MangaDetailsSchema } from "@/lib/ZodSchemas";
import { createImage } from "@/lib/appwrite"
import { DropZone } from "@/components/component/DropZone"
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

type FormValues = z.infer<typeof MangaDetailsSchema>;
const Page = () => {
  const pathname = usePathname();
  enum Status {
    Ongoing = "Ongoing",
    Completed = "Completed",
    Cancelled = "Cancelled",
  }

  const [mangaName, setMangaName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.Ongoing);
  const [backgroundImageFile, setBackgroundImageFile] = useState<File>();
  const [coverImageFile, setCoverImageFile] = useState<File>();
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errormessage, setErrorMessage] = useState<any>();
  const [call, setCall] = useState<number>(0);
  const id = pathname?.split("/")[1];

  useEffect(() => {
    async function fetchMangaDetails() {
      try {
        const response = await fetch(`/api/manga/${id}`);
        const { data } = await response.json();
        setMangaName(data.mangaName);
        setAuthor(data.author);
        setStatus(data.status);
        setBackgroundImage(data.backgroundImage);
        setCoverImage(data.coverImage);
        setDescription(data.description);
        setTags(data.tags);

        console.log(data);
      } catch (error) {
        console.log(
          "[id]/dashboard/manga-details : error fetching manga details from api",
          error
        );
      }
    }
    console.log("useEffect called:", call);
    fetchMangaDetails();
  }, [call, id]);

  const validateForm = (value: FormValues) => {
    try {
      return { value: MangaDetailsSchema.parse(value), status: "success" };
    } catch (err) {
      if (err instanceof z.ZodError) {
        return err.formErrors.fieldErrors;
      }
    }
  };

  const updateManga = async (value: FormValues) => {
    try {
      if (backgroundImage) {
        const res = await createImage(backgroundImageFile as File);
        if (res.status == "success") {
          value.backgroundImage = res.id as string;
        } else {
          if (res.status == "failed") {
            toast("Failed to upload image", {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Cancel",
                onClick: () => { },
              },
            });
          }
        }

      }
      if (coverImage) {
        const res = await createImage(coverImageFile as File);
        if (res.status == "success") {
          value.coverImage = res.id as string;
        }
      }
      const res = validateForm(value);
      console.log(res)
      if (res?.status === "success") {
        setError(false);
        const response = await fetch(`/api/manga/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(res.value),
        });
        const responseData = await response.json();
        setCall((prev) => prev + 1);
        if (response.status === 201) {
          console.log("responseId : ", responseData.data);

          toast("Manga updated successfully", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Cancel",
              onClick: () => { },
            },
          });
        } else if (response.status > 500) {
          toast("Something went wrong with the server, please try again", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Cancel",
              onClick: () => { },
            },
          });
        } else {
          toast(
            "Something went wrong with the data you entered, please try again",
            {
              description: "Sunday, December 03, 2023 at 9:00 AM",
              action: {
                label: "Cancel",
                onClick: () => { },
              },
            }
          );
        }
      } else {
        setError(true);
        setErrorMessage(res);
      }
    } catch (err) {
      console.log("handle create manga ,  err:", err);
    }
  };

  return (
    <div>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Add all the manga details required to the manga reader
      </p>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="manganame"
          >
            Manga Name
          </label>
          {error && (
            <p className="mt-2 text-xs text-red-600">
              {errormessage?.mangaName?.[0]}
            </p>
          )}
          <div className="mt-1">
            <Input
              id="manganame"
              placeholder="Your manga name"
              value={mangaName}
              onChange={(e) => setMangaName(e.target.value)}
            />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="authorname"
          >
            Author Name
          </label>
          {error && (
            <p className="mt-2 text-xs text-red-600">
              {errormessage?.author?.[0]}
            </p>
          )}
          <div className="mt-1">
            <Input
              id="authorname"
              placeholder="Add the author name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
        </div>

        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="status"
          >
            Status
          </label>
          <div className="mt-1">
            <Select
              value={status}
              onValueChange={(value) => setStatus(value as Status)}
            >
              <SelectTrigger id="status">
                <SelectValue placeholder="Select the current status of manga " />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="Ongoing">Ongoing</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Choose the current status of your manga: ongoing, completed, or
            cancelled. The default will be Ongoing.
          </p>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          {error && (
            <p className="mt-2 text-xs text-red-600">
              {errormessage?.description?.[0]}
            </p>
          )}
          <div className="mt-1">
            <Textarea
              id="description"
              placeholder="Tell us about your favorite mangas."
              rows={7}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Min 500 words and Maximum 600 words
          </p>
        </div>
        <div className="sm:col-span-6">
          <h3 className="text-sm font-medium text-gray-700 my-3">
            Update Cover Image
          </h3>
          <DropZone multipleImage={false} setImage={setBackgroundImageFile} setMultipleImage={null} />
          <div className="my-6"></div>
          <h3 className="text-sm font-medium text-gray-700 my-3">
            Update Background Image
          </h3>
          <DropZone multipleImage={false} setImage={setCoverImageFile} setMultipleImage={null} />
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="tags"
          >
            Tags
          </label>
          <div className="mt-1">
            <Textarea
              id="tags"
              placeholder="#shonen #sword #demon"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Use # to add tags example #pirate #superhero
          </p>
        </div>
        <div className="sm:col-span-6">
          <div className="flex justify-center items-center w-full">
            <Button
              className="mt-10 w-2/5 font-semibold"
              onClick={() => {
                updateManga({
                  mangaName,
                  author,
                  status,
                  description,
                  tags,
                  coverImage,
                  backgroundImage,
                });
              }}
            >
              Update It
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
