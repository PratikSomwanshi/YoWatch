import Image from "next/image";
import React from "react";
import { Card } from "../ui/card";
import Link from "next/link";

function VideoSearchCard() {
    return (
        <Link href="/video/something" className="w-full flex justify-center">
            <Card className="flex w-[80%] justify-between px-2 py-2 h-[10rem] rounded-xl hover:bg-slate-100 ">
                <div className="flex space-x-12">
                    <div className="h-full">
                        <Image
                            src="/images/image_1.jpg"
                            alt="movie name"
                            width={300}
                            height={300}
                            className="rounded-lg h-full object-cover"
                        />
                    </div>
                    <div className="h-full flex flex-col justify-center space-y-3">
                        <h1 className="text-2xl">movie name</h1>
                        <p className="text-lg">movie description</p>
                    </div>
                </div>
                <div className="h-full flex flex-col justify-center mr-4">
                    <h1 className="text-xl">2024</h1>
                </div>
            </Card>
        </Link>
    );
}

export default VideoSearchCard;
