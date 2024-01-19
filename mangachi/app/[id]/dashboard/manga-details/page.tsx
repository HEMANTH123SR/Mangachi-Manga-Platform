"use client";
import { z } from "zod";
import { useEffect, useState } from "react";
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
import { usePathname } from "next/navigation";
import { MangaDetailsSchema } from "@/lib/ZodSchemas"

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
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [coverImage, setCoverImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errormessage, setErrorMessage] = useState<any>();
  const [apiError, setApiError] = useState<string>("");


  useEffect(() => {
    async function fetchMangaDetails() {
      try {
        const id = pathname?.split("/")[1];
        const response = await fetch(`/api/manga/${id}`)
        const { data } = await response.json()
        setMangaName(data.mangaName)
        setAuthor(data.author)
        setStatus(data.status)
        setBackgroundImage(data.backgroundImage)
        setCoverImage(data.coverImage)
        setDescription(data.description)
        setTags(data.tags)
        console.log(data);
      } catch (error) {
        console.log("[id]/dashboard/manga-details : error fetcging manga details from api", error);
      }
    }
    fetchMangaDetails();
  }, [])

  const validateForm = (value: FormValues) => {
    try {
      return { value: MangaDetailsSchema.parse(value), status: "success" }
    }
    catch (err) {
      if (err instanceof z.ZodError) {
        return err.formErrors.fieldErrors
      }
    }
  }

  const updateManga = async (value: FormValues) => {
    try {
      const res = validateForm(value);
      if (res?.status === "success") {
        setError(false);
        const response = await fetch(`/api/create-manga`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(res.value)
        })
        const responseData = await response.json();

        if (response.status === 201) {
          console.log("responseId : ", responseData.data);

        }
        else if (response.status > 500) {
          setApiError("Something went wrong with the server, please try again")
        }
        else {
          setApiError("Something went wrong with the data you entered, please try again")
        }

      } else {
        setError(true);
        setErrorMessage(res);

      }
    } catch (err) {
      console.log("handle create manga ,  err:", err);
    }
  }


  return (
    <div>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Add all the manga details required to the manga reader
      </p>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-6">
        {
          apiError && <p className="mt-2 text-sm text-red-400">{apiError}</p>

        }
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="manganame"
          >
            Manga Name
          </label>
          {
          error && <p className="mt-2 text-xs text-red-600">{errormessage?.mangaName?.[0]}</p>
        }
          <div className="mt-1">
            <Input id="manganame" placeholder="Your manga name" value={mangaName} onChange={(e) => setMangaName(e.target.value)} />
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="authorname"
          >
            Author Name
          </label>
          {
          error && <p className="mt-2 text-xs text-red-600">{errormessage?.author?.[0]}</p>
        }
          <div className="mt-1">
            <Input id="authorname" placeholder="Add the author name" value={author} onChange={(e) => setAuthor(e.target.value)} />
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
            <Select value={status} onValueChange={(value) => setStatus(value as Status)}>
              <SelectTrigger id="status"  >
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
          {
          error && <p className="mt-2 text-xs text-red-600">{errormessage?.description?.[0]}</p>
        }
          <div className="mt-1">
            <Textarea
              id="description"
              placeholder="Tell us about your favorite mangas."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Min 500 words and Maximum 600 words
          </p>
        </div>
        <div className="sm:col-span-6">
          <div className="p-6 rounded-md bg-slate-50 text-primary my-3">
            Upload Cover Image
          </div>
          <div className="p-6 rounded-md bg-slate-50 text-primary">
            Upload Background Image
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="tags"
          >
            Tags
          </label>
          <div className="mt-1">
            <Textarea id="tags" placeholder="#shonen #sword #demon" value={tags} onChange={(e) => setTags(e.target.value)} />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Use # to add tags example #pirate #superhero
          </p>
        </div>
        <div className="sm:col-span-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="urls"
          >
            URLs
          </label>

          <div className="flex justify-center items-center w-full">
            <Button className="mt-10 w-2/5 font-semibold">Update It</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
