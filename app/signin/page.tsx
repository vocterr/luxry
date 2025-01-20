"use client";

import { PageLoading } from "@/components/PageLoading";
import { Spinner } from "@/components/Spinner";
import { loginUser } from "@/utils/loginUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";



export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState<{ success: boolean, message: string } | null>(null);
    const [routeLoading, setRouteLoading] = useState(false);

    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const result = await loginUser(user.email, user.password)
        setStatusMessage({ success: result!.success, message: result!.message });
        if (result?.success) {
            router.push("/")
        }
        setLoading(false);
    }

    return (
        <>
        <form className="flex flex-col fixed top-1/2 left-1/2 lg:left-[28%] xl:left-[32%] 2xl:left-[34%] -translate-x-1/2 -translate-y-1/2 w-[90%] sm:px-16 md:px-28 lg:px-52 xl:px-96 2xl:px-[500px] 3xl:px-[600px]" >
            <h1 className="text-4xl mb-8 font-cinzel text-center self-center w-[100%] border-b border-gray-500 pb-2 ">Sign In</h1>
            <div className="flex flex-col text-gray-300 w-[90%]  self-center">

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

            <button onClick={(e) => handleSignIn(e)} className="mt-6 submitButton ">
                Sign In
            </button>
            <p onClick={() => setRouteLoading(true)} className="text-gray-300/85 mt-6 self-center">Can't sign in? <a href="forgot-password" className="text-blue-400 hover:text-white">Reset Password</a></p>
            <p onClick={() => setRouteLoading(true)}  className="text-gray-300/85 mt-2 self-center">Doesn't have an account? <a href="/signup" className="text-blue-400 hover:text-white">Sign Up</a></p>
        </form>
        <Image src="/animated/signin.svg" alt="signin" width={600} height={600} className="hidden lg:flex fixed right-[25%] xl:right-[30%] 2xl:right-1/3 translate-x-1/2 top-1/2 -translate-y-1/2 h-[450px]"/>
            {routeLoading && <PageLoading/>}
        </>
    );
}