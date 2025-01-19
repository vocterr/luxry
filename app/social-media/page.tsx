import Link from "next/link";

import { Metadata } from "next";
import { RedirectButton } from "@/components/RedirectButton";
export const metadata: Metadata = {
    title: "LUXry // Social Media",
  };

export default async function SocialMediaLinksPage() {
    return (
      <div className="flex flex-col w-full mt-24 text-gray-400 sm:px-16 md:px-32 lg:px-60 xl:px-96 2xl:px-[500] 3xl:px-[600px]">
        <h1 className="text-center text-white font-cinzel text-4xl mb-8 self-center pb-2 border-b border-gray-500 w-[90%]">
          Follow Us
        </h1>
        <div className="w-[90%] self-center space-y-6 text-center">
          <p>
            Stay connected with us on social media for the latest updates, promotions, and
            inspiration!
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-400 hover:underline">
              Facebook
            </a>
            <a href="#" className="text-pink-400 hover:underline">
              Instagram
            </a>
            <a href="#" className="text-blue-300 hover:underline">
              Twitter
            </a>
            <a href="#" className="text-red-500 hover:underline">
              Pinterest
            </a>
          </div>
        </div>
        <RedirectButton href="/" text="Go To The Main Page"/>
      </div>
    );
  }
  