import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // About",
  };
import Link from "next/link";

export default async function AboutPage() {
    return (
        <>
            
            <div className="flex mt-16 sm:px-36 md:px-48 lg:px-72 xl:px-96 2xl:px-[650px] flex-col w-full min-h-screen bg-black text-gray-300 px-6 py-8">
                {/* Header */}
                <h1 className="text-4xl font-cinzel text-center mb-6 border-b border-gray-500 pb-2">
                    About Us
                </h1>

                {/* Section 1: Who We Are */}
                <div className="flex flex-col mb-8">
                    <h2 className="text-2xl font-cinzel mb-4">Who We Are</h2>
                    <p className="leading-relaxed">
                        Welcome to <span className="text-white font-bold">LUXry</span>, your destination for luxury and elegance. Our mission is to provide the finest jewelry crafted with unparalleled precision and attention to detail, designed to inspire and captivate.
                    </p>
                </div>
                <hr className="border-b border-gray-500 mb-8" />

                {/* Section 2: Our Vision */}
                <div className="flex flex-col mb-8">
                    <h2 className="text-2xl font-cinzel mb-4">Our Vision</h2>
                    <p className="leading-relaxed">
                        At <span className="text-white font-bold">LUXry</span>, we believe that jewelry is more than just an accessory—it's a reflection of individuality, style, and timeless beauty. Our vision is to bring you exquisite pieces that resonate with your unique personality.
                    </p>
                </div>
                <hr className="border-b border-gray-500 mb-8" />

                {/* Section 3: Commitment to Quality */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-cinzel mb-4">Commitment to Quality</h2>
                    <p className="leading-relaxed">
                        Each piece in our collection is made with the highest standards of craftsmanship, using ethically sourced materials. We are committed to ensuring our customers experience the luxury and sophistication they deserve.
                    </p>
                </div>
                <hr className="border-b border-gray-500 mt-8" />

                <Link href="/" className="submitButton text-center">Go To The Main Page</Link>
            </div>
        </>

    );
}
