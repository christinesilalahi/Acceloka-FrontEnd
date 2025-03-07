import type { Metadata } from "next";
import {Poppins} from 'next/font/google';
import "./globals.css";
import ResponsiveNav from "@/app/components/Home/Navbar/responsiveNav";
import Footer from "@/app/components/Home/Footer/footer";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Acceloka",
  description: "Aaaa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
