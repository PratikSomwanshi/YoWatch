import Image from "next/image";
import React from "react";
import VideoCard from "../videoCard";

function MostPopular() {
    return (
        <section className="text-white px-8 py-6 space-y-3">
            <h1 className="text-3xl font-bold">Most Popular</h1>
            <div className="flex  gap-4 overflow-x-auto no-scrollbar">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </section>
    );
}

export default MostPopular;
