import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <section className="text-white text-lg md:flex justify-around bg-black px-8 py-4">
            <div className="hidden sm:inline-block">
                <h1>Created By: Pratik Somwanshi</h1>
                <h1>Mobile: +91 8830427235</h1>
                <h1>Email: pratiksomwanshi570@gmail.com</h1>
            </div>
            <div>
                <Link href="https://pratiksomwanshi.live">About Me</Link>
            </div>
        </section>
    );
}

export default Footer;
