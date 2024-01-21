"use client"
import React from 'react';
import { createImage } from "@/lib/appwrite";

const TestPage = () => {
    const [image, setImage] = React.useState<File | null>(null);
    const handleCreateImage = async () => {

        if (image) {
            await createImage(image);
        }
    }
    return (
        <div className=''>
            <input type='text' />
            <input type='file' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                    setImage(selectedFile);
                }
            }} />
            <button onClick={() => handleCreateImage()} >submit</button>
        </div>
    )
}

export default TestPage