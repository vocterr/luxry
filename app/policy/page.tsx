import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Policy",
  };

export default function PrivacyPolicyPage() {
    return (
        <div className="flex sm:px-24 md:px-36 lg:px-56 xl:px-96 2xl:px-[650px] flex-col mt-16 w-full min-h-screen bg-black text-gray-300 px-6 py-8">
            {/* Header */}
            <h1 className="text-4xl font-cinzel text-center mb-6 border-b border-gray-500 pb-2">
                Privacy Policy
            </h1>

            {/* Introduction */}
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-cinzel mb-4">Introduction</h2>
                <p className="leading-relaxed">
                    At Luxry, we are committed to protecting your privacy and ensuring the security of your
                    personal information. This Privacy Policy explains how we collect, use, and protect your
                    information when you use our website or services.
                </p>
            </div>
            <hr className="border-b border-gray-500 mb-8" />

            {/* Information Collection */}
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-cinzel mb-4">What Information We Collect</h2>
                <ul className="list-disc list-inside space-y-3">
                    <li>
                        <b>Personal Information:</b> Your name, email address, phone number, shipping
                        information, and payment details when you place an order or contact us.
                    </li>
                    <li>
                        <b>Account Information:</b> Your login credentials (encrypted passwords) and order
                        history.
                    </li>
                    <li>
                        <b>Device Information:</b> Data about the device you use to access our site, such as
                        IP address, browser type, and operating system.
                    </li>
                    <li>
                        <b>Cookies:</b> Information about your activity on our site, including preferences
                        and interactions, collected through cookies.
                    </li>
                </ul>
            </div>
            <hr className="border-b border-gray-500 mb-8" />

            {/* Use of Information */}
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-cinzel mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-3">
                    <li>To process and fulfill your orders, including shipping and payment.</li>
                    <li>To communicate with you about your orders, account, and support requests.</li>
                    <li>To improve your shopping experience by personalizing content and recommendations.</li>
                    <li>To comply with legal obligations and prevent fraudulent activities.</li>
                </ul>
            </div>
            <hr className="border-b border-gray-500 mb-8" />

            {/* Sharing of Information */}
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-cinzel mb-4">Sharing Your Information</h2>
                <p className="leading-relaxed">
                    We do not sell your personal information to third parties. However, we may share your
                    data with trusted partners to provide services, such as:
                </p>
                <ul className="list-disc list-inside space-y-3">
                    <li>
                        <b>Payment Processors:</b> For securely processing your payments.
                    </li>
                    <li>
                        <b>Shipping Providers:</b> To ensure your orders are delivered on time.
                    </li>
                    <li>
                        <b>Analytics Providers:</b> To analyze website usage and improve our services.
                    </li>
                    <li>
                        <b>Legal Authorities:</b> If required by law or to prevent fraud or security issues.
                    </li>
                </ul>
            </div>
            <hr className="border-b border-gray-500 mb-8" />

            {/* Data Retention */}
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-cinzel mb-4">How Long We Keep Your Data</h2>
                <p className="leading-relaxed">
                    We retain your personal information for as long as necessary to fulfill the purposes
                    outlined in this Privacy Policy unless a longer retention period is required by law.
                </p>
            </div>
            <hr className="border-b border-gray-500 mb-8" />

            {/* Your Rights */}
            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-cinzel mb-4">Your Rights</h2>
                <ul className="list-disc list-inside space-y-3">
                    <li>You have the right to access, update, or delete your personal information.</li>
                    <li>
                        You can opt out of marketing communications at any time by contacting us.
                    </li>
                    <li>
                        You can request a copy of your data or ask us to delete it by emailing us at
                        <b> privacy@luxry.com</b>.
                    </li>
                </ul>
            </div>
            <hr className="border-b border-gray-500 mb-8" />

            {/* Contact Us */}
            <div className="flex flex-col">
                <h2 className="text-2xl font-cinzel mb-4">Contact Us</h2>
                <p className="leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, feel free to
                    contact us:
                </p>
                <ul className="list-none space-y-3">
                    <li>📧 Email: privacy@luxry.com</li>
                    <li>📞 Phone: +1 234 567 890</li>
                </ul>
            </div>
            <Link href="/" className="submitButton text-center">Go To The Main Page</Link>
        </div>
    );
}
