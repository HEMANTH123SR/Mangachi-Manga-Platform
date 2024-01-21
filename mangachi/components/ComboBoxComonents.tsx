"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Genre } from "@/lib/types"
import { RxCaretSort } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const MangaGenre = [
    {
        value: Genre.Shonen,
        label: "Shonen",
    },
    {
        value: Genre.Shojo,
        label: "Shojo",
    },
    {
        value: Genre.Seinen,
        label: "Seinen",
    },
    {
        value: Genre.Josei,
        label: "Josei",
    },
    {
        value: Genre.Kodomomuke,
        label: "Kodomomuke",
    },
    {
        value: Genre.Isekai,
        label: "Isekai",
    },
    {
        value: Genre.Harem,
        label: "Harem",
    },
    {
        value: Genre.Mecha,
        label: "Mecha",
    },
    {
        value: Genre.SliceOfLife,
        label: "Slice of Life",
    },
    {
        value: Genre.Fantasy,
        label: "Fantasy",
    },
    {
        value: Genre.ScienceFiction,
        label: "Science Fiction",
    },
    {
        value: Genre.Horror,
        label: "Horror",
    },
    {
        value: Genre.Mystery,
        label: "Mystery",
    },
    {
        value: Genre.Sports,
        label: "Sports",
    },
    {
        value: Genre.Historical,
        label: "Historical",
    },
    {
        value: Genre.Romance,
        label: "Romance",
    },
    {
        value: Genre.Comedy,
        label: "Comedy",
    },
    {
        value: Genre.Drama,
        label: "Drama",
    },
    {
        value: Genre.Adventure,
        label: "Adventure",
    },
    {
        value: Genre.Supernatural,
        label: "Supernatural",
    },
    {
        value: Genre.Psychological,
        label: "Psychological",
    },
    {
        value: Genre.Thriller,
        label: "Thriller",
    },
    {
        value: Genre.Ecchi,
        label: "Ecchi",
    },
    {
        value: Genre.Action,
        label: "Action",
    },
    {
        value: Genre.SchoolLife,
        label: "School Life",
    },
    {
        value: Genre.Tragedy,
        label: "Tragedy",
    },
    {
        value: Genre.Others,
        label: "Others",
    },
];


export function ComboboxDemo({ mangaGenre, setMangaGenre }: { mangaGenre: Genre | undefined, setMangaGenre: (genre: Genre | undefined) => void }) {
    const [open, setOpen] = React.useState(false)


    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {mangaGenre
                        ? MangaGenre.find((genre) => genre.value === mangaGenre)?.label
                        : "Select genre..."}
                    <RxCaretSort className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                        {MangaGenre.map((genre) => (
                            <CommandItem
                                key={genre.value}
                                value={genre.value}
                                onSelect={(currentValue) => {
                                    // setMangaGenre(currentValue === mangaGenre ? Genre.Others : currentValue)
                                    setMangaGenre(genre.value)
                                    console.log(currentValue)
                                    setOpen(false)
                                }}
                            >
                                {genre.label}
                                <IoMdCheckmark
                                    className={cn(
                                        "ml-auto h-4 w-4",
                                        mangaGenre === genre.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover >
    )
}
