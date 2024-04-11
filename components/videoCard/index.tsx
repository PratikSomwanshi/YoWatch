import Link from "next/link";
import React from "react";

function VideoCard() {
    return (
        <Link
            href="/video/something"
            className="min-w-[16rem] h-40 bg-white rounded-lg flex items-end relative">
            <h1 className="z-10 text-lg ml-3 mb-2 bg-gradient-to-r rounded-md">
                movie name
            </h1>
            <div
                style={{
                    backgroundImage: "url('/images/image_1.jpg')",
                    backgroundSize: "cover",
                }}
                className="absolute top-0 left-0 rounded-lg h-full w-full "
            />
        </Link>
    );
}

export default VideoCard;
