import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import VideoPlayerLocal from "@/components/videoPlayerLocal";
import React from "react";

function page({ params }: { params: { slug: string } }) {
    return (
        <section className="text-white w-full">
            <div className="h-[5rem]">
                <Navbar />
            </div>
            <div className="flex justify-center w-full">
                <VideoPlayerLocal />
            </div>
            <div className="mt-20">
                <Footer />
            </div>
        </section>
    );
}

export default page;
