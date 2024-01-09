"use client";
import React, { useCallback, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { useDropzone } from "react-dropzone";
import Image from "next/image";
interface DropZoneProps {
  className: string;
}

export function DropZone() {
  const { className }: DropZoneProps = {
    className:
      "flex-1 border-2 border-primary border-dashed flex justify-center items-center",
  };

  const [files, setFiles] = useState<any[]>([]);

  const onDrop = useCallback((acceptedFile: File[]) => {
    if (acceptedFile?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFile.map((file) =>
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
    <form className="flex  space-x-3">
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>{`Drag 'n' drop image here, or click here`}</p>
        )}
      </div>

      <ScrollArea className="h-64 flex-1  bg-slate-100">
        <div className="flex flex-col justify-center items-center mx-auto max-w-screen-lg">
          {files.map((file) => (
            <figure
              className="relative overflow-hidden rounded-md max-h-40 mx-2 my-2"
              key={file.name}
            >
              <Image
                src={file.preview}
                alt={file.name}
                width={500}
                height={600}
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
