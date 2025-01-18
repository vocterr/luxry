"use client";

import { Spinner } from "@/components/Spinner";
import { resetPassword } from "@/utils/ForgotPassword/resetPassword";
import { sendPin } from "@/utils/ForgotPassword/SendPin";
import { validatePin } from "@/utils/ForgotPassword/validatePin";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


export default function ForgotPasswordPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [pin, setPin] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSendPin = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await sendPin(email);
        if (result) {
            alert("PIN sent to your email.");
            setStep(2);
        }
        else {
            alert("Error sending PIN.");
        }
        setLoading(false)
    }

    const handleValidatePin = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await validatePin(email, pin);
        if (result) {
            alert("PIN validated.");
            setStep(3);
        }
        else {
            alert("Invalid PIN or it has expired.");
        }
        setLoading(false);
    }

    const handleResetPassword = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await resetPassword(newPassword);
        if (result) {
            alert("You've successfully reseted your password!");
            setTimeout(() => {
                router.push("/signin")
            }, 500);
        }
        else {
            alert("Problem resetting the password!");
        }
    }
    return (
        <div className="fixed font-playfair top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-4 ">
            {step === 1 && (
                <>
                <div className="flex flex-col w-[350px] left-[12%] xl:left-[18%] 2xl:left-[23%] 3xl:left-[27%] absolute -translate-y-1/2">
                <h1 className="font-cinzel text-3xl text-center pb-2 border-b border-gray-500 mb-6">Forgot Password</h1>
                    <p className="text-center text-gray-300 text-lg mb-4">
                        Enter your email address below and we'll send you a PIN to reset your password.
                    </p>
                    <form className="flex flex-col  text-gray-300 ">
                        <label htmlFor="Email" className="formLabel w-[80%] self-center mb-1 ml-1" >Email</label>
                        <input
                            className="formInput w-[80%] self-center"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {loading && (
                            <Spinner />
                        )}
                        <button onClick={(e) => handleSendPin(e)} className="mt-6 rounded-md shadow-gray-900 shadow-md font-cinzel bg-white text-black font-bold py-2 w-[80%] self-center ">
                            Receive a PIN
                        </button>
                    </form>
                </div>
                    
                    <Image src="/animated/forgotpassword1.svg" alt="forgotpassword" height={650} width={650} className="fixed top-1/2 right-[27%] xl:right-[30%] 2xl:right-[35%] 3xl:right-[37%] h-[450px] xl:h-[500px] 2xl:h-[550px] translate-x-1/2 -translate-y-1/2"/>
                </>
            )}

            {step === 2 && (
                <>
                <div className="flex flex-col w-[350px] left-[12%] xl:left-[18%] 2xl:left-[23%] 3xl:left-[27%] absolute -translate-y-1/2">
                <h1 className="font-cinzel text-3xl text-center pb-2 border-b border-gray-500 mb-6">Validate PIN</h1>
                    <p className="text-center text-gray-300 text-lg mb-4">
                        Go to your email <b>{email}</b> and type the PIN that you received in our mail.
                    </p>
                    <form className="flex flex-col  text-gray-300 ">
                        <label htmlFor="PIN" className="formLabel w-[80%] self-center mb-1 ml-1" >PIN</label>
                        <input
                            className="formInput w-[80%] self-center"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                        />
                        {loading && (
                            <Spinner />
                        )}
                        <button onClick={(e) => handleValidatePin(e)} className="mt-6 rounded-md shadow-gray-900 shadow-md font-cinzel bg-white text-black font-bold py-2 w-[80%] self-center ">
                            Validate PIN
                        </button>
                    </form>
                </div>

                <Image src="/animated/forgotpassword2.svg" alt="forgotpassword" height={650} width={650} className="fixed top-1/2 right-[27%] xl:right-[30%] 2xl:right-[35%] 3xl:right-[37%] h-[450px] xl:h-[500px] 2xl:h-[550px] translate-x-1/2 -translate-y-1/2"/>
                    
                </>
            )}

            {step === 3 && (
                <>
                <div className="flex flex-col w-[350px] left-[12%] xl:left-[18%] 2xl:left-[23%] 3xl:left-[27%] absolute -translate-y-1/2">
                <h1 className="font-cinzel text-3xl text-center pb-2 border-b border-gray-500 mb-6">Reset Password</h1>
                <p className="text-center text-gray-300 text-lg mb-4">
                    Eveything went fine, you can now reset your password!
                </p>
                <form className="flex flex-col  text-gray-300 ">
                    <label htmlFor="New Password" className="formLabel w-[80%] self-center mb-1 ml-1" >New Password</label>
                    <input
                        className="formInput w-[80%] self-center"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {loading && (
                        <Spinner />
                    )}
                    <button onClick={(e) => handleResetPassword(e)} className="mt-6 rounded-md shadow-gray-900 shadow-md font-cinzel bg-white text-black font-bold py-2 w-[80%] self-center ">
                        Reset Password
                    </button>
                </form>
                </div>

                <Image src="/animated/forgotpassword3.svg" alt="forgotpassword" height={650} width={650} className="fixed top-1/2 right-[27%] xl:right-[30%] 2xl:right-[35%] 3xl:right-[37%] h-[400px] xl:h-[450px] 2xl:h-[500px] translate-x-1/2 -translate-y-1/2"/>
                
            </>
            )}
        </div>
    );
}