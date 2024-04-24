import React, { SetStateAction } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useStore from "@/store";
import { useRouter } from "next/navigation";

interface OtpCardProps {
    setTranslate: React.Dispatch<SetStateAction<boolean>>;
    translate: boolean;
}

const OtpCard = ({ setTranslate, translate }: OtpCardProps) => {
    const [value, setValue] = React.useState("");

    const router = useRouter();

    const {
        user: { email },
    } = useStore();

    const mutation = useMutation({
        mutationFn: async () => {
            return await axios.post(
                "http://localhost:8000/api/v1/users/mail/verify",
                {
                    email,
                    otp: parseInt(value),
                }
            );
        },
        onSuccess: () => {
            router.push("/");
        },
    });

    return (
        <Card className="min-w-[30rem] h-full">
            <div className="w-full h-full flex flex-col justify-center items-center ">
                <div className="w-[50%] mb-8">
                    <h1 className="text-xl">Enter the OTP</h1>
                </div>
                <InputOTP
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                    value={value}
                    onChange={(value) => setValue(value)}>
                    <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                    </InputOTPGroup>
                </InputOTP>
                <div className="h-10 flex justify-center items-center">
                    <Button
                        variant="link"
                        onClick={() => {
                            setTranslate(!translate);
                        }}>
                        email is wrong | change it
                    </Button>
                </div>
                <div className="w-[40%]">
                    <Button
                        className="w-full"
                        onClick={() => {
                            mutation.mutate();
                        }}>
                        verify
                    </Button>
                </div>
                <div className="h-10 flex justify-center items-center">
                    {mutation.isError && (
                        <p className="text-red-500">Invalid OTP</p>
                    )}
                    {mutation.isSuccess && (
                        <p className="text-green-500">OTP Verified</p>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default OtpCard;
