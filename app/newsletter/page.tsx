
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Newsletter",
  };
export default async function NewsletterSubscriptionPage() {
    return (
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-full mt-24 sm:px-12 md:px-24 lg:px-60 xl:px-[350px] 2xl:px-[500px] 3xl:px-[650px] text-gray-400">
        <h1 className="text-center text-white font-cinzel text-4xl mb-8 self-center pb-2 border-b border-gray-500 w-[90%]">
          Newsletter Subscription
        </h1>
        <div className="w-[90%] self-center space-y-6">
          <p>
            Stay updated with our latest products, offers, and news by subscribing to our
            newsletter.
          </p>
          <form className="flex flex-col space-y-4">
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
              Subscribe
            </button>
          </form>
        </div>
      </div>
    );
  }
  