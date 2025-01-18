import { Order } from "@/types";
import React from "react";
import { ManageManageOrderCard } from "./Manage/ManageManageOrderCard";

export const ManageOrderCard = ({ order }: { order: Order }) => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 p-4 rounded-lg shadow-lg shadow-gray-800 font-inter space-y-3">
      <div className="space-y-1">
        <h1 className="text-lg font-semibold text-gray-800">
          Order ID: <span className="font-normal text-gray-700">{order.id}</span>
        </h1>
        <h1 className="text-lg font-semibold text-gray-800">
          First Name:{" "}
          <span className="font-normal text-gray-700">{order.shippingInformation.firstName}</span>
        </h1>
        <h1 className="text-lg font-semibold text-gray-800">
          Last Name:{" "}
          <span className="font-normal text-gray-700">{order.shippingInformation.lastName}</span>
        </h1>
        <h1 className="text-lg font-semibold text-gray-800">
          Order Status:{" "}
          <span className="font-normal text-gray-700">{order.orderStatus}</span>
        </h1>
      </div>
      <div className="border-t border-gray-500 my-2"></div>
      <h1 className="font-cinzel text-center text-xl text-gray-800">
        Update Order Status
      </h1>
      <ManageManageOrderCard order={order} />
    </div>
  );
};
