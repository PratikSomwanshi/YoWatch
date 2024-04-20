import React, { SetStateAction } from "react";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface OtpCardProps {
    setTranslate: React.Dispatch<SetStateAction<boolean>>;
    translate: boolean;
}

const OtpCard = ({ setTranslate, translate }: OtpCardProps) => {
    return (
        <Card className="min-w-[30rem] h-full">
            <div className="w-full h-full flex flex-col justify-center items-center ">
                <div className="w-[50%] mb-8">
                    <h1 className="text-xl">Enter the OTP</h1>
                </div>
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
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
                    <Button className="w-full">verify</Button>
                </div>
                <div className="h-10 flex justify-center items-center">
                    <h1>some console.error();</h1>
                </div>
            </div>
        </Card>
    );
};

export default OtpCard;
