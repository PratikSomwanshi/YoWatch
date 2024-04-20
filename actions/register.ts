"use server";

import axios from "axios";

type Inputs = {
    password: string;
    confirm_password: string;
    email: string;
};

async function sendOtp(data: Inputs) {
    const res = await axios.post("http://localhost:8000/api/v1/users/mail", {
        email: data.email,
    });

    console.log(res);

    return res;
}

export { sendOtp };
