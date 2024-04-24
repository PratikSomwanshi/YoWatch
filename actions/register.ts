"use server";

import axios from "axios";

type Inputs = {
    password: string;
    email: string;
};

async function sendOtpLogin(data: Inputs) {
    const res = await axios.post("http://localhost:8000/api/v1/users/mail", {
        email: data.email,
    });

    // console.log(res);

    // return res;

    // return fetch("http://localhost:8000/api/v1/users/mail", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email: data.email }),
    // });
}

export { sendOtpLogin };
