import Link from "next/link";


import { Metadata } from "next";
import { RedirectButton } from "@/components/RedirectButton";
export const metadata: Metadata = {
    title: "LUXry // Success",
  };


export default async function SuccessPage() {
    return (
        <div className="fixed top-1/2 left-1/2 w-[350px] lg:w-[500px] -translate-x-1/2 -translate-y-1/2 flex flex-col  px-4">
            <h1 className="font-cinzel text-center text-lg lg:text-2xl">You've successfully placed your order. We are so grateful {"<3"}</h1>
            <img src="/animated/completed.svg" alt="completed"  className="h-64 lg:h-80"/>
            <RedirectButton href="/" text="Go To The Main Page"/>
        </div>
    );
}