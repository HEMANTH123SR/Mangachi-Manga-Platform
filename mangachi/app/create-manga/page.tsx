"use client"
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
import { DropZone } from "@/components/DropZone";
import { MangaDetailsSchema } from "@/lib/ZodSchemas"
import { set, z } from "zod";
import { useState } from "react";

type FormValues = z.infer<typeof MangaDetailsSchema>;
const Page = () => {
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

  const handleCreatManga = async (value: FormValues) => {
    try {
      const res = validateForm(value);
      console.log("res:", res)
      if (res?.status === "success") {
        setError(false);
        console.log("error:false")
      } else {
        setError(true);
        setErrorMessage(res);
        console.log("error:true")
      }
    } catch (err) {
      console.log("err:", err);
    }
  }


  return (

    <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 lg:mx-12">



      <div className="sm:col-span-6">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="manganame"
        >
          Manga Name
        </label>
        {
          error && <p className="mt-2text-xs text-red-600">{errormessage?.mangaName?.[0]}</p>
        }
        <div className="mt-1">
          <Input id="manganame" type="text" placeholder="Your manga name" value={mangaName} onChange={(e) => { setMangaName(e.target.value) }} />
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
          error && <p className="mt-2text-xs text-red-600">{errormessage?.author?.[0]}</p>
        }
        <div className="mt-1">
          <Input id="authorname" placeholder="Add the author name" value={author} onChange={(e) => { setAuthor(e.target.value) }} />
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
          <Select onValueChange={(value) => { setStatus(value as Status) }}>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select the current status of manga " />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="Ongoing" >Ongoing</SelectItem>
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
          error && <p className="mt-2text-xs text-red-600">{errormessage?.description?.[0]}</p>
        }
        <div className="mt-1">
          <Textarea
            id="description"
            placeholder="Tell us about your favorite mangas."
            rows={6}
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Min 500 words and Maximum 600 words
        </p>
      </div>
      <div className="sm:col-span-6">
        <h3 className="text-sm font-medium text-gray-700 my-3">
          Upload Cover Image
        </h3>
        <DropZone multipleImage={false} />
        <div className="my-6"></div>
        <h3 className="text-sm font-medium text-gray-700 my-3">
          Upload Background Image
        </h3>
        <DropZone multipleImage={false} />
      </div>
      <div className="sm:col-span-6">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="tags"
        >
          Tags
        </label>
        <div className="mt-1">
          <Textarea id="tags" placeholder="#shonen #sword #demon" value={tags} onChange={(e) => { setTags(e.target.value) }} />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          Use # to add tags example #pirate #superhero
        </p>
      </div>
      <div className="sm:col-span-6">
        <div className="flex justify-center items-center w-full">
          <Button className="mt-10 w-2/5 font-semibold" onClick={() => handleCreatManga({ mangaName, author, status, backgroundImage: "https://res.cloudinary.com/dobf3dmic/image/upload/v1705386772/5265_SeriesHeaders_OP_2000x800_wm.0_x6uzj8.jpg", coverImage: "https://res.cloudinary.com/dobf3dmic/image/upload/v1705385862/326439_tuj1lw.jpg", description, tags })}>
            Create Manga
          </Button>
        </div>
      </div>
    </div>

  );
};




export default Page;


