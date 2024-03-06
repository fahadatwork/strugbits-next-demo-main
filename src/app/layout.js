import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SessionWrapper from "@/components/session-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Strugbits Demo Next",
  description: "demo app by Fahad Ullah Khan",
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
      <SessionWrapper>
      <body className="meh">

        <Navbar />

        {children}
      
      </body>
      </SessionWrapper>
    </html>
   
  );
}
