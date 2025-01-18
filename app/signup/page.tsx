"use client";

import { Spinner } from "@/components/Spinner";
import { registerUser } from "@/utils/registerUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [repeatPassword, setRepeatPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [termsAgree, setTermsAgree] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ success: boolean, message: string } | null>(null);

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await registerUser(user.name, user.email, user.password, repeatPassword, termsAgree)
        setStatusMessage({ success: result!.success, message: result!.message });
        if (result?.success) {
            router.push("/signin")
        }
        setLoading(false);
    }

    return (
        <>
            <form className="flex flex-col fixed top-1/2 left-1/2 lg:left-[28%] xl:left-[30%] 2xl:left-[32%] -translate-x-1/2 -translate-y-1/2 w-[90%]  sm:px-16 md:px-28 lg:px-52 xl:px-96 2xl:px-[500px] 3xl:px-[600px]">
                <h1 className="text-4xl mb-8 font-cinzel text-center self-center w-[100%] border-b border-gray-500 pb-2 ">Sign Up</h1>
                <div className="flex flex-col text-gray-300 w-[90%]  self-center">
                    <label htmlFor="Name" className="formLabel mb-1 ml-1">Name</label>
                    <input
                        className="formInput"
                        value={user.name}
                        onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
                    />
                    <label htmlFor="Email" className="formLabel mt-3 mb-1 ml-1">Email</label>
                    <input
                        className="formInput"
                        value={user.email}
                        onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                    />
                    <label htmlFor="Password" className="formLabel mt-3 mb-1 ml-1">Password</label>
                    <input
                        className="formInput"
                        value={user.password}
                        onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
                        type="password"
                    />
                    <label htmlFor="Repeat Password" className="formLabel mt-3 mb-1 ml-1">Repeat Password</label>
                    <input
                        className="formInput"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        type="password"
                    />
                    <div className="flex items-center space-x-2 mt-3">
                        <input
                            type="checkbox"
                            checked={termsAgree}
                            onChange={(e) => setTermsAgree(e.target.checked)}
                        />
                        <p>I agree to the <a href="/terms" className="text-blue-500">Terms of Service</a>.</p>
                    </div>
                </div>

                {loading && (
                    <div className="mt-6 w-full flex justify-center">
                        <Spinner />
                    </div>
                )}

                {statusMessage?.success ? (
                    <p className="text-green-400 mt-2 text-sm text-center">{statusMessage.message}</p>
                ) : (
                    <p className="text-red-400 mt-2 text-sm text-center">{statusMessage?.message}</p>
                )}

                <button onClick={(e) => handleSignUp(e)} className="mt-6 submitButton ">
                    Sign Up
                </button>
                <p className="text-gray-300/85 mt-6 self-center">Already have an account? <a href="/signin" className="text-blue-400 hover:text-white">Sign In</a></p>

            </form>

            <Image src="/animated/signup.svg" alt="signup" width={700} height={700} className="hidden lg:flex fixed xl:right-[20%] lg:right-[12%] 2xl:right-[23%] top-1/2 h-[600px] xl:h-[550px] lg:h-[520px] 3xl:h-[650px] translate-x-1/3 -translate-y-1/2"/>
        </>
    );
}