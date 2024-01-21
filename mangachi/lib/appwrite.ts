import { Client, Storage, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string);

const storage = new Storage(client);

export const createImage = async (image: File) => {
  try {
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
      ID.unique(),
      image
    );
    if (response.$id) {
      return { status: "success", id: response.$id };
    } else {
      return { status: "error" };
    }
  } catch (err) {
    console.log("appwrite :: createImage :: error :: ", err);
    return { status: "error" };
  }
};
