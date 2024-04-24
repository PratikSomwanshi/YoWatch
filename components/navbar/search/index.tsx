"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";

function Search() {
    const [search, setSearch] = React.useState("");
    const router = useRouter();

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            router.push(`/search/${search}`);
        }
    }

    return (
        <div className="flex md:w-1/2 sm:w-[60%] w-[75%]">
            <Input
                type="search"
                className="text-black border-none outline-none mr-2"
                placeholder="search the movie, webseries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                onClick={() => {
                    router.push(`/search/${search}`);
                }}>
                Search
            </Button>
        </div>
    );
}

export default Search;
