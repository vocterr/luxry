import Link from "next/link";

import { Metadata } from "next";
import { RedirectButton } from "@/components/RedirectButton";
export const metadata: Metadata = {
    title: "LUXry // FAQ",
  };

export default async function FAQPage() {
    return (
      <div className="flex  sm:px-12 md:px-24 lg:px-48 xl:px-96 2xl:px-[650px] flex-col w-full mt-24 text-gray-400">
        <h1 className="text-center text-white font-cinzel text-4xl mb-8 self-center pb-2 border-b border-gray-500 w-[90%]">
          Frequently Asked Questions
        </h1>
        <div className="w-[90%] flex flex-col self-center space-y-6 mb-12">
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            What is your return policy?
          </h2>
          <p>
            Please refer to our{" "}
            <a href="/return-refund-policy" className="text-blue-400 underline">
              Return & Refund Policy
            </a>{" "}
            page for detailed information.
          </p>
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            How long does shipping take?
          </h2>
          <p>Standard shipping takes 5-7 business days, while expedited options take 2-3 days.</p>
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            Do you ship internationally?
          </h2>
          <p>Yes, we offer international shipping. Charges may vary depending on the location.</p>
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            How can I track my order?
          </h2>
          <p>
            Visit the{" "}
            <a href="/track-order" className="text-blue-400 underline">
              Track Your Order
            </a>{" "}
            page to track your order using your order ID.
          </p>
          <RedirectButton href="/"  text="Go To The Main Page"/>
        </div>
      </div>
    );
  }
  