import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export function DropZone({ className }: { className: string }) {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <form {...getRootProps({ className:className })}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>{`Drag 'n' drop some files here, or click to select files`}</p>
      )}
    </form>
  );
}
