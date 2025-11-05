'use client';

import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SimpleHeader from "@/components/SimpleHeader";

import SimpleFooter from "@/components/SimpleFooter";


import { usePathname } from "next/navigation";
import { LeadFormProvider } from "@/context/LeadFormContext";
import LeadFormModal from "@/components/LeadFormModal";
import { LoadScript } from "@react-google-maps/api";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isThankYouPage = pathname === '/thank-you' || pathname?.startsWith('/thank-you');
  
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
       
        <LeadFormProvider>
        <LoadScript
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyAOPCNlHy1wcVmr7Srt_1ic9EqEStBSMm4"}
          libraries={["places"]}
        >
          {!isThankYouPage && <SimpleHeader />}
          
          {children}
          
          {!isThankYouPage && <SimpleFooter />}
          <LeadFormModal />
          </LoadScript>
        </LeadFormProvider>
      </body>
    </html>
  );
}
