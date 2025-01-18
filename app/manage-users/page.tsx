import { UsersListManageUsersPage } from "@/components/ManageUsers/UsersList/UsersListManageUsersPage";
import { User } from "@/types";
import { fetchManageUsersOnServer } from "@/utils/fetchManageUsersOnServer";
import { fetchUserRoleOnServer } from "@/utils/fetchUserRoleOnServer";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Manage Users",
  };



export default async function ManageUsersPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const userRole = await fetchUserRoleOnServer(token);
        if (userRole?.role !== "ADMIN") {
            redirect("/");
        }
    const users: User[] = await fetchManageUsersOnServer(token) || [];
    return (
        <>
        {users.length > 0 ? (
            <div className="flex flex-col mt-24 w-full md:px-16 lg:px-48 xl:px-72 2xl:px-[430px] 3xl:[520px]">
            <h1 className="font-cinzel mb-8 text-4xl text-center self-center px-2 border-b border-gray-500 w-[90%]">
                List of Users
            </h1>
            <UsersListManageUsersPage initialUsers={users}/>
        </div>
        ) : (
            <div className="fixed w-[350px] flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-lg xl:text-xl text-center pb-6 border-b border-gray-500">There is an issue with fetching the users. please try again later.</h1>
                    <Image src="/animated/nousers.svg" alt="nousers" width={650} height={650} className="h-80"/>
                    <Link href="/" className="submitButton text-center">Go To The Main Page</Link>
                </div>
        )}
        
        </>
        
    );
}