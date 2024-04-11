import Image from "next/image";
import React from "react";

function NewCollection() {
    return (
        <section className="text-white px-8 py-6 space-y-3">
            <h1 className="text-3xl font-bold">New Collection</h1>
            <div className="flex  gap-4 overflow-x-auto no-scrollbar">
                <div className="min-w-[16rem] h-40 bg-white rounded-lg flex items-end relative">
                    <h1 className="z-10 text-lg ml-3 mb-2 bg-gradient-to-r rounded-md">
                        new collection
                    </h1>
                    <div
                        style={{
                            backgroundImage: "url('/images/image_1.jpg')",
                            backgroundSize: "cover",
                        }}
                        className="absolute top-0 left-0 rounded-lg h-full w-full "
                    />
                </div>
                <div className="min-w-[16rem] h-40 bg-white rounded-lg"></div>
                <div className="min-w-[16rem] h-40 bg-white rounded-lg"></div>
                <div className="min-w-[16rem] h-40 bg-white rounded-lg"></div>
                <div className="min-w-[16rem] h-40 bg-white rounded-lg"></div>
                <div className="min-w-[16rem] h-40 bg-white rounded-lg"></div>
                <div className="min-w-[16rem] h-40 bg-white rounded-lg"></div>
            </div>
        </section>
    );
}

export default NewCollection;
