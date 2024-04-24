import { getSession } from "@/actions/userActions";
import LoginCard from "@/components/loginCard";
import axios from "axios";
import React from "react";

async function page() {
    // await axios.post("http://localhost:3000/session", {
    // email: "something@gmail.com",
    // token: "this is a token",
    // userName: "username",
    // });

    // const response = await axios.get("http://localhost:3000/session");
    // const session = response.data;

    // console.log(session);

    const session = await getSession();

    // console.log(session);

    // if (session.isLoggedIn) return <LoginCard />;
    return <LoginCard />;

    return (
        <h1>
            working
            {/* {session.email} */}
        </h1>
    );
}

export default page;
