"use client"
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
 <div>
    <h3 className="text-lg font-medium leading-6 text-gray-900">
    Setings
  </h3>
  <p className="mt-1 max-w-2xl text-sm text-gray-500">
    This is how others will see you in the manga app.
  </p>
  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
    <div className="sm:col-span-6">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="username"
      >
        Username
      </label>
      <div className="mt-1">
        <Input
          id="username"
          placeholder="Your manga reader username"
        />
      </div>
    </div>
    <div className="sm:col-span-6">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="email"
      >
        Email
      </label>
      <div className="mt-1">
        <Select>
          <SelectTrigger id="email">
            <SelectValue placeholder="Select a verified email" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="user@example.com">
              user@example.com
            </SelectItem>
            <SelectItem value="reader@mangaapp.com">
              reader@mangaapp.com
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        You can manage verified email addresses in your email
        settings.
      </p>
    </div>
    <div className="sm:col-span-6">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="bio"
      >
        Bio
      </label>
      <div className="mt-1">
        <Textarea
          id="bio"
          placeholder="Tell us about your favorite mangas."
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        You can @mention other users and organizations to link to
        them.
      </p>
    </div>
    <div className="sm:col-span-6">
      <label
        className="block text-sm font-medium text-gray-700"
        htmlFor="urls"
      >
        URLs
      </label>
      <div className="mt-1">
        <Input
          id="urls"
          placeholder="Link to your manga collection"
        />
      </div>
    </div>
  </div>
</div>

  )
}

export default Page