"use client";
import React, { useCallback, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { useDropzone, FileRejection } from "react-dropzone";
import Image from "next/image";
interface DropZoneProps {
  className: string;
}

export function DropZone({ className }: DropZoneProps) {
  const [files, setFiles] = useState<any[]>([]);
  const [rejectFiles, setRefectFiles] = useState<any[]>([]);

  const onDrop = useCallback((acceptedFile: File[], rejectedFile: any) => {
    if (acceptedFile?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFile.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
    if (rejectedFile?.length) {
      setRefectFiles((previousFiles) => [
        ...previousFiles,
        ...rejectedFile.map((file: any) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxSize: 1000 * 1024,
  });

  const removeFile = (name: any) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <form>
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>{`Drag 'n' drop image here, or click here`}</p>
        )}
      </div>

      <ScrollArea className="h-52 mt-2">
        <div className="flex flex-col justify-center items-center mx-auto max-w-screen-lg">
          {files.map((file) => (
            <figure
              className="relative overflow-hidden rounded-md max-h-40 mx-2 my-2" // Adjust mx-2 for spacing between images
              key={file.name}
            >
              <Image
                src={file.preview}
                alt={file.name}
                width={300}
                height={300}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
              />
              <button
                type="button"
                className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute top-0 right-0  hover:bg-slate-50 bg-white transition-colors"
                onClick={() => removeFile(file.name)}
              >
                <RxCross2 className="w-5 h-5 fill-white hover:fill-secondary-400 transition-colors" />
              </button>
            </figure>
          ))}
        </div>

        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </form>
  );
}
