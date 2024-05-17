"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { createImage, deleteImage } from "@/lib/appwrite";
import { MangaDetailsSchema } from "@/lib/ZodSchemas";
import { z } from "zod";
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
import { DropZone } from "@/components/component/DropZone";
import { UserType } from "@/lib/types";
type FormValues = z.infer<typeof MangaDetailsSchema>;

const Page = () => {
  const { user } = useUser();

  const router = useRouter();

  enum Status {
    Ongoing = "Ongoing",
    Completed = "Completed",
    Cancelled = "Cancelled",
  }

  const UserInfo: UserType = {
    userName: user?.fullName as string,
    userBio: "",
    userEmail: user?.primaryEmailAddress?.emailAddress as string,
    userId: user?.id as string,
    UserProfileImage: user?.imageUrl as string,
  };

  const [mangaName, setMangaName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [status, setStatus] = useState<Status>(Status.Ongoing);
  const [backgroundImage, setBackgroundImage] = useState<File | null>(null);
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errormessage, setErrorMessage] = useState<any>();
  const [apiError, setApiError] = useState<string>("");

  const validateForm = (value: FormValues) => {
    try {
      return { value: MangaDetailsSchema.parse(value), status: "success" };
    } catch (err) {
      if (err instanceof z.ZodError) {
        return err.formErrors.fieldErrors;
      }
    }
  };

  const handleCreatManga = async (value: FormValues) => {
    try {
      if (backgroundImage) {
        const res = await createImage(backgroundImage as File);
        if (res.status == "success") {
          value.backgroundImage = res.id as string;
        }
      }
      if (coverImage) {
        const res = await createImage(coverImage as File);
        if (res.status == "success") {
          value.coverImage = res.id as string;
        }
      }
      const res = validateForm(value);
      if (
        res?.status === "success" &&
        value.backgroundImage.length > 0 &&
        value.coverImage.length > 0
      ) {
        setError(false);
        const response = await fetch(`/api/create-manga`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...res.value, createdBy: UserInfo, savedBy: [], thanksRecives: [] }),
        });
        const responseData = await response.json();
        if (response.status === 201) {
          console.log("responseId : ", responseData.data);
          router.push(`/${responseData.data._id}/dashboard/manga-details`);
        } else if (response.status > 500) {
          setApiError("Something went wrong with the server, please try again");
        } else {
          setApiError(
            "Something went wrong with the data you entered, please try again"
          );
        }
      } else {
        if (value.backgroundImage.length == 0) {
          setErrorMessage({
            backgroundImage: ["Background Image is required"],
          });
        } else {
          await deleteImage(value.backgroundImage as string);
        }
        if (value.coverImage.length == 0) {
          setErrorMessage({
            coverImage: ["Cover Image is required"],
          });
        } else {
          await deleteImage(value.coverImage as string);
        }
        setError(true);
        setErrorMessage(res);
      }
    } catch (err) {
      console.log("handle create manga ,  err:", err);
    }
  };

  return (
    <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 lg:mx-12">
      <div className="sm:col-span-6">
        {apiError && <p className="mt-2 text-sm text-red-400">{apiError}</p>}
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
            type="text"
            placeholder="Your manga name"
            value={mangaName}
            onChange={(e) => {
              setMangaName(e.target.value);
            }}
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
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
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
            onValueChange={(value) => {
              setStatus(value as Status);
            }}
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
            rows={6}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Min 500 words and Maximum 600 words
        </p>
      </div>
      <div className="sm:col-span-6">
        {error && (
          <p className="mt-2 text-xs text-red-600">
            {errormessage?.coverImage?.[0]}
          </p>
        )}
        <h3 className="text-sm font-medium text-gray-700 my-3">
          Upload Cover Image
        </h3>
        <DropZone
          multipleImage={false}
          setImage={setBackgroundImage}
          setMultipleImage={null}
        />
        <div className="my-6"></div>
        {error && (
          <p className="mt-2 text-xs text-red-600">
            {errormessage?.backgroundImage?.[0]}
          </p>
        )}
        <h3 className="text-sm font-medium text-gray-700 my-3">
          Upload Background Image
        </h3>
        <DropZone
          multipleImage={false}
          setImage={setCoverImage}
          setMultipleImage={null}
        />
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
            onChange={(e) => {
              setTags(e.target.value);
            }}
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
            onClick={() =>
              handleCreatManga({
                mangaName,
                author,
                status,
                backgroundImage: "",
                coverImage: "",
                description,
                tags,
              })
            }
          >
            Create Manga
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
