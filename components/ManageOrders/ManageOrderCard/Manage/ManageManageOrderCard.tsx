"use client";

import { Order, OrderStatus } from "@/types";
import { updateOrderStatus } from "@/utils/updateOrderStatus";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const ManageManageOrderCard = ({ order }: { order: Order }) => {
  const [orderStatus, setOrderStatus] = useState(order.orderStatus);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ success: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const result = await updateOrderStatus(order.id, orderStatus);
    setLoading(false);
    setStatusMessage({ success: result!.success, message: result!.message });
  };

  return (
    <>
      <div
        onClick={() => setIsDropdownOpened(!isDropdownOpened)}
        className="relative flex items-center justify-between rounded border-2 bg-transparent py-1 border-gray-600 px-2 h-10"
      >
        <h1>{orderStatus}</h1>
        <IoIosArrowDown />
        {isDropdownOpened && (
          <div className="absolute z-50 flex flex-col space-y-2 p-3 shadow-md shadow-gray-900 rounded-md top-10 left-0 bg-gradient-to-br w-full from-[#1e3a8a] to-[#2563eb]">
            {Object.values(OrderStatus).map((status) => (
              <button
                key={status}
                onClick={() => setOrderStatus(status)}
                className={`w-[85%] self-center pb-2 border-b border-gray-800 ${
                  orderStatus === status ? "text-amber-600 font-bold" : ""
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-2">
          <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {statusMessage && !loading && (
        <p
          className={`text-sm text-center mt-2 ${
            statusMessage.success ? "text-green-400" : "text-red-400"
          }`}
        >
          {statusMessage.message}
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`bg-black rounded-md shadow-md shadow-gray-900 mt-4 w-[70%] self-center text-white py-2 font-bold ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Applying..." : "Apply"}
      </button>
    </>
  );
};
