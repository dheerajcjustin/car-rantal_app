import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";

import Countdown, { zeroPad } from "react-countdown";
import OtpInput from "react18-input-otp";
import authInstance from "../../config/vendorAxios";
import { useDispatch } from "react-redux";
import { setUserData } from "../../helpers/auth/vendorAuthSlice";



const OtpVendor = ({ mobile, name, modalOpen, vendorId }) => {
    const dispatch = useDispatch()
    const [resend, setResend] = useState(false);
    const toast = useToast();

    const [otp, setOtp] = useState("");

    const [error, setError] = useState(false);
    const otpSentButtonHandler = async () => {
        if (otp.length < 4) {
            console.log("invalid otp");
            setError(true);
        } else {
            setError(false);
            const data = { mobile: mobile, otp: otp, name: name, vendorId };
            try {
                const response = await authInstance.patch("/vendor/profile", data);
                console.log("it is working with otp", response);
                if (response.status === 200) {
                    dispatch(setUserData({ name, mobile }))
                    modalOpen(false);
                    // toast({})
                }
            } catch (error) {
                console.log(error);
                if (error?.response?.status === 400) {
                    setError(true);
                }
            }


            // navigate(-1);
        }
    }
    const otpResendHandler = async () => {
        setResend(true);
        try {
            const response = authInstance.post("/vendor/sendOtp", {
                mobile: mobile, name: name, vendorId
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    const renderer = ({ hours, minutes, seconds }) => (
        <span className="text-xl text-right">
            {zeroPad(minutes)}:{zeroPad(seconds)}
        </span>)


    return (
        <div className="md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center bg-[#FDD23F]">
            <h1 className="font-Viaoda text-5xl mb-10"> Mobile Verification</h1>
            <p className="p-10 text-xl">otp has sent to {mobile}</p>

            <OtpInput
                value={otp}
                onChange={handleChange}
                separator={<span className="p-2 shadow-2xl"> </span>}
                inputStyle=" text-xl sm:text-3xl md:text-5xl shadow-2xl bor  rounded-3xl"
                numInputs={4}
                isInputNum={true}
            ></OtpInput>
            {error && <p className="text-red-600 text-2xl">invalid otp</p>}

            {!resend && (
                <Countdown
                    date={Date.now() + 100000}
                    renderer={renderer}
                    onComplete={otpResendHandler}
                    className="text-xl text-right w-[65%]  mt-5"
                />
            )}
            {resend && (
                <p
                    className="text-xl text-right w-[65%] cursor-pointer underline mt-5"
                    onClick={otpResendHandler}
                >
                    Resend Otp ?
                </p>
            )}

            <button
                onClick={otpSentButtonHandler}
                className="w-[60%] h-20 mt-10 text-3xl font-semibold border-2 border-black rounded-3xl text-center hover:scale-105 hover:bg-black hover:text-white"
            >
                Sent Otp
            </button>


        </div>
    )
}

export default OtpVendor