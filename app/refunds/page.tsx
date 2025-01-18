import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Refunds",
  };

export default async function ReturnRefundPolicyPage() {
    return (
      <div className="flex sm:px-24 md:px-36 lg:px-56 xl:px-80 2xl:px-[650px] flex-col w-full mt-24 text-gray-400">
        <h1 className="text-center text-white font-cinzel text-4xl mb-8 self-center pb-2 border-b border-gray-500 w-[90%]">
          Return & Refund Policy
        </h1>
        <div className="w-[90%] self-center space-y-6 mb-12">
          <p>
            We strive to ensure customer satisfaction with every purchase. Please read the following
            return and refund policy carefully.
          </p>
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            Return Eligibility
          </h2>
          <p>
            Items must be returned within 30 days of receipt. Products must be unused, in their
            original condition, and with all original packaging.
          </p>
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            Non-Returnable Items
          </h2>
          <p>
            Customized or personalized items are not eligible for returns. Certain perishable items
            may also not be eligible.
          </p>
          <h2 className="text-2xl font-cinzel text-white border-b border-gray-500 pb-2">
            Refund Process
          </h2>
          <p>
            Once your return is received and inspected, we will notify you of the approval or
            rejection of your refund. Approved refunds will be processed back to your original method
            of payment within 7-10 business days.
          </p>
          <p>
            For questions, please contact us through the{" "}
            <a href="/contact" className="text-blue-400 underline">
              Contact Us
            </a>{" "}
            page.
          </p>
        </div>
        <Link href="/" className="submitButton text-center">Go To The Main Page</Link>
      </div>
    );
  }
  