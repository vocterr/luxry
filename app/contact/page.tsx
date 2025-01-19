import { Note } from "@/components/Note";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "LUXry // Contact",
  };

export default async function ContactPage() {
    return (
        <div className="flex flex-col mt-16 sm:px-24 md:px-36 lg:px-60 xl:px-96 2xl:px-[550px] 3xl:px-[650px] w-full min-h-screen bg-black text-gray-300 px-6 py-8">
            
            <h1 className="text-4xl font-cinzel text-center mb-6 border-b border-gray-500 pb-2">
                Contact Us
            </h1>

            <div className="flex flex-col mb-8">
                <h2 className="text-2xl font-cinzel text-center mb-4">We’d Love to Hear From You</h2>
                <p className="leading-relaxed">
                    Have a question, feedback, or just want to say hello? Fill out the form below, and
                    we’ll get back to you as soon as possible.
                </p>
            </div>
            <hr className="border-b border-gray-500 mb-8" />

            <form className="flex flex-col space-y-6 text-gray-400">
                <div className="flex flex-col">
                    <label htmlFor="name" className="formLabel ml-1 mb-1">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="formInput"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="formLabel ml-1 mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="formInput"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="subject" className="formLabel ml-1 mb-1">
                        Subject
                    </label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter the subject"
                        className="formInput"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="formLabel ml-1 mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Type your message here"
                        className="formInput h-32 resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="submitButton"
                >
                    Submit
                </button>

                <Note/>
            </form>
            <hr className="border-b border-gray-500 mt-8" />

            <div className="flex flex-col mt-8 text-center">
                <h2 className="text-2xl font-cinzel mb-4">Our Contact Information</h2>
                <p>📧 Email: support@luxry.com</p>
                <p>📞 Phone: +1 234 567 890</p>
                <p>📍 Address: 123 Luxury Lane, Elegance City</p>
            </div>
        </div>
    );
}
