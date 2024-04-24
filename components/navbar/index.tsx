import Link from "next/link";
import React from "react";
import AccountButton from "./accountBtn";
import Search from "./search";

function Navbar() {
    return (
        <section className="absolute z-10 w-full bg-gradient-to-b from-gray-950 text-white">
            <div className="container flex items-center h-[3.4rem] text-lg justify-around">
                <div className="hidden md:inline-block">
                    <Link href="/">YoWatch</Link>
                </div>
                <Search />
                <AccountButton />
            </div>
        </section>
    );
}

export default Navbar;
