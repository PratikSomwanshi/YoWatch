"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import OtpCard from "../registerCard/otpCard";

type Inputs = {
    password: string;
    email: string;
};

function LoginCard() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const [translate, setTranslate] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (data.email && data.password) {
            setTranslate(!translate);
        }
    };

    return (
        <div className="h-full overflow-hidden">
            <Card
                className={
                    translate
                        ? "h-full flex w-full -translate-x-[30rem] transition-all"
                        : "h-full flex w-full transition-all duration-300"
                }>
                <section className="min-w-[30rem]">
                    <div className="w-full h-20 flex justify-center items-center">
                        <h1 className="text-xl">YoWatch</h1>
                    </div>
                    <div className="w-full flex justify-center mb-4">
                        <Input
                            type="email"
                            placeholder="Enter you email..."
                            className="w-[80%]"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div className="w-full flex justify-center ">
                        <Input
                            type="password"
                            placeholder="Password..."
                            className="w-[80%]"
                            {...register("password", { required: true })}
                        />
                    </div>
                    <div className="h-10 flex justify-center items-center">
                        {errors.email || errors.password ? (
                            <h1 className="text-red-600">
                                Email and Password are required
                            </h1>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="w-full flex justify-center ">
                        <Button
                            className="w-[60%]"
                            onClick={handleSubmit(onSubmit)}>
                            LogIn
                        </Button>
                    </div>
                    <div className="w-full flex justify-center">
                        <Button variant="link">
                            don't have account | create one
                        </Button>
                    </div>
                    <div className="w-full flex justify-center mb-1">
                        <h1 className="">OR</h1>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-[60%] flex justify-between">
                            <Button className="w-[6rem] flex justify-around">
                                <FaGithub />
                                Github
                            </Button>
                            <Button className="w-[6rem] flex justify-around">
                                <FaGoogle />
                                Google
                            </Button>
                        </div>
                    </div>
                </section>
                <OtpCard setTranslate={setTranslate} translate={translate} />
            </Card>
        </div>
    );
}

export default LoginCard;
