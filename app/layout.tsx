import "./globals.css";
import { Metadata } from "next";
import { playfair, cinzel, inter } from "../fonts";
import { Topbar } from "@/components/Topbar/Topbar";
import { ProductProvider } from "@/context/ProductContext";
import Head from "next/head";


export const metadata: Metadata = {
  title: "LUXry",
  description: "Find Luxurious Jewelry",
  icons: {
    icon: "/images/logo.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`w-full h-full ${playfair.variable} ${cinzel.variable} ${inter.variable}`}>
      
      
      <ProductProvider>
      <body className="antialiased font-playfair flex flex-col min-h-screen bg-black text-white h-full w-full">
        <Topbar/>
        <div className="flex-grow flex">
          {children}
        </div>

      </body>
      </ProductProvider>
    </html>
  );
}
