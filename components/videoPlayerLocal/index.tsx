import React from "react";
import { ContextMenu, ContextMenuTrigger } from "../ui/context-menu";

function VideoPlayerLocal() {
    return (
        <section className="w-screen ">
            <div className="flex justify-center">
                <div className="w-[80%]">
                    <ContextMenu>
                        <ContextMenuTrigger className="w-full">
                            <video
                                className=""
                                controls
                                controlsList="nodownload noremoteplayback noplaybackrate">
                                <source
                                    src={`/images/vid.mp4`}
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                        </ContextMenuTrigger>
                    </ContextMenu>
                </div>
            </div>
            <div className="">
                <div className="ml-[11%] mt-8">
                    <h1 className="text-2xl">Movie Name</h1>
                </div>
                <div className="ml-[11%] mt-4">
                    <h1 className="text-xl">2024</h1>
                </div>
                <div className="ml-[11%] mt-4">
                    <h1 className="text-lg">Description</h1>
                </div>
            </div>
        </section>
    );
}

export default VideoPlayerLocal;
