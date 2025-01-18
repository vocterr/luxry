
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Track Order",
  };


export default async function TrackOrderPage() {
    return (
      <div className="flex flex-col w-full sm:px-16 md:px-32 lg:px-60 xl:px-96 2xl:px-[500px] 3xl:px-[610px] mt-24 text-gray-400">
        <h1 className="text-center text-white font-cinzel text-4xl mb-8 self-center pb-2 border-b border-gray-500 w-[90%]">
          Track Your Order
        </h1>
        <div className="w-[90%] self-center space-y-6">
          <p>
            Enter your Order ID and email address to track the status of your order.
          </p>
          <form className="flex flex-col space-y-4">
            <label htmlFor="orderID" className="formLabel ml-1">
              Order ID
            </label>
            <input
              type="text"
              id="orderID"
              className="formInput"
              placeholder="Enter your Order ID"
            />
            <label htmlFor="email" className="formLabel ml-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="formInput"
              placeholder="Enter your email address"
            />
            <button className="submitButton">
              Track Order
            </button>
          </form>
        </div>
      </div>
    );
  }
  