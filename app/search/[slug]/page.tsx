import Navbar from "@/components/navbar";
import VideoSearchCard from "@/components/videoSearchCard";
import React from "react";

function page({ params }: { params: { slug: string } }) {
    const x = params.slug.split("%20").join(" ");

    return (
        <section className="text-white">
            <div className="h-24">
                <Navbar />
            </div>
            <div className="container space-y-6">
                <h1 className="text-2xl">Search results for "{x}"</h1>
                <VideoSearchCard />
                <VideoSearchCard />
                <VideoSearchCard />
                <VideoSearchCard />
                <VideoSearchCard />
                <VideoSearchCard />
                <VideoSearchCard />
            </div>
        </section>
    );
}

export default page;
