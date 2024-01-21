"use client"
import React, { useEffect, useState } from 'react'
import { Genre } from "@/lib/types"
import { ComboboxDemo } from "@/components/ComboBoxComonents"
const TestPage = () => {
  const [genre, setGenre] = useState<Genre>();
  useEffect(() => {
    console.log("genre : ", genre)
  }, [genre])
  return (
    <div>
      <ComboboxDemo mangaGenre={genre} setMangaGenre={setGenre} />
    </div>

  )
}

export default TestPage