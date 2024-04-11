import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function Navbar() {
    return (
        <section className="absolute z-10 w-full bg-gradient-to-b from-gray-950 text-white">
            <div className="container flex items-center h-[3.4rem] text-lg justify-around">
                <div className="hidden">
                    <Link href="/">YoWatch</Link>
                </div>
                <div className="flex md:w-1/2 sm:w-[60%] w-[75%]">
                    <Input
                        type="search"
                        placeholder="search the movie, webseries..."
                    />
                    <Button>Search</Button>
                </div>
                <div>
                    <Link href="/">Account</Link>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
