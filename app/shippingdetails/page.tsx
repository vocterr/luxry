import Link from "next/link";

import { Metadata } from "next";
import { RedirectButton } from "@/components/RedirectButton";
export const metadata: Metadata = {
    title: "LUXry // Shipping Details",
  };

export default async function ShippingInformationPage() {
    return (
      <div className="flex sm:px-24 md:px-36 lg:px-56 xl:px-96 2xl:px-[650px] flex-col w-full mt-24 text-gray-400">
        <h1 className="text-center text-white font-cinzel text-4xl mb-8 self-center pb-2 border-b border-gray-500 w-[90%]">
          Shipping Information
        </h1>
        <div className="w-[90%] self-center space-y-6 mb-12">
          <p>
            We ensure that your orders are delivered in a timely and secure manner. Please review the
            shipping details below.
          </p>
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            Shipping Locations
          </h2>
          <p>We ship to most countries worldwide. Shipping charges may vary based on location.</p>
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            Processing Time
          </h2>
          <p>Orders are processed within 1-3 business days after payment confirmation.</p>
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            Shipping Methods
          </h2>
          <p>
            We offer standard and expedited shipping options. Estimated delivery times will be
            provided at checkout.
          </p>
          <p>
            For more information, feel free to contact us through the{" "}
            <a href="/contact-us" className="text-blue-400 underline">
              Contact Us
            </a>{" "}
            page.
          </p>
        </div>
        <RedirectButton href="/"  text="Go To The Main Page"/>
      </div>
    );
  }
  