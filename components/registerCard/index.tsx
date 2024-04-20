"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useForm, SubmitHandler, set } from "react-hook-form";
import Link from "next/link";
import OtpCard from "./otpCard";
import { useMutation } from "@tanstack/react-query";
import { sendOtp } from "@/actions/register";

type Inputs = {
    password: string;
    confirm_password: string;
    email: string;
};

function RegisterCard() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const mutation = useMutation({
        mutationFn: sendOtp,
    });

    const [translate, setTranslate] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        mutation.mutate(data);

        if (!mutation.isSuccess) {
            setLoading(true);
        }

        if (mutation.isSuccess) {
            setLoading(false);
            setTranslate(!translate);
        }
    };

    return (
        <div className="h-full w-[30rem] overflow-hidden rounded-xl">
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
                    <div className="w-full flex justify-center mb-4">
                        <Input
                            type="password"
                            placeholder="Password..."
                            className="w-[80%]"
                            {...register("password", { required: true })}
                        />
                    </div>
                    <div className="w-full flex justify-center ">
                        <Input
                            type="text"
                            placeholder="Conform Password..."
                            className="w-[80%]"
                            {...register("confirm_password", {
                                required: true,
                                validate: (val: string) => {
                                    if (watch("password") != val) {
                                        return "Password do not match";
                                    }
                                },
                            })}
                        />
                    </div>
                    <div className="h-10 flex justify-center items-center">
                        {errors.email || errors.password ? (
                            <h1 className="text-red-600">
                                Email and Password are required
                            </h1>
                        ) : errors.confirm_password ? (
                            <h1 className="text-red-600">
                                Password do not match
                            </h1>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="w-full flex justify-center ">
                        <div className="w-[60%]">
                            <Button
                                className="w-full"
                                onClick={handleSubmit(onSubmit)}>
                                {loading ? "loading..." : "Register"}
                            </Button>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link href="/login">
                            <Button variant="link">
                                already have account | login
                            </Button>
                        </Link>
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

export default RegisterCard;
