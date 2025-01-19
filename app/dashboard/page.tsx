import { Order } from "@/types";
import { fetchOrdersCountOnServer } from "@/utils/Dashboard/fetchOrdersCountOnServer";
import { fetchProductsCountOnServer } from "@/utils/Dashboard/fetchProductsCountOnServer";
import { fetchRevenueOnServer } from "@/utils/Dashboard/fetchRevenueOnServer";
import { fetchUsersCountOnServer } from "@/utils/Dashboard/fetchUsersCountOnServer";
import { fetchRecentOrdersOnServer } from "@/utils/fetchRecentOrdersOnServer";
import { fetchUserRoleOnServer } from "@/utils/fetchUserRoleOnServer";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { AiFillProduct, AiOutlineProduct } from "react-icons/ai";

import { Metadata } from "next";
import { ButtonsDashboardPage } from "@/components/Dashboard/Buttons/ButtonsDashboardPage";
export const metadata: Metadata = {
    title: "LUXry // Admin Dashboard",
  };

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const results = await Promise.allSettled([
        fetchUserRoleOnServer(token),
        fetchUsersCountOnServer(token),
        fetchOrdersCountOnServer(token),
        fetchRecentOrdersOnServer(token),
        fetchProductsCountOnServer(token),
        fetchRevenueOnServer(token)
    ]);
    const userRole = results[0].status === "fulfilled" ? results[0].value : "";
    if (userRole?.role !== "ADMIN") {
        redirect("/");
    }
    const usersCount = results[1].status === "fulfilled" ? results[1].value : 0;
    const ordersCount = results[2].status === "fulfilled" ? results[2].value : 0;
    const orders: Order[] = results[3].status === "fulfilled" ? results[3].value : [];
    const productsCount = results[4].status === "fulfilled" ? results[4].value : 0;
    const revenue = results[5].status === "fulfilled" ? results[5].value : 0;

    return (
        <>
        

        <main className="sm:fixed w-[350px] mt-24 sm:mt-0 flex flex-col  sm:w-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 p-4">
          {/* TOPBAR */}
          <header className="flex items-center justify-between border-b border-gray-800 pb-2 mb-4">
            <h1 className="text-xl md:text-2xl font-bold font-playfair">
              Admin Panel
            </h1>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-900 p-4 rounded">
              <h3 className="text-lg font-playfair">Total Users</h3>
              <p className="text-3xl font-cinzel mt-2">{usersCount}</p>
            </div>
            <div className="bg-gray-900 p-4 rounded">
              <h3 className="text-lg font-playfair">Total Orders</h3>
              <p className="text-3xl font-cinzel mt-2">{ordersCount}</p>
            </div>
            <div className="bg-gray-900 p-4 rounded">
              <h3 className="text-lg font-playfair">Revenue</h3>
              <p className="text-3xl font-cinzel mt-2">$ {revenue}</p>
            </div>
            <div className="bg-gray-900 p-4 rounded">
              <h3 className="text-lg font-playfair">Products</h3>
              <p className="text-3xl font-cinzel mt-2">{productsCount}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl md:text-2xl font-cinzel mb-4">
              Recent Orders
            </h2>
            <div className="overflow-x-auto rounded shadow">
              <table className="min-w-full bg-gray-900 rounded">
                <thead>
                  <tr className="bg-gray-800 text-left">
                    <th className="px-4 py-2 font-inter">Order ID</th>
                    <th className="px-4 py-2 font-inter">Date</th>
                    <th className="px-4 py-2 font-inter">Total</th>
                    <th className="px-4 py-2 font-inter">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-700 hover:bg-gray-800 transition-colors"
                    >
                      <td className="px-4 py-2 font-cinzel">{order.id}</td>
                      <td className="px-4 py-2 font-cinzel">{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td className="px-4 py-2 font-cinzel">${order.totalAmount}</td>
                      <td className="px-4 py-2 font-cinzel">{order.orderStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            
          </section>
          <ButtonsDashboardPage/>
        </main>
        </>
        
    );
}
