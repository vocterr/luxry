import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Cancel",
  };


export default function CancelPage() {
    return (
        <div className="fixed top-1/2 left-1/2 w-[350px] lg:w-[500px] -translate-x-1/2 -translate-y-1/2 flex flex-col  px-4">
            <h1 className="font-cinzel text-center text-lg lg:text-2xl">Don't worry! take your time, you can always come back.</h1>
            <img src="/animated/canceled.svg" alt="canceled" className="h-64 lg:h-80" />
            <Link href="/" className="submitButton text-center">Go To The Main Page</Link>
        </div>
    );
}
