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
      return { status: "failes" };
    }
  } catch (err: any) {
    console.log("appwrite :: createImage :: error :: ", err.message);
    return { status: "error", err: err.message };
  }
};

export const deleteImage = async (id: string) => {
  try {
    const res = await storage.deleteFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
      id
    );
    console.log(`${id} deleted :: res :: `, res);
  } catch (err: any) {
    console.log("appwrite :: deleteImage :: error :: ", err.message);
  }
};

export const deleteAllTheImagesInTheBucket = async () => {
  try {
    const data = await storage.listFiles(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string
    );
    const imagesId = await data.files.map((file: any) => file.$id);
    console.log(imagesId);
    for (let id of imagesId) {
      const res = await storage.deleteFile(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID as string,
        id
      );
      console.log(`${id} deleted :: res :: `, res);
    }
  } catch (err: any) {
    console.log(
      "appwrite :: deleteAllTheImagesInTheBucket :: error :: ",
      err.message
    );
  }
};
