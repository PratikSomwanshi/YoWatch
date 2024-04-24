"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { InfinitySpin } from "react-loader-spinner";

import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import OtpCard from "../registerCard/otpCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useStore from "@/store";
import { IronSession } from "iron-session";
import { SessionData } from "@/actions/ironSessionConfig";

type Inputs = {
    password: string;
    email: string;
    userName: string;
};

type props = {
    session: IronSession<SessionData>;
};

type USER = {
    email?: string;
    token?: string;
    userName?: string;
};

function LoginCard() {
    const { user, setUser } = useStore();

    const sessionMutation = useMutation({
        mutationFn: async (data: USER) => {
            return await axios.post("http://localhost:3000/session", {
                email: data.email,
                token: data.token,
                userName: data.userName,
            });
        },
        onSuccess: () => {
            // TODO: mutate
        },
        onError: (error) => {
            // TODO: show toast
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const [translate, setTranslate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>();
    const [localData, setLocalData] = useState<Inputs>({
        email: "",
        password: "",
        userName: "",
    });

    const otpMutation = useMutation({
        mutationFn: async (data: Inputs) => {
            return await axios.post("http://localhost:8000/api/v1/users/mail", {
                email: data.email,
            });
        },
        onSuccess: () => {
            setTranslate(!translate);
            setLoading(false);
            // TODO: mutate
            sessionMutation.mutate(user);
        },
        onError: (error) => {
            setError(error);
            console.log(error);
            setLoading(false);
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: Inputs) => {
            setLoading(true);
            setLocalData(data);
            return await axios.post(
                "http://localhost:8000/api/v1/users/signin",
                {
                    email: data.email,
                    password: data.password,
                }
            );
        },
        onSuccess: (data) => {
            // setLoading(false);
            setUser(data.data.data);
            otpMutation.mutate(localData);
        },
        onError: (error) => {
            setError(error);
            console.log(error);
            setLoading(false);
        },
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // setEmail(data.email);
        setLoading(true);
        mutation.mutate(data);

        setLoading(false);
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
                            error && (
                                <h1 className="text-red-600">
                                    {error.response &&
                                        error.response.data.error.explanation}
                                </h1>
                            )
                        )}
                    </div>
                    <div className="w-full flex justify-center ">
                        <Button
                            className="w-[60%]"
                            onClick={handleSubmit(onSubmit)}>
                            {loading ? (
                                <div className="flex items-center -translate-x-5">
                                    <InfinitySpin width="100" color="#fff" />
                                </div>
                            ) : (
                                "Login"
                            )}
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
