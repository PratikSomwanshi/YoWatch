import CarouselLocal from "@/components/carousel";
import Footer from "@/components/footer";
import MostPopular from "@/components/mostPopular";
import Navbar from "@/components/navbar";
import NewCollection from "@/components/newCollection";
import React from "react";

function page() {
    return (
        <section className="w-screen h-[27rem]">
            <Navbar />
            <CarouselLocal />
            <MostPopular />
            <NewCollection />
            <Footer />
        </section>
    );
}

export default page;
