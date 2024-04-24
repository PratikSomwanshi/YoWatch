"use server";

import axios from "axios";

type Inputs = {
    password: string;
    confirm_password: string;
    email: string;
};

async function sendOtpRegister(data: Inputs) {
    // return await axios.post("http://localhost:8000/api/v1/users/mail", {
    //     email: data.email,
    // });

    return fetch("http://localhost:8000/api/v1/users/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
    });
}

export { sendOtpRegister };
