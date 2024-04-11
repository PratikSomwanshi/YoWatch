"use client";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";

function Navbar() {
    const [search, setSearch] = React.useState("");
    const router = useRouter();

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            router.push(`/search/${search}`);
        }
    }

    return (
        <section className="absolute z-10 w-full bg-gradient-to-b from-gray-950 text-white">
            <div className="container flex items-center h-[3.4rem] text-lg justify-around">
                <div className="hidden md:inline-block">
                    <Link href="/">YoWatch</Link>
                </div>
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
                <div>
                    <Link href="/">Account</Link>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
