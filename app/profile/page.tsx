import { ProfilePageOnClient } from "@/components/Profile/ProfilePageOnClient";
import { ShippingInformation } from "@/types";
import { fetchProfileOnServer } from "@/utils/fetchProfileOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Profile",
  };

export interface Profile {
    name: string,
    email: string,
    password: string,
    amountSpent: string,
    numberOfOrders: number,
    shippingInformation: ShippingInformation,
}

export default async function ProfilePage() {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    if (!token) {
        redirect("/signin");
    }
    const profile: Profile = await fetchProfileOnServer(token)
    return (
        <>

            {profile ? (
                <ProfilePageOnClient initialProfile={profile} />
            ) : (
                <div className="fixed w-[350px] flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg xl:text-xl text-center pb-6 border-b border-gray-500">There is an issue with our server, please try again later.</h1>
                    <Image src="/animated/nousers.svg" alt="nousers" width={650} height={650} className="h-80"/>
                    <Link href="/" className="submitButton text-center">Go To The Main Page</Link>
                </div>
            )}
        </>

    );
}