import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Terms of Service",
  };

export default function TermsConditionsPage() {
    return (
        <div className="flex sm:px-24 md:px-36 lg:px-56 xl:px-80 2xl:px-[650px] flex-col w-full mt-24 text-gray-300 font-playfair">
            <h1 className="font-cinzel text-white text-4xl text-center self-center pb-2 border-b border-gray-500 w-[90%] mb-8">
                Terms & Conditions
            </h1>

            <div className="flex flex-col w-[90%] self-center space-y-8">
                <section>
                    <h2 className="font-cinzel text-2xl mb-4">1. Introduction</h2>
                    <p>
                        Welcome to Luxry. By accessing and using this website, you agree to comply with
                        the following terms and conditions. If you do not agree, you must discontinue
                        using our site.
                    </p>
                </section>

                <hr className="border-gray-500" />

                <section>
                    <h2 className="font-cinzel text-2xl mb-4">2. Intellectual Property Rights</h2>
                    <p>
                        All content, including text, graphics, logos, and images, is owned by Luxry and
                        protected by applicable intellectual property laws. You may not use our content
                        without prior written consent.
                    </p>
                </section>

                <hr className="border-gray-500" />

                <section>
                    <h2 className="font-cinzel text-2xl mb-4">3. User Responsibilities</h2>
                    <p>
                        You are responsible for maintaining the confidentiality of your account and
                        ensuring that all information you provide is accurate. Any misuse of the site
                        may result in termination of your account.
                    </p>
                </section>

                <hr className="border-gray-500" />

                <section>
                    <h2 className="font-cinzel text-2xl mb-4">4. Limitation of Liability</h2>
                    <p>
                        Luxry will not be held liable for any damages arising from the use of this
                        website, including direct, indirect, incidental, or consequential damages.
                    </p>
                </section>

                <hr className="border-gray-500" />

                <section>
                    <h2 className="font-cinzel text-2xl mb-4">5. Amendments</h2>
                    <p>
                        We reserve the right to update these terms and conditions at any time. Changes
                        will be effective immediately upon posting to this page.
                    </p>
                </section>

                <hr className="border-gray-500" />

                <section>
                    <h2 className="font-cinzel text-2xl mb-4">6. Contact Us</h2>
                    <p>
                        If you have any questions about these terms and conditions, please contact us via
                        our <a href="/contact" className="text-blue-400">Contact Us</a> page.
                    </p>
                </section>
            </div>
            <Link href="/" className="submitButton text-center mb-20">Go To The Main Page</Link>
        </div>
    );
}
