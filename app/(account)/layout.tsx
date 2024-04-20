import React, { ReactElement } from "react";

function layout({ children }: { children: ReactElement }) {
    return (
        <section className="text-white flex items-end h-screen relative overflow-hidden">
            <div className="absolute top-[15%] left-[24%] h-[28rem] w-[30rem]">
                {children}
            </div>
            <div className="w-full translate-y-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#fff"
                        fill-opacity="1"
                        d="M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,181.3C672,181,768,171,864,144C960,117,1056,75,1152,58.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}

export default layout;
